import Link from "next/link";
import { QuickQuoteForm } from "./QuickQuoteForm";
import { IconClock, IconShield, IconTruck, IconContainer } from "./icons";

// Faptele care s-ar cere oricum la telefon, strânse în ultimul ecran,
// ca să nu fie nevoie de scroll înapoi până la Hero sau la De ce Vancos.
const facts = [
  { icon: IconClock, label: "Răspuns în 24-48h" },
  { icon: IconTruck, label: "Toate cele 6 sectoare" },
  { icon: IconContainer, label: "Containere până la 4 tone" },
  { icon: IconShield, label: "Fără bătăi de cap" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface">
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
        className="pointer-events-none absolute -top-56 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,155,92,0.28)_0%,rgba(62,155,92,0)_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_minmax(0,31rem)] lg:items-center lg:gap-20 lg:py-28">
        <div className="flex flex-col gap-7">
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

          <h2 className="max-w-2xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl">
            Gata să facem loc
            <br />
            pentru <span className="text-brand-light">un oraș mai curat?</span>
          </h2>

          <p className="max-w-md text-paper/70">
            Completează formularul alăturat — moloz, deșeuri din gospodărie sau materiale reciclabile. Îți
            răspundem cu o ofertă clară, fără costuri ascunse.
          </p>

          <ul className="flex flex-col gap-3 border-t border-white/10 pt-6">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-3 text-sm font-semibold text-paper/70">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                  <fact.icon className="h-4 w-4" />
                </span>
                {fact.label}
              </li>
            ))}
          </ul>

          <p className="text-sm text-paper/50">
            Preferi să vorbim direct?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
            >
              Vezi datele de contact →
            </Link>
          </p>
        </div>

        <QuickQuoteForm />
      </div>
    </section>
  );
}
