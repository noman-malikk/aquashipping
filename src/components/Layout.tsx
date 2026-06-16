import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { MobileFloatingCTA } from "./MobileFloatingCTA";
import { Navbar } from "./Navbar";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white pb-20 text-ink lg:pb-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
