export interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  OWNER_EMAIL: string;
  EMAIL_API_KEY: string;
  EMAIL_FROM?: string;
  EMAIL_PROVIDER?: "resend" | "placeholder";
  ALLOWED_ORIGIN?: string;
}

type QuoteRequest = {
  leadId?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  collectionPostcode?: string;
  collectionCity?: string;
  destinationCountry?: string;
  destinationCity?: string;
  deliveryAddress?: string;
  cargoType?: string;
  approximateWeight?: string;
  numberOfItems?: number | string;
  dimensions?: string;
  preferredService?: string;
  collectionRequired?: string;
  packingRequired?: string;
  itemValue?: string;
  preferredSendingDate?: string;
  message?: string;
  consent?: boolean;
  photoNames?: string[];
};

const requiredFields: (keyof QuoteRequest)[] = [
  "fullName",
  "email",
  "phone",
  "collectionPostcode",
  "collectionCity",
  "destinationCountry",
  "destinationCity",
  "cargoType",
  "approximateWeight",
  "numberOfItems",
  "preferredService",
  "collectionRequired",
  "packingRequired",
  "itemValue",
  "preferredSendingDate",
  "message",
];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, headers);
    }

    let body: QuoteRequest;

    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400, headers);
    }

    const validationError = validateQuote(body);
    if (validationError) {
      return json({ error: validationError }, 400, headers);
    }

    const leadId = body.leadId?.trim() || createLeadReference();
    const quote: QuoteRequest = { ...body, leadId };

    const results = await Promise.allSettled([
      sendTelegramAlert(env, quote),
      sendCustomerConfirmation(env, quote),
      sendOwnerEmail(env, quote),
    ]);

    const failed = results.filter((result) => result.status === "rejected");
    if (failed.length) {
      console.error("Quote integrations failed", failed);
      return json({ error: "Quote received but notification failed", leadId }, 502, headers);
    }

    return json({ ok: true, leadId }, 200, headers);
  },
};

function validateQuote(body: QuoteRequest) {
  for (const field of requiredFields) {
    const value = body[field];
    if (value === undefined || value === null || value === "") {
      return `Missing required field: ${field}`;
    }
  }

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "Invalid email address";
  }

  if (!body.consent) {
    return "Consent is required";
  }

  return "";
}

async function sendTelegramAlert(env: Env, quote: QuoteRequest) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    console.warn("Telegram credentials are not configured.");
    return;
  }

  const message = [
    "🚢 New Shipping Quote Request",
    "",
    `Lead ID: ${safe(quote.leadId)}`,
    `Name: ${safe(quote.fullName)}`,
    `Email: ${safe(quote.email)}`,
    `Phone: ${safe(quote.phone)}`,
    "",
    `From: ${safe(quote.collectionPostcode)} / ${safe(quote.collectionCity)}`,
    `To: ${safe(quote.destinationCity)} / ${safe(quote.destinationCountry)}`,
    "",
    `Service: ${safe(quote.preferredService)}`,
    `Cargo: ${safe(quote.cargoType)}`,
    `Weight: ${safe(quote.approximateWeight)}`,
    `Items/Boxes: ${safe(String(quote.numberOfItems ?? ""))}`,
    `Collection required: ${safe(quote.collectionRequired)}`,
    `Packing required: ${safe(quote.packingRequired)}`,
    `Preferred date: ${safe(quote.preferredSendingDate)}`,
    "",
    "Message:",
    safe(quote.message),
    "",
    "Actions needed:",
    "Respond to the customer by email within 30 minutes.",
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      disable_web_page_preview: true,
      text: message,
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Telegram failed: ${response.status}`);
  }
}

async function sendCustomerConfirmation(env: Env, quote: QuoteRequest) {
  if (!quote.email) return;

  const subject = "Your Shipping Quote Request Has Been Received";
  const text = [
    `Hi ${safe(quote.fullName)},`,
    "",
    "Thank you for your enquiry.",
    "",
    `We have received your shipping quote request for cargo from ${safe(quote.collectionCity)} / ${safe(quote.collectionPostcode)} to ${safe(quote.destinationCity)} / ${safe(quote.destinationCountry)}.`,
    "",
    `Your reference number is ${safe(quote.leadId)}.`,
    "",
    "Our team will review your details and respond by email as soon as possible, usually within 30 minutes during business hours.",
    "",
    "Kind regards,",
    "Aqua Shipping",
  ].join("\n");

  await sendEmail(env, quote.email, subject, text);
}

async function sendOwnerEmail(env: Env, quote: QuoteRequest) {
  if (!env.OWNER_EMAIL) return;

  const subject = `New Shipping Quote Request - ${safe(quote.leadId)}`;
  const text = [
    "New shipping quote request",
    "",
    `Lead ID: ${safe(quote.leadId)}`,
    `Name: ${safe(quote.fullName)}`,
    `Email: ${safe(quote.email)}`,
    `Phone: ${safe(quote.phone)}`,
    `Collection postcode: ${safe(quote.collectionPostcode)}`,
    `Collection city: ${safe(quote.collectionCity)}`,
    `Destination country: ${safe(quote.destinationCountry)}`,
    `Destination city: ${safe(quote.destinationCity)}`,
    `Delivery address: ${safe(quote.deliveryAddress)}`,
    `Cargo type: ${safe(quote.cargoType)}`,
    `Approximate weight: ${safe(quote.approximateWeight)}`,
    `Number of boxes/items: ${safe(String(quote.numberOfItems ?? ""))}`,
    `Dimensions: ${safe(quote.dimensions)}`,
    `Preferred service: ${safe(quote.preferredService)}`,
    `Collection required: ${safe(quote.collectionRequired)}`,
    `Packing required: ${safe(quote.packingRequired)}`,
    `Item value: ${safe(quote.itemValue)}`,
    `Preferred sending date: ${safe(quote.preferredSendingDate)}`,
    `Photo names: ${(quote.photoNames || []).join(", ") || "None"}`,
    "",
    "Message:",
    safe(quote.message),
  ].join("\n");

  await sendEmail(env, env.OWNER_EMAIL, subject, text, quote.email);
}

async function sendEmail(env: Env, to: string, subject: string, text: string, replyTo?: string) {
  if (!env.EMAIL_API_KEY || env.EMAIL_PROVIDER === "placeholder") {
    console.log("Email placeholder adapter:", { to, subject, replyTo, text });
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from: env.EMAIL_FROM || "Aqua Shipping <quotes@example.com>",
      to,
      subject,
      text,
      reply_to: replyTo,
    }),
    headers: {
      Authorization: `Bearer ${env.EMAIL_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Email failed: ${response.status}`);
  }
}

function corsHeaders(request: Request, env: Env) {
  const origin = request.headers.get("Origin") || "";
  const allowedOrigin = env.ALLOWED_ORIGIN || "*";
  const responseOrigin = allowedOrigin === "*" || origin === allowedOrigin ? origin || allowedOrigin : allowedOrigin;

  return {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Origin": responseOrigin,
    "Content-Type": "application/json",
    Vary: "Origin",
  };
}

function json(data: unknown, status: number, headers: HeadersInit) {
  return new Response(JSON.stringify(data), { headers, status });
}

function createLeadReference() {
  const value = crypto.getRandomValues(new Uint32Array(1))[0] % 9000;
  return `AQ-${1000 + value}`;
}

function safe(value?: string) {
  return String(value || "").replace(/[<>]/g, "");
}
