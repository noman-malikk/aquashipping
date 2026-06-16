import { MessageCircle, Ship } from "lucide-react";
import heroImage from "../assets/aqua-logistics-hero.jpg";
import { whatsappHref } from "../lib/company";
import { CTAButton } from "./CTAButton";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text: string;
  showCta?: boolean;
};

export function PageHero({ eyebrow, title, text, showCta = true }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-24">
      <img
        alt="Cargo aircraft, containers and shipping logistics"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        src={heroImage}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/65" />
      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold uppercase text-aqua">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-8 text-blue-50 sm:text-lg">{text}</p>
          {showCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton icon={Ship} to="/get-quote" variant="secondary">
                Get Shipping Quote
              </CTAButton>
              <CTAButton href={whatsappHref} icon={MessageCircle} variant="light">
                WhatsApp Us
              </CTAButton>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
