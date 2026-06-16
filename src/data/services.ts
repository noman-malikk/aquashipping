import {
  Archive,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Home,
  PackageCheck,
  Plane,
  Ship,
  type LucideIcon,
} from "lucide-react";
import type { ContentSection } from "./destinations";
import type { FAQ } from "./faqs";

export type Service = {
  name: string;
  slug: string;
  path: string;
  cardText: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  icon: LucideIcon;
  sections: ContentSection[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    name: "Air Cargo",
    slug: "air-cargo",
    path: "/air-cargo-services-uk",
    cardText: "Fast air cargo services UK customers use for urgent parcels, documents and smaller shipments.",
    h1: "Air Cargo Services UK",
    title: "Air Cargo Services UK | International Air Freight Quotes",
    description:
      "Request air cargo services UK quotes for urgent parcels, documents, samples and time-sensitive international shipments.",
    intro:
      "Air cargo is best for urgent parcels, documents, smaller shipments and time-sensitive goods travelling from the UK to international destinations.",
    icon: Plane,
    sections: [
      {
        title: "Best for urgent shipments",
        body:
          "Choose air cargo when speed matters. It can be suitable for documents, commercial samples, compact boxes, important gifts and smaller high-priority shipments.",
      },
      {
        title: "Clear quote information",
        body:
          "Accurate weight, dimensions, value, destination city and service urgency help the team prepare a clear air freight quote.",
      },
      {
        title: "Destination coverage",
        body:
          "Air cargo can be reviewed for Pakistan, India, Dubai, UAE, Asia and Middle Eastern destinations subject to airline and route availability.",
      },
    ],
    faqs: [
      {
        question: "Is air cargo faster than sea freight?",
        answer:
          "Air cargo is generally faster than sea freight and is usually better for urgent parcels, documents and smaller shipments.",
      },
      {
        question: "Can I send documents by air cargo?",
        answer:
          "Documents can often be reviewed for air cargo or courier-style shipping, subject to destination and service availability.",
      },
    ],
  },
  {
    name: "Sea Cargo",
    slug: "sea-cargo",
    path: "/sea-freight-services-uk",
    cardText: "Budget-friendly sea freight services UK customers use for heavy boxes and larger cargo.",
    h1: "Sea Freight Services UK",
    title: "Sea Freight Services UK | Heavy Cargo Shipping Quotes",
    description:
      "Request sea freight services UK quotes for heavy boxes, furniture, household goods and commercial shipments.",
    intro:
      "Sea cargo is best for heavy boxes, furniture, household goods, commercial shipments and budget-friendly international shipping.",
    icon: Ship,
    sections: [
      {
        title: "Best for heavy boxes",
        body:
          "Sea freight can be a strong option when you are sending multiple boxes, bulky cargo, household goods or stock and do not need the fastest transit option.",
      },
      {
        title: "Furniture and household goods",
        body:
          "Customers often use sea cargo for furniture, kitchen items, clothing, personal belongings, family cargo and relocation shipments.",
      },
      {
        title: "Commercial cargo",
        body:
          "Sea freight can support business shipments, bulk stock, vehicle parts and repeat cargo where clear invoices and item details are available.",
      },
    ],
    faqs: [
      {
        question: "Is sea cargo cheaper than air cargo?",
        answer:
          "Sea cargo is often more budget-friendly for heavier or bulkier shipments, while air cargo is usually better when speed is the main priority.",
      },
      {
        question: "Can I send furniture by sea freight?",
        answer:
          "Furniture can be reviewed for sea freight quotes when dimensions, weight, item condition and destination details are provided.",
      },
    ],
  },
  {
    name: "Door-to-Door Cargo",
    slug: "door-to-door",
    path: "/door-to-door-cargo-service",
    cardText: "Collection, handling, customs documentation support and final delivery where available.",
    h1: "Door-to-Door Cargo Service",
    title: "Door-to-Door Cargo Service | UK Collection & Delivery Support",
    description:
      "Request door-to-door cargo service quotes with UK collection, cargo handling, customs documentation support and delivery options.",
    intro:
      "Door-to-door cargo service helps simplify shipping by reviewing collection, handling, customs documentation support, final delivery and tracking needs.",
    icon: PackageCheck,
    sections: [
      {
        title: "UK collection",
        body:
          "Share your collection postcode, city and preferred sending date so the team can review available collection options.",
      },
      {
        title: "Handling and documentation",
        body:
          "Door-to-door cargo may include shipment handling and customs documentation support where applicable, subject to destination rules.",
      },
      {
        title: "Delivery and tracking",
        body:
          "Final delivery and tracking support depend on the destination, service type and cargo details confirmed before booking.",
      },
    ],
    faqs: [
      {
        question: "Is door-to-door cargo available everywhere?",
        answer:
          "Availability depends on the UK collection location, destination city, cargo type and selected service.",
      },
      {
        question: "Can you collect from my home?",
        answer:
          "Home collection can be reviewed when you share your postcode, cargo details and preferred sending date.",
      },
    ],
  },
  {
    name: "Household Goods",
    slug: "household-goods",
    path: "/household-goods-shipping-overseas",
    cardText: "Ship moving boxes, clothes, gifts, kitchen items and personal belongings overseas.",
    h1: "Household Goods Shipping Overseas",
    title: "Household Goods Shipping Overseas | Boxes, Clothes & Family Cargo",
    description:
      "Request quotes for household goods shipping overseas, moving boxes, clothes, gifts, kitchen items and personal belongings.",
    intro:
      "Household goods shipping overseas can cover moving boxes, clothes, gifts, kitchen items, personal belongings and family cargo.",
    icon: Home,
    sections: [
      {
        title: "Family cargo and personal belongings",
        body:
          "Send clothing, gifts, kitchen items, books, personal effects and packed boxes to family or your new home overseas.",
      },
      {
        title: "Packing requirements",
        body:
          "Tell us whether packing is required and describe fragile items clearly so the team can advise on the right handling options.",
      },
      {
        title: "Air or sea options",
        body:
          "Air cargo can suit smaller urgent items. Sea freight can suit heavier household goods, furniture and multi-box shipments.",
      },
    ],
    faqs: [
      {
        question: "Can I send clothes and gifts overseas?",
        answer:
          "Yes, clothing, gifts and personal belongings can be reviewed for international shipping, subject to destination rules and restricted item checks.",
      },
      {
        question: "Do you ship kitchen items?",
        answer:
          "Kitchen items can be reviewed when they are described clearly and packed safely. Some items may be restricted by destination rules.",
      },
    ],
  },
  {
    name: "Commercial Cargo",
    slug: "commercial-cargo",
    path: "/commercial-cargo-shipping",
    cardText: "Business shipments, stock, samples, vehicle parts, invoices and repeat shipping support.",
    h1: "Commercial Cargo Shipping",
    title: "Commercial Cargo Shipping | Business Freight Forwarding Agent UK",
    description:
      "Request commercial cargo shipping quotes for stock, samples, vehicle parts, business freight and repeat international shipments.",
    intro:
      "Commercial cargo shipping supports business shipments, bulk cargo, stock, samples, invoices, vehicle parts and repeat shipping needs.",
    icon: Boxes,
    sections: [
      {
        title: "Business shipments",
        body:
          "We can review business cargo, stock shipments, samples, vehicle parts and repeat freight forwarding enquiries from the UK.",
      },
      {
        title: "Invoices and values",
        body:
          "Commercial shipments may require invoices, values, commodity details, sender details and receiver details before shipping.",
      },
      {
        title: "Repeat shipping",
        body:
          "Regular shippers can share expected shipment frequency, destinations and cargo types so the team can recommend a practical quote process.",
      },
    ],
    faqs: [
      {
        question: "Can you support repeat commercial shipments?",
        answer:
          "Yes, repeat shipping requirements can be reviewed once the team understands your route, cargo type, volume and documentation needs.",
      },
      {
        question: "Do commercial shipments need invoices?",
        answer:
          "Commercial cargo commonly needs invoices, item values and commodity details, subject to destination rules.",
      },
    ],
  },
  {
    name: "Excess Baggage",
    slug: "excess-baggage",
    path: "/excess-baggage-shipping-uk",
    cardText: "A practical option for students, families and travellers sending extra bags overseas.",
    h1: "Excess Baggage Shipping UK",
    title: "Excess Baggage Shipping UK | Send Extra Bags Overseas",
    description:
      "Request excess baggage shipping UK quotes for extra bags, student goods, personal items and family cargo overseas.",
    intro:
      "Excess baggage shipping UK enquiries can help students, families and travellers send extra bags, boxes and personal items overseas.",
    icon: Archive,
    sections: [
      {
        title: "Extra bags and boxes",
        body:
          "Send extra bags, clothing, books, personal items and boxed belongings when airline baggage allowances are not enough.",
      },
      {
        title: "Student and family cargo",
        body:
          "Excess baggage can suit students moving abroad, families sending gifts, and customers relocating with extra personal belongings.",
      },
      {
        title: "Quote details",
        body:
          "Share approximate weight, number of bags or boxes, destination and collection requirements to receive a clearer quote.",
      },
    ],
    faqs: [
      {
        question: "Is excess baggage shipping only for suitcases?",
        answer:
          "No. It can include suitcases, bags and boxes, depending on service availability and destination rules.",
      },
      {
        question: "Can students use this service?",
        answer:
          "Yes, students can request quotes for books, clothes, bedding and personal belongings being sent overseas.",
      },
    ],
  },
  {
    name: "Customs Documentation",
    slug: "customs-documentation",
    path: "/customs-documentation",
    cardText: "Support with declarations, invoices, commodity details and restricted item checks.",
    h1: "Customs Documentation Support",
    title: "Customs Documentation Support | International Cargo Documents",
    description:
      "Get customs documentation support for international cargo, item declarations, invoices, commodity details and restricted item checks.",
    intro:
      "International shipping may require item declarations, invoices, commodity details, restricted item checks and customs documentation support.",
    icon: ClipboardCheck,
    sections: [
      {
        title: "Item declarations",
        body:
          "International cargo often needs clear item descriptions, quantities, values and sender and receiver details.",
      },
      {
        title: "Invoices and commodity details",
        body:
          "Commercial cargo may require invoices, commodity details and supporting information before it can be shipped.",
      },
      {
        title: "Subject to destination rules",
        body:
          "We provide customs documentation support and restricted item checks where applicable. Customs clearance, duties, taxes and inspections are subject to destination rules and authorities.",
      },
    ],
    faqs: [
      {
        question: "Do you promise customs clearance?",
        answer:
          "No. We provide customs documentation support where applicable, but clearance decisions, duties, taxes and inspections are subject to destination rules and authorities.",
      },
      {
        question: "What details are usually needed?",
        answer:
          "Common details include item descriptions, quantities, values, sender and receiver details, invoices and commodity information for commercial goods.",
      },
    ],
  },
];

export const trustItems = [
  { label: "Door-to-Door Service", icon: PackageCheck },
  { label: "Air & Sea Cargo", icon: BadgeCheck },
  { label: "UK Collection Available", icon: Home },
  { label: "Customs Documentation Support", icon: ClipboardCheck },
  { label: "Fast Email Quotes", icon: Plane },
  { label: "Tracking Support", icon: Ship },
];

export const getServiceBySlug = (slug?: string) => services.find((service) => service.slug === slug);
