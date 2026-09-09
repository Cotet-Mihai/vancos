import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Service } from "../_lib/services";

type ServiceCardProps = {
  service: Service;
  image: StaticImageData;
  index: number;
};

export function ServiceCard({ service, image, index }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative h-[420px] w-full overflow-hidden rounded-[2rem] sm:h-[480px]">
      <Image
        src={image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/10 to-black/80" />

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
    </div>
  );
}
