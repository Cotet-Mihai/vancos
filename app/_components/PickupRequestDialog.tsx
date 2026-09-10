"use client";

import { useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import { contact } from "../_lib/contact";
import { sendRequest } from "../_actions/send-request";
import { lei, type PickupLine, type RequestResult } from "../_lib/request";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PickupRequestDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Doar materialele cu cantitate, în ordinea din calculator. */
  lines: PickupLine[];
  total: number;
  /** Data la care erau valabile prețurile, ca oferta să nu circule fără ea. */
  pricedAt: string;
};

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand-light/70 focus:bg-white/[0.07] motion-reduce:transition-none";

const labelClass = "font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase";

export function PickupRequestDialog({ open, onOpenChange, lines, total, pricedAt }: PickupRequestDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState<RequestResult | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    startTransition(async () => {
      setResult(await sendRequest({ kind: "preluare", name, email, phone, lines, total, website }));
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[92dvh] flex-col gap-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-0 text-paper ring-0 sm:max-w-lg">
        <DialogHeader className="gap-1 border-b border-white/10 px-5 py-4 text-left">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-light uppercase">
            Solicitare preluare
          </span>
          <DialogTitle className="text-lg font-bold text-paper">Verifică și trimite</DialogTitle>
          <DialogDescription className="sr-only">
            Verifică materialele calculate, completează datele de contact și trimite solicitarea de preluare.
          </DialogDescription>
        </DialogHeader>

        {result?.ok ? (
          <div className="flex flex-col items-center gap-4 px-5 py-10 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-ink">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                <path
                  d="M5 12.5l4.5 4.5L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="text-xl font-bold text-paper">Solicitarea a plecat</h3>
            <p className="max-w-sm text-sm leading-relaxed text-paper/70">
              Ți-am trimis o confirmare pe {email}. Îți răspundem în 24-48 de ore.
            </p>
            <a href={contact.phoneHref} className="text-sm font-bold text-brand-light">
              Sau sună-ne: {contact.phone}
            </a>
          </div>
        ) : (
        <div className="flex min-h-0 flex-col gap-5 overflow-y-auto px-5 py-5">
          <section className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <span className={labelClass}>Previzualizare solicitare</span>

            {lines.length === 0 ? (
              <p className="text-sm text-paper/60">
                Nu ai introdus încă nicio cantitate. Închide fereastra și adaugă materialele pe care vrei să le predai.
              </p>
            ) : (
              <>
                <ul className="flex flex-col divide-y divide-white/5">
                  {lines.map((line) => (
                    <li key={line.name} className="flex items-baseline justify-between gap-3 py-2">
                      <span className="flex min-w-0 flex-col">
                        <span className="text-sm font-semibold text-paper">{line.name}</span>
                        <span className="font-mono text-[10px] text-white/40">
                          {line.quantity} kg × {lei(line.pricePerKg)} lei
                        </span>
                      </span>
                      <span className="font-mono text-sm font-bold text-paper tabular-nums">
                        {lei(line.quantity * line.pricePerKg)} lei
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline justify-between gap-3 border-t border-dashed border-white/15 pt-3">
                  <span className={labelClass}>Total estimat</span>
                  <span className="font-mono text-xl font-bold text-brand-light tabular-nums">{lei(total)} lei</span>
                </div>
                <p className="text-[11px] leading-relaxed text-white/40">
                  Prețuri orientative, actualizate la {pricedAt}. Valoarea finală se stabilește la cântărirea și
                  verificarea materialului.
                </p>
              </>
            )}
          </section>

          <form id="pickup-form" onSubmit={handleSubmit} className="relative flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Nume</span>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Numele tău"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelClass}>Email</span>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="adresa@exemplu.ro"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelClass}>Telefon</span>
              <input
                type="tel"
                required
                autoComplete="tel"
                placeholder="07xx xxx xxx"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={fieldClass}
              />
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <span className="relative mt-px flex h-5 w-5 flex-shrink-0">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/[0.04] transition-colors duration-200 checked:border-brand-light checked:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light motion-reduce:transition-none"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute inset-0 m-auto h-3.5 w-3.5 text-ink opacity-0 transition-opacity duration-200 peer-checked:opacity-100 motion-reduce:transition-none"
                >
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs leading-relaxed text-white/50">
                Sunt de acord cu{" "}
                <Link
                  href="/termeni-si-conditii"
                  className="font-semibold text-brand-light underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline motion-reduce:transition-none"
                >
                  termenii și condițiile
                </Link>{" "}
                și cu prelucrarea datelor mele pentru a primi o ofertă.
              </span>
            </label>
            {/* Capcana pentru roboți: scoasă din ecran și din ordinea de tabulare. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
          </form>
        </div>
        )}

        {!result?.ok && (
        <DialogFooter className="flex-col gap-3 border-t border-white/10 px-5 py-4">
          {result && !result.ok && (
            <p
              role="alert"
              className="w-full rounded-xl border border-accent-warm/40 bg-accent-warm/10 px-4 py-3 text-xs leading-relaxed text-accent-warm"
            >
              {result.error}
            </p>
          )}

          <button
            type="submit"
            form="pickup-form"
            disabled={lines.length === 0 || pending}
            className="flex w-full items-center justify-center rounded-full bg-brand-light px-6 py-3 text-sm font-bold text-ink transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {pending ? "Se trimite…" : "Trimite solicitarea"}
          </button>
          <p className="text-center text-[11px] text-white/40">Îți răspundem în 24-48h. Fără costuri ascunse.</p>
        </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
