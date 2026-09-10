import { contact } from "./contact";
import type { Faq } from "./site";

/**
 * Întrebările frecvente, într-un singur loc: le afișează acordeonul de pe Acasă
 * și le publică datele structurate `FAQPage`. Un răspuns care ar diferi între
 * cele două ar fi marcaj înșelător, nu o scăpare de redactare.
 */
export const faqs: Faq[] = [
  {
    question: "Ce zone din București deserviți?",
    answer: "Lucrăm în toate cele 6 sectoare ale Bucureștiului.",
  },
  {
    question: "Cât de repede puteți interveni?",
    answer: "De obicei intervenim în 24-48h de la solicitare, în funcție de disponibilitate.",
  },
  {
    question: "Am nevoie de autorizație pentru containerul vostru?",
    answer: "Nu. Mașinile noastre de 3,5 tone circulă fără autorizație de circulație în nicio zonă din București.",
  },
  {
    question: "Ce fac dacă nu am cine să încarce containerul?",
    answer: "Punem la dispoziție forță de muncă pentru încărcare, în funcție de disponibilitate.",
  },
  {
    question: "Ce deșeuri reciclabile preluați?",
    answer: "Fier, aluminiu, cupru, bronz, alamă, plumb, precum și electronice și electrocasnice.",
  },
  {
    question: "Care este programul vostru?",
    answer: contact.programText,
  },
];
