import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { IconPhone, IconMail, IconPin } from "../_components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Vancos pentru degajare de deșeuri și colectare de reciclabile în București.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pt-28 pb-16 sm:flex-row">
      <div className="flex flex-1 flex-col gap-6">
        <h1 className="text-3xl font-bold text-paper">Contact</h1>
        <p className="text-paper/70">
          Spune-ne ce deșeuri ai de ridicat și în ce zonă din București te afli. Îți răspundem cu o ofertă rapidă.
        </p>
        <ul className="flex flex-col gap-4 text-paper/80">
          <li className="flex items-center gap-3">
            <IconPhone className="h-5 w-5 text-brand" />
            [telefon]
          </li>
          <li className="flex items-center gap-3">
            <IconMail className="h-5 w-5 text-brand" />
            [email]
          </li>
          <li className="flex items-center gap-3">
            <IconPin className="h-5 w-5 text-brand" />
            [adresă/zonă acoperită] — deservim toată zona București
          </li>
        </ul>
        <p className="text-sm text-paper/60">Program: [program de lucru]</p>
      </div>
      <div className="flex-1">
        <ContactForm />
      </div>
    </div>
  );
}
