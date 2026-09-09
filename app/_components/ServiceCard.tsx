import Link from "next/link";
import type { Service } from "../_lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col gap-3 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
      <p className="text-sm leading-6 text-ink/70">{service.summary}</p>
      <Link
        href={`/servicii#${service.slug}`}
        className="mt-auto flex items-center gap-3 text-xs font-bold tracking-widest text-brand uppercase"
      >
        Detalii
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand/30 bg-brand/5 transition-all duration-300 group-hover:bg-brand group-hover:text-white">
          →
        </span>
      </Link>
    </div>
  );
}
