import { ChevronDown } from "lucide-react";
import type { FAQ } from "../data/faqs";

// Native disclosure keeps every answer in the HTML and works without JavaScript.
export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-card">
      {faqs.map((faq, index) => (
        <details className="group" key={faq.question} open={index === 0}>
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded px-5 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-base font-black text-navy">{faq.question}</span>
            <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-ocean transition group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
