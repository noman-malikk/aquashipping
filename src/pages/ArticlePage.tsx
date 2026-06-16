import { Navigate } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../components/ContactSection";
import { PageHero } from "../components/PageHero";
import { SEOHead } from "../components/SEOHead";
import type { Article } from "../data/articles";

export function ArticlePage({ article }: { article?: Article }) {
  if (!article) {
    return <Navigate replace to="/guides" />;
  }

  const path = `/guides/${article.slug}`;
  const breadcrumbs = [{ label: "Guides", href: "/guides" }, { label: article.title }];

  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} description={article.description} path={path} title={`${article.title} | Aqua Shipping`} />
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
        </div>
      </article>
      <ContactSection />
    </>
  );
}
