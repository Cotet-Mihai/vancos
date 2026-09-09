import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/images/hero.jpg";
import { services } from "./_lib/services";
import { ServiceCard } from "./_components/ServiceCard";
import { Logo } from "./_components/Logo";
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
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-20 lg:py-28">
            <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
              Servicii de colectare și reciclare
            </span>
            <h1 className="text-4xl leading-[1.1] font-bold text-white sm:text-5xl lg:text-6xl">
              Facem loc pentru un
              <br />
              <span className="text-brand-light">oraș mai curat.</span>
            </h1>
            <p className="max-w-md text-white/70">
              Colectăm și transportăm deșeuri din construcții, demolări, gospodării și materiale reciclabile. Rapid,
              eficient și fără complicații.
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

          <div className="relative min-h-[420px] lg:min-h-0">
            <Image
              src={heroImage}
              alt="Utilaj Vancos pe un șantier cu orizontul Bucureștiului în fundal"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-transparent lg:to-transparent" />
            <div className="absolute inset-y-0 left-0 hidden w-24 -translate-x-1/2 skew-x-[-8deg] bg-ink lg:block" />

            <div className="absolute top-[18%] left-[8%] hidden max-w-[160px] -rotate-3 text-xs font-semibold text-white/90 sm:block">
              <svg viewBox="0 0 60 60" className="mb-1 h-10 w-10 text-white/70" fill="none">
                <path d="M5 5c10 5 20 20 25 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M22 40l8 8 6-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mașini de 3,5 tone cu acces în tot Bucureștiul
            </div>

            <div className="font-script absolute top-[8%] right-[6%] hidden rotate-2 text-right text-3xl text-white sm:block">
              București
              <br />
              fără limite
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <stat.icon className="h-6 w-6 flex-shrink-0 text-brand-light" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/50">{stat.label}</span>
                </div>
              </div>
            ))}
            <div className="hidden flex-col justify-center gap-1 border-l border-white/10 pl-8 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase lg:flex">
              <span>Deșeuri</span>
              <span>Responsabilitate</span>
              <span>Un viitor mai curat</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 px-6 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
            <span className="flex items-center gap-2">
              <Logo className="h-4 w-4 text-brand-light" />
              Pentru o comunitate mai curată
            </span>
            <span>vancos.ro</span>
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
