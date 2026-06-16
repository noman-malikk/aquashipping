import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Service } from "../data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.article
      className="group h-full rounded-lg border border-slate-200 bg-white p-6 shadow-card transition hover:border-aqua/50"
      whileHover={{ y: -6 }}
    >
      <Link className="focus-ring flex h-full flex-col rounded" to={service.path}>
        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-aqua">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-xl font-black text-navy">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.cardText}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ocean">
          Explore service
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </Link>
    </motion.article>
  );
}
