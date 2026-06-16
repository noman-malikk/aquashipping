import { Mail, MessageCircle, Phone } from "lucide-react";
import { company, phoneHref, whatsappHref } from "../lib/company";
import { CTAButton } from "./CTAButton";

export function ContactSection() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-aqua">Quote support</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Need help choosing air, sea or door-to-door cargo?</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
            Share your shipment details and we will respond by email as soon as possible. Most enquiries are answered within 30 minutes during business hours.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <CTAButton href={phoneHref} icon={Phone} variant="light">
            {company.phone}
          </CTAButton>
          <CTAButton href={whatsappHref} icon={MessageCircle} variant="light">
            WhatsApp Us
          </CTAButton>
          <CTAButton href={`mailto:${company.email}`} icon={Mail} variant="light">
            Email Team
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
