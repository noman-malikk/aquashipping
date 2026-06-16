import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../components/ContactSection";
import { CTAButton } from "../components/CTAButton";
import { FAQAccordion } from "../components/FAQAccordion";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import type { Destination } from "../data/destinations";
import { services } from "../data/services";

export function DestinationPage({ destination }: { destination: Destination }) {
  const breadcrumbs = [{ label: "Destinations", href: "/shipping-to-pakistan-from-uk" }, { label: destination.name }];

  return (
    <>
      <SEOHead
        breadcrumbs={breadcrumbs}
        description={destination.description}
        faqs={destination.faqs}
        path={destination.path}
        serviceName={`${destination.h1} quote service`}
        title={destination.title}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero eyebrow="Destination" text={destination.intro} title={destination.h1} />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black text-navy">Popular destination areas</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {destination.cities.map((city) => (
                <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm" key={city}>
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <CTAButton className="w-full" to="/get-quote">Request Quote</CTAButton>
            </div>
          </aside>
          <div className="grid gap-5">
            {destination.sections.map((section) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={section.title}>
                <h2 className="text-2xl font-black text-navy">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service options"
            text="Compare service types before you request a quote."
            title={`Popular services for ${destination.name}`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.slice(3, 7).map((service) => (
              <Link className="focus-ring inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-navy shadow-sm hover:text-ocean" key={service.slug} to={service.path}>
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-aqua" />
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQs" title={`${destination.name} cargo FAQs`} />
          <FAQAccordion faqs={destination.faqs} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
