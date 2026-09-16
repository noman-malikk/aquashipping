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
import { DestinationCard } from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { IndustryGrid } from "../components/IndustryGrid";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
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

      <section className="bg-white py-20" id="destinations">
        <div className="container-page">
          <SectionHeading
            eyebrow="Shipping destinations"
            title="Cargo shipping from the UK: popular overseas routes"
            text="Explore air cargo, sea freight and door-to-door options for your destination. For other worldwide routes, send your destination country and city so we can confirm availability."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page max-w-4xl">
          <h2 className="text-3xl font-black text-navy">How to compare international shipping quotes from the UK</h2>
          <p className="mt-5 leading-8 text-slate-600">
            The right freight service depends on your cargo size, delivery deadline and destination. <Link className="font-bold text-ocean underline" to="/air-cargo-services-uk">Air freight</Link> suits urgent or smaller shipments. <Link className="font-bold text-ocean underline" to="/sea-freight-services-uk">Sea freight</Link> offers LCL shared-container and FCL full-container options for larger loads. Ask which collection, handling and delivery charges are included when comparing quotes.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            For <Link className="font-bold text-ocean underline" to="/household-goods-shipping-overseas">shipping household goods overseas</Link>, list every box and any furniture that needs packing. For <Link className="font-bold text-ocean underline" to="/commercial-cargo-shipping">commercial cargo</Link>, include the goods description, number of pallets or cartons, packed dimensions and weight. These details help us review a suitable route and avoid assumptions about the load.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Start with your UK collection postcode, destination country and city, item list, packed weight and dimensions, and preferred shipping date. If you need <Link className="font-bold text-ocean underline" to="/door-to-door-cargo-service">door-to-door cargo shipping</Link>, include the delivery address and any access restrictions. We confirm the service scope and route availability before booking.
          </p>
          <Link className="focus-ring mt-6 inline-block font-bold text-ocean underline" to="/get-quote">Request your UK to worldwide shipping quote</Link>
          <p className="mt-4"><Link className="focus-ring font-bold text-ocean underline" to="/guides/international-shipping-from-uk-guide">Read our guide to planning an international shipment</Link></p>
        </div>
      </section>

      <IndustryGrid />

      <HowItWorks />

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase text-aqua">Fast quote preview</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Request a shipping quote in one simple form</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Share your name, contact number, collection and destination locations, and shipment details. Our team reviews your enquiry and contacts you to discuss the available shipping options.
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
                  { icon: MailCheck, text: "Personal quote follow-up" },
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
