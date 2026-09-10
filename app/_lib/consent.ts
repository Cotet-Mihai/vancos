"use client";

import { useSyncExternalStore } from "react";

/**
 * Consimțământul pentru conținutul extern încărcat pe site.
 *
 * Singurul lucru care poate seta cookie-uri aici este harta Google de pe pagina
 * de Contact, deci asta guvernează alegerea: acceptat înseamnă că harta se
 * încarcă, refuzat înseamnă că rămâne un substitut static până când vizitatorul
 * cere explicit altfel. Fără această legătură, bannerul ar fi doar decor.
 *
 * Alegerea se ține în `localStorage`, nu într-un cookie: e o preferință a
 * vizitatorului, strict necesară ca să nu-l întrebăm la fiecare pagină, și nu
 * părăsește browserul.
 */
export type Consent = "accepted" | "rejected";

/** Cât timp nu știm încă alegerea — pe server și la prima randare din browser. */
export type ConsentState = Consent | "unknown" | null;

const KEY = "vancos-consent";
const EVENT = "vancos-consent-change";

function read(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    // Mod privat sau stocare blocată: tratăm ca „încă nu a ales".
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  // `storage` prinde schimbarea făcută în altă filă a aceluiași site.
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * Întoarce `"unknown"` până la hidratare, apoi alegerea reală.
 *
 * `useSyncExternalStore` e potrivit aici tocmai pentru că starea trăiește în
 * afara React: citirea într-un efect ar însemna o scriere în stare după randare,
 * iar la hidratare bannerul ar clipi o clipă și pentru cine a ales deja.
 */
export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, read, () => "unknown" as const);
}

export function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Dacă nu putem salva, alegerea rămâne valabilă doar pentru pagina curentă.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}
