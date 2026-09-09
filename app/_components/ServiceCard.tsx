import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Service } from "../_lib/services";

type ServiceCardProps = {
  service: Service;
  image: StaticImageData;
};

export function ServiceCard({ service, image }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-surface p-4">
      <div className="group relative h-56 w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 px-2 pb-2">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl leading-tight font-bold text-paper">{service.title}</h3>
          <p className="text-sm text-paper/70">{service.summary}</p>
        </div>
        <Link
          href={`/servicii#${service.slug}`}
          className="flex w-fit items-center gap-3 rounded-full bg-brand-light py-2 pr-5 pl-2 text-sm font-bold text-ink transition-all duration-300 hover:scale-105"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-brand-light">
            →
          </span>
          Detalii
        </Link>
      </div>
    </div>
  );
}
