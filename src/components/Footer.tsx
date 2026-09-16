import { MapPin, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { destinationLinks, serviceLinks } from "../data/navLinks";
import { articles } from "../data/articles";
import { company, mapHref, phoneHref, whatsappHref } from "../lib/company";

export function Footer() {
  return (
    <footer className="bg-[#061325] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link className="focus-ring inline-flex items-center gap-3 rounded" to="/">
            <img aria-hidden="true" alt="" className="h-11 w-11 shrink-0" width={44} height={44} src={`${import.meta.env.BASE_URL}favicon.svg`} />
            <span className="text-lg font-black">{company.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
            UK to worldwide cargo shipping quotes for air freight, sea freight, household goods and commercial cargo, including Pakistan, India, Dubai and the UAE.
          </p>
          <address className="mt-5 text-sm not-italic leading-7 text-blue-100">
            <span className="block font-bold">{company.legalName}</span>
            <a className="focus-ring inline-flex items-start gap-2 rounded hover:text-aqua" href={mapHref}>
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{company.address}</span>
            </a>
          </address>
          <div className="mt-6 grid gap-3 text-sm text-blue-50">
            <a className="focus-ring inline-flex items-center gap-2 rounded hover:text-aqua" href={phoneHref}>
              <Phone aria-hidden="true" className="h-4 w-4" />
              {company.phone}
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded hover:text-aqua" href={whatsappHref}>
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
            <a className="focus-ring inline-flex min-w-0 items-center gap-2 break-all rounded hover:text-aqua" href={`mailto:${company.email}`}>
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
