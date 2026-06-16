import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { seo } from "../data/seo";

const breadcrumbs = [{ label: "Terms & Conditions" }];

export function TermsPage() {
  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} description={seo.terms.description} path={seo.terms.path} title={seo.terms.title} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Legal"
        showCta={false}
        text="General terms for using this website and requesting cargo quote information."
        title="Terms & Conditions"
      />
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <div className="grid gap-6">
            {[
              {
                title: "Quote requests",
                body:
                  "Website quote requests are enquiries only. A booking is not confirmed until the team has reviewed the details, issued a quote and agreed next steps with the customer.",
              },
              {
                title: "Service availability",
                body:
                  "Air cargo, sea freight, door-to-door cargo, collection, packing and delivery options are subject to route availability, cargo type, destination rules and operational capacity.",
              },
              {
                title: "Customs documentation",
                body:
                  "Customs documentation support may be provided where applicable. Customs clearance, duties, taxes, inspections and restricted item decisions are subject to destination authorities and rules.",
              },
              {
                title: "Customer information",
                body:
                  "Customers are responsible for providing accurate cargo descriptions, weights, values, item counts, contact details and destination information.",
              },
            ].map((section) => (
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-6" key={section.title}>
                <h2 className="text-2xl font-black text-navy">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
