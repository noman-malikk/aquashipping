import { Compass, Ship } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { SEOHead } from "../components/SEOHead";

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        description="The page you requested could not be found. Return to Aqua Shipping or request a cargo quote."
        path="/404"
        title="Page Not Found | Aqua Shipping"
      />
      <section className="bg-navy py-24 text-white">
        <div className="container-page text-center">
          <Compass aria-hidden="true" className="mx-auto h-16 w-16 text-aqua" />
          <h1 className="mt-6 text-5xl font-black">404</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            The route you opened is not available. You can head back home or request a cargo shipping quote.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton icon={Ship} to="/get-quote" variant="secondary">Get Quote</CTAButton>
            <CTAButton to="/" variant="light">Back Home</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
