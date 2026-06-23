import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, LockKeyhole, Send, Upload } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldPath, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { createLeadReference } from "../lib/lead";
import { CTAButton } from "./CTAButton";
import { QuoteStep } from "./QuoteStep";

const cargoTypes = [
  "Parcel",
  "Boxes",
  "Household goods",
  "Furniture",
  "Commercial goods",
  "Documents",
  "Excess baggage",
  "Vehicle parts",
  "Perishables or frozen food",
  "Retail or fashion goods",
  "Technology or electronics",
  "Engineering or manufacturing parts",
  "Merchandise in baggage",
  "Dangerous or restricted goods",
  "Other",
];

const destinationCountries = [
  "Pakistan",
  "India",
  "Dubai",
  "UAE",
  "Bangladesh",
  "Sri Lanka",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Malaysia",
  "Singapore",
  "Other",
];

const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a phone number."),
  collectionPostcode: z.string().trim().min(3, "Enter the collection postcode."),
  collectionCity: z.string().trim().min(2, "Enter the collection city."),
  destinationCountry: z.string().trim().min(1, "Choose the destination country."),
  destinationCity: z.string().trim().min(2, "Enter the destination city."),
  deliveryAddress: z.string().optional(),
  cargoType: z.string().trim().min(1, "Choose the cargo type."),
  approximateWeight: z.string().trim().min(1, "Enter the approximate weight."),
  numberOfItems: z.string().trim().min(1, "Enter at least one item or box."),
  dimensions: z.string().optional(),
  preferredService: z.string().trim().min(1, "Choose a preferred service."),
  collectionRequired: z.string().trim().min(1, "Choose whether collection is required."),
  packingRequired: z.string().trim().min(1, "Choose whether packing is required."),
  itemValue: z.string().trim().min(1, "Enter the approximate item value."),
  preferredSendingDate: z.string().trim().min(1, "Choose a preferred sending date."),
  message: z.string().trim().min(10, "Add a few details about the shipment."),
  consent: z.boolean().refine((value) => value, "Please agree to be contacted about your quote."),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

const steps: { title: string; description: string; fields: FieldPath<QuoteFormValues>[] }[] = [
  {
    title: "Your details",
    description: "So we can send the quote and clarify any shipment details.",
    fields: ["fullName", "email", "phone"],
  },
  {
    title: "Route",
    description: "Where the cargo starts and where it needs to go.",
    fields: ["collectionPostcode", "collectionCity", "destinationCountry", "destinationCity", "deliveryAddress"],
  },
  {
    title: "Cargo",
    description: "Weight, items, service preference and handling requirements.",
    fields: [
      "cargoType",
      "approximateWeight",
      "numberOfItems",
      "dimensions",
      "preferredService",
      "collectionRequired",
      "packingRequired",
      "itemValue",
      "preferredSendingDate",
    ],
  },
  {
    title: "Details",
    description: "Final notes and contact consent.",
    fields: ["message", "consent"],
  },
];

const defaultValues: QuoteFormValues = {
  fullName: "",
  email: "",
  phone: "",
  collectionPostcode: "",
  collectionCity: "",
  destinationCountry: "",
  destinationCity: "",
  deliveryAddress: "",
  cargoType: "",
  approximateWeight: "",
  numberOfItems: "1",
  dimensions: "",
  preferredService: "",
  collectionRequired: "",
  packingRequired: "",
  itemValue: "",
  preferredSendingDate: "",
  message: "",
  consent: false,
};

