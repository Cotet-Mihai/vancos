import type { Metadata } from "next";
import { openGraphBase } from "../_lib/site";
import Link from "next/link";
import { contact } from "../_lib/contact";
import { DateleFirmei } from "../_components/DateleFirmei";
import { actualizat } from "../_lib/legal";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Ce date personale primește Vancos prin site, de ce, cât timp le păstrează, cui le transmite și ce drepturi ai.",
  alternates: { canonical: "/politica-de-confidentialitate" },
  openGraph: {
    ...openGraphBase,
    url: "/politica-de-confidentialitate",
    title: "Politica de confidențialitate | Vancos",
    description:
      "Ce date personale primește Vancos prin site, de ce, cât timp le păstrează, cui le transmite și ce drepturi ai.",
  },
};


const linkClass =
  "font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline";

const listItem = "list-disc marker:text-brand-light";

/**
 * Informarea cerută de GDPR art. 13, pentru datele primite prin site.
 *
 * Textul descrie ce face efectiv codul: formularele trec prin acțiunea de
 * server `send-request`, care trimite prin Resend un mesaj către căsuța Gmail a
 * firmei și o confirmare către vizitator; nu există bază de date. Statisticile
 * și harta pornesc doar cu acord (`consent.ts`). Dacă se schimbă vreunul dintre
 * aceste drumuri, pagina se rescrie odată cu el.
 */
