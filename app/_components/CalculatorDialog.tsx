"use client";

import { useState } from "react";
import { PriceCalculator } from "./PriceCalculator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Butonul din bara de navigare, cu calculatorul deschis într-o fereastră.
 *
 * Widget-ul e chiar cel din pagină, nu o copie: prețurile, pașii și fereastra de
 * solicitare vin din același loc, deci nu pot ajunge să difere. Îi dăm doar altă
 * ramă, fiindcă aici cadrul îl pune dialogul.
 */
export function CalculatorDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light sm:flex"
          />
        }
      >
        Calcul rapid
      </DialogTrigger>

      <DialogContent className="flex max-h-[92dvh] flex-col gap-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-0 text-paper ring-0 sm:max-w-md">
        <DialogHeader className="gap-1 border-b border-white/10 px-5 py-4 text-left">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-light uppercase">
            Cântar · estimare live
          </span>
          <DialogTitle className="sr-only">Calcul rapid</DialogTitle>
          <DialogDescription className="sr-only">
            Introdu cantitățile de materiale reciclabile și vezi o estimare orientativă a valorii lor.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 overflow-y-auto">
          {/* Fără ramă și fără antet propriu: cadrul îl pune dialogul, iar
              antetul widget-ului ar dubla titlul ferestrei. */}
          <PriceCalculator className="overflow-hidden" showHeader={false} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
