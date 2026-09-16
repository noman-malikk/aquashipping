import { Link } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../components/ContactSection";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import type { Article } from "../data/articles";

export function ArticlePage({ article }: { article?: Article }) {
  if (!article) {
    return <NotFoundPage />;
  }

  const path = `/guides/${article.slug}`;
  const breadcrumbs = [{ label: "Guides", href: "/guides" }, { label: article.title }];

  return (
    <>
      <SEOHead article breadcrumbs={breadcrumbs} description={article.description} path={path} title={`${article.title} | Aqua Shipping`} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero eyebrow={article.readTime} text={article.description} title={article.title} />
      <article className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <div className="grid gap-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black text-navy">{section.heading}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
          <nav aria-label="Related shipping services" className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-black text-navy">Explore shipping options for your cargo</h2>
            <ul className="mt-4 grid gap-3 text-ocean sm:grid-cols-2">
              <li><Link className="focus-ring font-bold underline" to="/air-cargo-services-uk">Air freight from the UK</Link></li>
              <li><Link className="focus-ring font-bold underline" to="/sea-freight-services-uk">Sea freight and container shipping</Link></li>
              <li><Link className="focus-ring font-bold underline" to="/door-to-door-cargo-service">Door-to-door cargo service</Link></li>
              <li><Link className="focus-ring font-bold underline" to="/get-quote">Request a shipping quote</Link></li>
            </ul>
          </nav>
        </div>
      </article>
      <ContactSection />
    </>
  );
}
