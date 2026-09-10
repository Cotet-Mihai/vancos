import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "../_lib/contact";
import { QuickQuoteForm } from "../_components/QuickQuoteForm";
import { DeCompletat } from "../_components/DeCompletat";
import { DateleFirmei } from "../_components/DateleFirmei";
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
    description: "Tipul deșeurilor, cantitatea aproximativă și zona din București.",
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
          className="pointer-events-none absolute -top-48 left-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(62,155,92,0.3)_0%,rgba(62,155,92,0)_70%)] blur-2xl"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 pt-36 pb-14">
          <span className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span
                aria-hidden="true"
                className="animate-coverage absolute inset-0 rounded-full border border-brand-light"
              />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-light shadow-[0_0_10px_rgba(62,155,92,0.9)]" />
            </span>
            Dispatch — preluăm cereri
          </span>

          <h1 className="max-w-3xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl">
            Spune-ne ce ai de <span className="text-brand-light">transportat.</span>
          </h1>

          <p className="max-w-xl leading-relaxed text-paper/70">
            Sună, scrie-ne sau completează formularul. Îți răspundem cu o ofertă clară, în funcție de tipul deșeurilor
            și de zona în care te afli.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_minmax(0,31rem)] lg:gap-20 lg:py-20">
        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 pb-2">
              <span className="text-5xl leading-none font-bold tracking-tight text-paper sm:text-6xl">VANCOS</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-brand-light uppercase">
                Mai curat, mai bine
              </span>
            </div>

            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                  <channel.icon className="h-5 w-5" />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    {channel.label}
                  </span>
                  <span className="text-lg font-bold break-words text-paper">{channel.value}</span>
                  <span className="text-sm text-paper/60">{channel.note}</span>
                </span>
              </a>
            ))}

            <div className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                <IconPin className="h-5 w-5" />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Zonă</span>
                <span className="text-lg font-bold text-paper">București</span>
                <span className="text-sm text-paper/60">{contact.area}</span>
              </span>
            </div>

            <div className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                <IconClock className="h-5 w-5" />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Program</span>
                <span className="text-lg font-bold text-paper">
                  {contact.program ?? <DeCompletat camp="programul de lucru" />}
                </span>
                <span className="text-sm text-paper/60">Intervenim de regulă în 24-48h de la solicitare.</span>
              </span>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-6 pt-4">
            <div className="flex items-center gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Ce urmează</span>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </div>

            <ol className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
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
                </li>
              ))}
            </ol>

            <p className="text-sm text-paper/50">
              Trimițând formularul ești de acord cu{" "}
              <Link
                href="/termeni-si-conditii"
                className="font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline motion-reduce:transition-none"
              >
                termenii și condițiile
              </Link>
              .
            </p>
          </Reveal>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <QuickQuoteForm />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <section className="py-16 lg:py-20">
          <Reveal className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-20">
            <div className="flex flex-col gap-4">
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
            </div>

            <DateleFirmei />
          </Reveal>
        </section>
      </div>
    </>
  );
}
