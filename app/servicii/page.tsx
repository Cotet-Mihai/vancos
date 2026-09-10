import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "../_lib/services";
import { Reveal } from "../_components/Reveal";
import { FinalCta } from "../_components/FinalCta";
import { IconCheck } from "../_components/icons";
import imgConstructii from "../../public/images/servicii-constructii.jpg";
import imgDemolari from "../../public/images/servicii-demolari.jpg";
import imgGospodarii from "../../public/images/servicii-gospodarii.jpg";
import imgReciclabile from "../../public/images/servicii-reciclabile.jpg";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Degajare deșeuri din construcții și demolări, preluare deșeuri din gospodării și colectare de deșeuri reciclabile în București.",
};

const images: Record<string, StaticImageData> = {
  constructii: imgConstructii,
  demolari: imgDemolari,
  gospodarii: imgGospodarii,
  reciclabile: imgReciclabile,
};

// Titlurile din services.ts sunt prea lungi pentru pastilele de navigare, iar
// scurtarea lor programatic ar tăia exact cuvântul care le distinge.
const shortLabels: Record<string, string> = {
  constructii: "Construcții",
  demolari: "Demolări",
  gospodarii: "Gospodării",
  reciclabile: "Reciclabile",
};

export default function ServiciiPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(62,155,92,0.3)_0%,rgba(62,155,92,0)_70%)] blur-2xl"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-36 pb-16">
          <span className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span
                aria-hidden="true"
                className="animate-coverage absolute inset-0 rounded-full border border-brand-light"
              />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-light shadow-[0_0_10px_rgba(62,155,92,0.9)]" />
            </span>
            Catalog — {services.length} servicii
          </span>

          <h1 className="max-w-3xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl">
            Servicii pentru <span className="text-brand-light">orice tip de deșeu.</span>
          </h1>

          <p className="max-w-xl leading-relaxed text-paper/70">
            De la degajarea molozului rezultat din demolări, până la colectarea deșeurilor reciclabile, adaptăm fiecare
            intervenție la nevoile tale.
          </p>

          <nav aria-label="Sari la un serviciu" className="flex flex-wrap gap-3 border-t border-white/10 pt-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2.5 pr-5 pl-3 text-sm font-semibold text-paper/80 transition-colors duration-200 hover:border-brand-light/50 hover:bg-white/[0.07] hover:text-paper motion-reduce:transition-none"
              >
                <span className="font-mono text-[10px] tracking-widest text-brand-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {shortLabels[service.slug]}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col px-6">
        {services.map((service, index) => {
          const unit = String(index + 1).padStart(2, "0");
          const reversed = index % 2 === 1;

          return (
            <section key={service.slug} id={service.slug} className="scroll-mt-28 border-b border-white/10 py-16 last:border-b-0 lg:py-24">
              <Reveal className="flex flex-col gap-8">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Serviciu {unit}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase">
                    {shortLabels[service.slug]}
                  </span>
                </div>

                <div
                  className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="group relative h-72 w-full overflow-hidden rounded-[2rem] border border-white/10 sm:h-96 lg:h-[28rem] lg:flex-1">
                    <Image
                      src={images[service.slug]}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20"
                    />
                    <span className="absolute top-4 left-4 rounded-md border border-white/20 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-widest text-brand-light backdrop-blur-sm">
                      UNIT—{unit}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-6 right-4 font-mono text-[7rem] leading-none font-bold text-white/10 select-none"
                    >
                      {unit}
                    </span>
                  </div>

                  <div className="flex flex-col gap-6 lg:flex-1">
                    <h2 className="text-3xl font-bold text-paper sm:text-4xl">{service.title}</h2>
                    <p className="leading-relaxed text-paper/70">{service.description}</p>

                    <ul className="flex flex-col gap-3">
                      {service.advantages.map((advantage) => (
                        <li
                          key={advantage}
                          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                            <IconCheck className="h-4 w-4" />
                          </span>
                          <span className="pt-1.5 text-sm text-paper/80">{advantage}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="group flex w-fit items-center gap-3 rounded-full border border-brand-light/60 py-2 pr-6 pl-2 text-sm font-bold text-brand-light transition-colors duration-300 hover:bg-brand-light/10 motion-reduce:transition-none"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-ink transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                        →
                      </span>
                      Cere ofertă pentru acest serviciu
                    </Link>
                  </div>
                </div>
              </Reveal>
            </section>
          );
        })}
      </div>

      <FinalCta />
    </>
  );
}
