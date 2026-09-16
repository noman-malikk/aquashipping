import { business } from "./business";

export const company = {
  ...business,
  siteUrl: (import.meta.env.VITE_SITE_URL || "https://aquashipping.co.uk").replace(/\/+$/, ""),
};

export const phoneHref = `tel:${company.phone}`;
export const whatsappHref = `https://wa.me/${company.whatsapp}`;
export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.legalName}, ${company.address}`)}`;
