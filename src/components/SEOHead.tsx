import { Helmet } from "react-helmet-async";
import type { FAQ } from "../data/faqs";
import { company } from "../lib/company";
import type { BreadcrumbItem } from "./Breadcrumbs";

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  faqs?: FAQ[];
  breadcrumbs?: BreadcrumbItem[];
  serviceName?: string;
};

export function SEOHead({ title, description, path, image, faqs = [], breadcrumbs = [], serviceName }: SEOHeadProps) {
  const canonical = `${company.siteUrl}${path === "/" ? "" : path}`;
  const imageUrl = image ? `${company.siteUrl}${image}` : `${company.siteUrl}/assets/og-image.jpg`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      url: company.siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phone,
        email: company.email,
        contactType: "customer service",
        areaServed: "GB",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: company.name,
      url: company.siteUrl,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
        addressLocality: company.addressLocality,
      },
    },
    serviceName
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          provider: {
            "@type": "Organization",
            name: company.name,
          },
          areaServed: "United Kingdom",
          serviceType: "International cargo and shipping quote service",
        }
      : null,
    faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null,
    breadcrumbs.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
            ...breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              position: index + 2,
              name: item.label,
              item: item.href ? `${company.siteUrl}${item.href}` : canonical,
            })),
          ],
        }
      : null,
  ].filter(Boolean);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
