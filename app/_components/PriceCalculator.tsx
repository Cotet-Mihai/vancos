"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const materials = [
  { name: "Fier", pricePerKg: 1.2 },
  { name: "Aluminiu", pricePerKg: 6.5 },
  { name: "Cupru", pricePerKg: 28 },
  { name: "Bronz", pricePerKg: 20 },
  { name: "Alamă", pricePerKg: 18 },
  { name: "Plumb", pricePerKg: 5.5 },
];

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
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <span className="font-mono text-[10px] tracking-widest text-brand-light/70 uppercase">
          Cântar · estimare live
        </span>
        <span className="flex h-2 w-2 animate-pulse rounded-full bg-brand-light" />
      </div>

      <div className="flex flex-col divide-y divide-white/10 px-6">
        {materials.map((material, index) => (
          <div key={material.name} className="flex items-center justify-between gap-4 py-4">
            <div className="flex flex-col">
              <span className="font-semibold text-paper">{material.name}</span>
              <span className="font-mono text-xs text-brand-light/60">{material.pricePerKg.toFixed(2)} lei/kg</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => adjust(index, -STEP)}
                aria-label={`Scade cantitatea de ${material.name.toLowerCase()}`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand-light hover:text-brand-light"
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
                  className="w-16 rounded-lg border border-transparent bg-transparent text-center font-mono text-lg font-bold text-paper tabular-nums outline-none focus:border-brand-light"
                />
                <span className="text-xs font-normal text-paper/40">kg</span>
              </span>
              <button
                type="button"
                onClick={() => adjust(index, STEP)}
                aria-label={`Crește cantitatea de ${material.name.toLowerCase()}`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand-light hover:text-brand-light"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="m-6 mt-4 rounded-2xl bg-ink px-6 py-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-white/40 uppercase">Total estimat</span>
          <span
            className="font-mono text-4xl font-bold text-brand-light tabular-nums"
            style={{ textShadow: "0 0 16px rgba(62,155,92,0.6)" }}
          >
            {total.toLocaleString("ro-RO", { maximumFractionDigits: 1 })}
            <span className="ml-1 text-lg text-brand-light/60">lei</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 pb-6">
        <Link
          href="/contact"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-brand-light py-3 pr-6 pl-2 text-sm font-bold text-ink transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-brand-light">
            →
          </span>
          Solicită preluarea
        </Link>
        <p className="text-xs text-paper/50">
          Prețuri orientative, valabile la data actualizării. Prețul final se stabilește la recepția materialului.
        </p>
      </div>
    </div>
  );
}
