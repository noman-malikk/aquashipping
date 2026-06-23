export type FAQ = {
  question: string;
  answer: string;
};

export const homeFaqs: FAQ[] = [
  {
    question: "How quickly will I receive my shipping quote?",
    answer:
      "The team reviews quote requests as promptly as possible during business hours. Complex cargo, customs questions or very large shipments may need extra checking before we email your quote.",
  },
  {
    question: "Can you arrange collection in the UK?",
    answer:
      "Yes, UK collection is available for many parcel, box, household and commercial cargo shipments. Share your collection postcode in the quote form and we will confirm the available options.",
  },
  {
    question: "Do you offer both air cargo and sea freight?",
    answer:
      "Yes. Air cargo is usually best for urgent parcels, documents and smaller shipments. Sea freight is often better for heavier boxes, furniture, household goods and commercial cargo.",
  },
  {
    question: "Can I send cargo to Pakistan, India, Dubai and the UAE?",
    answer:
      "We help with cargo and shipping enquiries from the UK to Pakistan, India, Dubai, UAE, Asia and Middle Eastern destinations, subject to service availability and destination rules.",
  },
];

export const quoteFaqs: FAQ[] = [
  {
    question: "What details do you need for an accurate quote?",
    answer:
      "We need the collection location, destination, cargo type, approximate weight, number of boxes or items, service preference and any delivery or packing requirements.",
  },
  {
    question: "Can I upload item photos?",
    answer:
      "Yes, the form includes an optional photo field so the team can understand the shipment. The example serverless handler records photo names; production file storage can be added if required.",
  },
  {
    question: "Will my details be shared?",
    answer:
      "Your details are only used to prepare and respond to your shipping quote, arrange collection where requested, and handle related customer service.",
  },
];
