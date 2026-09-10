import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import heroContact from "../../public/images/hero-contact.jpg";
import Link from "next/link";
import { contact } from "../_lib/contact";
import { QuickQuoteForm } from "../_components/QuickQuoteForm";
import { DateleFirmei } from "../_components/DateleFirmei";
import { ContactMap } from "../_components/ContactMap";
import { Reveal } from "../_components/Reveal";
import { IconPhone, IconMail, IconPin, IconClock, IconDocument, IconTruck } from "../_components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Vancos pentru degajare de deșeuri și colectare de reciclabile în București.",
};

const channels = [
  {
    icon: IconPhone,
    label: "Telefon",
    value: contact.phone,
    href: contact.phoneHref,
    note: "Cel mai rapid mod să ne prinzi.",
  },
  {
    icon: IconMail,
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
    note: "Trimite-ne detaliile și îți răspundem cu o ofertă.",
  },
];

const steps = [
  {
    icon: IconDocument,
    title: "Ne spui ce ai de ridicat",
    // Spațiu insecabil: „și" nu rămâne singur la capăt de rând, ci trece cu „zona".
    description: "Tipul deșeurilor, cantitatea aproximativă și zona din București.",
  },
  {
    icon: IconClock,
    title: "Îți trimitem oferta",
    description: "Un preț clar, fără costuri ascunse, plus intervalul în care putem veni.",
  },
  {
    icon: IconTruck,
    title: "Venim și degajăm",
    description: "De regulă în 24-48h, cu container și, la nevoie, cu oameni pentru încărcare.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink sm:block sm:min-h-0">
        <div
          aria-hidden="true"
          className="dot-grid absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="hero-media pointer-events-none absolute inset-y-0 right-0 w-full opacity-55 sm:w-[72%] sm:opacity-70 lg:w-[58%]"
        >
          <div className="hero-media-in absolute inset-0" style={{ "--rise-delay": "0.1s" } as CSSProperties}>
            <Image src={heroContact} alt="" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </div>
        </div>


        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 pt-28 pb-12 sm:flex-none sm:pt-36 sm:pb-14">
          <h1
            className="hero-rise max-w-3xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl"
            style={{ "--rise-delay": "0.3s" } as CSSProperties}
          >
            Spune-ne ce ai de <span className="text-brand-gradient">transportat.</span>
          </h1>

          <p
            className="hero-rise max-w-xl leading-relaxed text-paper/70"
            style={{ "--rise-delay": "0.45s" } as CSSProperties}
          >
            Sună, scrie-ne sau completează formularul. Îți răspundem cu o ofertă clară, în funcție de tipul deșeurilor
            și de zona în care te afli.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1fr_minmax(0,31rem)] lg:gap-20 lg:py-20">
        <div className="flex min-w-0 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Reveal className="flex flex-col gap-2 pb-2">
              <span className="text-5xl leading-none font-bold tracking-tight text-paper sm:text-6xl">VANCOS</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-brand-light uppercase">
                Mai curat, mai bine
              </span>
            </Reveal>

            {channels.map((channel, index) => (
              <Reveal key={channel.label} delay={80 * (index + 1)}>
              <a
                href={channel.href}
                className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none"
              >
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    {channel.label}
                  </span>
                  <span className="text-lg font-bold break-words text-paper">{channel.value}</span>
                  <span className="text-sm text-paper/60">{channel.note}</span>
                </span>
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                  <channel.icon className="h-5 w-5" />
                </span>
              </a>
              </Reveal>
            ))}

            <Reveal
              delay={240}
              className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Zonă</span>
                <span className="text-lg font-bold text-paper">București</span>
                <span className="text-sm text-paper/60">{contact.area}</span>
              </span>
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                <IconPin className="h-5 w-5" />
              </span>
            </Reveal>

            <Reveal
              delay={320}
              className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Program</span>
                <dl className="flex flex-col gap-0.5">
                  {contact.program.map((interval) => (
                    <div key={interval.zile} className="flex flex-wrap items-baseline gap-x-3">
                      <dt className="text-sm text-paper/60">{interval.zile}</dt>
                      <dd className={interval.inchis ? "text-sm text-paper/40" : "text-base font-bold text-paper"}>
                        {interval.ore}
                      </dd>
                    </div>
                  ))}
                </dl>
                <span className="text-sm text-paper/60">Intervenim de regulă în 24-48h de la solicitare.</span>
              </span>
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                <IconClock className="h-5 w-5" />
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <Reveal className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Ce urmează</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </Reveal>

            <ol className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={80 * (index + 1)} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-surface font-mono text-xs font-bold text-brand-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-1 pt-1">
                    <span className="flex items-center gap-2 font-semibold text-paper">
                      <step.icon className="h-4 w-4 flex-shrink-0 text-brand-light" />
                      {step.title}
                    </span>
                    <span className="text-sm leading-relaxed text-paper/70">{step.description}</span>
                  </span>
                  </Reveal>
                </li>
              ))}
            </ol>

          </div>

          <div className="flex flex-col gap-6">
            <Reveal className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Unde ne găsești</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </Reveal>

            <Reveal delay={120} className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Punct de lucru</span>
                <span className="text-lg font-bold text-paper">{contact.address}</span>
              </span>
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                <IconPin className="h-5 w-5" />
              </span>
            </div>

            <ContactMap />

            <a
              href={contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 text-sm font-bold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline motion-reduce:transition-none"
            >
              Deschide în Google Maps
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            </a>
            </Reveal>
          </div>
        </div>

        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={120}>
            <QuickQuoteForm />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <section className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[22rem_1fr] lg:gap-20">
            <Reveal className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Transparență</span>
              <h2 className="text-3xl font-bold text-paper sm:text-4xl">Datele firmei</h2>
              <p className="text-sm leading-relaxed text-paper/60">
                Aceleași date apar și în{" "}
                <Link
                  href="/termeni-si-conditii"
                  className="font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline motion-reduce:transition-none"
                >
                  termeni și condiții
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={120}>
              <DateleFirmei />
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
