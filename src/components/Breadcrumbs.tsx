import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-5 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate-500">
        <li>
          <Link className="focus-ring inline-flex items-center rounded text-slate-600 hover:text-ocean" to="/">
            <Home aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item) => (
          <li className="inline-flex items-center gap-2" key={item.label}>
            <ChevronRight aria-hidden="true" className="h-4 w-4 text-slate-400" />
            {item.href ? (
              <Link className="focus-ring rounded hover:text-ocean" to={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
