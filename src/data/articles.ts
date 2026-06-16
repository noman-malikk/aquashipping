export type Article = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "cost-to-send-cargo-to-pakistan-from-uk",
    title: "How much does it cost to send cargo to Pakistan from the UK?",
    description:
      "A practical guide to the details that influence cargo to Pakistan from UK quotes, including weight, volume, service type and collection.",
    readTime: "4 min read",
    sections: [
      {
        heading: "What affects the price?",
        body:
          "Cargo pricing usually depends on destination, chargeable weight, shipment volume, service type, collection, packing and destination handling requirements.",
      },
      {
        heading: "Air cargo vs sea cargo",
        body:
          "Air cargo to Pakistan is normally faster and suited to smaller urgent goods. Sea cargo to Pakistan is often more cost-effective for heavier boxes, furniture and household goods.",
      },
    ],
  },
  {
    slug: "air-cargo-vs-sea-cargo",
    title: "Air cargo vs sea cargo: which is better?",
    description:
      "Compare air cargo and sea freight for international cargo services from the UK.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Choose air cargo for speed",
        body:
          "Air cargo services UK customers choose are usually best for documents, urgent parcels, samples and time-sensitive shipments.",
      },
      {
        heading: "Choose sea freight for volume",
        body:
          "Sea freight services UK customers choose are usually better for heavy boxes, furniture, household moves and commercial cargo where budget matters more than speed.",
      },
    ],
  },
  {
    slug: "cheapest-way-to-send-parcels-to-india-from-uk",
    title: "Cheapest way to send parcels to India from UK",
    description:
      "How to compare courier to India from UK, parcel delivery to India and cargo services for family and business shipments.",
    readTime: "4 min read",
    sections: [
      {
        heading: "Compare weight and delivery needs",
        body:
          "For small parcels, courier services can be practical. For multiple boxes, cargo to India from UK may offer better value depending on destination and handling needs.",
      },
      {
        heading: "Prepare item details early",
        body:
          "Clear item descriptions, estimated values and destination details help the team prepare a more accurate quote and advise on customs documentation support.",
      },
    ],
  },
  {
    slug: "shipping-to-dubai-from-uk-customs-delivery-guide",
    title: "Shipping to Dubai from UK: customs and delivery guide",
    description:
      "Understand air freight to Dubai, sea freight to Dubai, invoices and destination delivery considerations.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Service choice",
        body:
          "Air freight to Dubai is useful for urgent cargo and commercial samples. Sea freight to Dubai can suit larger household goods and stock shipments.",
      },
      {
        heading: "Invoices and declarations",
        body:
          "Commercial cargo to Dubai may need invoices and commodity details. Requirements are subject to destination rules and should be confirmed before shipping.",
      },
    ],
  },
  {
    slug: "documents-needed-for-international-cargo",
    title: "What documents are needed for international cargo?",
    description:
      "A simple overview of item declarations, invoices, commodity details and customs documentation support.",
    readTime: "4 min read",
    sections: [
      {
        heading: "Common documentation",
        body:
          "International cargo may require sender and receiver details, item declarations, values, invoices, commodity information and restricted item checks.",
      },
      {
        heading: "Destination rules apply",
        body:
          "Customs documentation support helps prepare the shipment, but destination rules, inspections, duties and taxes remain subject to local authorities.",
      },
    ],
  },
];
