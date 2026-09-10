"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/hero-truck-2.png";
import { IconTruck, IconContainer, IconBolt, IconRecycle } from "./icons";

// Pe mobil banda are patru coloane într-un ecran de 360-400px, deci eticheta
// lungă ar cădea pe patru rânduri. `short` e versiunea care încape acolo.
const stats = [
  { icon: IconTruck, value: "3,5 t", label: "Autovehicule cu acces în tot Bucureștiul", short: "Autovehicule" },
  { icon: IconContainer, value: "4 tone", label: "Capacitate pe container", short: "Pe container" },
  { icon: IconBolt, value: "24-48h", label: "Timp mediu de intervenție", short: "Intervenție" },
  { icon: IconRecycle, value: "500+", label: "Lucrări finalizate", short: "Lucrări" },
];

export function Hero() {
  // Parallax pe scroll: fundalul coboară mai încet decât pagina, textul
  // alunecă ușor și se estompează la ieșirea din secțiune.
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const parallaxContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bg = parallaxBgRef.current;
        const content = parallaxContentRef.current;
        if (!bg || !content) return;
        const y = window.scrollY;
        const progress = Math.min(1, y / window.innerHeight);
        bg.style.transform = `translateY(${y * 0.35}px)`;
        content.style.transform = `translateY(${y * 0.22}px)`;
        content.style.opacity = `${Math.max(0, 1 - progress * 1.2)}`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    // Banda de cifre stă în afara secțiunii, ca pe mobil să curgă sub ea, în
    // loc să înghesuie primul ecran. De la `sm` în sus se ancorează înapoi pe
    // marginea de jos a hero-ului, prin containerul ăsta — deci pe desktop
    // așezarea rămâne exact cea de dinainte.
    <div className="relative">
      <section className="relative flex h-svh min-h-[560px] flex-col justify-center overflow-hidden bg-ink">
        <div ref={parallaxBgRef} className="absolute inset-0 will-change-transform">
          <div className="hero-zoom absolute inset-0">
            <Image
              src={heroImage}
              alt="Camion Vancos de 3,5 tone cu container încărcat cu moloz, pe fundalul orizontului Bucureștiului"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-black from-0% via-black/70 via-30% to-transparent to-50% sm:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/90 sm:from-black/50 sm:via-transparent sm:to-black/85"
        />

        <div
          ref={parallaxContentRef}
          className="absolute inset-0 z-10 flex flex-col justify-between px-6 pt-28 pb-8 will-change-transform sm:relative sm:inset-auto sm:w-full sm:max-w-2xl sm:justify-center sm:gap-6 sm:px-24 sm:pt-0 sm:pb-0 lg:pr-6 lg:pl-48"
        >
          <div className="flex flex-col gap-5 sm:gap-6">
            <span
              className="hero-rise text-xs font-bold tracking-[0.3em] text-white/60 uppercase"
              style={{ "--rise-delay": "0.2s" } as CSSProperties}
            >
              Servicii de colectare și reciclare
            </span>
            {/* Rândurile forțate sunt o alegere tipografică de desktop: la lățime
                de telefon ar rupe titlul în locuri greșite, așa că sub `sm` textul
                curge singur. `hidden` scoate saltul, `sm:inline` îl readuce. */}
            <h1
              className="hero-rise max-w-2xl text-[2.5rem] leading-[1] font-bold text-white sm:text-6xl sm:leading-[0.95] lg:text-7xl"
              style={{ "--rise-delay": "0.35s" } as CSSProperties}
            >
              Facem loc
              <br className="hidden sm:inline" /> pentru un
              <br className="hidden sm:inline" />{" "}
              <span className="text-brand-gradient sm:whitespace-nowrap">oraș mai curat.</span>
            </h1>
            <p
              className="hero-rise max-w-md text-white/80"
              style={{ "--rise-delay": "0.5s" } as CSSProperties}
            >
              Colectăm și transportăm deșeuri din construcții,
              <br className="hidden sm:inline" /> demolări, gospodării și materiale reciclabile.
              <br className="hidden sm:inline" /> Rapid, eficient și fără complicații.
            </p>
          </div>

          <div
            className="hero-rise flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            style={{ "--rise-delay": "0.65s" } as CSSProperties}
          >
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-brand-light px-6 py-2.5 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto sm:justify-start sm:py-2 sm:pr-6 sm:pl-2"
            >
              <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-ink text-brand-light transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 sm:flex">
                →
              </span>
              Solicită o ofertă
            </Link>
            <Link
              href="/servicii"
              className="flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 motion-reduce:transition-none sm:w-auto sm:py-3"
            >
              Află mai multe
            </Link>
          </div>
        </div>
      </section>

      <div
        className="hero-rise border-y border-white/10 sm:absolute sm:inset-x-0 sm:bottom-0 sm:z-10 sm:border-b-0"
        style={{ "--rise-delay": "0.85s" } as CSSProperties}
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 px-4 py-5 sm:px-6 sm:py-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center gap-1 px-1 text-center sm:flex-row sm:gap-3 sm:px-6 sm:text-left"
            >
              <stat.icon className="h-6 w-6 flex-shrink-0 text-brand-light sm:h-12 sm:w-12" />
              <div className="flex min-w-0 flex-col">
                <dt className="text-sm font-bold text-white sm:text-xl">{stat.value}</dt>
                <dd className="text-[10px] leading-tight text-white/60 sm:text-xs">
                  <span className="sm:hidden">{stat.short}</span>
                  <span className="hidden sm:inline">{stat.label}</span>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
