type Interval = {
  zile: string;
  ore: string;
  /** Ziua în care nu se lucrează — se afișează stins, nu ca un interval orar. */
  inchis?: boolean;
};

// Programul stă structurat, nu ca text: cardul de pe Contact îl afișează pe
// rânduri, cu zilele la stânga și orele la dreapta, iar întrebarea din FAQ are
// nevoie de o singură propoziție. Ambele se derivă din aceeași sursă, ca să nu
// ajungă un orar actualizat într-un loc și rămas vechi în celălalt.
const program: Interval[] = [
  { zile: "Luni-Vineri", ore: "08:00-18:30" },
  { zile: "Sâmbătă", ore: "08:00-15:00" },
  { zile: "Duminică", ore: "Închis", inchis: true },
];

// Adresa merge ca text și în harta încorporată, și în linkul către Google Maps,
// deci geocodarea o face Google. Coordonatele scrise de mână ar muta acul fără
// ca cineva să observe.
const address = "Șoseaua Andronache nr. 254, Sector 2, București";

// Datele de contact stau într-un singur loc: Header, Footer, pagina de Contact
// și formularul le citesc de aici, ca să nu ajungă niciodată desincronizate.
export const contact = {
  phone: "0723 774 625",
  phoneHref: "tel:+40723774625",
  email: "vancosrecycling@gmail.com",
  emailHref: "mailto:vancosrecycling@gmail.com",
  area: "Deservim toate cele 6 sectoare din București",
  address,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  program,
  programText: program.map((interval) => `${interval.zile}: ${interval.ore}`).join(" · "),
};
