// Datele de contact stau într-un singur loc: Header, Footer, pagina de Contact
// și cele două formulare le citesc de aici, ca să nu ajungă niciodată desincronizate.
export const contact = {
  phone: "0723 774 625",
  phoneHref: "tel:+40723774625",
  email: "vancosrecycling@gmail.com",
  emailHref: "mailto:vancosrecycling@gmail.com",
  area: "Deservim toate cele 6 sectoare din București",
} as const;
