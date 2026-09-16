export type Article = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "international-shipping-from-uk-guide",
    title: "International shipping from the UK: plan your cargo quote",
    description: "Prepare for worldwide cargo shipping from the UK: compare air and sea freight, measure your shipment and understand what to ask before booking.",
    readTime: "3 min read",
    sections: [
      {
        heading: "Start with the route and the goods",
        body: "A useful international shipping quote starts with a UK collection postcode and the destination country, city and delivery postcode where available. Describe what you are sending in plain language: for example, six boxes of used clothing, two packed chairs or a pallet of spare parts. Say whether the shipment is personal belongings, a gift, a sale or business stock. Include your preferred collection date and any delivery deadline. If your destination is outside the routes listed on our website, send an enquiry so we can review availability for that route and cargo type.",
      },
      {
        heading: "Compare air freight and sea freight",
        body: "Air freight is often a practical choice for smaller, urgent shipments. Sea freight is worth reviewing for bulky household goods, furniture or commercial loads when your delivery date is flexible. LCL means your cargo shares container space; FCL means booking a full container. The best choice depends on the packed size of the shipment, handling requirements and the services available at both ends. Ask for an estimated collection-to-delivery schedule rather than comparing only flight or sailing time. Collection, consolidation, handling and final delivery can all affect the overall journey.",
      },
      {
        heading: "Measure and weigh the packed shipment",
        body: "Measure the length, width and height of each box or pallet after packing, and state the units used. Record the gross weight, including packaging. Light but bulky goods can occupy more space than their weight suggests, so the weight shown on your scales may not be the only measurement used for pricing. If you are sending furniture, provide dimensions in its shipping condition and say whether it can be dismantled or stacked. Share any uncertainty about the measurements when requesting a quote so the team can explain what needs checking before booking.",
      },
      {
        heading: "Check what the shipping quote includes",
        body: "Compare quotes for the same collection and delivery scope. Ask whether packing, collection, export handling, main transport and final delivery are included, and which destination charges may be separate. For door-to-door cargo, confirm the delivery address and mention stairs, limited vehicle access or a need for unloading help. Ask how changes to weight, dimensions or storage requirements would affect the price. If you need cargo cover, ask what options are available and what their terms cover before booking. A clear breakdown is more useful than comparing headline freight prices alone.",
      },
      {
        heading: "Prepare an item list before requesting a quote",
        body: "Make a numbered list of your boxes or pallets with a description of the contents and the value of the goods. Keep the sender and recipient contact details ready. Flag unusual, fragile or potentially restricted items at the enquiry stage so their suitability can be reviewed before collection. The paperwork and acceptance requirements depend on the goods and destination; ask the team to confirm what your particular shipment needs. Keep a copy of the agreed quote and service scope, and confirm who will receive the goods at the destination.",
      },
      {
        heading: "Request a UK to worldwide cargo shipping quote",
        body: "Use the quote form to send your name, contact number, collection and destination countries, cities and postcodes where available. Describe the cargo, approximate packed weight, item count and any preferred transport method in the shipment details box. Include dimensions and timing requirements if known. If you do not know whether air freight, sea freight or a door-to-door service is suitable, explain your priorities so the team can review the available options. Aqua Shipping handles enquiries for personal cargo, household goods, excess baggage and commercial shipments, with route availability and acceptance confirmed for each enquiry.",
      },
    ],
  },
  {
    slug: "cost-to-send-cargo-to-pakistan-from-uk",
    title: "How much does it cost to send cargo to Pakistan from the UK?",
    description:
      "A practical guide to the details that influence cargo to Pakistan from UK quotes, including weight, volume, service type and collection.",
    readTime: "1 min read",
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
    readTime: "1 min read",
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
    readTime: "1 min read",
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
    readTime: "1 min read",
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
    readTime: "1 min read",
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
