export type SEOEntry = {
  title: string;
  description: string;
  path: string;
};

export const seo = {
  home: {
    title: "Cargo & Shipping Services from UK | Air & Sea Freight Quotes",
    description:
      "Fast UK cargo and shipping quotes for Pakistan, India, Dubai, UAE, Asia and Middle Eastern destinations. Air, sea and door-to-door options.",
    path: "/",
  },
  quote: {
    title: "Get a Cargo Shipping Quote | UK International Shipping",
    description:
      "Request a UK cargo shipping quote for parcels, boxes, household goods and commercial cargo. Most enquiries answered within 30 minutes.",
    path: "/get-quote",
  },
  about: {
    title: "About Aqua Shipping | Shipping Line Agent UK",
    description:
      "Learn about Aqua Shipping, a UK-based shipping line agent and cargo service helping customers send freight overseas.",
    path: "/about",
  },
  contact: {
    title: "Contact Aqua Shipping | Cargo Quote Support UK",
    description:
      "Contact Aqua Shipping for cargo quotes, door-to-door cargo service, air cargo, sea freight and customs documentation support.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy | Aqua Shipping",
    description: "Read how Aqua Shipping handles quote request details, contact information and customer service data.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions | Aqua Shipping",
    description:
      "Read the general website terms for Aqua Shipping cargo quote enquiries and international shipping support.",
    path: "/terms-and-conditions",
  },
  guides: {
    title: "Shipping Guides | Aqua Shipping",
    description:
      "Helpful guides about air cargo, sea freight, customs documents and parcel shipping from the UK.",
    path: "/guides",
  },
} satisfies Record<string, SEOEntry>;
