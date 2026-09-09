import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import heroImage from "../public/images/hero-truck.png";
import imgConstructii from "../public/images/servicii-constructii.jpg";
import imgGospodarii from "../public/images/servicii-gospodarii.jpg";
import imgReciclabile from "../public/images/servicii-reciclabile.jpg";
import { services } from "./_lib/services";
import { ServiceCard } from "./_components/ServiceCard";
import { Logo } from "./_components/Logo";
import {
  IconTruck,
  IconContainer,
  IconBolt,
  IconRecycle,
  IconTorch,
  IconChevronDown,
  IconClock,
  IconShield,
} from "./_components/icons";

const serviceImages: Record<string, StaticImageData> = {
  "constructii-demolari": imgConstructii,
  gospodarii: imgGospodarii,
  reciclabile: imgReciclabile,
};

const stats = [
  { icon: IconTruck, value: "3,5 t", label: "Autovehicule cu acces în tot Bucureștiul" },
  { icon: IconContainer, value: "4 tone", label: "Capacitate pe container" },
  { icon: IconBolt, value: "24-48h", label: "Timp mediu de intervenție" },
  { icon: IconRecycle, value: "500+", label: "Lucrări finalizate" },
];

const whyUs = [
  {
    icon: IconContainer,
    title: "Fără autorizație de circulație",
    description: "Mașinile noastre de 3,5 tone au acces liber în orice zonă din București.",
  },
  {
    icon: IconBolt,
    title: "Răspuns rapid",
    description: "Intervenim de obicei în 24-48h de la solicitare, în funcție de disponibilitate.",
  },
  {
    icon: IconTruck,
    title: "Forță de muncă la cerere",
    description: "Dacă nu ai cine să încarce containerul, venim și cu oameni pentru asta.",
  },
  {
    icon: IconTorch,
    title: "Debitare la fața locului",
    description: "Pentru deșeuri voluminoase, debităm cu flex sau autogen, direct pe teren.",
  },
];

const steps = [
  {
    number: "1",
    title: "Ne contactezi",
    description: "Suni, ne scrii sau completezi formularul de contact și ne spui ce deșeuri ai de ridicat.",
  },
  {
    number: "2",
    title: "Stabilim programarea",
    description: "Confirmăm împreună ziua și intervalul orar potrivit pentru intervenție.",
  },
  {
    number: "3",
    title: "Ridicăm deșeurile",
    description: "Venim cu utilajul potrivit și, la nevoie, cu forță de muncă pentru încărcare.",
  },
];

const sectors = ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6"];

const faqs = [
  {
    question: "Ce zone din București deserviți?",
    answer: "Lucrăm în toate cele 6 sectoare ale Bucureștiului.",
  },
  {
    question: "Cât de repede puteți interveni?",
    answer: "De obicei intervenim în 24-48h de la solicitare, în funcție de disponibilitate.",
  },
  {
    question: "Am nevoie de autorizație pentru containerul vostru?",
    answer:
      "Nu. Mașinile noastre de 3,5 tone circulă fără autorizație de circulație în nicio zonă din București.",
  },
  {
    question: "Ce fac dacă nu am cine să încarce containerul?",
    answer: "Punem la dispoziție forță de muncă pentru încărcare, în funcție de disponibilitate.",
  },
  {
    question: "Ce deșeuri reciclabile preluați?",
    answer: "Fier, aluminiu, cupru, bronz, alamă, plumb, precum și electronice și electrocasnice.",
  },
  {
    question: "Care este programul vostru?",
    answer: "[program de lucru]",
  },
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
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
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

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-brand-light" />
            <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
              Serviciile noastre
            </span>
          </div>
          <h2 className="max-w-3xl text-4xl font-bold text-paper sm:text-5xl">
            Servicii pentru <span className="text-brand-light">orice tip de deșeu.</span>
          </h2>
          <p className="max-w-2xl text-paper/70">
            Colectăm și transportăm deșeuri din construcții, demolări, gospodării și materiale reciclabile.
            Rapid, eficient și fără complicații.
          </p>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} image={serviceImages[service.slug]} />
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-6 w-6 flex-shrink-0 text-brand-light" />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-paper">Ai deșeuri de ridicat?</h3>
              <p className="text-sm text-paper/70">Spune-ne ce ai de transportat și îți răspundem rapid.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex w-fit items-center gap-3 rounded-full bg-brand-light py-2 pr-5 pl-2 text-sm font-bold text-ink transition-all duration-300 hover:scale-105"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-brand-light">
              →
            </span>
            Contactează-ne
          </Link>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-start">
        <div className="grid flex-1 gap-6 sm:grid-cols-3">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-surface p-6"
            >
              <item.icon className="h-8 w-8 flex-shrink-0 text-brand-light" />
              <h3 className="font-semibold text-paper">{item.title}</h3>
              <p className="text-sm text-paper/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-2 lg:w-72 lg:flex-shrink-0">
          <h2 className="text-2xl font-bold text-paper">De ce Vancos</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
          <p className="text-paper/70">
            Argumentele care ne diferențiază și te ajută să alegi rapid soluția potrivită pentru deșeurile tale.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-paper">Cum lucrăm</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {step.number}
              </span>
              <h3 className="font-semibold text-paper">{step.title}</h3>
              <p className="text-sm text-paper/70">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-paper">Zona de acoperire</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
          <p className="max-w-2xl text-paper/70">Deservim toate cele 6 sectoare ale Bucureștiului.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="flex items-center justify-center rounded-full border border-white/10 bg-surface px-4 py-3 text-sm font-semibold text-paper"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-paper">Întrebări frecvente</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-surface px-6 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-paper">
                {faq.question}
                <IconChevronDown className="h-5 w-5 flex-shrink-0 text-brand-light transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-paper/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-surface p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <Logo className="h-6 w-6 flex-shrink-0 text-brand-light" />
            <span className="text-[10px] leading-relaxed font-semibold tracking-[0.2em] text-white/50 uppercase">
              Gata să facem
              <br />
              loc pentru un oraș mai curat?
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-paper">Ai deșeuri de ridicat?</h2>
            <p className="max-w-sm text-sm text-paper/70">
              Spune-ne ce ai de transportat și îți răspundem rapid cu o ofertă personalizată.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex w-fit items-center gap-3 rounded-full bg-brand-light py-2 pr-6 pl-2 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brand-light">
              →
            </span>
            Solicită o ofertă
          </Link>

          <div className="flex items-center gap-6 divide-x divide-white/10">
            <div className="flex items-center gap-2 pl-0 text-xs font-semibold text-paper/70">
              <IconClock className="h-5 w-5 text-brand-light" />
              Răspuns rapid
            </div>
            <div className="flex items-center gap-2 pl-6 text-xs font-semibold text-paper/70">
              <IconShield className="h-5 w-5 text-brand-light" />
              Fără bătăi de cap
            </div>
            <div className="flex items-center gap-2 pl-6 text-xs font-semibold text-paper/70">
              <Logo className="h-5 w-5 text-brand-light" />
              Un oraș mai curat
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
