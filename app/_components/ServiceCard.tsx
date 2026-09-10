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
    <div className="group relative h-80 w-full overflow-hidden rounded-[1.75rem] sm:h-[420px] lg:h-[480px]">
      <Image
        src={image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(min-width: 1024px) 30vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

      <span className="absolute top-4 left-4 rounded-md border border-white/20 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-widest text-brand-light backdrop-blur-sm">
        UNIT—{unit}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-[2.25rem] text-xs leading-tight font-bold text-white transition-all duration-500 ease-out sm:min-h-[2.75rem] sm:text-sm lg:text-base">
          {service.title}
        </h3>
        {/* Deschiderea la hover e o interactiune de desktop: pe touch nu se
            declanseaza niciodata, deci sub `lg` rezumatul si butonul stau
            deschise. Altfel, pe telefon, cardul nu duce nicaieri. */}
        <div className="grid grid-rows-[1fr] opacity-100 [transition:grid-template-rows_500ms_ease-out,opacity_500ms_ease-out_150ms] lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
          <div className="flex flex-col gap-3 overflow-hidden sm:gap-4">
            <p className="line-clamp-2 text-xs text-white/80 sm:text-sm">{service.summary}</p>
            <Link
              href={`/servicii#${service.slug}`}
              className="flex w-fit items-center gap-2 rounded-full bg-brand-light py-1.5 pr-4 pl-1.5 text-xs font-bold text-ink transition-all duration-300 hover:scale-105 sm:gap-3 sm:py-2 sm:pr-5 sm:pl-2 sm:text-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-brand-light sm:h-7 sm:w-7">
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
