"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact } from "../_lib/contact";
import { IconPhone, IconMail } from "./icons";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const open = openedAt === pathname;

  const setOpen = (next: boolean | ((value: boolean) => boolean)) => {
    const value = typeof next === "function" ? next(open) : next;
    setOpenedAt(value ? pathname : null);
  };

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cât e deschis: pagina nu derulează, Escape închide.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenedAt(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 sm:pointer-events-none sm:top-4 sm:px-6 ${
          scrolled && !open ? "bg-ink/80 backdrop-blur-md sm:bg-transparent sm:backdrop-blur-none" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:pointer-events-auto sm:w-fit sm:gap-14 sm:rounded-full sm:border sm:border-white/15 sm:bg-ink/40 sm:py-3 sm:pr-3 sm:pl-6 sm:backdrop-blur-md lg:gap-24">
          <Link href="/" className="relative z-10 flex items-center" onClick={() => setOpen(false)}>
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
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light sm:flex"
          >
            <IconPhone className="h-4 w-4" />
            Sună acum
          </a>

          {/* Hamburgerul rămâne pe loc; liniile se rotesc în X când e deschis. */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((value) => !value)}
            className="relative z-10 flex h-10 w-10 items-center justify-center sm:hidden"
          >
            <span
              className={`absolute h-px w-6 bg-white transition-all duration-300 motion-reduce:transition-none ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-white transition-all duration-300 motion-reduce:transition-none ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Meniul cât pagina. `inert` cât e închis, ca linkurile invizibile să nu
          primească focus și să nu fie citite de tehnologiile asistive. */}
      <div
        inert={!open}
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-500 ease-out sm:hidden motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          aria-hidden="true"
          className="dot-grid absolute inset-0 opacity-60"
        />

        <div className="relative flex h-full flex-col px-6 pt-24 pb-8">
          <nav className="flex flex-1 flex-col items-start justify-center gap-2">
            {links.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-4xl font-bold transition-all duration-500 motion-reduce:transition-none ${
                    active ? "text-brand-light" : "text-paper/80"
                  } ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                  style={{ transitionDelay: open ? `${200 + index * 70}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div
            className={`flex flex-col gap-4 border-t border-white/10 pt-6 transition-all duration-500 motion-reduce:transition-none ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
          >
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-light px-6 py-3 text-sm font-bold text-ink"
            >
              <IconPhone className="h-4 w-4" />
              {contact.phone}
            </a>
            <a
              href={contact.emailHref}
              className="flex items-center justify-center gap-2 text-sm text-white/55 transition-colors hover:text-paper"
            >
              <IconMail className="h-4 w-4 text-brand-light" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
