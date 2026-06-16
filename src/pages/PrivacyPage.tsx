import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { seo } from "../data/seo";

const breadcrumbs = [{ label: "Privacy Policy" }];

export function PrivacyPage() {
  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} description={seo.privacy.description} path={seo.privacy.path} title={seo.privacy.title} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Legal"
        showCta={false}
        text="How quote request information is used to respond to cargo and shipping enquiries."
        title="Privacy Policy"
      />
      <PolicyContent
        sections={[
          {
            title: "Information we collect",
            body:
              "When you submit a quote request, we collect contact details, collection and destination details, cargo information, message details and optional photo filenames.",
          },
          {
            title: "How we use information",
            body:
              "Your details are used to prepare and respond to your shipping quote, arrange collection where requested, answer customer service questions and keep enquiry records.",
          },
          {
            title: "Backend alerts",
            body:
              "Quote details may be sent to the business owner through secure serverless integrations such as Telegram alerts and email notifications. Private credentials are never stored in the frontend.",
          },
          {
            title: "Retention and contact",
            body:
              "Enquiry records are kept only as long as needed for customer service, operational records and legal obligations. Contact the team to ask about your data.",
          },
        ]}
      />
    </>
  );
}

function PolicyContent({ sections }: { sections: { title: string; body: string }[] }) {
  return (
    <section className="bg-white py-16">
      <div className="container-page max-w-4xl">
        <div className="grid gap-6">
          {sections.map((section) => (
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-6" key={section.title}>
              <h2 className="text-2xl font-black text-navy">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
