import {
  Building2,
  Globe2,
  Landmark,
  MapPinned,
  Plane,
  Ship,
  type LucideIcon,
} from "lucide-react";
import type { FAQ } from "./faqs";

export type ContentSection = {
  title: string;
  body: string;
};

export type Destination = {
  name: string;
  slug: string;
  path: string;
  cardLabel: string;
  cardText: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  icon: LucideIcon;
  cities: string[];
  sections: ContentSection[];
  faqs: FAQ[];
};

export const destinations: Destination[] = [
  {
    name: "Pakistan",
    slug: "pakistan",
    path: "/shipping-to-pakistan-from-uk",
    cardLabel: "Pakistan",
    cardText: "Air cargo, sea cargo and door-to-door cargo to major cities across Pakistan.",
    h1: "Shipping to Pakistan from UK",
    title: "Shipping to Pakistan from UK | Air & Sea Cargo Quote",
    description:
      "Get a quote for shipping to Pakistan from UK. Air cargo, sea cargo, door-to-door cargo, parcels, boxes and household goods.",
    intro:
      "Aqua Shipping helps customers arrange cargo to Pakistan from UK for parcels, boxes, household goods, excess baggage and commercial shipments.",
    icon: Landmark,
    cities: ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Azad Kashmir"],
    sections: [
      {
        title: "Air cargo to Pakistan",
        body:
          "Air cargo to Pakistan is best for urgent parcels, documents, samples and smaller time-sensitive shipments. Share the approximate weight, item value and destination city for a clear quote.",
      },
      {
        title: "Sea cargo to Pakistan",
        body:
          "Sea cargo to Pakistan is a practical option for heavy boxes, furniture, family cargo, household goods and commercial stock where budget matters more than speed.",
      },
      {
        title: "Door-to-door cargo to Pakistan",
        body:
          "Door to door cargo to Pakistan can include UK collection, shipment handling and final delivery support where available. Service availability depends on origin, destination and cargo type.",
      },
      {
        title: "What can you send?",
        body:
          "Common shipments include parcels, clothing, gifts, kitchen items, personal belongings, household goods, business samples and excess baggage. Restricted items must be checked before booking.",
      },
      {
        title: "Customs and documentation",
        body:
          "International shipping may require item declarations, values, invoices and commodity details. We provide customs documentation support subject to destination rules.",
      },
    ],
    faqs: [
      {
        question: "Can I send parcel to Pakistan from UK?",
        answer:
          "Yes, you can request quotes for parcels, boxes and larger cargo to Pakistan. The best option depends on weight, dimensions, value and delivery urgency.",
      },
      {
        question: "Do you ship to Lahore, Karachi and Islamabad?",
        answer:
          "Yes, quote requests can cover Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Azad Kashmir and other destinations subject to route availability.",
      },
      {
        question: "Is air or sea cargo better for Pakistan?",
        answer:
          "Air cargo is normally better for urgent smaller goods. Sea cargo is usually better for heavier boxes, furniture and household goods.",
      },
    ],
  },
  {
    name: "India",
    slug: "india",
    path: "/cargo-to-india-from-uk",
    cardLabel: "India",
    cardText: "Parcel delivery, courier-style options, household goods and cargo to India.",
    h1: "Cargo to India from UK",
    title: "Cargo to India from UK | Parcel, Air & Sea Shipping",
    description:
      "Request cargo to India from UK quotes for parcels, courier-style deliveries, air cargo, sea freight and household goods.",
    intro:
      "Arrange cargo to India from UK for family parcels, excess baggage, household goods, documents and business shipments with clear email quotes.",
    icon: Globe2,
    cities: ["Delhi", "Mumbai", "Ahmedabad", "Hyderabad", "Chennai", "Bengaluru", "Punjab", "Kerala"],
    sections: [
      {
        title: "Air cargo to India",
        body:
          "Air cargo to India is suitable for urgent parcels, documents, commercial samples and lighter shipments where delivery speed is important.",
      },
      {
        title: "Sea cargo to India",
        body:
          "Sea cargo to India is useful for heavier boxes, household goods, furniture and bulk shipments that need a budget-friendly shipping option.",
      },
      {
        title: "Door-to-door courier to India",
        body:
          "Door-to-door courier to India and collection options can be reviewed when you submit your postcode, destination city and cargo details.",
      },
      {
        title: "Parcel delivery to India",
        body:
          "Parcel delivery to India can cover gifts, clothing, documents and family goods. Accurate weights and item descriptions help us prepare a better quote.",
      },
      {
        title: "Household goods and excess baggage",
        body:
          "We can review household goods shipping overseas, excess baggage shipping UK enquiries and multi-box family cargo for Indian destinations.",
      },
      {
        title: "Customs and documentation",
        body:
          "Customs documentation support may include item declarations, invoices, values and restricted item checks, subject to destination rules.",
      },
    ],
    faqs: [
      {
        question: "What is the cheapest way to send parcels to India from UK?",
        answer:
          "The cheapest option depends on weight, volume, urgency and destination. Multiple boxes may be better quoted as cargo, while small urgent parcels may suit air or courier-style services.",
      },
      {
        question: "Can you ship household goods to India?",
        answer:
          "Yes, you can request quotes for household goods, family cargo, boxes and excess baggage to India.",
      },
      {
        question: "Do India shipments need customs paperwork?",
        answer:
          "International cargo commonly needs item details, values and documentation. Requirements vary by destination and shipment type.",
      },
    ],
  },
  {
    name: "Dubai",
    slug: "dubai",
    path: "/shipping-to-dubai-from-uk",
    cardLabel: "Dubai",
    cardText: "Air freight, sea freight, household goods and commercial cargo to Dubai.",
    h1: "Shipping to Dubai from UK",
    title: "Shipping to Dubai from UK | Cargo & Freight Quotes",
    description:
      "Get shipping to Dubai from UK quotes for air freight, sea freight, household goods, door-to-door cargo and commercial cargo.",
    intro:
      "Aqua Shipping supports shipping to Dubai from UK for personal cargo, relocation goods, business shipments and regular freight enquiries.",
    icon: Building2,
    cities: ["Dubai Marina", "Deira", "Jebel Ali", "Business Bay", "Al Barsha", "Dubai Silicon Oasis"],
    sections: [
      {
        title: "Air freight to Dubai",
        body:
          "Air freight to Dubai is a strong option for urgent parcels, documents, samples and compact commercial shipments.",
      },
      {
        title: "Sea freight to Dubai",
        body:
          "Sea freight to Dubai can work well for household goods, furniture, larger boxes and commercial cargo where cost control is important.",
      },
      {
        title: "Door-to-door cargo to Dubai",
        body:
          "Door-to-door cargo to Dubai can include UK collection and delivery support where available. Provide both addresses so the team can review the route.",
      },
      {
        title: "Shipping household goods to Dubai",
        body:
          "We can quote for moving boxes, clothes, kitchen items, gifts and personal belongings for customers relocating or sending family cargo.",
      },
      {
        title: "Commercial cargo to Dubai",
        body:
          "Business shipments may include stock, samples, vehicle parts and repeat cargo. Invoices and commodity details may be required.",
      },
      {
        title: "Customs documents and invoices",
        body:
          "Commercial invoices, values and item declarations may be needed for Dubai shipments. Any customs support is subject to destination rules.",
      },
    ],
    faqs: [
      {
        question: "Can I send household goods to Dubai from the UK?",
        answer:
          "Yes, you can request quotes for boxes, personal belongings, gifts, furniture and relocation cargo to Dubai.",
      },
      {
        question: "Is sea freight to Dubai available?",
        answer:
          "Sea freight can be reviewed for heavier or larger shipments. Share the item list, weight and dimensions for an accurate quote.",
      },
      {
        question: "Do commercial shipments to Dubai need invoices?",
        answer:
          "Commercial cargo commonly needs invoice details, values and commodity descriptions, subject to destination requirements.",
      },
    ],
  },
  {
    name: "UAE",
    slug: "uae",
    path: "/cargo-to-uae-from-uk",
    cardLabel: "UAE",
    cardText: "Cargo to Abu Dhabi, Sharjah, Ajman and other UAE destinations.",
    h1: "Cargo to UAE from UK",
    title: "Cargo to UAE from UK | Air & Sea Freight Service",
    description:
      "Request cargo to UAE from UK quotes for Abu Dhabi, Sharjah, Ajman, Dubai and other UAE destinations.",
    intro:
      "Send cargo to UAE from UK with air and sea freight options for personal goods, business cargo and family shipments.",
    icon: MapPinned,
    cities: ["Abu Dhabi", "Sharjah", "Ajman", "Dubai", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    sections: [
      {
        title: "Cargo to Abu Dhabi",
        body:
          "Cargo to Abu Dhabi can cover parcels, boxes, household goods and commercial shipments. We will review service availability from your UK collection location.",
      },
      {
        title: "Cargo to Sharjah",
        body:
          "Sharjah cargo enquiries can be quoted for personal and commercial shipments, including air and sea cargo options.",
      },
      {
        title: "Cargo to Ajman",
        body:
          "Customers sending to Ajman can request a quote with collection postcode, destination city, weight, item count and service preference.",
      },
      {
        title: "Air and sea cargo options",
        body:
          "Air cargo is usually better for speed. Sea cargo is often better for heavy boxes, furniture and larger commercial shipments.",
      },
      {
        title: "Commercial and personal cargo",
        body:
          "We can review personal parcels, household goods, business stock, samples and repeat shipping requirements to UAE destinations.",
      },
    ],
    faqs: [
      {
        question: "Do you cover more than Dubai in the UAE?",
        answer:
          "Yes, quote requests can cover Dubai, Abu Dhabi, Sharjah, Ajman and other UAE destinations subject to route availability.",
      },
      {
        question: "Can I send commercial cargo to UAE?",
        answer:
          "Yes, commercial cargo shipping can be quoted with item descriptions, values, invoices and destination details.",
      },
      {
        question: "Is door-to-door cargo available to UAE?",
        answer:
          "Door-to-door service can be reviewed depending on the UK origin, UAE destination and cargo type.",
      },
    ],
  },
  {
    name: "Middle East",
    slug: "middle-east",
    path: "/middle-east-cargo-from-uk",
    cardLabel: "Middle East",
    cardText: "Cargo support for personal and commercial shipments across Middle Eastern routes.",
    h1: "Middle East Cargo from UK",
    title: "Middle East Cargo from UK | Air & Sea Freight Quotes",
    description:
      "Request Middle East cargo from UK quotes for parcels, household goods, commercial cargo, air freight and sea freight.",
    intro:
      "Get support for international cargo services UK customers use for Middle Eastern destinations, subject to route and destination rules.",
    icon: Plane,
    cities: ["Qatar", "Bahrain", "Kuwait", "Saudi Arabia", "Oman", "Jordan"],
    sections: [
      {
        title: "Air cargo for urgent goods",
        body:
          "Air cargo can be reviewed for urgent parcels, documents, smaller boxes and commercial samples across available Middle Eastern routes.",
      },
      {
        title: "Sea freight for heavier cargo",
        body:
          "Sea freight may suit heavy boxes, household goods, furniture and bulk commercial shipments where timing is flexible.",
      },
      {
        title: "Documentation support",
        body:
          "International cargo may require item declarations, invoices, values and restricted item checks. Requirements vary by destination.",
      },
    ],
    faqs: [
      {
        question: "Which Middle East countries can you quote for?",
        answer:
          "The team can review enquiries for Middle Eastern destinations including Qatar, Bahrain, Kuwait, Saudi Arabia, Oman and Jordan subject to service availability.",
      },
      {
        question: "Can I send business stock to the Middle East?",
        answer:
          "Yes, commercial cargo can be reviewed with item descriptions, weights, values and invoice details.",
      },
    ],
  },
  {
    name: "Asia",
    slug: "asia",
    path: "/asia-cargo-from-uk",
    cardLabel: "Asia",
    cardText: "International cargo services from the UK to Asian destinations.",
    h1: "Asia Cargo from UK",
    title: "Asia Cargo from UK | International Cargo Services UK",
    description:
      "Request Asia cargo from UK quotes for parcels, boxes, household goods, air cargo, sea freight and commercial cargo.",
    intro:
      "Aqua Shipping helps customers compare air cargo and sea freight options for Asian destinations, with clear email quotes.",
    icon: Ship,
    cities: ["Bangladesh", "Sri Lanka", "Malaysia", "Singapore", "Thailand", "Philippines"],
    sections: [
      {
        title: "Personal cargo to Asia",
        body:
          "Send parcels, family boxes, clothing, gifts, household goods and excess baggage from the UK to available Asian destinations.",
      },
      {
        title: "Commercial cargo to Asia",
        body:
          "Business shipments may include stock, samples, parts and repeat freight requirements. Clear cargo details help speed up quoting.",
      },
      {
        title: "Air and sea shipping choices",
        body:
          "Air cargo is generally faster for smaller goods. Sea freight can be better for heavier boxes, furniture and budget-led shipments.",
      },
    ],
    faqs: [
      {
        question: "Can you quote for Asian countries outside Pakistan and India?",
        answer:
          "Yes, Asian destinations can be reviewed subject to route availability, shipment details and destination rules.",
      },
      {
        question: "What information should I send?",
        answer:
          "Include collection postcode, destination city and country, cargo type, approximate weight, item count, service preference and any packing or collection needs.",
      },
    ],
  },
];

export const getDestinationBySlug = (slug?: string) => destinations.find((destination) => destination.slug === slug);
