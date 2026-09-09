import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/images/hero.jpg";
import { services } from "./_lib/services";
import { ServiceCard } from "./_components/ServiceCard";
import { IconContainer, IconTruck, IconTorch } from "./_components/icons";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src={heroImage}
          alt="Utilaje de construcții pe un șantier"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 -z-10"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 -z-10 bg-gradient-to-b from-transparent to-ink" />
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 sm:py-32">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Degajăm deșeuri din construcții, gospodării și colectăm reciclabile în tot Bucureștiul
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Mașini de 3,5 tone fără nevoie de autorizație de circulație, forță de muncă la cerere și debitare pentru
            deșeuri voluminoase.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light"
            >
              Cere ofertă
            </Link>
            <Link
              href="/servicii"
              className="rounded-full border border-white/30 px-6 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Vezi serviciile
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-ink">Serviciile noastre</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <IconContainer className="h-8 w-8 text-brand" />
            <h3 className="font-semibold text-ink">Fără autorizație de circulație</h3>
            <p className="text-sm text-ink/70">Mașinile noastre de 3,5 tone circulă liber în orice zonă din București.</p>
          </div>
          <div className="flex flex-col gap-3">
            <IconTruck className="h-8 w-8 text-brand" />
            <h3 className="font-semibold text-ink">Forță de muncă la cerere</h3>
            <p className="text-sm text-ink/70">Dacă nu ai cine să încarce containerul, venim și cu oameni pentru asta.</p>
          </div>
          <div className="flex flex-col gap-3">
            <IconTorch className="h-8 w-8 text-brand" />
            <h3 className="font-semibold text-ink">Debitare la nevoie</h3>
            <p className="text-sm text-ink/70">
              Deșeurile voluminoase le debităm cu flex sau autogen, direct la fața locului.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-ink">Ai deșeuri de ridicat?</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
        </div>
        <p className="max-w-lg text-ink/70">Spune-ne ce ai de degajat și îți răspundem cu o ofertă rapidă.</p>
        <Link
          href="/contact"
          className="rounded-full bg-brand px-6 py-3 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light"
        >
          Contactează-ne
        </Link>
      </section>
    </>
  );
}
