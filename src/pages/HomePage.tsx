import { ArrowRight, CheckCircle2, MailCheck, ShieldCheck, Ship, Timer, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { DestinationCard } from "../components/DestinationCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { Testimonials } from "../components/Testimonials";
import { TrustBadges } from "../components/TrustBadges";
import { ContactSection } from "../components/ContactSection";
import { CTAButton } from "../components/CTAButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { destinations } from "../data/destinations";
import { homeFaqs } from "../data/faqs";
import { seo } from "../data/seo";
import { services } from "../data/services";

const reasons = [
  "Fast response within 30 minutes",
  "UK-based service",
  "Asian and Middle East destination specialists",
  "Air and sea options",
  "Door-to-door support",
  "Clear pricing",
  "Professional customer support",
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

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Popular destinations"
            text="Specialist quote support for parcels, boxes, household goods and commercial cargo across high-demand routes."
            title="Shipping from the UK to Pakistan, India, Dubai, UAE and beyond"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <ScrollReveal className="h-full" key={destination.slug}>
                <DestinationCard destination={destination} />
              </ScrollReveal>
            ))}
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
                  { icon: Timer, text: "30 minute response promise" },
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
