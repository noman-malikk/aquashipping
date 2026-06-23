import {
  Archive,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  FileText,
  Home,
  PackageCheck,
  Plane,
  Ship,
  TriangleAlert,
  Truck,
  Warehouse,
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
        title: "Realistic transit guidance",
        body:
          "We review airline availability, destination handling and collection timing before giving advice, so your quote is based on practical movement options rather than vague promises.",
      },
      {
        title: "Clear quote information",
        body:
          "Accurate weight, dimensions, value, destination city and service urgency help the team prepare a clear air freight quote.",
      },
      {
        title: "Tracking and local handover",
        body:
          "Air cargo can be reviewed for Pakistan, India, Dubai, UAE, Asia and Middle Eastern destinations, with tracking and final handover support depending on the route and carrier.",
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
        title: "LCL sea freight",
        body:
          "Less-than-container-load shipping can suit smaller commercial or household shipments that do not fill a whole container. It allows cargo to move through consolidated sea freight services while keeping costs more manageable than air cargo for heavier goods.",
      },
      {
        title: "FCL sea freight",
        body:
          "Full-container-load shipping can be reviewed for larger commercial shipments, furniture, relocation goods or bulky cargo where keeping the shipment together in one container may be more practical.",
      },
      {
        title: "Furniture and household goods",
        body:
          "Customers often use sea cargo for furniture, kitchen items, clothing, personal belongings, family cargo and relocation shipments.",
      },
      {
        title: "Commercial cargo",
        body:
          "Sea freight can support business shipments, bulk stock, vehicle parts and repeat cargo where clear invoices, item details and packing information are available.",
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
      {
        question: "What is the difference between LCL and FCL?",
        answer:
          "LCL is for cargo that shares container space with other shipments. FCL is for cargo moving in a dedicated container, usually for larger loads.",
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
          "We can review business cargo, stock shipments, samples, vehicle parts, merchandise in baggage and repeat freight forwarding enquiries from the UK.",
      },
      {
        title: "Freight management",
        body:
          "For regular business cargo, we can help compare air, sea, road transfer, warehousing and documentation needs so the quote reflects the full supply chain rather than only one movement.",
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
        title: "Invoices, origin and commodity details",
        body:
          "Commercial cargo may require invoices, origin details, tariff or commodity information and supporting documents before it can be shipped.",
      },
      {
        title: "Export documentation guidance",
        body:
          "We can review which export paperwork may be needed based on the destination country, goods type, shipment value and receiver requirements.",
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
  {
    name: "Road Freight",
    slug: "road-freight",
    path: "/road-freight-uk",
    cardText: "UK road transfer support for collection, airport handover, port delivery and onward movement.",
    h1: "Road Freight UK",
    title: "Road Freight UK | Collection, Airport & Port Transfer Support",
    description:
      "Request UK road freight support for cargo collection, port transfer, airport handover, onward delivery and multi-modal shipping.",
    intro:
      "Road freight support helps connect your cargo with air and sea services through UK collection, airport handover, port delivery and onward movement where available.",
    icon: Truck,
    sections: [
      {
        title: "UK collection and transfer",
        body:
          "Share the collection postcode, number of items, weight and timing needs so the team can review collection, drop-off, airport transfer or port delivery options.",
      },
      {
        title: "Part-load and dedicated movements",
        body:
          "Smaller loads may be reviewed alongside shared collection options, while urgent or larger shipments may need dedicated vehicle support.",
      },
      {
        title: "Multi-modal cargo planning",
        body:
          "Road freight often forms the first or final part of a shipment moving by air or sea. We can review the route so handover points and documentation are planned clearly.",
      },
    ],
    faqs: [
      {
        question: "Can road freight be used before air or sea cargo?",
        answer:
          "Yes, UK road transfer can help move cargo from your address to a warehouse, airport, port or drop-off point depending on service availability.",
      },
      {
        question: "Do you offer dedicated vehicles?",
        answer:
          "Dedicated vehicle options can be reviewed for urgent, bulky or higher-value cargo where shared collection is not suitable.",
      },
    ],
  },
  {
    name: "Warehousing & Logistics",
    slug: "warehousing-logistics",
    path: "/logistics-and-warehousing",
    cardText: "Logistics planning, short-term storage, consolidation and cargo handover support.",
    h1: "Logistics and Warehousing Support",
    title: "Logistics and Warehousing Support | UK Cargo Handling",
    description:
      "Request logistics and warehousing support for cargo consolidation, short-term storage, packing coordination and supply chain handover.",
    intro:
      "Logistics and warehousing support can help when a shipment needs consolidation, short-term storage, packing coordination or planned handover into air, sea or road freight.",
    icon: Warehouse,
    sections: [
      {
        title: "Single point of contact",
        body:
          "A practical logistics plan gives customers one clear contact for collection notes, cargo preparation, documentation checks and service updates.",
      },
      {
        title: "Consolidation and storage",
        body:
          "For multi-box shipments or business stock, warehousing support can be reviewed for consolidation, staging and handover before export.",
      },
      {
        title: "Supply chain coordination",
        body:
          "Business customers can share shipment frequency, cargo types and route needs so we can recommend air, sea, road and documentation options that fit the workflow.",
      },
    ],
    faqs: [
      {
        question: "Can you store cargo before shipment?",
        answer:
          "Short-term storage or staging can be reviewed depending on location, cargo type, volume and the chosen shipping service.",
      },
      {
        question: "Is this only for commercial cargo?",
        answer:
          "No. Logistics support can also help household or family shipments that need packing, consolidation or planned handover.",
      },
    ],
  },
  {
    name: "Export Documentation",
    slug: "export-documentation",
    path: "/export-documentation-services",
    cardText: "Document checks for invoices, certificates, declarations and destination paperwork.",
    h1: "Export Documentation Services",
    title: "Export Documentation Services | Cargo Paperwork Support",
    description:
      "Request export documentation support for invoices, certificates, item declarations, origin details and destination paperwork.",
    intro:
      "Correct paperwork helps reduce avoidable cargo delays. Export documentation support reviews the documents likely to be needed for the destination, goods type and receiver requirements.",
    icon: FileText,
    sections: [
      {
        title: "Paperwork before shipment",
        body:
          "Commercial invoices, item lists, values, origin details and receiver information should be checked before cargo is handed over.",
      },
      {
        title: "Destination-led requirements",
        body:
          "Required documents can vary by destination country, item type, shipment value, trade terms and receiver instructions.",
      },
      {
        title: "Avoidable delay checks",
        body:
          "A documentation review can help identify missing item descriptions, unclear values, restricted goods concerns or incomplete receiver details before export.",
      },
    ],
    faqs: [
      {
        question: "Do all shipments need export documents?",
        answer:
          "Many international shipments need some form of item declaration or invoice. The exact documents depend on the goods, value and destination rules.",
      },
      {
        question: "Can you advise on commodity codes?",
        answer:
          "We can review whether commodity or tariff details may be needed, but final classifications and destination decisions are subject to official rules and authorities.",
      },
    ],
  },
  {
    name: "Dangerous Goods Guidance",
    slug: "dangerous-goods",
    path: "/dangerous-goods-shipping-guidance",
    cardText: "Restricted item checks for hazardous, regulated or sensitive cargo before quote confirmation.",
    h1: "Dangerous Goods Shipping Guidance",
    title: "Dangerous Goods Shipping Guidance | Restricted Cargo Checks",
    description:
      "Request guidance for dangerous goods shipping checks, restricted items, regulated cargo and documentation before international shipment.",
    intro:
      "Some cargo is restricted or regulated for air, sea or road transport. We can review item details before quoting so unsuitable or paperwork-heavy goods are identified early.",
    icon: TriangleAlert,
    sections: [
      {
        title: "Restricted item review",
        body:
          "Batteries, liquids, aerosols, chemicals, paints, perfumes, food items, animal-origin goods and electronics may need extra checks before shipment.",
      },
      {
        title: "Packaging and declarations",
        body:
          "Regulated cargo may require approved packaging, labels, declarations or carrier approval. Not every dangerous or restricted item can be accepted.",
      },
      {
        title: "Route and carrier rules",
        body:
          "Requirements vary by service type, destination, airline, shipping line and local authorities. We use cautious wording and confirm acceptance before booking.",
      },
    ],
    faqs: [
      {
        question: "Can I send batteries or electronics?",
        answer:
          "Electronics and batteries may need extra review. Share photos, model details and battery information before booking.",
      },
      {
        question: "Do you accept all dangerous goods?",
        answer:
          "No. Dangerous, hazardous or restricted items are subject to carrier acceptance, packaging rules and destination regulations.",
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
