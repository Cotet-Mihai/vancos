import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/images/hero-truck.png";
import { services } from "./_lib/services";
import { ServiceCard } from "./_components/ServiceCard";
import { IconTruck, IconContainer, IconBolt, IconRecycle } from "./_components/icons";

const stats = [
  { icon: IconTruck, value: "3,5 t", label: "Autovehicule cu acces în tot Bucureștiul" },
  { icon: IconContainer, value: "4 tone", label: "Capacitate pe container" },
  { icon: IconBolt, value: "24-48h", label: "Timp mediu de intervenție" },
  { icon: IconRecycle, value: "500+", label: "Lucrări finalizate" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex h-screen min-h-[640px] flex-col justify-center overflow-hidden bg-ink">
        <Image
          src={heroImage}
          alt="Camion Vancos cu container de reciclare, pe fundalul orizontului Bucureștiului"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-black/70 via-30% to-transparent to-50%" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />

        <div className="relative z-10 flex w-full max-w-2xl flex-col gap-6 px-6 sm:px-24 lg:pr-6 lg:pl-48">
          <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
            Servicii de colectare și reciclare
          </span>
          <h1 className="max-w-2xl text-5xl leading-[0.95] font-bold text-white sm:text-6xl lg:text-7xl">
            Facem loc
            <br />
            pentru un
            <br />
            <span className="whitespace-nowrap text-brand-light">oraș mai curat.</span>
          </h1>
          <p className="max-w-md text-white/80">
            Colectăm și transportăm deșeuri din construcții,
            <br />
            demolări, gospodării și materiale reciclabile.
            <br />
            Rapid, eficient și fără complicații.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-full bg-brand-light py-2 pr-6 pl-2 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brand-light">
                →
              </span>
              Solicită o ofertă
            </Link>
            <Link
              href="/servicii"
              className="flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Află mai multe
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 sm:px-6">
                <stat.icon className="h-12 w-12 flex-shrink-0 text-brand-light" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </div>
              </div>
            ))}
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
