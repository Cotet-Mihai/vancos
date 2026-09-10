"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Prețuri comunicate de Vancos, în ordinea primită. Când se schimbă, se
// actualizează și `PRETURI_LA`, care apare sub total — un preț orientativ fără
// data la care a fost valabil nu-i spune nimic clientului.
const materials = [
  { name: "Fier", pricePerKg: 0.8 },
  { name: "Cupru", pricePerKg: 42 },
  { name: "Bronz", pricePerKg: 21 },
  { name: "Aluminiu", pricePerKg: 5 },
  { name: "Plumb", pricePerKg: 4 },
  { name: "Radiatoare aluminiu", pricePerKg: 2 },
  { name: "Radiatoare cupru + aluminiu", pricePerKg: 12 },
  { name: "Baterii auto", pricePerKg: 2 },
  { name: "Cabluri electrice", pricePerKg: 6 },
];

const PRETURI_LA = "10 septembrie 2026";

const STEP = 5;

export function PriceCalculator() {
  const [quantities, setQuantities] = useState<number[]>(materials.map(() => 0));

  const total = useMemo(
    () => materials.reduce((sum, material, index) => sum + quantities[index] * material.pricePerKg, 0),
    [quantities],
  );

  function adjust(index: number, delta: number) {
    setQuantities((current) =>
      current.map((quantity, i) => (i === index ? Math.max(0, quantity + delta) : quantity)),
    );
  }

  function setQuantity(index: number, value: string) {
    const parsed = Number(value);
    const next = value === "" ? 0 : Number.isFinite(parsed) ? Math.max(0, parsed) : quantities[index];
    setQuantities((current) => current.map((quantity, i) => (i === index ? next : quantity)));
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-mono text-[10px] tracking-widest text-brand-light/70 uppercase">
          Cântar · estimare live
        </span>
        <span className="flex h-2 w-2 animate-pulse rounded-full bg-brand-light" />
      </div>

      <div className="flex max-h-[19rem] flex-col divide-y divide-white/10 overflow-y-auto px-5 sm:max-h-[21rem]">
        {materials.map((material, index) => (
          <div key={material.name} className="flex items-center justify-between gap-3 py-2.5 sm:gap-4">
            <div className="flex min-w-0 flex-col">
              <span className="text-sm leading-tight font-semibold text-paper">{material.name}</span>
              <span className="font-mono text-[11px] leading-tight text-brand-light/60">
                {material.pricePerKg.toLocaleString("ro-RO", { minimumFractionDigits: 2 })} lei/kg
              </span>
            </div>

            <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => adjust(index, -STEP)}
                aria-label={`Scade cantitatea de ${material.name.toLowerCase()}`}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand-light hover:text-brand-light sm:h-8 sm:w-8"
              >
                −
              </button>
              <span className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  value={quantities[index]}
                  onChange={(event) => setQuantity(index, event.target.value)}
                  aria-label={`Cantitate de ${material.name.toLowerCase()} în kg`}
                  className="w-11 rounded-lg border border-transparent bg-transparent text-center font-mono text-base font-bold text-paper tabular-nums outline-none focus:border-brand-light sm:w-16 sm:text-lg"
                />
                <span className="text-xs font-normal text-paper/40">kg</span>
              </span>
              <button
                type="button"
                onClick={() => adjust(index, STEP)}
                aria-label={`Crește cantitatea de ${material.name.toLowerCase()}`}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand-light hover:text-brand-light sm:h-8 sm:w-8"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="m-5 mt-4 rounded-2xl bg-ink px-5 py-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-white/40 uppercase">Total estimat</span>
          <span
            className="font-mono text-3xl font-bold text-brand-light tabular-nums sm:text-4xl"
            style={{ textShadow: "0 0 16px rgba(62,155,92,0.6)" }}
          >
            {total.toLocaleString("ro-RO", { maximumFractionDigits: 1 })}
            <span className="ml-1 text-lg text-brand-light/60">lei</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-5 pb-5">
        <Link
          href="/contact"
          className="flex w-full items-center justify-center rounded-full bg-brand-light px-6 py-2.5 text-sm font-bold text-ink transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none"
        >
          Solicită preluarea
        </Link>
        <p className="text-[11px] leading-relaxed text-paper/50">
          Prețuri orientative, actualizate la {PRETURI_LA}. Prețul final se stabilește la cântărirea și verificarea
          materialului.
        </p>
      </div>
    </div>
  );
}
