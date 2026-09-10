"use client";

import Link from "next/link";
import { useConsent, writeConsent, type Consent } from "../_lib/consent";

/*
 * Bannerul de consimțământ.
 *
 * Forma și textul urmează bannerul de pe devicomtech, la cererea lui Mihai.
 *
 * ATENȚIE: textul vorbește despre analiza traficului web, dar site-ul nu are
 * încă niciun instrument de măsurare. Alegerea guvernează deocamdată singurul
 * terț care există — harta Google de pe pagina de Contact. Când se adaugă
 * analytics, se leagă de aceeași alegere; până atunci, textul spune mai mult
 * decât face site-ul, iar politica de cookie-uri descrie situația reală.
 *
 * Ce cere legea de la forma lui, și unde se vede în cod:
 *
 * - Refuzul e la fel de vizibil ca acceptul: două butoane pereche, aceeași
 *   înălțime și aceeași literă, deosebite doar prin umplere. Un „refuz" palid
 *   lângă un „accept" plin e chiar felul în care se ocolește cerința.
 * - Refuzul e primul. Pe telefon butoanele se stivuiesc, iar cel de jos e cel
 *   mai aproape de degetul care ține telefonul; cu „accept" acolo, forma
 *   bannerului ar împinge singură spre acord.
 * - Nu există închidere cu „×". Un banner care se închide fără răspuns ar lăsa
 *   întrebarea deschisă, iar tăcerea nu e acord.
 * - Detaliile stau în politica de cookie-uri, legată din text: acordul trebuie
 *   dat în cunoștință de cauză, iar bannerul doar rezumă.
 *
 * `aria-modal` lipsește dinadins: bannerul nu blochează pagina. Cu el pus,
 * cititoarele de ecran ar ascunde tot restul site-ului până la un răspuns.
 */
export function CookieBanner() {
  const consent = useConsent();

  // `"unknown"` înseamnă că încă nu am ajuns la `localStorage`; abia `null`
  // înseamnă că vizitatorul chiar nu a ales. Serverul nu are de unde ști
  // răspunsul, deci HTML-ul trimis nu conține niciodată bannerul — altfel ar
  // clipi o clipă și la cine a răspuns demult.
  if (consent !== null) return null;

  function choose(value: Consent) {
    writeConsent(value);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie-uri"
      aria-describedby="consimtamant-text"
      className="fixed inset-x-0 bottom-0 z-[70] flex justify-center p-3 sm:p-5 print:hidden"
    >
      {/* Un rând, nu o casetă: bannerul apare peste ce citește omul, deci cu cât
          ocupă mai puțin, cu atât e mai puțin un obstacol. Sub `sm` se desface pe
          verticală, unde un rând de text plus două butoane nu încap. */}
      <div className="flex w-full max-w-3xl flex-col gap-4 rounded-[1.25rem] border border-white/12 bg-ink/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:gap-7 sm:px-6">
        <p id="consimtamant-text" className="flex-1 text-sm leading-relaxed text-paper/80">
          Cu acordul tău folosim module cookie neesențiale, pentru a analiza traficul web. Apăsând „Accept”, ești de
          acord cu{" "}
          <Link
            href="/politica-cookie"
            className="font-semibold text-brand-light underline underline-offset-4 transition-colors duration-300 hover:text-paper motion-reduce:transition-none"
          >
            Politica de cookie-uri
          </Link>
          .
        </p>

        <div className="flex gap-2.5 sm:shrink-0">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/25 px-6 text-xs font-bold text-paper transition-colors duration-300 hover:border-white/50 motion-reduce:transition-none sm:flex-none"
          >
            Refuz
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-brand-light bg-brand-light px-6 text-xs font-bold text-ink transition-colors duration-300 hover:border-paper hover:bg-paper motion-reduce:transition-none sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
