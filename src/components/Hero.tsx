import { MessageCircle, Phone, Ship } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/aqua-logistics-hero.jpg";
import { phoneHref, whatsappHref } from "../lib/company";
import { AnimatedBackground } from "./AnimatedBackground";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative isolate min-h-[76svh] overflow-hidden bg-navy text-white">
      <img
        alt="International cargo containers, air freight and sea freight logistics hub"
        className="absolute inset-0 h-full w-full object-cover"
        src={heroImage}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/24" />
      <AnimatedBackground />
      <div className="container-page relative z-10 flex min-h-[76svh] items-center py-16">
        <div className="max-w-3xl">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl"
            initial={false}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Cargo Shipping from the UK to Worldwide Destinations
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-xl"
            initial={false}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Request air freight, sea freight and door-to-door shipping quotes for parcels, household goods and commercial cargo from the UK. We review worldwide routes, including Pakistan, India, Dubai and the UAE, and confirm availability for your shipment.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={false}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            <CTAButton icon={Ship} to="/get-quote" variant="secondary">
              Get Shipping Quote
            </CTAButton>
            <CTAButton href={phoneHref} icon={Phone} variant="light">
              Call Now
            </CTAButton>
            <CTAButton href={whatsappHref} icon={MessageCircle} variant="light">
              WhatsApp Us
            </CTAButton>
          </motion.div>
        </div>
      </div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        className="absolute bottom-10 right-8 hidden rounded-lg border border-white/20 bg-white/12 p-5 text-white shadow-glow backdrop-blur lg:block"
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-bold uppercase text-aqua">International cargo</p>
        <p className="mt-2 text-2xl font-black">UK to worldwide</p>
        <p className="mt-1 text-sm text-blue-50">Air, sea and door-to-door cargo</p>
      </motion.div>
    </section>
  );
}
