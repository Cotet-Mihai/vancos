import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Service } from "../_lib/services";

type ServiceCardProps = {
  service: Service;
  image: StaticImageData;
};

/**
 * Textul pornește odată cu lățirea cardului, nu după ea.
 *
 * Ca să nu se rearanjeze în timpul mișcării, blocul de conținut are pe desktop o
 * lățime fixă, ancorată la stânga, în loc să urmeze marginile cardului. Altfel
 * fiecare cadru al animației ar reașeza rândurile: titlul ar sări de la două
 * rânduri la unul, iar rezumatul s-ar rupe altfel de fiecare dată. Cu lățimea
 * fixată, textul se așază o singură dată și doar alunecă.
 *
 * Alunecarea vine din `.card-reveal`, în `globals.css`: e animație, nu
 * tranziție, ca la ieșire textul să nu mai parcurgă drumul înapoi spre dreapta.
 */

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

      {/* Pe desktop nu se vede niciun text până la hover, deci vălul de jos se
          retrage odată cu el — altfel ar rămâne o umbră grea peste nimic. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 via-40% to-transparent to-70% transition-opacity duration-500 lg:opacity-30 lg:group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:right-auto lg:w-[24rem]">
        {/* Deschiderea la hover e o interactiune de desktop: pe touch nu se
            declanseaza niciodata, deci sub `lg` blocul sta deschis. Altfel, pe
            telefon, cardul nu duce nicaieri. */}
        <div className="card-reveal grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
          <div className="flex min-h-0 flex-col gap-2 overflow-hidden sm:gap-3 lg:gap-3">
            <h3 className="line-clamp-2 min-h-[2.5rem] text-center text-sm leading-tight font-bold text-white sm:min-h-[2.75rem] lg:line-clamp-none lg:min-h-0 lg:text-left lg:text-base">
              {service.title}
            </h3>
            <p className="hidden text-white/80 sm:block sm:text-sm">{service.summary}</p>
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
