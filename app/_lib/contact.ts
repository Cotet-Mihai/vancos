// Datele de contact stau într-un singur loc: Header, Footer, pagina de Contact
// și cele două formulare le citesc de aici, ca să nu ajungă niciodată desincronizate.
export const contact = {
  phone: "0723 774 625",
  phoneHref: "tel:+40723774625",
  email: "vancosrecycling@gmail.com",
  emailHref: "mailto:vancosrecycling@gmail.com",
  area: "Deservim toate cele 6 sectoare din București",
  /**
   * Programul de lucru — `null` cât timp nu îl avem confirmat de la Vancos.
   * Unde e folosit se afișează un marcaj vizibil în locul lui, ca să nu apuce
   * să ajungă live un „Program: ..." gol. Formatul așteptat: „Luni-Vineri,
   * 08:00-18:00 · Sâmbătă, 09:00-14:00".
   */
  program: null as string | null,
};
