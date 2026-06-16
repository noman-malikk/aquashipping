import { Breadcrumbs } from "../components/Breadcrumbs";
import { FAQAccordion } from "../components/FAQAccordion";
import { PageHero } from "../components/PageHero";
import { QuoteForm } from "../components/QuoteForm";
import { SEOHead } from "../components/SEOHead";
import { SectionHeading } from "../components/SectionHeading";
import { TrustBadges } from "../components/TrustBadges";
import { quoteFaqs } from "../data/faqs";
import { seo } from "../data/seo";

const breadcrumbs = [{ label: "Get Quote" }];

export function GetQuotePage() {
  return (
    <>
      <SEOHead
        breadcrumbs={breadcrumbs}
        description={seo.quote.description}
        faqs={quoteFaqs}
        path={seo.quote.path}
        serviceName="Cargo shipping quote service"
        title={seo.quote.title}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Get a cargo quote"
        showCta={false}
        text="Send us the key details for parcels, boxes, household goods or commercial cargo. The team reviews your request and responds by email, usually within 30 minutes during business hours."
        title="Get a Cargo Shipping Quote"
      />
      <TrustBadges />
      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <QuoteForm />
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black text-navy">Before you submit</h2>
            <ul className="mt-5 grid gap-4 text-sm leading-7 text-slate-600">
              <li>Include the collection postcode and destination city.</li>
              <li>Estimate the weight as closely as you can.</li>
              <li>Tell us if you prefer air cargo, sea cargo or are not sure.</li>
              <li>Add notes about fragile, commercial or time-sensitive cargo.</li>
            </ul>
            <p className="mt-6 rounded-md bg-white px-4 py-3 text-sm font-semibold text-navy">
              Your details are only used to prepare your shipping quote.
            </p>
          </aside>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Quote FAQs" title="Helpful answers before you send" />
          <FAQAccordion faqs={quoteFaqs} />
        </div>
      </section>
    </>
  );
}
