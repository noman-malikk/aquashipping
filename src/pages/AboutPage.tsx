import { CheckCircle2 } from "lucide-react";
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
        text="A UK-based cargo quote service for customers sending parcels, boxes, household goods and commercial freight to international destinations."
        title="Shipping line agent UK support with fast email quotes"
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Our approach"
            text="Aqua Shipping is built for customers who need a responsive, practical and professional way to request cargo quotes from the UK."
            title="Clear advice for air cargo, sea freight and door-to-door shipping"
          />
          <div className="grid gap-5">
            {[
              "UK collection and drop-off options reviewed by route.",
              "Destination specialists for Pakistan, India, Dubai, UAE, Asia and the Middle East.",
              "Quote handling designed around a 30 minute response goal.",
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
      <ContactSection />
    </>
  );
}
