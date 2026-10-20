"use client";

import { Analytics } from "@vercel/analytics/next";
import { useConsent } from "../_lib/consent";

/**
 * Vercel Analytics, încărcat doar după „Accept”.
 *
 * Nu scrie nimic pe dispozitiv, dar scriptul citește din browser adresa paginii,
 * sursa vizitei și tipul de dispozitiv și le trimite mai departe. Legea 506/2004,
 * art. 4 alin. (5), cere acord pentru orice acces la informații din dispozitiv
 * care nu e strict necesar, iar statistica nu e (EDPB, Ghidul 2/2023). Bannerul
 * promite exact asta: fără acord, nu se măsoară traficul.
 */
export function ConsentedAnalytics() {
  const consent = useConsent();
  return consent === "accepted" ? <Analytics /> : null;
}
