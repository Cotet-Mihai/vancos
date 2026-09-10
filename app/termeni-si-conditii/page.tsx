import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "../_lib/contact";
import { DateleFirmei } from "../_components/DateleFirmei";
import { ANPC, ANPC_SAL, ANPC_SOL, actualizat } from "../_lib/legal";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare a site-ului Vancos și de solicitare a serviciilor de degajare deșeuri.",
  alternates: { canonical: "/termeni-si-conditii" },
  openGraph: {
    type: "website",
    url: "/termeni-si-conditii",
    title: "Termeni și condiții | Vancos",
    description:
      "Termenii și condițiile de utilizare a site-ului Vancos și de solicitare a serviciilor de degajare deșeuri.",
  },
};


const linkClass =
  "font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline";

const sectiuni = [
  {
    titlu: "Obiectul acestor termeni",
    continut: (
      <>
        <p>
          Termenii de mai jos se aplică utilizării site-ului Vancos și solicitărilor trimise prin intermediul lui.
          Folosirea site-ului înseamnă că ești de acord cu ei. Dacă nu ești de acord, te rugăm să nu folosești
          formularele de pe site.
        </p>
        <p>
          Site-ul este unul de prezentare. Prin el nu se încheie contracte online și nu se fac plăți. Formularele
          deschid o cerere pe email către noi, iar relația contractuală se stabilește ulterior, direct între tine și
          firmă.
        </p>
      </>
    ),
  },
  {
    titlu: "Solicitări și oferte",
    continut: (
      <>
        <p>
          Când trimiți o cerere prin formular sau ne suni, primești o ofertă în funcție de tipul și cantitatea de
          deșeuri, de zonă și de disponibilitatea utilajelor. Oferta devine fermă doar după ce o confirmăm explicit,
          în scris sau telefonic.
        </p>
        <p>
          Termenul de intervenție comunicat pe site, de regulă 24-48 de ore de la solicitare, este orientativ și
          depinde de disponibilitate, de trafic și de condițiile de la fața locului.
        </p>
      </>
    ),
  },
  {
    titlu: "Estimările calculatorului de prețuri",
    continut: (
      <p>
        Calculatorul de pe site oferă o estimare orientativă, calculată pe baza unor prețuri de piață actualizate
        periodic. Nu este o ofertă și nu ne obligă la un anumit preț. Valoarea finală se stabilește la cântărirea și
        verificarea efectivă a materialelor.
      </p>
    ),
  },
  {
    titlu: "Obligațiile clientului",
    continut: (
      <>
        <p>Pentru ca intervenția să se poată desfășura, ne bazăm pe faptul că:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className="list-disc marker:text-brand-light">
            ne descrii corect tipul și cantitatea aproximativă de deșeuri;
          </li>
          <li className="list-disc marker:text-brand-light">
            asiguri accesul autovehiculului la locul de încărcare și, unde e cazul, dreptul de a interveni acolo;
          </li>
          <li className="list-disc marker:text-brand-light">
            ne anunți din timp dacă printre deșeuri se află materiale periculoase, care necesită tratament special.
          </li>
        </ul>
        <p>
          Nu preluăm deșeuri periculoase nedeclarate. Dacă la fața locului constatăm că deșeurile diferă semnificativ
          de descriere, putem reface oferta sau refuza preluarea.
        </p>
      </>
    ),
  },
  {
    titlu: "Prelucrarea datelor cu caracter personal",
    continut: (
      <>
        <p>
          Prin formularele de pe site ne transmiți numele, numărul de telefon și detaliile pe care alegi să le scrii.
          Le folosim exclusiv ca să îți răspundem cu o ofertă și să organizăm intervenția. Nu le vindem și nu le
          transmitem către terți în scopuri de marketing.
        </p>
        <p>
          Formularele nu salvează datele într-o bază de date pe site: ele deschid un mesaj de email către adresa
          noastră, iar datele ajung în căsuța noastră de email. Ai dreptul să ceri accesul la datele tale,
          rectificarea sau ștergerea lor, scriindu-ne la{" "}
          <a href={contact.emailHref} className={linkClass}>
            {contact.email}
          </a>
          .
        </p>
        <p>
          Despre cookie-uri și conținutul extern încărcat pe site, vezi{" "}
          <Link href="/politica-cookie" className={linkClass}>
            politica de cookie-uri
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    titlu: "Proprietate intelectuală",
    continut: (
      <p>
        Conținutul site-ului (texte, imagini, elemente grafice și structura paginilor) aparține Vancos și nu poate fi
        reprodus sau folosit comercial fără acordul nostru scris.
      </p>
    ),
  },
  {
    titlu: "Limitarea răspunderii",
    continut: (
      <p>
        Ne străduim ca informațiile de pe site să fie corecte și actualizate, dar nu garantăm că sunt complete sau
        lipsite de erori în orice moment. Nu răspundem pentru prejudicii rezultate din folosirea informațiilor cu
        caracter orientativ de pe site fără o confirmare prealabilă din partea noastră.
      </p>
    ),
  },
  {
    titlu: "Modificarea termenilor",
    continut: (
      <p>
        Putem actualiza acești termeni ori de câte ori este necesar. Versiunea aplicabilă este cea publicată pe
        această pagină la momentul în care ne trimiți solicitarea, iar data ultimei actualizări este afișată mai sus.
      </p>
    ),
  },
];

export default function TermeniSiConditiiPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pt-28 pb-20">
      <header className="flex flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">Informații legale</span>
        <h1 className="text-4xl font-bold text-paper sm:text-5xl">Termeni și condiții</h1>
        <span className="h-[3px] w-12 rounded-full bg-brand" />
        <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Ultima actualizare · {actualizat}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-paper">Cine suntem</h2>
        <DateleFirmei />
      </section>

      {sectiuni.map((sectiune) => (
        <section key={sectiune.titlu} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-paper">{sectiune.titlu}</h2>
          <div className="flex flex-col gap-4 leading-relaxed text-paper/70">{sectiune.continut}</div>
        </section>
      ))}

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-paper">Soluționarea litigiilor</h2>
        <div className="flex flex-col gap-4 leading-relaxed text-paper/70">
          <p>
            Dacă ai o nemulțumire, scrie-ne întâi nouă, pentru că cele mai multe se rezolvă direct. Dacă nu ajungem la o
            soluție, te poți adresa{" "}
            <a href={ANPC} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Autorității Naționale pentru Protecția Consumatorilor
            </a>
            .
          </p>
          <p>
            Ai la dispoziție și procedura de{" "}
            <a href={ANPC_SAL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              soluționare alternativă a litigiilor (SAL)
            </a>
            , respectiv platforma europeană de{" "}
            <a href={ANPC_SOL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              soluționare online a litigiilor (SOL)
            </a>
            .
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-surface p-6">
        <h2 className="text-xl font-bold text-paper">Contact</h2>
        <p className="leading-relaxed text-paper/70">
          Pentru orice întrebare legată de acești termeni, ne găsești la{" "}
          <a href={contact.phoneHref} className={linkClass}>
            {contact.phone}
          </a>{" "}
          sau la{" "}
          <a href={contact.emailHref} className={linkClass}>
            {contact.email}
          </a>
          .
        </p>
        <Link href="/contact" className={`${linkClass} w-fit`}>
          Vezi pagina de contact →
        </Link>
      </section>
    </div>
  );
}
