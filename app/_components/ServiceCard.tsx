import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Service } from "../_lib/services";
import { IconTruck, IconDocument, IconCheck } from "./icons";

const checklistIcons = [IconTruck, IconDocument, IconCheck];

type ServiceCardProps = {
  service: Service;
  image: StaticImageData;
  index: number;
  featured?: boolean;
};

export function ServiceCard({ service, image, index, featured = false }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group relative h-[420px] w-full overflow-hidden rounded-[2rem] sm:h-[480px] ${featured ? "lg:col-span-2" : ""}`}
    >
      <Image
        src={image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
      />
      <div
        className={
          featured
            ? "absolute inset-0 bg-gradient-to-r from-black from-0% via-black/75 via-45% to-transparent to-80%"
            : "absolute inset-0 bg-gradient-to-b from-black/85 via-black/10 to-black/80"
        }
      />

      {featured ? (
        <div className="absolute inset-0 flex max-w-sm flex-col justify-center gap-4 p-8">
          <span className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
            {number}
            <span className="h-px w-6 bg-brand-light" />
          </span>
          <h3 className="text-2xl leading-tight font-bold text-white sm:text-3xl">{service.title}</h3>
          <p className="text-sm text-white/70">{service.summary}</p>
          <ul className="flex flex-col gap-2">
            {service.advantages.map((advantage, advantageIndex) => {
              const Icon = checklistIcons[advantageIndex % checklistIcons.length];
              return (
                <li key={advantage} className="flex items-center gap-2 text-sm text-white/90">
                  <Icon className="h-4 w-4 flex-shrink-0 text-brand-light" />
                  {advantage}
                </li>
              );
            })}
          </ul>
          <Link
            href={`/servicii#${service.slug}`}
            className="mt-2 flex w-fit items-center gap-3 rounded-full bg-brand-light py-2 pr-6 pl-2 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-brand-light">
              →
            </span>
            Descoperă serviciul
          </Link>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
              {number}
              <span className="h-px w-6 bg-brand-light" />
            </span>
            <h3 className="text-xl leading-tight font-bold text-white">{service.title}</h3>
            <p className="text-sm text-white/70">{service.summary}</p>
          </div>
          <Link
            href={`/servicii#${service.slug}`}
            className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Descoperă serviciul
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
