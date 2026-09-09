import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Service } from "../_lib/services";

type ServiceCardProps = {
  service: Service;
  image: StaticImageData;
  unit: string;
};

export function ServiceCard({ service, image, unit }: ServiceCardProps) {
  return (
    <div className="group relative h-[420px] w-full overflow-hidden rounded-[1.75rem] sm:h-[480px]">
      <Image
        src={image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(min-width: 1024px) 40vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

      <span className="absolute top-4 left-4 rounded-md border border-white/20 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-widest text-brand-light backdrop-blur-sm">
        UNIT—{unit}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <h3 className="text-lg leading-tight font-bold text-white sm:text-xl">{service.title}</h3>
        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="flex flex-col gap-4 overflow-hidden">
            <p className="text-sm text-white/80">{service.summary}</p>
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
      </div>
    </div>
  );
}
