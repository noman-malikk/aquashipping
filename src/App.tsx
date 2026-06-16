import { Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { articles } from "./data/articles";
import { destinations } from "./data/destinations";
import { services } from "./data/services";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ContactPage } from "./pages/ContactPage";
import { DestinationPage } from "./pages/DestinationPage";
import { GetQuotePage } from "./pages/GetQuotePage";
import { GuidesPage } from "./pages/GuidesPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ServicePage } from "./pages/ServicePage";
import { TermsPage } from "./pages/TermsPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomePage />} index />
        <Route element={<GetQuotePage />} path="get-quote" />
        {destinations.map((destination) => (
          <Route
            element={<DestinationPage destination={destination} />}
            key={destination.path}
            path={destination.path.replace(/^\//, "")}
          />
        ))}
        {services.map((service) => (
          <Route
            element={<ServicePage service={service} />}
            key={service.path}
            path={service.path.replace(/^\//, "")}
          />
        ))}
        <Route element={<AboutPage />} path="about" />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<PrivacyPage />} path="privacy-policy" />
        <Route element={<TermsPage />} path="terms-and-conditions" />
        <Route element={<GuidesPage />} path="guides" />
        <Route element={<ArticleRoute />} path="guides/:slug" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  );
}

function ArticleRoute() {
  const { slug } = useParams();
  return <ArticlePage article={articles.find((article) => article.slug === slug)} />;
}
