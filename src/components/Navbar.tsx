import { Menu, MessageCircle, Phone, Ship, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavLinks } from "../data/navLinks";
import { company, phoneHref, whatsappHref } from "../lib/company";
import { CTAButton } from "./CTAButton";

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `rounded px-2 py-2 text-sm font-bold transition focus-ring ${
    isActive ? "text-ocean" : "text-slate-700 hover:text-ocean"
  }`;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link className="focus-ring flex items-center gap-3 rounded" to="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-white">
            <Ship aria-hidden="true" className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-lg font-black leading-5 text-navy">{company.name}</span>
            <span className="block text-xs font-bold uppercase text-aqua">Shipping line agent UK</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 lg:flex">
          {mainNavLinks.map((link) => (
            <NavLink className={linkClasses} key={link.href} to={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CTAButton href={phoneHref} icon={Phone} variant="ghost">
            Call
          </CTAButton>
          <CTAButton to="/get-quote">Get Quote</CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a className="focus-ring rounded-md bg-blue-50 p-3 text-ocean" href={phoneHref} aria-label="Call now">
            <Phone aria-hidden="true" className="h-5 w-5" />
          </a>
          <a className="focus-ring rounded-md bg-teal-50 p-3 text-aqua" href={whatsappHref} aria-label="WhatsApp us">
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
          </a>
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="focus-ring rounded-md bg-navy p-3 text-white"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            animate={{ height: "auto", opacity: 1 }}
            aria-label="Mobile navigation"
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
          >
            <div className="container-page grid gap-2 py-4">
              {mainNavLinks.map((link) => (
                <NavLink
                  className="focus-ring rounded-md px-3 py-3 text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-ocean"
                  key={link.href}
                  onClick={() => setOpen(false)}
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              ))}
              <CTAButton className="mt-2 w-full" to="/get-quote">
                Get Shipping Quote
              </CTAButton>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
