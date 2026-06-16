import { MessageCircle, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappHref } from "../lib/company";

export function MobileFloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(6,26,51,0.12)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ocean px-4 py-3 text-sm font-black text-white" to="/get-quote">
          <Ship aria-hidden="true" className="h-4 w-4" />
          Get Quote
        </Link>
        <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-aqua px-4 py-3 text-sm font-black text-white" href={whatsappHref}>
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
