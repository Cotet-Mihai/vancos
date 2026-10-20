/**
 * Datele de identificare ale firmei, pentru paginile legale.
 *
 * ATENȚIE — CÂMPURILE CU `null` TREBUIE COMPLETATE ÎNAINTE DE PUBLICARE.
 *
 * Datele astea nu se deduc și nu se aproximează: un CUI greșit pe o pagină de
 * termeni e o declarație falsă către consumatori, nu o scăpare de redactare.
 * Se iau din certificatul de înregistrare.
 *
 * Cât timp un câmp e `null`, pagina afișează în locul lui un marcaj vizibil, ca
 * să nu poată fi publicată din greșeală fără să observe cineva.
 */
export interface DateFirma {
  /** Denumirea completă, cu forma juridică. Ex: „Vancos Recycling S.R.L." */
  denumire: string | null;
  /** Codul unic de înregistrare, cu tot cu prefixul RO dacă e plătitoare de TVA. */
  cui: string | null;
  /** Numărul din registrul comerțului. Ex: „J40/1234/2024". */
  registruComert: string | null;
  /** Sediul social, așa cum apare în registrul comerțului. */
  sediuSocial: string | null;
  /** Anul înregistrării, pentru vechimea afișată public. */
  infiintata: string | null;
}

/**
 * Preluate din registrul ANAF (webservicesp.anaf.ro), 10 septembrie 2026.
 *
 * Firma e înregistrată în scopuri de TVA din 1 iunie 2019, deci codul fiscal se
 * scrie cu prefix: `RO40212045`. Codul din registrul comerțului, fără prefix,
 * rămâne 40212045 — sunt două lucruri diferite, iar pe facturi se cere cel cu
 * prefix. Dacă firma iese vreodată din evidența TVA, prefixul trebuie scos.
 *
 * Codul poștal returnat de ANAF vine trunchiat („22271" în loc de șase cifre),
 * așa că nu apare în pagină — nu-l completăm ghicind cifra lipsă.
 */
export const firma: DateFirma = {
  denumire: "Vancos Recycling S.R.L.",
  cui: "RO40212045",
  registruComert: "J40/16910/2018",
  sediuSocial: "Str. Știucii nr. 31, camera 3, Sector 2, București",
  infiintata: "2018",
};

/** Data ultimei revizuiri a textului, afișată în pagină. */
export const actualizat = "20 octombrie 2026";

export const ANPC = "https://anpc.gov.ro";

/**
 * Ținta pictogramei SAL, impusă de Ordinul ANPC 449/2022, art. 2 alin. (2), în
 * forma modificată prin Ordinul 270/2026. Vechiul `anpc.ro/ce-este-sal` nu mai
 * îndeplinește cerința.
 *
 * Platforma europeană SOL a fost desființată din 20 iulie 2025 (Regulamentul
 * UE 2024/3228), deci nu mai are ce să apară pe site.
 */
export const ANPC_SAL = "https://reclamatiisal.anpc.ro";
