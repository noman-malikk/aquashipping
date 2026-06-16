import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "../data/faqs";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-card">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-4 rounded px-5 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-base font-black text-navy">{faq.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-ocean transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
