export type Service = {
  slug: string;
  title: string;
  /** Eticheta scurta, pentru navigare si liste — titlul complet e prea lung. */
  shortLabel: string;
  summary: string;
  description: string;
  advantages: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "constructii",
    shortLabel: "Construcții",
    title: "Degajare deșeuri din construcții",
    summary: "Containere de până la 4 tone pentru moloz, resturi de materiale și ambalaje de șantier.",
    description:
      "Degajăm deșeurile rezultate din lucrări de construcții (moloz, resturi de materiale, ambalaje și cofraje) cu containere de până la 4 tone. Firma noastră dispune de mașini de 3,5 tone, care nu necesită autorizație de circulație în nicio zonă din București, așa că ajungem la șantier indiferent de restricțiile din zonă.",
    advantages: [
      "Containere de până la 4 tone pentru moloz și resturi de materiale",
      "Mașini de 3,5 tone, fără autorizație de circulație în nicio zonă din București",
      "Ridicare programată, adaptată ritmului șantierului",
    ],
    image: "servicii-constructii.jpg",
    imageAlt: "Container de șantier plin cu resturi de materiale de construcții",
  },
  {
    slug: "demolari",
    shortLabel: "Demolări",
    title: "Degajare deșeuri din demolări",
    summary: "Preluăm molozul rezultat din demolări și debităm pe loc elementele prea voluminoase pentru transport.",
    description:
      "Preluăm deșeurile rezultate din demolări, până în 4 tone pe container. Acolo unde elementele sunt prea voluminoase pentru a fi încărcate ca atare, le debităm la fața locului cu flex sau autogen, în funcție de material și de spațiul disponibil.",
    advantages: [
      "Preluare moloz din demolări, până în 4 tone pe container",
      "Debitare cu flex sau autogen la fața locului",
      "Intervenție rapidă, oriunde în oraș",
    ],
    image: "servicii-demolari.jpg",
    imageAlt: "Excavatoare demolând o clădire, cu moloz în prim-plan",
  },
  {
    slug: "gospodarii",
    shortLabel: "Gospodării",
    title: "Preluare deșeuri din gospodării",
    summary:
      "Venim cu forță de muncă pentru încărcare și, dacă e nevoie, debităm deșeurile voluminoase la fața locului.",
    description:
      "În cazul preluării deșeurilor din casa beneficiarului, dispunem și de forță de muncă, în vederea încărcării containerului. Dacă clientul ne anunță că nu are oameni să încarce containerul, în funcție de disponibilitate, oferim și acest serviciu. Dacă deșeurile sunt prea voluminoase pentru a fi transportate, punem la dispoziție servicii de debitare a deșeurilor prin aparat flex sau autogen, în funcție de nevoie și împrejurimi.",
    advantages: [
      "Forță de muncă disponibilă pentru încărcarea containerului",
      "Debitare cu flex sau autogen pentru deșeuri voluminoase",
      "Adaptare la nevoile fiecărui client",
    ],
    image: "servicii-gospodarii.jpg",
    imageAlt: "Grămadă de electrocasnice vechi scoase din uz: televizoare și monitoare",
  },
  {
    slug: "reciclabile",
    shortLabel: "Reciclabile",
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
