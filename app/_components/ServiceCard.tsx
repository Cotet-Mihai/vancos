import Link from "next/link";
import type { Service } from "../_lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
      <p className="text-sm leading-6 text-ink/70">{service.summary}</p>
      <Link
        href={`/servicii#${service.slug}`}
        className="mt-auto text-sm font-medium text-brand hover:text-brand-light"
      >
        Detalii →
      </Link>
    </div>
  );
}