const sectiuni = [
  {
    titlu: "Ce date primim și de unde",
    continut: (
      <>
        <p>Primim date personale doar când ni le dai tu, prin formularele de pe site:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className={listItem}>
            <strong className="font-semibold text-paper">cererea de ofertă:</strong> numele, adresa de email, numărul de
            telefon, tipul de deșeuri și detaliile pe care alegi să le scrii;
          </li>
          <li className={listItem}>
            <strong className="font-semibold text-paper">solicitarea de preluare din calculator:</strong> numele, adresa
            de email, numărul de telefon și materialele, cu cantitățile estimate.
          </li>
        </ul>
        <p>
          Fără nume, email și telefon nu îți putem răspunde, de aceea sunt obligatorii. Dacă nu vrei să le scrii pe
          site, ne poți suna direct.
        </p>
      </>
    ),
  },
  {
    titlu: "De ce le folosim și pe ce temei",
    continut: (
      <>
        <ul className="flex flex-col gap-2 pl-5">
          <li className={listItem}>
            <strong className="font-semibold text-paper">Ca să îți răspundem și să organizăm intervenția.</strong> Temeiul
            este art. 6 alin. (1) lit. b) din GDPR: demersuri făcute la cererea ta înainte de încheierea unui contract.
            Tot pentru asta îți trimitem un email de confirmare că am primit cererea.
          </li>
          <li className={listItem}>
            <strong className="font-semibold text-paper">Dacă devii client</strong>, păstrăm documentele contabile
            (facturi, contracte) pentru că ne obligă legea: art. 6 alin. (1) lit. c) din GDPR.
          </li>
          <li className={listItem}>
            <strong className="font-semibold text-paper">Statisticile de trafic și harta Google</strong> pornesc doar
            dacă accepți în bannerul de cookie-uri: art. 6 alin. (1) lit. a) din GDPR. Detaliile sunt în{" "}
            <Link href="/politica-cookie" className={linkClass}>
              politica de cookie-uri
            </Link>
            .
          </li>
        </ul>
        <p>
          Nu folosim datele pentru marketing, nu le vindem și nu luăm decizii automate pe baza lor.
        </p>
      </>
    ),
  },
  {
    titlu: "Cine le mai vede",
    continut: (
      <>
        <p>Datele ajung doar la noi și la furnizorii prin care funcționează site-ul:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className={listItem}>
            <strong className="font-semibold text-paper">Resend</strong>, care trimite mesajele din formulare;
          </li>
          <li className={listItem}>
            <strong className="font-semibold text-paper">Google</strong>, care găzduiește căsuța noastră de email (Gmail);
          </li>
          <li className={listItem}>
            <strong className="font-semibold text-paper">Vercel</strong>, care găzduiește site-ul și, dacă accepți,
            numără vizitele.
          </li>
        </ul>
        <p>
          Ei prelucrează datele doar ca să ne ofere aceste servicii. Sunt companii din SUA, iar transferul în afara
          Spațiului Economic European se face pe baza garanțiilor prevăzute de GDPR (art. 44-49), cum ar fi Cadrul
          UE-SUA privind protecția datelor sau clauzele contractuale standard aprobate de Comisia Europeană.
        </p>
        <p>
          Dacă încarci harta de pe pagina de Contact, Google primește adresa ta IP și poate seta cookie-uri proprii,
          pe care le gestionează ca operator independent.
        </p>
      </>
    ),
  },
  {
    titlu: "Cât timp le păstrăm",
    continut: (
      <p>
        Datele din cerere le păstrăm cât e nevoie ca să îți răspundem și să ducem la capăt intervenția. Dacă devii
        client, documentele contabile se păstrează pe durata cerută de legislația financiar-contabilă. Site-ul nu are
        o bază de date: cererile există doar în căsuța noastră de email.
      </p>
    ),
  },
  {
    titlu: "Drepturile tale",
    continut: (
      <>
        <p>Ai dreptul să ne ceri:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className={listItem}>acces la datele pe care le avem despre tine;</li>
          <li className={listItem}>rectificarea lor, dacă sunt greșite;</li>
          <li className={listItem}>ștergerea lor sau restricționarea prelucrării;</li>
          <li className={listItem}>să te opui prelucrării;</li>
          <li className={listItem}>să le primești într-un format pe care îl poți duce în altă parte (portabilitate);</li>
          <li className={listItem}>
            să îți retragi acordul pentru statistici și hartă, oricând, din „Setări cookie-uri”, în subsolul paginii.
          </li>
        </ul>
        <p>
          Pentru oricare dintre ele, scrie-ne la{" "}
          <a href={contact.emailHref} className={linkClass}>
            {contact.email}
          </a>
          . Îți răspundem în cel mult o lună.
        </p>
        <p>
          Dacă ți se pare că nu ți-am respectat drepturile, poți depune o plângere la Autoritatea Națională de
          Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), pe{" "}
          <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className={linkClass}>
            dataprotection.ro
          </a>
          .
        </p>
      </>
    ),
  },
  {
    titlu: "Modificări ale acestei politici",
    continut: (
      <p>
        Când schimbăm felul în care primim sau folosim datele, actualizăm pagina înainte ca schimbarea să ajungă live și
        modificăm data de mai sus.
      </p>
    ),
  },
];

export default function PoliticaDeConfidentialitatePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pt-28 pb-20">
      <header className="flex flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Informații legale</span>
        <h1 className="text-4xl font-bold text-paper sm:text-5xl">Politica de confidențialitate</h1>
        <span className="h-[3px] w-12 rounded-full bg-brand" />
        <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Ultima actualizare · {actualizat}
        </p>
      </header>

      <section className="flex flex-col gap-3 rounded-[1.5rem] border border-brand-light/25 bg-brand/15 p-6">
        <h2 className="text-lg font-bold text-paper">Pe scurt</h2>
        <p className="leading-relaxed text-paper/80">
          Datele din formulare le folosim doar ca să îți răspundem și să organizăm intervenția. Nu le vindem, nu facem
          marketing cu ele și le poți cere oricând înapoi sau șterse.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-paper">Cine se ocupă de datele tale</h2>
        <p className="leading-relaxed text-paper/70">
          Operatorul datelor este firma de mai jos. Nu avem un responsabil cu protecția datelor desemnat; pentru orice
          întrebare ne scrii direct.
        </p>
        <DateleFirmei />
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
          Pentru orice întrebare legată de datele tale, ne găsești la{" "}
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
