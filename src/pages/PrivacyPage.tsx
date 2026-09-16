import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { company } from "../lib/company";
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
              "The quote form collects your name, contact number, collection and destination countries and cities, any postcodes you provide, and the shipment details you enter. The form does not ask for your email address or file uploads.",
          },
          {
            title: "How we use information",
            body:
              "Your details are used to prepare and respond to your shipping quote, arrange collection where requested, answer customer service questions and keep enquiry records.",
          },
          {
            title: "Sending your enquiry",
            body:
              `We use FormSubmit to process quotation forms and deliver the information you provide to ${company.email}. Your form submission is sent to FormSubmit for this purpose. If you contact us through WhatsApp or your email provider, those services also handle the information you send.`,
          },
          {
            title: "Retention and contact",
            body:
              `For questions about your enquiry or to request access, correction or deletion of your information, contact ${company.legalName} at ${company.email}, call ${company.phone}, or write to ${company.address}. Enquiry records are kept only as long as needed for customer service, operational records and applicable obligations.`,
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
