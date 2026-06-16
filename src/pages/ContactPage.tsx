import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { company, phoneHref, whatsappHref } from "../lib/company";
import { seo } from "../data/seo";

const breadcrumbs = [{ label: "Contact" }];

export function ContactPage() {
  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} description={seo.contact.description} path={seo.contact.path} title={seo.contact.title} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Contact"
        text="Speak to the team about shipping to Pakistan from UK, cargo to India from UK, shipping to Dubai from UK, cargo to UAE from UK, air cargo, sea freight and door-to-door cargo service."
        title="Contact Aqua Shipping"
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <Phone aria-hidden="true" className="h-8 w-8 text-ocean" />
            <h2 className="mt-5 text-xl font-black text-navy">Call</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Call for urgent cargo quote questions and service availability.</p>
            <div className="mt-6">
              <CTAButton href={phoneHref} variant="ghost">{company.phone}</CTAButton>
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <MessageCircle aria-hidden="true" className="h-8 w-8 text-aqua" />
            <h2 className="mt-5 text-xl font-black text-navy">WhatsApp</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Send shipment notes, item photos and destination details by WhatsApp.</p>
            <div className="mt-6">
              <CTAButton href={whatsappHref} variant="ghost">WhatsApp Us</CTAButton>
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <Mail aria-hidden="true" className="h-8 w-8 text-ember" />
            <h2 className="mt-5 text-xl font-black text-navy">Email</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Email quote support for personal and commercial cargo enquiries.</p>
            <div className="mt-6">
              <CTAButton href={`mailto:${company.email}`} variant="ghost">Email Team</CTAButton>
            </div>
          </article>
        </div>
        <div className="container-page mt-10">
          <div className="rounded-lg bg-navy p-8 text-white">
            <MapPin aria-hidden="true" className="h-8 w-8 text-aqua" />
            <h2 className="mt-4 text-2xl font-black">UK-based cargo quote support</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-blue-100">
              Share your collection postcode, destination city, cargo type, weight and preferred service. We will review air cargo, sea cargo and door-to-door options where available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
