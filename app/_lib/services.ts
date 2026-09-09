export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  advantages: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "constructii-demolari",
    title: "Degajare deșeuri din construcții și demolări",
    summary:
      "Ridicăm până la 4 tone de moloz pe container, cu mașini de 3,5 tone care nu au nevoie de autorizație de circulație.",
    description:
      "Degajăm deșeuri rezultate din construcții și demolări, până în 4 tone pe container. Avantajul principal al acestui serviciu este faptul că firma noastră dispune de mașini de 3,5 tone, care nu necesită autorizație de circulație în nicio zonă din București. Acesta este principalul motiv pentru care clienții noștri apelează la noi.",
    advantages: [
      "Mașini de 3,5 tone, fără autorizație de circulație în nicio zonă din București",
      "Containere de până la 4 tone",
      "Intervenție rapidă, oriunde în oraș",
    ],
    image: "servicii-constructii.jpg",
    imageAlt: "Moloz și deșeuri rezultate dintr-o demolare",
  },
  {
    slug: "gospodarii",
    title: "Preluare deșeuri din gospodării",
    summary:
      "Venim cu forță de muncă pentru încărcare și, dacă e nevoie, debităm deșeurile voluminoase la fața locului.",
    description:
      "În cazul preluării deșeurilor din casa beneficiarului, dispunem și de forță de muncă, în vederea încărcării containerului. Dacă clientul ne anunță că nu are oameni să încarce containerul, în funcție de disponibilitate, oferim și acest serviciu. Dacă deșeurile sunt prea voluminoase pentru a fi transportate, punem la dispoziție servicii de debitare a deșeurilor prin aparat flex sau autogen, în funcție de nevoie și împrejurări.",
    advantages: [
      "Forță de muncă disponibilă pentru încărcarea containerului",
      "Debitare cu flex sau autogen pentru deșeuri voluminoase",
      "Adaptare la nevoile fiecărui client",
    ],
    image: "servicii-gospodarii.jpg",
    imageAlt: "Camion de gunoi ridicând o pubelă",
  },
  {
    slug: "reciclabile",
    title: "Colectare diversificată a deșeurilor reciclabile",
    summary: "Preluăm fier, aluminiu, cupru, bronz, alamă, plumb și electrocasnice.",
    description:
      "Societatea noastră dispune de o posibilitate variată de colectare a deșeurilor reciclabile, cum ar fi deșeuri de fier, aluminiu, cupru, bronz, alamă, plumb, precum și electronice și electrocasnice.",
    advantages: [
      "Fier, aluminiu, cupru, bronz, alamă, plumb",
      "Electronice și electrocasnice",
      "Colectare adaptată tipului de material",
    ],
    image: "servicii-reciclabile.jpg",
    imageAlt: "Grămadă de deșeuri metalice reciclabile",
  },
];
