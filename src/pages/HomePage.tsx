import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  MailCheck,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
  Timer,
  Truck,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FAQAccordion } from "../components/FAQAccordion";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { IndustryGrid } from "../components/IndustryGrid";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { Testimonials } from "../components/Testimonials";
import { TrustBadges } from "../components/TrustBadges";
import { ContactSection } from "../components/ContactSection";
import { CTAButton } from "../components/CTAButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { homeFaqs } from "../data/faqs";
import { seo } from "../data/seo";
import { services } from "../data/services";

const reasons = [
  "Responsive quote handling",
  "UK-based service",
  "Asian and Middle East destination specialists",
  "Air, sea and road options",
  "LCL and FCL sea freight guidance",
  "Door-to-door support",
  "Warehousing and logistics review",
  "Export documentation checks",
  "Clear pricing",
  "Professional customer support",
];

const worldwideServices = [
  {
    title: "Worldwide Air Freight",
    text: "Fast international air cargo for urgent parcels, documents, samples and time-sensitive shipments.",
    icon: Plane,
  },
  {
    title: "Worldwide Sea Freight",
    text: "LCL and FCL sea freight options for heavy boxes, furniture, stock and commercial cargo.",
    icon: Ship,
  },
  {
    title: "Door-to-Door Worldwide",
    text: "Collection, cargo handling and final delivery support reviewed by route and destination rules.",
    icon: PackageCheck,
  },
  {
    title: "Global Customs Support",
    text: "Help with invoices, declarations, commodity details and destination documentation checks.",
    icon: ClipboardCheck,
  },
  {
    title: "UK Collection Network",
    text: "Collection and road transfer options for airport, port, warehouse and door-to-door handover.",
    icon: Truck,
  },
  {
    title: "Business Logistics",
    text: "Support for repeat commercial cargo, warehousing, consolidation and multi-modal freight planning.",
    icon: Warehouse,
  },
];

export function HomePage() {
  return (
    <>
      <SEOHead
        description={seo.home.description}
        faqs={homeFaqs}
        path={seo.home.path}
        serviceName="International cargo services UK"
        title={seo.home.title}
      />
      <Hero />
      <TrustBadges />

      <section className="bg-white py-20" id="worldwide-service">
        <div className="container-page">
          <SectionHeading
            eyebrow="Worldwide service"
            text="One quote flow for international cargo from the UK to destinations across Asia, the Middle East, Europe, Africa, North America and beyond."
            title="Air, sea, road and door-to-door freight support worldwide"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {worldwideServices.map((service) => {
              const Icon = service.icon;
              return (
                <ScrollReveal className="h-full" key={service.title}>
                  <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-card transition hover:border-ocean/40 hover:-translate-y-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-ocean">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-black text-navy">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-10 rounded-lg bg-navy p-6 text-white shadow-glow">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Globe2 aria-hidden="true" className="h-9 w-9 text-aqua" />
                <h3 className="mt-4 text-2xl font-black">Worldwide coverage from one UK quote request</h3>
              </div>
              <p className="text-sm leading-7 text-blue-100">
                Share the destination country, city, cargo type, weight and preferred service. We will review the practical options for your shipment, whether it is personal cargo, household goods, excess baggage, business stock or commercial freight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Services"
            text="Choose the service type that fits your deadline, cargo size and destination requirements."
            title="Air cargo, sea freight and door-to-door cargo support"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ScrollReveal className="h-full" key={service.slug}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <IndustryGrid />

      <HowItWorks />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase text-aqua">Fast quote preview</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Get a clear email quote without a long phone call first</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Submit your route, cargo details, preferred service and collection requirements. The owner receives the enquiry instantly through the backend alert flow, then responds to the customer by email.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton icon={Ship} to="/get-quote">Start Quote</CTAButton>
              <CTAButton icon={ArrowRight} to="/contact" variant="ghost">Ask a Question</CTAButton>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-card">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Timer, text: "Prompt quote review" },
                  { icon: MailCheck, text: "Quote sent by email" },
                  { icon: Truck, text: "Collection reviewed" },
                  { icon: ShieldCheck, text: "Privacy reassurance" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="rounded-md bg-white p-5" key={item.text}>
                      <Icon aria-hidden="true" className="h-6 w-6 text-ocean" />
                      <p className="mt-4 text-sm font-black text-navy">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <Link className="focus-ring mt-6 flex items-center justify-between rounded-md bg-navy px-5 py-4 text-sm font-black text-white" to="/get-quote">
                Open the full quote form
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why choose us"
            text="A practical UK cargo service for customers who need straightforward advice, clear pricing and responsive quote handling."
            title="Reliable support for personal and commercial cargo"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={reason}>
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
                <p className="text-sm font-bold leading-6 text-navy">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQs"
            text="Quick answers before you send your quote request."
            title="Common cargo quote questions"
          />
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
