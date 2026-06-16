import { trustItems } from "../data/services";

export function TrustBadges() {
  return (
    <section className="bg-white py-8">
      <div className="container-page">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="flex min-h-20 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
                key={item.label}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-ocean">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-5 text-navy">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
