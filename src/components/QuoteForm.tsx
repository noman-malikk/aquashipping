import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useRef } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { Link } from "react-router-dom";
import { company, phoneHref, whatsappHref } from "../lib/company";
import { quoteSchema, type QuoteFormValues } from "../lib/quote";
import { CTAButton } from "./CTAButton";

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { formState: { errors, isSubmitting }, handleSubmit, register } = useForm<QuoteFormValues>({
    defaultValues: {
      fullName: "", phone: "", collectionCountry: "United Kingdom", collectionCity: "", collectionPostcode: "",
      destinationCountry: "", destinationCity: "", destinationPostcode: "", message: "",
    },
    mode: "onBlur",
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = (values: QuoteFormValues) => {
    const form = formRef.current;
    if (!form) return;
    // Submit validated, trimmed values through the provider's native form flow.
    for (const [name, value] of Object.entries(values)) {
      const field = form.elements.namedItem(name);
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.value = value;
    }
    form.submit();
  };

  return (
    <form ref={formRef} action={`https://formsubmit.co/${company.email}`} method="POST" className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-card sm:p-8" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="_subject" value="New Aqua Shipping quotation enquiry" />
      <input type="hidden" name="_template" value="table" />
      <h2 className="text-2xl font-black text-navy">Request a shipping quote</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Tell us where your shipment is going and what you need to send. We will contact you on the number below.</p>
      <fieldset className="mt-6 grid gap-5 sm:grid-cols-2">
        <legend className="mb-3 font-bold text-navy">Your details</legend>
        <TextField label="Name" registration={register("fullName")} error={errors.fullName?.message} autoComplete="name" maxLength={120} />
        <TextField label="Contact number" registration={register("phone")} error={errors.phone?.message} autoComplete="tel" type="tel" maxLength={32} />
      </fieldset>
      <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
        <legend className="mb-3 font-bold text-navy">Collection</legend>
        <TextField label="Collection country" registration={register("collectionCountry")} error={errors.collectionCountry?.message} autoComplete="section-collection country-name" maxLength={120} />
        <TextField label="Collection city" registration={register("collectionCity")} error={errors.collectionCity?.message} autoComplete="section-collection address-level2" maxLength={120} />
        <TextField label="Collection postcode" registration={register("collectionPostcode")} error={errors.collectionPostcode?.message} autoComplete="section-collection postal-code" maxLength={24} optional />
      </fieldset>
      <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
        <legend className="mb-3 font-bold text-navy">Destination</legend>
        <TextField label="Destination country" registration={register("destinationCountry")} error={errors.destinationCountry?.message} autoComplete="section-destination country-name" maxLength={120} />
        <TextField label="Destination city" registration={register("destinationCity")} error={errors.destinationCity?.message} autoComplete="section-destination address-level2" maxLength={120} />
        <TextField label="Destination postcode" registration={register("destinationPostcode")} error={errors.destinationPostcode?.message} autoComplete="section-destination postal-code" maxLength={24} optional />
      </fieldset>
      <p className="mt-3 text-xs leading-5 text-slate-500">Include postcodes where available. Some destinations do not use them.</p>
      <div className="mt-7">
        <label className="field-label" htmlFor="quote-message">Shipment details</label>
        <textarea id="quote-message" className="field-input resize-y" rows={5} maxLength={4000} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-help message-error" : "message-help"} {...register("message")} />
        <span id="message-help" className="field-help block">Describe the items, approximate size or weight if known, and any timing or collection requirements.</span>
        {errors.message && <span id="message-error" className="field-error block">{errors.message.message}</span>}
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-600">By sending this enquiry, you ask Aqua Shipping Limited to contact you about your shipment. Read our <Link className="focus-ring text-ocean underline" to="/privacy-policy">Privacy Policy</Link>.</p>
      <div className="mt-6"><CTAButton disabled={isSubmitting} icon={Send} type="submit" variant="secondary">{isSubmitting ? "Sending…" : "Send quote request"}</CTAButton></div>
      <p className="mt-5 text-sm leading-7 text-slate-600">Prefer to speak to us? <a className="focus-ring text-ocean underline" href={phoneHref}>Call {company.phone}</a> or <a className="focus-ring text-ocean underline" href={whatsappHref}>message us on WhatsApp</a>.</p>

    </form>
  );
}

function TextField({ label, registration, error, autoComplete, type = "text", optional = false, maxLength }: {
  label: string; registration: UseFormRegisterReturn; error?: string; autoComplete: string; type?: string; optional?: boolean; maxLength: number;
}) {
  const id = `quote-${registration.name}`;
  return <div className="min-w-0">
    <label className="field-label" htmlFor={id}>{label}</label>
    <input id={id} className="field-input" type={type} autoComplete={autoComplete} maxLength={maxLength} required={!optional} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} {...registration} />
    {error && <span id={`${id}-error`} className="field-error block">{error}</span>}
  </div>;
}
