import { Mail, MessageCircle, Phone, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { destinationLinks, serviceLinks } from "../data/navLinks";
import { articles } from "../data/articles";
import { company, phoneHref, whatsappHref } from "../lib/company";

export function Footer() {
  return (
    <footer className="bg-[#061325] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link className="focus-ring inline-flex items-center gap-3 rounded" to="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ocean text-white">
              <Ship aria-hidden="true" className="h-6 w-6" />
            </span>
            <span className="text-lg font-black">{company.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
            UK-based cargo quote support for Pakistan, India, Dubai, UAE, Asia and Middle Eastern destinations.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-blue-50">
            <a className="focus-ring inline-flex items-center gap-2 rounded hover:text-aqua" href={phoneHref}>
              <Phone aria-hidden="true" className="h-4 w-4" />
              {company.phone}
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded hover:text-aqua" href={whatsappHref}>
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded hover:text-aqua" href={`mailto:${company.email}`}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              {company.email}
            </a>
          </div>
        </div>

        <FooterColumn title="Destinations" links={destinationLinks} />
        <FooterColumn title="Services" links={serviceLinks} />
        <div>
          <h2 className="text-sm font-black uppercase text-aqua">Guides</h2>
          <ul className="mt-4 grid gap-3">
            {articles.slice(0, 3).map((article) => (
              <li key={article.slug}>
                <Link className="focus-ring rounded text-sm text-blue-50 hover:text-aqua" to={`/guides/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="focus-ring rounded hover:text-aqua" to="/privacy-policy">Privacy Policy</Link>
            <Link className="focus-ring rounded hover:text-aqua" to="/terms-and-conditions">Terms & Conditions</Link>
            <Link className="focus-ring rounded hover:text-aqua" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase text-aqua">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="focus-ring rounded text-sm text-blue-50 hover:text-aqua" to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
