import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import despreImage from "../../public/images/despre-noi.jpg";
import { services } from "../_lib/services";
import { firma } from "../_lib/legal";
import { Reveal } from "../_components/Reveal";
import { FinalCta } from "../_components/FinalCta";
import { CoverageMap } from "../_components/CoverageMap";
import { IconClock, IconTruck, IconContainer, IconRecycle, IconTorch, IconBolt } from "../_components/icons";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Vancos degajează deșeuri din construcții, demolări și gospodării și colectează deșeuri reciclabile în toată zona București.",
};

const stats = [
  { icon: IconClock, value: `Din ${firma.infiintata ?? "?"}`, label: "De când deservim Bucureștiul", short: "Vechime" },
  { icon: IconTruck, value: "3,5 t", label: "Autovehicule cu acces în tot orașul", short: "Autovehicule" },
  { icon: IconContainer, value: "4 tone", label: "Capacitate pe container", short: "Pe container" },
  { icon: IconRecycle, value: "500+", label: "Lucrări finalizate", short: "Lucrări" },
];

const principles = [
  {
    icon: IconBolt,
    tag: "Intervenție rapidă",
    title: "Răspundem rapid",
    description: "Intervenim de obicei în 24-48h de la solicitare, oriunde în București.",
  },
  {
    icon: IconContainer,
    tag: "Închiriere containere",
    title: "Ne adaptăm volumului",
    description: "Alegem containerul și numărul de curse după ce ai efectiv de transportat.",
  },
  {
    icon: IconTruck,
    tag: "Transport deșeuri București",
    title: "Ajungem oriunde",
    description: "Mașinile de 3,5 tone circulă fără autorizație în orice zonă a orașului.",
  },
  {
    icon: IconTorch,
    tag: "Manoperă și debitare",
    title: "Venim pregătiți",
    description: "Aducem oameni pentru încărcare și debităm cu flex sau autogen la fața locului.",
  },
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="dot-grid absolute inset-0"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 pt-28 pb-10 sm:gap-10 sm:pt-36 sm:pb-16">
          <h1
            className="hero-rise max-w-3xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl"
            style={{ "--rise-delay": "0.3s" } as CSSProperties}
          >
            Firma din spatele <span className="text-brand-gradient">containerelor.</span>
          </h1>

          <p
            className="hero-rise max-w-xl leading-relaxed text-paper/70"
            style={{ "--rise-delay": "0.45s" } as CSSProperties}
          >
            Suntem o firmă din București specializată în degajarea deșeurilor din construcții, demolări și gospodării,
            plus colectarea diversificată a deșeurilor reciclabile.
          </p>

          <div
            className="hero-rise relative min-h-56 w-full flex-1 overflow-hidden rounded-[2rem] border border-white/10"
            style={{ "--rise-delay": "0.6s" } as CSSProperties}
          >
            <Image
              src={despreImage}
              alt="Vedere de sus peste o hală de reciclare, cu zeci de containere pline cu materiale sortate"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 76rem, 100vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/40 backdrop-blur-sm">
              <dl className="grid grid-cols-4 divide-x divide-white/10 px-3 py-4 sm:px-5 sm:py-6">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="flex flex-col items-center gap-1 px-1 text-center sm:flex-row sm:gap-3 sm:px-5 sm:text-left"
                  >
                    <stat.icon className="h-5 w-5 flex-shrink-0 text-brand-light sm:h-8 sm:w-8" />
                    <div className="flex min-w-0 flex-col">
                      <dt className="text-xs font-bold text-paper sm:text-lg">{stat.value}</dt>
                      <dd className="text-[9px] leading-tight text-white/55 sm:text-[11px]">
                        <span className="sm:hidden">{stat.short}</span>
                        <span className="hidden sm:inline">{stat.label}</span>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <section className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[22rem_1fr] lg:gap-20">
            <Reveal className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Cine suntem</span>
              <h2 className="text-3xl font-bold text-paper sm:text-4xl">
                O echipă mică, cu utilajul potrivit.
              </h2>
              <span className="h-[3px] w-12 rounded-full bg-brand" />
            </Reveal>

            <Reveal delay={120} className="flex flex-col gap-5 leading-relaxed text-paper/70">
              <p>
                Lucrăm cu mașini de 3,5 tone care circulă fără autorizație în orice zonă a orașului, ceea ce ne permite
                să intervenim rapid, indiferent de locație. Containerele merg până la 4 tone, iar numărul de curse îl
                stabilim după volumul real, nu după un pachet fix.
              </p>
              <p>
                Ne adaptăm la fiecare client: venim cu forță de muncă atunci când e nevoie de încărcare și debităm
                deșeurile voluminoase cu flex sau autogen direct la fața locului. Dacă ceva nu intră în container ca
                atare, îl tăiem acolo, nu te trimitem să cauți pe altcineva.
              </p>
              <p>
                Preluăm separat materialele reciclabile: fier, aluminiu, cupru, bronz, alamă, plumb, electronice
                și electrocasnice. Le trimitem mai departe spre reciclare.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="flex flex-col gap-10">
            <Reveal className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Ce facem</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </Reveal>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  className={index === 0 || index === services.length - 1 ? "col-span-2 sm:col-span-1" : ""}
                >
                  <Reveal delay={80 * index} className="h-full">
                    <Link
                      href={`/servicii#${service.slug}`}
                      className="group flex h-full flex-col justify-start rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none sm:p-6"
                    >
                      <span className="flex min-w-0 flex-1 flex-col gap-1.5 sm:gap-2">
                        <span className="text-sm font-semibold text-paper sm:text-base">{service.title}</span>
                        <span
                          className={`text-xs leading-relaxed text-paper/70 sm:text-sm ${
                            index === 0 || index === services.length - 1 ? "" : "hidden sm:inline"
                          }`}
                        >
                          {service.summary}
                        </span>
                      </span>
                      <span className="pt-3 text-xs font-bold text-brand-light sm:text-sm">
                        Detalii{" "}
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="flex flex-col gap-10">
            <Reveal className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Cum lucrăm</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.title}
                  delay={80 * index}
                  className={`h-full ${
                    index === principles.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  } ${index === 0 ? "row-span-2 sm:row-span-1" : ""}`}
                >
                  <div
                    className={`flex h-full flex-col gap-2 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none sm:items-start sm:justify-start sm:gap-3 sm:p-6 sm:text-left ${
                      index === 0 ? "items-center justify-center text-center" : ""
                    } ${index === 2 ? "items-end text-right" : ""}`}
                  >
                    <span className="font-mono text-[10px] leading-tight tracking-widest text-brand-light uppercase">
                      {principle.tag}
                    </span>
                    <principle.icon className="h-7 w-7 flex-shrink-0 text-brand-light sm:h-8 sm:w-8" />
                    <h3 className="text-sm font-semibold text-paper sm:text-base">{principle.title}</h3>
                    <p className="text-xs leading-relaxed text-paper/70 sm:text-sm">{principle.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CoverageMap />

      <FinalCta />
    </>
  );
}
