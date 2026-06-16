import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Customer focus"
          text="A quote process built around clear communication, practical shipping options and fast follow-up."
          title="Professional support for personal and business cargo"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <ScrollReveal className="h-full" key={testimonial.name}>
              <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6">
                <Quote aria-hidden="true" className="h-8 w-8 text-ember" />
                <p className="mt-5 text-sm leading-7 text-slate-700">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-black text-navy">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
