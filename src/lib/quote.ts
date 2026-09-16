import { z } from "zod";

const place = (label: string) => z.string().trim().min(1, `Enter the ${label}.`).max(120, "Use 120 characters or fewer.");
const postcode = z.string().trim().max(24, "Use 24 characters or fewer.");
export const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your name.").max(120, "Use 120 characters or fewer."),
  phone: z.string().trim().max(32).regex(/^\+?[\d\s().-]+$/, "Enter a valid contact number.").refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  }, "Enter a contact number with 7 to 15 digits, including the country code."),
  collectionCountry: place("collection country"),
  collectionCity: place("collection city"),
  collectionPostcode: postcode,
  destinationCountry: place("destination country"),
  destinationCity: place("destination city"),
  destinationPostcode: postcode,
  message: z.string().trim().min(10, "Please add a few details about your shipment.").max(4000, "Use 4,000 characters or fewer."),
});
export type QuoteFormValues = z.infer<typeof quoteSchema>;
