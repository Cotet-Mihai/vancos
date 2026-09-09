import Image, { type StaticImageData } from "next/image";
import type { Metadata } from "next";
import { services } from "../_lib/services";
import imgConstructii from "../../public/images/servicii-constructii.jpg";
import imgGospodarii from "../../public/images/servicii-gospodarii.jpg";
import imgReciclabile from "../../public/images/servicii-reciclabile.jpg";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Degajare deșeuri din construcții și demolări, preluare deșeuri din gospodării și colectare de deșeuri reciclabile în București.",
};

const images: Record<string, StaticImageData> = {
  "constructii-demolari": imgConstructii,
  gospodarii: imgGospodarii,
  reciclabile: imgReciclabile,
};

export default function ServiciiPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pt-28 pb-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-paper">Serviciile noastre</h1>
        <span className="h-[3px] w-12 rounded-full bg-brand" />
        <p className="max-w-2xl text-paper/70">
          De la degajarea molozului rezultat din demolări, până la colectarea deșeurilor reciclabile, adaptăm fiecare
          intervenție la nevoile tale.
        </p>
      </div>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`flex flex-col gap-8 scroll-mt-24 sm:flex-row sm:items-center ${
            index % 2 === 1 ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className="group relative h-64 w-full flex-1 overflow-hidden rounded-[2rem] sm:h-80">
            <Image
              src={images[service.slug]}
              alt={service.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-2xl font-bold text-paper">{service.title}</h2>
            <p className="text-paper/70">{service.description}</p>
            <ul className="flex flex-col gap-2">
              {service.advantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-2 text-sm text-paper/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  {advantage}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
