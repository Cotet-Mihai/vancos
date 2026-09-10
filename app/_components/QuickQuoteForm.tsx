"use client";

import Link from "next/link";
import { useState, useTransition, type FormEvent } from "react";
import { contact } from "../_lib/contact";
import { sendRequest } from "../_actions/send-request";
import type { RequestResult } from "../_lib/request";
import { IconChevronDown } from "./icons";

const wasteTypes = [
  "Moloz / deșeuri din construcții",
  "Deșeuri din demolări",
  "Deșeuri din gospodărie",
  "Materiale reciclabile",
  "Mixt, mai multe tipuri de deșeuri",
  "Altceva",
];

// Aceleași clase pentru input, select si textarea, ca sa nu se vada nicio diferenta
// de inaltime sau de contur intre ele in coloana din dreapta.
const fieldClass =
  "w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-paper outline-none sm:py-3.5 transition-colors duration-200 placeholder:text-white/30 focus:border-brand-light/70 focus:bg-white/[0.07] motion-reduce:transition-none";

const labelClass = "font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase";

export function QuickQuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(wasteTypes[0]);
  const [details, setDetails] = useState("");
  const [agreed, setAgreed] = useState(false);
  // Câmpul-capcană: rămâne gol la oameni, se completează la roboții care umplu
  // orice câmp găsit în formular.
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState<RequestResult | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    startTransition(async () => {
      setResult(await sendRequest({ kind: "oferta", name, email, phone, wasteType: type, details, website }));
    });
  }

  if (result?.ok) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-brand-light/30 bg-brand/10 p-7 text-center sm:p-9">
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
        <h3 className="text-xl font-bold text-paper">Cererea a plecat</h3>
        <p className="max-w-sm text-sm leading-relaxed text-paper/70">
          Ți-am trimis o confirmare pe {email}. Îți răspundem cu o ofertă în 24-48 de ore.
        </p>
        <a href={contact.phoneHref} className="text-sm font-bold text-brand-light">
          Sau sună-ne: {contact.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-ink/70 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:gap-6 sm:p-7 lg:p-9"
    >
      <div className="flex flex-col gap-4 border-b border-dashed border-white/15 pb-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-lg font-bold tracking-tight text-paper">VANCOS</span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Cerere rapidă</span>
        </div>
        <h3 className="text-xl font-bold text-paper sm:text-2xl">Solicită o ofertă</h3>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
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

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Ce ai de ridicat</span>
          <span className="relative block">
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className={`${fieldClass} field-select appearance-none pr-11 [color-scheme:dark]`}
            >
              {wasteTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <IconChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-brand-light" />
          </span>
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Detalii (opțional)</span>
          <textarea
            rows={4}
            placeholder="Cantitate aproximativă, adresă, când ai nevoie de noi…"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            className={`${fieldClass} resize-none`}
          />
        </label>
      </div>

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
            <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {result && !result.ok && (
        <p
          role="alert"
          className="rounded-xl border border-accent-warm/40 bg-accent-warm/10 px-4 py-3 text-xs leading-relaxed text-accent-warm"
        >
          {result.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex items-center justify-center rounded-full bg-brand-light py-4 text-sm font-bold text-ink shadow-[0_18px_40px_-18px_rgba(62,155,92,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        {pending ? "Se trimite…" : "Trimite cererea"}
      </button>

      <p className="text-center text-xs text-white/40">Îți răspundem în 24-48h. Fără costuri ascunse.</p>
    </form>
  );
}
