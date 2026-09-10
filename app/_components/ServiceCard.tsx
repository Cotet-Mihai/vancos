import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Service } from "../_lib/services";

type ServiceCardProps = {
  service: Service;
  image: StaticImageData;
};

export function ServiceCard({ service, image }: ServiceCardProps) {
  return (
    <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] lg:aspect-auto lg:h-[480px]">
      <Image
        src={image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(min-width: 1024px) 30vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black from-15% via-black/60 via-55% to-black/10 transition-opacity duration-500 lg:from-black/90 lg:from-0% lg:via-black/30 lg:via-50% lg:group-hover:from-black/95" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-center text-sm leading-tight font-bold text-white transition-all duration-500 ease-out sm:min-h-[2.75rem] lg:text-base">
          {service.title}
        </h3>
        {/* Deschiderea la hover e o interactiune de desktop: pe touch nu se
            declanseaza niciodata, deci sub `lg` rezumatul si butonul stau
            deschise. Altfel, pe telefon, cardul nu duce nicaieri. */}
        <div className="grid grid-rows-[1fr] opacity-100 [transition:grid-template-rows_500ms_ease-out,opacity_500ms_ease-out_150ms] lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
          <div className="flex flex-col gap-3 overflow-hidden sm:gap-4">
            <p className="hidden text-white/80 sm:line-clamp-2 sm:text-sm">{service.summary}</p>
            <Link
              href={`/servicii#${service.slug}`}
              className="flex w-full items-center justify-center rounded-full border border-brand-light px-4 py-1.5 text-xs font-bold text-brand-light transition-colors duration-300 hover:bg-brand-light/10 sm:py-2 sm:text-sm lg:w-fit lg:px-5 motion-reduce:transition-none"
            >
              Detalii
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
