"use client";

import { contact } from "../_lib/contact";
import { useConsent, writeConsent } from "../_lib/consent";
import { IconPin } from "./icons";

/**
 * Harta se încarcă doar cu acordul vizitatorului.
 *
 * Fără el, iframe-ul nici măcar nu ajunge în pagină — un `<iframe>` randat
 * contactează Google în momentul în care intră în DOM, deci ascunderea lui prin
 * CSS n-ar schimba nimic. În locul lui rămâne un substitut cu un buton care
 * încarcă harta și reține alegerea.
 */
export function ContactMap() {
  const consent = useConsent();

  // Până când știm alegerea, ținem locul gol: altfel s-ar vedea substitutul
  // pentru o clipă, chiar la cineva care a acceptat deja.
  if (consent === "unknown") {
    return <div className="h-72 w-full rounded-[1.75rem] border border-white/10 bg-surface sm:h-80" />;
  }

  if (consent !== "accepted") {
    return (
      <div className="flex h-72 w-full flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-white/10 bg-surface px-6 text-center sm:h-80">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
          <IconPin className="h-5 w-5" />
        </span>
        <p className="max-w-sm text-sm leading-relaxed text-paper/70">
          Harta se încarcă de pe serverele Google, care poate seta cookie-uri proprii. O afișăm doar cu acordul tău.
        </p>
        <button
          type="button"
          onClick={() => writeConsent("accepted")}
          className="rounded-full bg-brand-light px-6 py-2.5 text-xs font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Încarcă harta
        </button>
        <a
          href={contact.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline motion-reduce:transition-none"
        >
          Sau deschide direct în Google Maps →
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface">
      {/* Adresa merge ca text în `q`, deci geocodarea o face Google — nu punem
          coordonate scrise de mână, care ar muta acul fără să se observe. */}
      <iframe
        title={`Harta către ${contact.address}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-72 w-full border-0 sm:h-80"
      />
    </div>
  );
}
