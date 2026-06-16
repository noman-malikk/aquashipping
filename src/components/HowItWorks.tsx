import { ClipboardList, MailCheck, PackageSearch, Route, Truck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    title: "Submit your quote request",
    text: "Tell us what you are sending, where it starts and where it needs to go.",
    icon: ClipboardList,
  },
  {
    title: "We review the details",
    text: "The team checks weight, destination, cargo type and service preference.",
    icon: PackageSearch,
  },
  {
    title: "You receive a quote by email",
    text: "Most enquiries are answered within 30 minutes during business hours.",
    icon: MailCheck,
  },
  {
    title: "Collection or drop-off is arranged",
    text: "We confirm the next steps for packing, collection or drop-off.",
    icon: Truck,
  },
  {
    title: "Cargo is shipped and tracked",
    text: "Your shipment moves by the agreed air, sea or door-to-door service.",
    icon: Route,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          text="A simple quote flow designed for busy customers who need a clear answer fast."
          title="From enquiry to shipment in five clear steps"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal className="h-full" key={step.title}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-white">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-black uppercase text-aqua">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-base font-black leading-6 text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
