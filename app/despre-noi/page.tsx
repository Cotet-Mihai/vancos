import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import despreImage from "../../public/images/despre-noi.jpg";
import { services } from "../_lib/services";
import { contact } from "../_lib/contact";
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
  { icon: IconClock, value: `Din ${firma.infiintata ?? "—"}`, label: "De când deservim Bucureștiul" },
  { icon: IconTruck, value: "3,5 t", label: "Autovehicule cu acces în tot orașul" },
  { icon: IconContainer, value: "4 tone", label: "Capacitate pe container" },
  { icon: IconRecycle, value: "500+", label: "Lucrări finalizate" },
];

const principles = [
  {
    icon: IconBolt,
    title: "Răspundem rapid",
    description: "Intervenim de obicei în 24-48h de la solicitare, oriunde în București.",
  },
  {
    icon: IconContainer,
    title: "Ne adaptăm volumului",
    description: "Alegem containerul și numărul de curse după ce ai efectiv de transportat.",
  },
  {
    icon: IconTruck,
    title: "Ajungem oriunde",
    description: "Mașinile de 3,5 tone circulă fără autorizație în orice zonă a orașului.",
  },
  {
    icon: IconTorch,
    title: "Venim pregătiți",
    description: "Aducem oameni pentru încărcare și debităm cu flex sau autogen la fața locului.",
  },
];

const identitate = [
  { eticheta: "Denumire", valoare: firma.denumire },
  { eticheta: "CUI", valoare: firma.cui },
  { eticheta: "Reg. Com.", valoare: firma.registruComert },
  { eticheta: "Sediu social", valoare: firma.sediuSocial },
];

export default function DespreNoiPage() {
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
          className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(62,155,92,0.3)_0%,rgba(62,155,92,0)_70%)] blur-2xl"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 pt-36 pb-16">
          <span className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span
                aria-hidden="true"
                className="animate-coverage absolute inset-0 rounded-full border border-brand-light"
              />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-light shadow-[0_0_10px_rgba(62,155,92,0.9)]" />
            </span>
            Despre noi · București
          </span>

          <h1 className="max-w-3xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl">
            Firma din spatele <span className="text-brand-light">containerelor.</span>
          </h1>

          <p className="max-w-xl leading-relaxed text-paper/70">
            Suntem o firmă din București specializată în degajarea deșeurilor din construcții, demolări și gospodării,
            plus colectarea diversificată a deșeurilor reciclabile.
          </p>

          <div className="relative h-72 w-full overflow-hidden rounded-[2rem] border border-white/10 sm:h-96 lg:h-[30rem]">
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
              <dl className="grid grid-cols-2 gap-y-6 px-5 py-6 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex items-center gap-3 sm:px-5">
                    <stat.icon className="h-8 w-8 flex-shrink-0 text-brand-light" />
                    <div className="flex min-w-0 flex-col">
                      <dt className="text-lg font-bold text-paper">{stat.value}</dt>
                      <dd className="text-[11px] leading-tight text-white/55">{stat.label}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <section className="border-b border-white/10 py-16 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-20">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Cine suntem</span>
              <h2 className="text-3xl font-bold text-paper sm:text-4xl">
                O echipă mică, cu utilajul potrivit.
              </h2>
              <span className="h-[3px] w-12 rounded-full bg-brand" />
            </div>

            <div className="flex flex-col gap-5 leading-relaxed text-paper/70">
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
                Materialele reciclabile — fier, aluminiu, cupru, bronz, alamă, plumb, electronice și electrocasnice —
                le preluăm separat și le trimitem mai departe spre reciclare.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="border-b border-white/10 py-16 lg:py-24">
          <Reveal className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Cum lucrăm</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-brand-light/40 motion-reduce:transition-none"
                >
                  <span className="font-mono text-[10px] tracking-widest text-brand-light">
                    PRINC.{String(index + 1).padStart(2, "0")}
                  </span>
                  <principle.icon className="h-8 w-8 flex-shrink-0 text-brand-light" />
                  <h3 className="font-semibold text-paper">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-paper/70">{principle.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="border-b border-white/10 py-16 lg:py-24">
          <Reveal className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Ce facem</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicii#${service.slug}`}
                    className="group flex h-full items-start gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none"
                  >
                    <span className="font-mono text-xs tracking-widest text-brand-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 flex-col gap-2">
                      <span className="font-semibold text-paper">{service.title}</span>
                      <span className="text-sm leading-relaxed text-paper/70">{service.summary}</span>
                      <span className="pt-1 text-sm font-bold text-brand-light">
                        Detalii{" "}
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                        >
                          →
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </div>

      <CoverageMap />

      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <section className="border-t border-white/10 py-16 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-20">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Transparență</span>
              <h2 className="text-3xl font-bold text-paper sm:text-4xl">Datele firmei</h2>
              <p className="text-sm leading-relaxed text-paper/60">
                Sunt aceleași date pe care le găsești și în{" "}
                <Link
                  href="/termeni-si-conditii"
                  className="font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline motion-reduce:transition-none"
                >
                  termeni și condiții
                </Link>
                .
              </p>
            </div>

            <dl className="flex flex-col divide-y divide-white/5 rounded-[1.5rem] border border-white/10 bg-surface px-6 py-1">
              {identitate.map((rand) => (
                <div key={rand.eticheta} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">{rand.eticheta}</dt>
                  <dd className="text-sm font-semibold text-paper">{rand.valoare}</dd>
                </div>
              ))}
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Contact</dt>
                <dd className="flex flex-col items-end gap-1 text-sm font-semibold text-paper">
                  <a href={contact.phoneHref} className="hover:text-brand-light">
                    {contact.phone}
                  </a>
                  <a href={contact.emailHref} className="hover:text-brand-light">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </section>
      </div>

      <FinalCta />
    </>
  );
}
