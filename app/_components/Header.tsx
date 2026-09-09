"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconMenu, IconClose, IconPhone } from "./icons";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-ink/95 shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-9 text-brand-light" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-white">VANCOS</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/50 uppercase">
              Mai curat, mai bine
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-xs font-bold tracking-widest uppercase transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-light transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <a
          href="tel:[telefon]"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light sm:flex"
        >
          <IconPhone className="h-4 w-4" />
          Sună acum
        </a>

        <button
          type="button"
          className="sm:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose className="h-6 w-6 text-white" /> : <IconMenu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 py-4 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:[telefon]"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase"
          >
            <IconPhone className="h-4 w-4" />
            Sună acum
          </a>
        </nav>
      )}
    </header>
  );
}
