import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ink text-white/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-7 text-brand-light" />
            <span className="text-lg font-bold text-white">VANCOS</span>
          </div>
          <p className="max-w-xs text-sm text-white/60">
            Degajare deșeuri din construcții, demolări și gospodării, plus colectare de reciclabile — în toată zona
            București.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-white">Linkuri</span>
          <Link href="/servicii" className="text-white/60 hover:text-white">
            Servicii
          </Link>
          <Link href="/despre-noi" className="text-white/60 hover:text-white">
            Despre noi
          </Link>
          <Link href="/contact" className="text-white/60 hover:text-white">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/60">
          <span className="font-semibold text-white">Contact</span>
          <span>[telefon]</span>
          <span>[email]</span>
          <span>Deservim toată zona București</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vancos. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
