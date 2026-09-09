import Image from "next/image";
import type { Metadata } from "next";
import despreImage from "../../public/images/despre-noi.jpg";
import { IconCheck } from "../_components/icons";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Vancos degajează deșeuri din construcții, demolări și gospodării și colectează deșeuri reciclabile în toată zona București.",
};

const values = [
  "Răspundem rapid, oriunde în București",
  "Ne adaptăm la volumul și tipul deșeurilor tale",
  "Mașini de 3,5 tone, fără blocaje de autorizație",
  "Echipă pregătită să încarce și să debiteze la nevoie",
];

export default function DespreNoiPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:flex-row sm:items-center">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-3xl font-bold text-ink">Despre Vancos</h1>
        <p className="text-ink/70">
          Suntem o firmă din București specializată în degajarea deșeurilor din construcții, demolări și gospodării,
          plus colectarea diversificată a deșeurilor reciclabile. Lucrăm cu mașini de 3,5 tone care circulă fără
          autorizație în orice zonă a orașului, ceea ce ne permite să intervenim rapid, indiferent de locație.
        </p>
        <p className="text-ink/70">
          Ne adaptăm la fiecare client: venim cu forță de muncă atunci când e nevoie de încărcare, și debităm
          deșeurile voluminoase cu flex sau autogen direct la fața locului.
        </p>
        <ul className="flex flex-col gap-3">
          {values.map((value) => (
            <li key={value} className="flex items-start gap-2 text-sm text-ink/80">
              <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-64 w-full flex-1 overflow-hidden rounded-2xl sm:h-96">
        <Image
          src={despreImage}
          alt="Utilaj de construcții folosit pentru degajarea deșeurilor"
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
