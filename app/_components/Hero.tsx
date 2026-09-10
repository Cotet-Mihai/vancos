"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/hero-truck.png";
import { IconTruck, IconContainer, IconBolt, IconRecycle } from "./icons";

const stats = [
  { icon: IconTruck, value: "3,5 t", label: "Autovehicule cu acces în tot Bucureștiul" },
  { icon: IconContainer, value: "4 tone", label: "Capacitate pe container" },
  { icon: IconBolt, value: "24-48h", label: "Timp mediu de intervenție" },
  { icon: IconRecycle, value: "500+", label: "Lucrări finalizate" },
];

export function Hero() {
  // Parallax pe scroll: fundalul coboară mai încet decât pagina, textul
  // alunecă ușor și se estompează la ieșirea din secțiune. Bara de cifre
  // rămâne pe loc — e podeaua secțiunii, nu conținut care pleacă.
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
    <section className="relative flex h-screen min-h-[640px] flex-col justify-center overflow-hidden bg-ink">
      <div ref={parallaxBgRef} className="absolute inset-0 will-change-transform">
        <div className="hero-zoom absolute inset-0">
          <Image
            src={heroImage}
            alt="Camion Vancos cu container de reciclare, pe fundalul orizontului Bucureștiului"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black from-0% via-black/70 via-30% to-transparent to-50%"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />

      <div
        ref={parallaxContentRef}
        className="relative z-10 flex w-full max-w-2xl flex-col gap-6 px-6 will-change-transform sm:px-24 lg:pr-6 lg:pl-48"
      >
        <span
          className="hero-rise text-xs font-bold tracking-[0.3em] text-white/60 uppercase"
          style={{ "--rise-delay": "0.2s" } as CSSProperties}
        >
          Servicii de colectare și reciclare
        </span>
        <h1
          className="hero-rise max-w-2xl text-5xl leading-[0.95] font-bold text-white sm:text-6xl lg:text-7xl"
          style={{ "--rise-delay": "0.35s" } as CSSProperties}
        >
          Facem loc
          <br />
          pentru un
          <br />
          <span className="whitespace-nowrap text-brand-light">oraș mai curat.</span>
        </h1>
        <p
          className="hero-rise max-w-md text-white/80"
          style={{ "--rise-delay": "0.5s" } as CSSProperties}
        >
          Colectăm și transportăm deșeuri din construcții,
          <br />
          demolări, gospodării și materiale reciclabile.
          <br />
          Rapid, eficient și fără complicații.
        </p>
        <div
          className="hero-rise flex flex-wrap gap-4"
          style={{ "--rise-delay": "0.65s" } as CSSProperties}
        >
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-brand-light py-2 pr-6 pl-2 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brand-light transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
              →
            </span>
            Solicită o ofertă
          </Link>
          <Link
            href="/servicii"
            className="flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 motion-reduce:transition-none"
          >
            Află mai multe
          </Link>
        </div>
      </div>

      <div
        className="hero-rise absolute inset-x-0 bottom-0 z-10 border-t border-white/10"
        style={{ "--rise-delay": "0.85s" } as CSSProperties}
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 sm:px-6">
              <stat.icon className="h-12 w-12 flex-shrink-0 text-brand-light" />
              <div className="flex flex-col">
                <dt className="text-xl font-bold text-white">{stat.value}</dt>
                <dd className="text-xs text-white/60">{stat.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
