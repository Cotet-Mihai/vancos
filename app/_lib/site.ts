/**
 * Identitatea site-ului pentru motoare de căutare și pentru asistenții AI.
 *
 * ⚠️ `NEXT_PUBLIC_SITE_URL` trebuie setat în Vercel, pe domeniul real. Fără el
 * rămâne valoarea de mai jos, iar adresele canonice, harta site-ului și datele
 * structurate ar trimite spre un domeniu greșit — ceea ce e mai rău decât să
 * lipsească, fiindcă un canonic greșit spune motorului să nu indexeze pagina.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vancos.ro").replace(/\/$/, "");

export const siteName = "Vancos";

/** Adresă absolută, cerută de datele structurate și de Open Graph. */
export const absolute = (path: string) => new URL(path, siteUrl).toString();

/**
 * Întrebările frecvente stau aici, nu în pagină, fiindcă le folosesc două
 * lucruri: acordeonul vizibil și datele structurate `FAQPage`. Ținute separat,
 * s-ar desincroniza la prima corectură — iar un răspuns diferit în schemă față
 * de cel din pagină e exact genul de nepotrivire pe care Google o penalizează.
 */
export type Faq = { question: string; answer: string };
