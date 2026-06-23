import { industries } from "../data/industries";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function IndustryGrid() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Industries"
          text="From family boxes to business cargo, we review the route, documents, packing and service type before quoting."
          title="Import and export cargo categories we can review"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <ScrollReveal className="h-full" key={industry.label}>
                <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean/40 hover:bg-white hover:shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-ocean shadow-sm">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-navy">{industry.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{industry.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
