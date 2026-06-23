import { CheckCircle2, FileText, Globe2, PackageSearch, Route, Warehouse } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../components/ContactSection";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import { seo } from "../data/seo";

const breadcrumbs = [{ label: "About" }];

export function AboutPage() {
  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} description={seo.about.description} path={seo.about.path} title={seo.about.title} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="About"
        text="A UK-based cargo and freight-forwarding quote service for customers sending parcels, boxes, household goods and commercial freight to international destinations."
        title="A practical freight forwarding agent for fast UK cargo quotes"
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Our approach"
            text="Aqua Shipping is built for customers who need a responsive, practical and professional way to request cargo quotes from the UK, with one clear contact from first enquiry to next steps."
            title="Clear advice for air, sea, road and door-to-door cargo"
          />
          <div className="grid gap-5">
            {[
              "UK collection and drop-off options reviewed by route.",
              "Destination specialists for Pakistan, India, Dubai, UAE, Asia and the Middle East.",
              "Quote handling designed around clear, practical follow-up.",
              "Air, sea, road transfer, warehousing and documentation needs reviewed together.",
              "Customs documentation support with careful wording and destination-rule checks.",
            ].map((item) => (
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5" key={item}>
                <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-aqua" />
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Capabilities"
            text="The quote process looks beyond price alone: route, timing, handling, paperwork and restricted-item checks all matter."
            title="Freight-forwarding support shaped around the shipment"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Route planning",
                text: "Compare air cargo, sea freight, road transfer and door-to-door support based on timing and cargo size.",
                icon: Route,
              },
              {
                title: "Cargo review",
                text: "Check weight, dimensions, packing needs, photos and item details before giving practical guidance.",
                icon: PackageSearch,
              },
              {
                title: "Documentation",
                text: "Review invoices, declarations, origin details and destination paperwork before shipment.",
                icon: FileText,
              },
              {
                title: "Logistics handover",
                text: "Support consolidation, warehouse staging, collection notes and carrier handover where available.",
                icon: Warehouse,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={item.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-ocean">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-xl font-black text-navy">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Globe2 aria-hidden="true" className="h-10 w-10 text-aqua" />
            <h2 className="mt-5 text-3xl font-black text-navy">Built for personal cargo and business supply chains</h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            Whether the shipment is a family box to Pakistan, parcel delivery to India, household goods to Dubai or repeat commercial cargo to the UAE, the same principle applies: clear information first, careful checks second, and a quote that reflects the route, documents and service level actually needed.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
