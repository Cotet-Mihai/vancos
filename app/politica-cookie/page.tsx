import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "../_lib/contact";
import { actualizat } from "../_lib/legal";

export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  description:
    "Ce cookie-uri folosește site-ul Vancos și cum le poți controla din browser.",
  alternates: { canonical: "/politica-cookie" },
  openGraph: {
    type: "website",
    url: "/politica-cookie",
    title: "Politica de cookie-uri | Vancos",
    description:
      "Ce cookie-uri folosește site-ul Vancos și cum le poți controla din browser.",
  },
};


const linkClass =
  "font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline";

/**
 * Textul descrie ce face efectiv site-ul, verificat în cod: nu există analytics,
 * pixeli de urmărire, `localStorage` sau cookie-uri proprii. Singurul terț este
 * harta Google de pe pagina de Contact. Dacă se adaugă vreodată analytics sau un
 * alt serviciu extern, secțiunile de mai jos trebuie rescrise odată cu el.
 */
const browsers = [
  { name: "Chrome", href: "https://support.google.com/chrome/answer/95647" },
  { name: "Safari", href: "https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" },
  { name: "Firefox", href: "https://support.mozilla.org/ro/kb/cookie-uri-informatii-stocate-de-site-uri" },
  { name: "Edge", href: "https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-modulelor-cookie-63947406-40ac-c3b8-57b9-2a946a29ae09" },
];

const sectiuni = [
  {
    titlu: "Ce sunt cookie-urile",
    continut: (
      <p>
        Cookie-urile sunt fișiere text mici pe care un site le poate salva în browserul tău. Ele rețin, de exemplu,
        preferințe sau informații despre vizitele anterioare. Tot aici intră și tehnologii asemănătoare, cum ar fi
        spațiul de stocare local al browserului.
      </p>
    ),
  },
  {
    titlu: "Cookie-urile pe care le folosim noi",
    continut: (
      <>
        <p>
          Site-ul Vancos <strong className="font-semibold text-paper">nu setează cookie-uri proprii</strong>. Nu folosim
          Google Analytics sau alt instrument de statistici, nu avem pixeli de urmărire, nu afișăm reclame și nu
          construim profiluri de vizitatori.
        </p>
        <p>
          Singurul lucru pe care îl salvăm în browserul tău este răspunsul dat bannerului de la prima vizită, ca să nu
          te întrebăm din nou la fiecare pagină. Stă în spațiul de stocare local, sub numele{" "}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-paper/80">
            vancos-consent
          </code>
          , nu pleacă din browser și nu ajunge la noi. Ce completezi în formulare rămâne în pagină până apeși pe
          trimitere, iar la reîncărcare dispare.
        </p>
      </>
    ),
  },
  {
    titlu: "Cookie-uri de la terți",
    continut: (
      <>
        <p>
          Pe pagina de{" "}
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>{" "}
          este încorporată o hartă Google, ca să vezi unde ne găsești. Harta se încarcă de pe serverele Google, iar
          Google poate seta cookie-uri proprii și poate primi adresa ta IP atunci când harta se afișează. Este singurul
          conținut extern de pe site.
        </p>
        <p>
          De aceea harta nu se încarcă până nu accepți. Cât timp nu ai acceptat, în locul ei rămâne o casetă cu un buton
          care o pornește — iar dacă preferi, poți deschide adresa direct în aplicația Google Maps, fără ca site-ul să
          contacteze Google.
        </p>
        <p>
          Aceste cookie-uri aparțin Google, nu nouă, și sunt guvernate de{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            politica lor privind cookie-urile
          </a>
          . Dacă nu vrei ca harta să se încarce, poți evita pagina de Contact sau poți bloca cookie-urile terților din
          setările browserului, așa cum arătăm mai jos.
        </p>
      </>
    ),
  },
  {
    titlu: "Cum le controlezi",
    continut: (
      <>
        <p>
          Alegerea făcută la prima vizită se schimbă ștergând datele site-ului din browser: la următoarea vizită
          bannerul apare din nou și poți răspunde altfel. Îți poți șterge oricând cookie-urile existente sau le poți
          bloca pe cele viitoare, tot din browser. Restul site-ului funcționează normal fără ele — nimic de aici nu
          depinde de cookie-uri.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
          {browsers.map((browser) => (
            <li key={browser.name}>
              <a href={browser.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {browser.name} →
              </a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    titlu: "Modificări ale acestei politici",
    continut: (
      <p>
        Dacă adăugăm vreodată instrumente de statistici sau alte servicii externe, actualizăm pagina înainte ca ele să
        ajungă live și schimbăm data de mai sus. Versiunea aplicabilă este cea publicată aici în momentul vizitei tale.
      </p>
    ),
  },
];

export default function PoliticaCookiePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pt-28 pb-20">
      <header className="flex flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Informații legale</span>
        <h1 className="text-4xl font-bold text-paper sm:text-5xl">Politica de cookie-uri</h1>
        <span className="h-[3px] w-12 rounded-full bg-brand" />
        <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Ultima actualizare · {actualizat}
        </p>
      </header>

      <section className="flex flex-col gap-3 rounded-[1.5rem] border border-brand-light/25 bg-brand/15 p-6">
        <h2 className="text-lg font-bold text-paper">Pe scurt</h2>
        <p className="leading-relaxed text-paper/80">
          Nu folosim cookie-uri de urmărire și nu setăm niciun cookie propriu. Singurul cookie care poate apărea vine de
          la harta Google încorporată în pagina de Contact.
        </p>
      </section>

      {sectiuni.map((sectiune) => (
        <section key={sectiune.titlu} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-paper">{sectiune.titlu}</h2>
          <div className="flex flex-col gap-4 leading-relaxed text-paper/70">{sectiune.continut}</div>
        </section>
      ))}

      <section className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-xl font-bold text-paper">Contact</h2>
        <p className="leading-relaxed text-paper/70">
          Pentru orice întrebare legată de această politică, ne găsești la{" "}
          <a href={contact.phoneHref} className={linkClass}>
            {contact.phone}
          </a>{" "}
          sau la{" "}
          <a href={contact.emailHref} className={linkClass}>
            {contact.email}
          </a>
          .
        </p>
        <Link href="/termeni-si-conditii" className={`${linkClass} w-fit`}>
          Vezi termenii și condițiile →
        </Link>
      </section>
    </div>
  );
}
