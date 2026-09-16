import { Helmet } from "react-helmet-async";
import type { FAQ } from "../data/faqs";
import { company } from "../lib/company";
import { assetUrl, siteUrl } from "../lib/urls";
import type { BreadcrumbItem } from "./Breadcrumbs";

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  faqs?: FAQ[];
  breadcrumbs?: BreadcrumbItem[];
  serviceName?: string;
  article?: boolean;
  noindex?: boolean;
};

export function SEOHead({ title, description, path, image, faqs = [], breadcrumbs = [], serviceName, article = false, noindex = false }: SEOHeadProps) {
  const canonical = siteUrl(path);
  const imageUrl = assetUrl(image || "/assets/og-image.jpg");
  const organizationId = `${siteUrl()}#organization`;
  const websiteId = `${siteUrl()}#website`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: company.name,
        url: siteUrl(),
        description: "UK cargo shipping quote support for worldwide air freight, sea freight and door-to-door shipments.",
        legalName: company.legalName,
        telephone: company.phone,
        logo: assetUrl("/favicon.svg"),
        address: {
          "@type": "PostalAddress",
          streetAddress: company.streetAddress,
          addressLocality: company.addressLocality,
          addressRegion: company.addressRegion,
          postalCode: company.postalCode,
          addressCountry: company.addressCountry,
        },
        email: company.email,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: company.name,
        url: siteUrl(),
        publisher: { "@id": organizationId },
        inLanguage: "en-GB",
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": websiteId },
        inLanguage: "en-GB",
      },
      ...(serviceName ? [{
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: serviceName,
        description,
        url: canonical,
        provider: { "@id": organizationId },
        serviceType: "International cargo and shipping quote service",
      }] : []),
      ...(article ? [{
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: title.replace(/ \| Aqua Shipping$/, ""),
        description,
        image: imageUrl,
        mainEntityOfPage: { "@id": `${canonical}#webpage` },
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        inLanguage: "en-GB",
      }] : []),
      ...(faqs.length ? [{
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }] : []),
      ...(breadcrumbs.length ? [{
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl() },
          ...breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.label,
            item: item.href ? siteUrl(item.href) : canonical,
          })),
        ],
      }] : []),
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      {!noindex && <link rel="canonical" href={canonical} />}
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />}
      {import.meta.env.VITE_BING_SITE_VERIFICATION && <meta name="msvalidate.01" content={import.meta.env.VITE_BING_SITE_VERIFICATION} />}
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Aqua Shipping international cargo, air and sea freight" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Aqua Shipping international cargo, air and sea freight" />
      {!noindex && <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>}
    </Helmet>
  );
}
