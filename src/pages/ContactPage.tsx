import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { company, mapHref, phoneHref, whatsappHref } from "../lib/company";
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
              <CTAButton className="max-w-full break-all [&>span]:min-w-0" href={`mailto:${company.email}`} variant="ghost">{company.email}</CTAButton>
            </div>
          </article>
        </div>
        <div className="container-page mt-10">
          <h2 className="text-2xl font-black text-navy">Contact our team members</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">You can also contact Faizan or Noman directly for help with your shipment.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {company.teamMembers.map((member) => (
              <article key={member.email} className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-navy">{member.name}</h3>
                <a className="focus-ring mt-3 inline-block break-all rounded font-semibold text-ocean underline" href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="container-page mt-10">
          <div className="rounded-lg bg-navy p-8 text-white">
            <MapPin aria-hidden="true" className="h-8 w-8 text-aqua" />
            <h2 className="mt-4 text-2xl font-black">Our office in Hounslow, London</h2>
            <address className="mt-4 not-italic leading-8 text-blue-100">
              <strong className="block text-white">{company.legalName}</strong>
              {company.streetAddress}<br />{company.addressLocality}, {company.addressRegion}<br />{company.postalCode}
            </address>
            <a className="focus-ring mt-4 inline-block rounded font-bold text-aqua underline" href={mapHref}>View office location on Google Maps</a>
            <p className="mt-3 max-w-3xl text-base leading-8 text-blue-100">
              Share your collection and destination country, city and postcode, along with a description of your shipment. We will review air cargo, sea cargo and door-to-door options where available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
