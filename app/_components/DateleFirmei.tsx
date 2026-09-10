import { contact } from "../_lib/contact";
import { firma } from "../_lib/legal";
import { DeCompletat } from "./DeCompletat";

/**
 * Fișa de identificare a firmei, folosită de Contact, Despre noi și Termeni.
 *
 * Stă într-un singur loc pentru că e exact genul de bloc care se desincronizează:
 * se schimbă sediul, se actualizează două pagini din trei și a treia rămâne cu
 * datele vechi — pe o pagină cu valoare juridică.
 */
const randuri = [
  { eticheta: "Denumire", valoare: firma.denumire, camp: "denumirea firmei" },
  { eticheta: "CUI", valoare: firma.cui, camp: "CUI" },
  { eticheta: "Reg. Com.", valoare: firma.registruComert, camp: "nr. registrul comerțului" },
  { eticheta: "Sediu social", valoare: firma.sediuSocial, camp: "sediul social" },
];

export function DateleFirmei({ className = "" }: { className?: string }) {
  return (
    <dl className={`flex flex-col divide-y divide-white/5 rounded-[1.5rem] border border-white/10 bg-surface px-6 py-1 ${className}`}>
      {randuri.map((rand) => (
        <div key={rand.eticheta} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
          <dt className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">{rand.eticheta}</dt>
          <dd className="text-right text-sm font-semibold text-paper">
            {rand.valoare ?? <DeCompletat camp={rand.camp} />}
          </dd>
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
  );
}
