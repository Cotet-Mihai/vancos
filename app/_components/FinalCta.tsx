import Link from "next/link";
import { QuickQuoteForm } from "./QuickQuoteForm";
import { Reveal } from "./Reveal";
import { CursorGlow } from "./CursorGlow";
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
        className="dot-grid absolute inset-0"
      />
      <CursorGlow />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_minmax(0,31rem)] lg:items-center lg:gap-20 lg:py-28">
        <Reveal className="flex flex-col gap-7">
          <h2 className="max-w-2xl text-4xl leading-[0.98] font-bold text-paper sm:text-5xl lg:text-6xl">
            Gata să facem loc
            <br />
            pentru <span className="text-brand-gradient">un oraș mai curat?</span>
          </h2>

          <p className="max-w-md text-paper/70">
            Completează formularul alăturat, fie că e vorba de moloz, deșeuri din gospodărie sau materiale
            reciclabile. Îți răspundem cu o ofertă clară, fără costuri ascunse.
          </p>

          <ul className="flex flex-col gap-3 border-t border-white/10 pt-6">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-3 text-xs font-semibold text-paper/70 sm:text-sm">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light sm:h-9 sm:w-9">
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
        </Reveal>

        <Reveal delay={120}>
          <QuickQuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
