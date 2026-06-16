const onlyDigits = (value: string) => value.replace(/[^\d]/g, "");

export const company = {
  name: import.meta.env.VITE_COMPANY_NAME || "Aqua Shipping",
  phone: import.meta.env.VITE_COMPANY_PHONE || "+44 20 0000 0000",
  email: import.meta.env.VITE_COMPANY_EMAIL || "quotes@aquashipping.co.uk",
  whatsapp: import.meta.env.VITE_COMPANY_WHATSAPP || "447000000000",
  siteUrl: (import.meta.env.VITE_SITE_URL || "https://www.aquashipping.co.uk").replace(/\/$/, ""),
  addressLocality: "United Kingdom",
};

export const phoneHref = `tel:${onlyDigits(company.phone)}`;
export const whatsappHref = `https://wa.me/${onlyDigits(company.whatsapp)}`;
