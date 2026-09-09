"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { IconMenu, IconClose } from "./icons";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8 text-brand" />
          <span className="text-lg font-bold tracking-tight text-ink">VANCOS</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 text-xs font-bold tracking-widest text-ink/60 uppercase transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light"
          >
            Cere ofertă
          </Link>
        </nav>

        <button
          type="button"
          className="sm:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose className="h-6 w-6 text-ink" /> : <IconMenu className="h-6 w-6 text-ink" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 px-6 py-4 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-ink/80 hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
