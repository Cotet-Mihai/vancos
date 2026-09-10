"use client";

import { useEffect, useRef, useState } from "react";
import { IconPhone, IconClock, IconContainer, IconTruck } from "./icons";

const steps = [
  {
    icon: IconPhone,
    title: "Ne contactezi",
    description: "Suni, ne scrii sau completezi formularul de contact și ne spui ce deșeuri ai de ridicat.",
  },
  {
    icon: IconClock,
    title: "Stabilim programarea",
    description: "Confirmăm împreună ziua și intervalul orar potrivit pentru intervenție.",
  },
  {
    icon: IconContainer,
    title: "Ridicăm deșeurile",
    description: "Venim cu utilajul potrivit și, la nevoie, cu forță de muncă pentru încărcare.",
  },
];

// Drumul traversează tot ecranul, dincolo de containerul de conținut: 50% duce în centrul
// grilei, minus 50vw ajunge la marginea ferestrei. Secțiunea are overflow-hidden, deci
// depășirea cu lățimea scrollbar-ului (vw o include) e tăiată, fără scroll orizontal.
const TRACK_EDGE = "calc(50% - 50vw)";

// IconTruck are roțile la 20.55 din 24 unități de viewBox, deci ~14% spațiu gol dedesubt.
// Ridicarea cu 85.5% din propria înălțime pune roțile exact pe linie.
const TRUCK_LIFT = "-85.5%";

export function HowWeWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let frame = 0;

    // Caruselul e mutat programatic, din același progres care mișcă și camionul
    // de pe desktop. Containerul e `overflow-x-hidden`, deci degetul nu-l poate
    // trage în altă parte — nu există două surse de adevăr care să se bată.
    function syncCarousel(value: number) {
      const el = carouselRef.current;
      if (!el) return;
      const first = el.querySelector<HTMLElement>('[data-step="0"]');
      const second = el.querySelector<HTMLElement>('[data-step="1"]');
      if (!first || !second) return;
      const stride = second.offsetLeft - first.offsetLeft;
      if (stride <= 0) return;
      el.scrollLeft = value * (steps.length - 1) * stride;
    }

    function measure() {
      frame = 0;
      const node = trackRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const next = distance <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / distance));
      setProgress(next);
      syncCarousel(next);
    }

    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Liniuțele duc pagina în punctul din pistă care aduce fișa cerută în centru.
  function goTo(index: number) {
    const node = trackRef.current;
    if (!node) return;
    const distance = node.offsetHeight - window.innerHeight;
    if (distance <= 0) return;
    window.scrollTo({
      top: node.offsetTop + (index / (steps.length - 1)) * distance,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  // Fără mișcare: traseul e afișat parcurs integral, fără tranziții.
  const reached = reduced ? steps.length - 1 : Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const travelled = reduced ? 100 : progress * 100;
  const active = Math.round(progress * (steps.length - 1));

  return (
    <div ref={trackRef} className="relative h-[200vh] sm:h-[300vh]">
      <section className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-brand-light/10" />
        <div
          className="dot-grid absolute inset-0"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 sm:gap-14">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">Dispatch · 3 pași</span>
            <h2 className="text-3xl font-bold text-paper sm:text-5xl">Cum lucrăm</h2>
          </div>

          <ol
            ref={carouselRef}
            className="relative -mx-6 flex gap-4 overflow-x-hidden px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-10 sm:overflow-visible sm:px-0"
          >
            <div
              aria-hidden="true"
              className="absolute top-7 hidden sm:block"
              style={{ left: TRACK_EDGE, right: TRACK_EDGE }}
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/10" />
              <span
                className="absolute top-0 left-0 h-px bg-brand-light transition-[width] duration-150 ease-out motion-reduce:transition-none"
                style={{ width: `${travelled}%` }}
              />
              <span
                className="absolute top-0 z-20 text-brand-light transition-[left] duration-150 ease-out motion-reduce:transition-none"
                style={{ left: `${travelled}%`, transform: `translate(-50%, ${TRUCK_LIFT})` }}
              >
                <IconTruck className="h-10 w-10 drop-shadow-[0_0_10px_rgba(62,155,92,0.45)]" />
              </span>
            </div>

            {steps.map((step, index) => {
              const done = index <= reached;
              return (
                <li
                  key={step.title}
                  data-step={index}
                  className={`relative flex w-[82%] flex-shrink-0 flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-ink/40 p-5 backdrop-blur-sm transition-opacity duration-500 motion-reduce:transition-none sm:w-auto sm:flex-shrink sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none ${
                    done ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest text-brand-light sm:hidden">
                    PAS {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 motion-reduce:transition-none sm:h-14 sm:w-14 ${
                      done
                        ? "border-brand-light bg-brand-light text-ink"
                        : "border-dashed border-white/25 bg-surface text-white/40"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1.5 sm:gap-4">
                    <h3 className="text-base font-semibold text-paper sm:text-lg">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-paper/70 sm:text-sm">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex justify-center gap-2 sm:hidden">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Mergi la pasul ${index + 1}: ${step.title}`}
                aria-current={index === active}
                className={`h-1 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  index === active ? "w-8 bg-brand-light" : "w-4 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
