"use client";

import { resetConsent } from "../_lib/consent";

/**
 * Redeschide bannerul de consimțământ, de pe orice pagină.
 *
 * E buton, nu link: nu duce nicăieri, doar uită alegerea, iar bannerul apare
 * din nou peste pagina curentă.
 */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={resetConsent} className={className}>
      Setări cookie-uri
    </button>
  );
}
