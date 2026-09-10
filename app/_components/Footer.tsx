import Image from "next/image";
import Link from "next/link";
import anpcSal from "../../public/images/anpc-sal.png";
import anpcSol from "../../public/images/anpc-sol.png";
import { contact } from "../_lib/contact";
import { IconPhone, IconMail, IconPin } from "./icons";

// Siglele duc la procedurile de solutionare a litigiilor, nu la autoritate.
const anpcBadges = [
  {
    src: anpcSal,
    href: "https://anpc.ro/ce-este-sal/",
    alt: "ANPC — Soluționarea Alternativă a Litigiilor",
  },
  {
    src: anpcSol,
    href: "https://ec.europa.eu/consumers/odr",
    alt: "SOL — Soluționarea Online a Litigiilor",
  },
];

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/servicii#constructii", label: "Deșeuri din construcții" },
  { href: "/servicii#demolari", label: "Deșeuri din demolări" },
  { href: "/servicii#gospodarii", label: "Deșeuri din gospodării" },
  { href: "/servicii#reciclabile", label: "Materiale reciclabile" },
];

const linkClass =
  "group inline-flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-paper motion-reduce:transition-none";

const linkDash =
  "h-px w-0 bg-brand-light transition-[width] duration-300 group-hover:w-4 motion-reduce:transition-none";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div className="flex flex-col gap-4">
          <span className="flex flex-col leading-none">
            <span className="text-3xl font-bold tracking-tight text-paper">VANCOS</span>
            <span className="mt-2 font-mono text-[10px] tracking-[0.3em] text-brand-light uppercase">
              Mai curat, mai bine
            </span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Degajare deșeuri din construcții, demolări și gospodării, plus colectare de reciclabile — în toată zona
            București.
          </p>
          <span className="flex items-center gap-2.5 pt-1 text-xs font-semibold text-white/45">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span
                aria-hidden="true"
                className="animate-coverage absolute inset-0 rounded-full border border-brand-light"
              />
              <span className="h-2 w-2 rounded-full bg-brand-light" />
            </span>
            Preluăm cereri · 24-48h
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase">Navigare</span>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                <span aria-hidden="true" className={linkDash} />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase">Servicii</span>
          <nav className="flex flex-col gap-2.5">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                <span aria-hidden="true" className={linkDash} />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase">Contact</span>

          <a
            href={contact.phoneHref}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
              <IconPhone className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 uppercase">Telefon</span>
              <span className="text-sm font-bold text-paper">{contact.phone}</span>
            </span>
          </a>

          <a
            href={contact.emailHref}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
              <IconMail className="h-4 w-4" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 uppercase">Email</span>
              <span className="truncate text-sm font-bold text-paper">{contact.email}</span>
            </span>
          </a>

          <span className="flex items-start gap-2.5 text-xs leading-relaxed text-white/45">
            <IconPin className="mt-px h-4 w-4 flex-shrink-0 text-brand-light" />
            {contact.area}
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/35">
            <span>© {new Date().getFullYear()} Vancos. Toate drepturile rezervate.</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
            <Link
              href="/termeni-si-conditii"
              className="transition-colors duration-200 hover:text-paper motion-reduce:transition-none"
            >
              Termeni și condiții
            </Link>
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase">București · România</span>
        </div>

        {/* Siglele au deja corp alb si colturi rotunjite in grafica, transparent
            doar in afara conturului — nu au nevoie de nicio placa in spate. */}
        <div className="flex flex-wrap items-center gap-4">
          {anpcBadges.map((badge) => (
            <a
              key={badge.href}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-light motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Image src={badge.src} alt={badge.alt} width={500} height={143} sizes="160px" className="h-10 w-auto" />
            </a>
          ))}
        </div>
      </div>

      {/* Filigranul repeta gestul din „De ce Vancos", unde semnul intrebarii iese
          din card: numele taiat de marginea de jos, nu un logo in plus. */}
      <span
        aria-hidden="true"
        className="footer-wordmark pointer-events-none block translate-y-[0.28em] text-center text-[22vw] leading-[0.75] font-bold tracking-tighter text-white/[0.045] select-none"
      >
        VANCOS
      </span>
    </footer>
  );
}
