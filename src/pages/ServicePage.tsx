import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../components/ContactSection";
import { FAQAccordion } from "../components/FAQAccordion";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import type { Service } from "../data/services";
import { destinations } from "../data/destinations";

export function ServicePage({ service }: { service: Service }) {
  const breadcrumbs = [{ label: "Services", href: "/air-cargo-services-uk" }, { label: service.name }];

  return (
    <>
      <SEOHead
        breadcrumbs={breadcrumbs}
        description={service.description}
        faqs={service.faqs}
        path={service.path}
        serviceName={service.name}
        title={service.title}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero eyebrow="Cargo service" text={service.intro} title={service.h1} />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="grid gap-5">
            {service.sections.map((section) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={section.title}>
                <h2 className="text-2xl font-black text-navy">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black text-navy">Routes we quote often</h2>
            <div className="mt-5 grid gap-2">
              {destinations.slice(0, 4).map((destination) => (
                <Link className="focus-ring inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-navy shadow-sm hover:text-ocean" key={destination.slug} to={destination.path}>
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-aqua" />
                  {destination.h1}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQs" title={`${service.name} FAQs`} />
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
