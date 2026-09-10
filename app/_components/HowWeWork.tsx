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

    function measure() {
      frame = 0;
      const node = trackRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      if (distance <= 0) {
        setProgress(1);
        return;
      }
      setProgress(Math.min(1, Math.max(0, -rect.top / distance)));
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

  // Fără mișcare: traseul e afișat parcurs integral, fără tranziții.
  const reached = reduced ? steps.length - 1 : Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const travelled = reduced ? 100 : progress * 100;

  return (
    <div ref={trackRef} className="relative h-[220vh] sm:h-[300vh]">
      <section className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-brand-light/10" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 sm:gap-14">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">Dispatch — 3 pași</span>
            <h2 className="text-4xl font-bold text-paper sm:text-5xl">Cum lucrăm</h2>
          </div>

          <ol className="relative grid gap-8 sm:grid-cols-3 sm:gap-10">
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
                  className={`relative flex flex-col gap-4 transition-opacity duration-500 motion-reduce:transition-none ${
                    done ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 motion-reduce:transition-none ${
                      done
                        ? "border-brand-light bg-brand-light text-ink"
                        : "border-dashed border-white/25 bg-surface text-white/40"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-paper">{step.title}</h3>
                  <p className="text-sm text-paper/70">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}
