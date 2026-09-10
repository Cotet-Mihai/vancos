"use client";

import { useMemo, useState } from "react";
import { PickupRequestDialog } from "./PickupRequestDialog";

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

type PriceCalculatorProps = {
  /** Rama widget-ului. În dialog o pune fereastra, deci se trimite alta. */
  className?: string;
  /** În dialog, antetul propriu ar dubla titlul ferestrei. */
  showHeader?: boolean;
};

export function PriceCalculator({ className, showHeader = true }: PriceCalculatorProps = {}) {
  // Cantitatile stau pe numele materialului, nu pe pozitie. Cu un vector indexat,
  // orice modificare a listei lasa starea veche nealiniata peste cea noua —
  // materialele adaugate la coada citesc `undefined`, iar inputul trece din
  // controlat in necontrolat si ramane gol.
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [dialogOpen, setDialogOpen] = useState(false);

  const quantityOf = (name: string) => quantities[name] ?? 0;

  const lines = useMemo(
    () =>
      materials
        .map((material) => ({ ...material, quantity: quantities[material.name] ?? 0 }))
        .filter((line) => line.quantity > 0),
    [quantities],
  );

  const total = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity * line.pricePerKg, 0),
    [lines],
  );

  function adjust(name: string, delta: number) {
    setQuantities((current) => ({ ...current, [name]: Math.max(0, (current[name] ?? 0) + delta) }));
  }

  function setQuantity(name: string, value: string) {
    const parsed = Number(value);
    if (value !== "" && !Number.isFinite(parsed)) return;
    setQuantities((current) => ({ ...current, [name]: value === "" ? 0 : Math.max(0, parsed) }));
  }

  return (
    <div
      className={
        className ??
        "overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface shadow-[0_32px_70px_-28px_rgba(0,0,0,0.9),0_0_50px_-20px_rgba(62,155,92,0.25)]"
      }
    >
      {showHeader && (
        <div className="border-b border-white/10 px-5 py-3">
          <span className="font-mono text-[10px] tracking-widest text-brand-light/70 uppercase">
            Cântar · estimare live
          </span>
        </div>
      )}

      <div className="flex flex-col divide-y divide-white/10 px-5 pt-1">
        {materials.map((material) => (
          <div key={material.name} className="flex items-center justify-between gap-3 py-2">
            <div className="flex min-w-0 flex-col">
              <span className="text-[13px] leading-tight font-semibold text-paper sm:text-sm">{material.name}</span>
              <span className="font-mono text-[10px] leading-tight text-brand-light/60 sm:text-[11px]">
                {material.pricePerKg.toLocaleString("ro-RO", { minimumFractionDigits: 2 })} lei/kg
              </span>
            </div>

            <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => adjust(material.name, -STEP)}
                aria-label={`Scade cantitatea de ${material.name.toLowerCase()}`}
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-sm text-paper transition-colors hover:border-brand-light hover:text-brand-light sm:h-7 sm:w-7"
              >
                −
              </button>
              <span className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  value={quantityOf(material.name)}
                  onChange={(event) => setQuantity(material.name, event.target.value)}
                  aria-label={`Cantitate de ${material.name.toLowerCase()} în kg`}
                  className="w-9 rounded-lg border border-transparent bg-transparent text-center font-mono text-sm font-bold text-paper tabular-nums outline-none focus:border-brand-light sm:w-11 sm:text-base"
                />
                <span className="text-[10px] font-normal text-paper/40">kg</span>
              </span>
              <button
                type="button"
                onClick={() => adjust(material.name, STEP)}
                aria-label={`Crește cantitatea de ${material.name.toLowerCase()}`}
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-sm text-paper transition-colors hover:border-brand-light hover:text-brand-light sm:h-7 sm:w-7"
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
        <button
          type="button"
          onClick={() => setDialogOpen(true)}
          className="flex w-full items-center justify-center rounded-full bg-brand-light px-6 py-2.5 text-sm font-bold text-ink transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none"
        >
          Solicită preluarea
        </button>
        <p className="text-[11px] leading-relaxed text-paper/50">
          Prețuri orientative, actualizate la {PRETURI_LA}. Prețul final se stabilește la cântărirea și verificarea
          materialului.
        </p>
      </div>

      <PickupRequestDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        lines={lines}
        total={total}
        pricedAt={PRETURI_LA}
      />
    </div>
  );
}