type QuotePayload = QuoteFormValues & {
  leadId: string;
  photoNames: string[];
};

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const [submittedLead, setSubmittedLead] = useState("");
  const [submitError, setSubmitError] = useState("");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    trigger,
  } = useForm<QuoteFormValues>({
    defaultValues,
    mode: "onBlur",
    resolver: zodResolver(quoteSchema),
  });

  const errorFor = (field: FieldPath<QuoteFormValues>) => errors[field]?.message?.toString();

  const nextStep = async () => {
    const valid = await trigger(steps[step].fields);
    if (valid) {
      setStep((value) => Math.min(value + 1, steps.length - 1));
    }
  };

  const previousStep = () => setStep((value) => Math.max(value - 1, 0));

  const onSubmit = async (values: QuoteFormValues) => {
    setSubmitError("");
    const leadId = createLeadReference();
    const payload: QuotePayload = { ...values, leadId, photoNames };
    const endpoint = import.meta.env.VITE_QUOTE_API_URL;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Quote endpoint returned an error.");
        }

        const result = (await response.json().catch(() => ({ leadId }))) as { leadId?: string };
        setSubmittedLead(result.leadId || leadId);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
        setSubmittedLead(leadId);
      }
    } catch {
      setSubmitError("We could not submit the form just now. Please call, WhatsApp or try again in a moment.");
    }
  };

  if (submittedLead) {
    return (
      <div className="rounded-lg border border-teal-200 bg-teal-50 p-8 text-center shadow-card">
        <CheckCircle2 aria-hidden="true" className="mx-auto h-14 w-14 text-aqua" />
        <h2 className="mt-5 text-2xl font-black text-navy">Thank you. Your quote request has been received.</h2>
        <p className="mt-3 text-base leading-8 text-slate-700">
          Our team will review your shipment details and respond by email as soon as possible. Your reference number is <strong>{submittedLead}</strong>.
        </p>
        <div className="mt-7">
          <CTAButton to="/" variant="ghost">Back to Home</CTAButton>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-card sm:p-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-aqua">Quote form</p>
          <h2 className="mt-2 text-2xl font-black text-navy">Tell us about your shipment</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Share your cargo details for a clear email quote.</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {steps.map((item, index) => (
            <button
              aria-label={`Go to ${item.title}`}
              className={`h-2 rounded-full transition ${index <= step ? "bg-ocean" : "bg-slate-200"}`}
              key={item.title}
              onClick={() => index < step && setStep(index)}
              type="button"
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-bold uppercase text-ocean">Step {step + 1} of {steps.length}</p>
        <h3 className="mt-2 text-xl font-black text-navy">{steps[step].title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{steps[step].description}</p>
      </div>

      <div className="mt-7 min-h-[430px]">
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <QuoteStep stepKey="contact">
              <div className="grid gap-5 md:grid-cols-2">
                <TextField error={errorFor("fullName")} label="Full name" placeholder="Your full name" registration={register("fullName")} />
                <TextField error={errorFor("email")} label="Email" placeholder="you@example.com" registration={register("email")} type="email" />
                <TextField error={errorFor("phone")} label="Phone number" placeholder="+44..." registration={register("phone")} />
              </div>
            </QuoteStep>
          ) : null}

          {step === 1 ? (
            <QuoteStep stepKey="route">
              <div className="grid gap-5 md:grid-cols-2">
                <TextField error={errorFor("collectionPostcode")} helper="Used to check UK collection options." label="Collection postcode" placeholder="Example: B12 0AA" registration={register("collectionPostcode")} />
                <TextField error={errorFor("collectionCity")} label="Collection city" placeholder="Birmingham" registration={register("collectionCity")} />
                <SelectField error={errorFor("destinationCountry")} label="Destination country" options={destinationCountries} registration={register("destinationCountry")} />
                <TextField error={errorFor("destinationCity")} label="Destination city" placeholder="Lahore, Dubai, Mumbai..." registration={register("destinationCity")} />
                <TextAreaField className="md:col-span-2" error={errorFor("deliveryAddress")} helper="Optional, but useful for door-to-door quotes." label="Delivery address optional" placeholder="Receiver address or area" registration={register("deliveryAddress")} rows={3} />
              </div>
            </QuoteStep>
          ) : null}

          {step === 2 ? (
            <QuoteStep stepKey="cargo">
              <div className="grid gap-5 md:grid-cols-2">
                <SelectField error={errorFor("cargoType")} label="Cargo type" options={cargoTypes} registration={register("cargoType")} />
                <TextField error={errorFor("approximateWeight")} helper="A best estimate is fine." label="Approximate weight" placeholder="Example: 45 kg" registration={register("approximateWeight")} />
                <TextField error={errorFor("numberOfItems")} label="Number of boxes/items" min={1} registration={register("numberOfItems")} type="number" />
                <TextField error={errorFor("dimensions")} helper="Optional. Example: 60 x 40 x 40 cm per box." label="Dimensions optional" placeholder="Length x width x height" registration={register("dimensions")} />
                <SelectField error={errorFor("preferredService")} label="Preferred service" options={["Air cargo", "Sea cargo", "Road freight / UK transfer", "Door-to-door", "Warehousing / logistics support", "Not sure"]} registration={register("preferredService")} />
                <SelectField error={errorFor("collectionRequired")} label="Collection required" options={["Yes", "No"]} registration={register("collectionRequired")} />
                <SelectField error={errorFor("packingRequired")} label="Packing required" options={["Yes", "No"]} registration={register("packingRequired")} />
                <TextField error={errorFor("itemValue")} helper="Approximate value for quote and documentation review." label="Item value" placeholder="Example: GBP 250" registration={register("itemValue")} />
                <TextField error={errorFor("preferredSendingDate")} label="Preferred sending date" registration={register("preferredSendingDate")} type="date" />
              </div>
            </QuoteStep>
          ) : null}

          {step === 3 ? (
            <QuoteStep stepKey="details">
              <div className="grid gap-5">
                <label className="block">
                  <span className="field-label">Upload item photos optional</span>
                  <span className="mt-2 flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center transition hover:border-ocean">
                    <Upload aria-hidden="true" className="h-6 w-6 text-ocean" />
                    <span className="mt-2 text-sm font-bold text-navy">Add photos</span>
                    <span className="mt-1 text-xs leading-5 text-slate-500">JPG, PNG or HEIC. Photo names are included with the enquiry.</span>
                    <input
                      accept="image/*"
                      className="sr-only"
                      multiple
                      onChange={(event) => setPhotoNames(Array.from(event.target.files || []).map((file) => file.name))}
                      type="file"
                    />
                  </span>
                </label>
                {photoNames.length ? (
                  <p className="text-sm text-slate-600">{photoNames.length} photo{photoNames.length === 1 ? "" : "s"} selected: {photoNames.join(", ")}</p>
                ) : null}
                <TextAreaField error={errorFor("message")} label="Message/details" placeholder="Tell us what you are sending, any fragile items, timing needs or delivery notes." registration={register("message")} rows={5} />
                <label className="flex items-start gap-3 rounded-md bg-blue-50 p-4">
                  <input className="mt-1 h-5 w-5 rounded border-slate-300 text-ocean focus:ring-ocean" type="checkbox" {...register("consent")} />
                  <span>
                    <span className="block text-sm font-bold text-navy">I agree to be contacted about my shipping quote.</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-600">Your details are only used to prepare your shipping quote.</span>
                    {errorFor("consent") ? <span className="field-error block">{errorFor("consent")}</span> : null}
                  </span>
                </label>
                <div className="flex items-center gap-2 rounded-md bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <LockKeyhole aria-hidden="true" className="h-4 w-4 text-aqua" />
                  No Telegram bot tokens, email keys or private credentials are stored in the website frontend.
                </div>
              </div>
            </QuoteStep>
          ) : null}
        </AnimatePresence>
      </div>

      {submitError ? <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{submitError}</p> : null}

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <CTAButton disabled={step === 0 || isSubmitting} icon={ChevronLeft} onClick={previousStep} variant="ghost">
          Back
        </CTAButton>
        {step < steps.length - 1 ? (
          <CTAButton icon={ChevronRight} onClick={nextStep}>
            Continue
          </CTAButton>
        ) : (
          <CTAButton disabled={isSubmitting} icon={Send} type="submit" variant="secondary">
            {isSubmitting ? "Sending..." : "Submit Quote Request"}
          </CTAButton>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: string;
  helper?: string;
  placeholder?: string;
  type?: string;
  min?: number;
};

function TextField({ label, registration, error, helper, placeholder, type = "text", min }: FieldProps) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input className="field-input" min={min} placeholder={placeholder} type={type} {...registration} />
      {helper ? <span className="field-help">{helper}</span> : null}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}

function SelectField({ label, registration, error, options }: FieldProps & { options: string[] }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <select className="field-input" {...registration}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}

function TextAreaField({
  className = "",
  error,
  helper,
  label,
  placeholder,
  registration,
  rows = 4,
}: FieldProps & { className?: string; rows?: number }) {
  return (
    <label className={`block ${className}`}>
      <span className="field-label">{label}</span>
      <textarea className="field-input resize-y" placeholder={placeholder} rows={rows} {...registration} />
      {helper ? <span className="field-help">{helper}</span> : null}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
