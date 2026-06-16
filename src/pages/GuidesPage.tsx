import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import { articles } from "../data/articles";
import { seo } from "../data/seo";

const breadcrumbs = [{ label: "Guides" }];

export function GuidesPage() {
  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} description={seo.guides.description} path={seo.guides.path} title={seo.guides.title} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Guides"
        text="Content-ready templates for cargo costs, air vs sea shipping, customs documents and route-specific advice."
        title="Shipping Guides"
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm" key={article.slug}>
              <p className="text-sm font-bold uppercase text-aqua">{article.readTime}</p>
              <h2 className="mt-3 text-2xl font-black text-navy">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
              <Link className="focus-ring mt-6 inline-flex items-center gap-2 rounded text-sm font-black text-ocean" to={`/guides/${article.slug}`}>
                Read guide
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
