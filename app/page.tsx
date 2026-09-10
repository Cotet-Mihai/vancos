import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import heroImage from "../public/images/hero-truck.png";
import imgConstructii from "../public/images/servicii-constructii.jpg";
import imgDemolari from "../public/images/servicii-demolari.jpg";
import imgGospodarii from "../public/images/servicii-gospodarii.jpg";
import imgReciclabile from "../public/images/servicii-reciclabile.jpg";
import { services } from "./_lib/services";
import { ServiceCard } from "./_components/ServiceCard";
import { Logo } from "./_components/Logo";
import { Reveal } from "./_components/Reveal";
import { PriceCalculator } from "./_components/PriceCalculator";
import { HowWeWork } from "./_components/HowWeWork";
import { CoverageMap } from "./_components/CoverageMap";
import { DeCompletat } from "./_components/DeCompletat";
import { contact } from "./_lib/contact";
import { FinalCta } from "./_components/FinalCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  IconTruck,
  IconContainer,
  IconBolt,
  IconRecycle,
  IconTorch,
  IconClock,
  IconShield,
  IconChart,
  IconCheck,
} from "./_components/icons";

const serviceImages: Record<string, StaticImageData> = {
  constructii: imgConstructii,
  demolari: imgDemolari,
  gospodarii: imgGospodarii,
  reciclabile: imgReciclabile,
};

const stats = [
  {
    icon: IconTruck,
    value: "3,5 t",
    label: "Autovehicule cu acces în tot Bucureștiul",
  },
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

const calculatorBenefits = [
  {
    icon: IconChart,
    title: "Prețuri orientative actualizate",
    description: "Lucrăm cu prețuri reale din piață, actualizate constant.",
  },
  {
    icon: IconBolt,
    title: "Preluare rapidă",
    description: "Solicită preluarea, iar noi ne ocupăm de restul.",
  },
  {
    icon: IconCheck,
    title: "Răspuns clar și fără complicații",
    description: "Primești o estimare transparentă, fără costuri ascunse.",
  },
];

const materials = [
  "Fier",
  "Aluminiu",
  "Cupru",
  "Bronz",
  "Alamă",
  "Plumb",
  "Moloz",
  "Electrocasnice",
  "Deșeuri menajere",
];

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
    answer: "Nu. Mașinile noastre de 3,5 tone circulă fără autorizație de circulație în nicio zonă din București.",
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
    answer: contact.program ?? <DeCompletat camp="programul de lucru" />,
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
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brand-light">→</span>
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

      <section className="flex flex-col gap-10 py-16">
        <div className="mx-auto flex w-full max-w-[100rem] flex-col gap-10 px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 rounded-full bg-brand-light" />
              <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">Serviciile noastre</span>
              <span className="h-[3px] w-8 rounded-full bg-brand-light" />
            </div>
            <h2 className="max-w-3xl text-4xl font-bold text-paper sm:text-5xl">
              Servicii pentru <span className="text-brand-light">orice tip de deșeu.</span>
            </h2>
            <p className="max-w-2xl text-paper/70">
              Colectăm și transportăm deșeuri din construcții, demolări, gospodării și materiale reciclabile. Rapid,
              eficient și fără complicații.
            </p>
          </div>

          <Reveal className="flex w-full flex-col gap-4 lg:flex-row">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="flex min-w-0 flex-1 transition-[flex-grow] duration-500 ease-out hover:flex-[3]"
              >
                <ServiceCard
                  service={service}
                  image={serviceImages[service.slug]}
                  unit={String(index + 1).padStart(2, "0")}
                />
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mx-auto w-full max-w-[88rem] px-6">
          <div className="flex w-full flex-col gap-6 rounded-[2rem] border border-white/10 bg-surface px-10 py-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
            <div className="flex items-center gap-4">
              <Logo className="h-7 w-7 flex-shrink-0 text-brand-light" />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-paper">Ai deșeuri de ridicat?</h3>
                <p className="text-sm text-paper/70">Spune-ne ce ai de transportat și îți răspundem rapid.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 divide-x divide-white/10">
              <div className="flex items-center gap-2 pr-6 text-xs font-semibold text-paper/70">
                <IconClock className="h-5 w-5 text-brand-light" />
                Răspuns rapid
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-paper/70">
                <IconShield className="h-5 w-5 text-brand-light" />
                Fără bătăi de cap
              </div>
            </div>

            <Link
              href="/contact"
              className="flex w-fit items-center gap-3 rounded-full bg-brand-light py-2 pr-5 pl-2 text-sm font-bold text-ink transition-all duration-300 hover:scale-105"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-brand-light">→</span>
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-2xl gap-12 px-6 py-16 lg:max-w-[88rem] lg:grid-cols-[1fr_34rem] lg:gap-32 lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">
            Cântar · Estimare · Reciclare
          </span>
          <h2 className="text-4xl leading-tight font-bold text-paper sm:text-5xl">
            Estimează rapid
            <br />
            <span className="text-brand-light">valoarea materialelor tale</span>
          </h2>
          <p className="max-w-xl text-paper/70">
            Află instant o estimare a valorii materialelor pe care vrei să le reciclezi. Prețuri orientative,
            actualizate, pentru o colaborare simplă și transparentă.
          </p>

          <ul className="flex flex-col gap-3">
            {calculatorBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09)] backdrop-blur-xl"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="font-semibold text-paper">{benefit.title}</span>
                  <span className="text-sm text-paper/70">{benefit.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/servicii#reciclabile"
              className="flex items-center gap-3 rounded-full border border-brand-light px-6 py-3 text-sm font-bold text-brand-light transition-colors duration-300 hover:bg-brand-light/10"
            >
              Află mai multe
              <span aria-hidden="true">→</span>
            </Link>
            <p className="max-w-[13rem] text-sm text-paper/60">Un mediu mai curat începe cu decizii simple.</p>
          </div>
        </div>

        <PriceCalculator />
      </section>

      <section className="mx-auto flex max-w-7xl flex-col px-6 py-16">
        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative flex flex-col justify-center gap-3 overflow-hidden rounded-[1.75rem] border border-brand-light/25 bg-brand/15 p-8 sm:col-span-2">
            <span
              aria-hidden="true"
              className="map-fade pointer-events-none absolute inset-0 flex items-center justify-end pr-4 text-[10rem] leading-none font-bold text-brand-light opacity-20 sm:text-[15rem]"
            >
              ?
            </span>
            <h2 className="relative z-10 text-4xl font-bold text-paper sm:text-5xl">De ce Vancos</h2>
            <span className="relative z-10 h-[3px] w-12 rounded-full bg-brand-light" />
            <p className="relative z-10 max-w-md text-paper/70">
              Argumentele care ne diferențiază și te ajută să alegi rapid soluția potrivită pentru deșeurile tale.
            </p>
          </div>

          {whyUs.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light/40"
            >
              <span className="font-mono text-[10px] tracking-widest text-brand-light">
                ARG.{String(index + 1).padStart(2, "0")}
              </span>
              <item.icon className="h-8 w-8 flex-shrink-0 text-brand-light" />
              <h3 className="font-semibold text-paper">{item.title}</h3>
              <p className="text-sm text-paper/70">{item.description}</p>
            </div>
          ))}

          <div className="relative flex min-h-44 items-center gap-5 overflow-hidden rounded-[1.75rem] border border-brand-light/25 bg-brand/15 p-6 sm:col-span-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 400 200"
              preserveAspectRatio="xMaxYMid slice"
              fill="none"
              className="map-fade pointer-events-none absolute inset-0 h-full w-full text-brand-light opacity-30"
            >
              <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <path d="M0 28H400M0 74H400M0 118H400M0 172H400" />
                <path d="M52 0V200M96 0V200M178 0V200M246 0V200M318 0V200M372 0V200" />
                <path d="M246 74L318 28" />
              </g>
              <g stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" vectorEffect="non-scaling-stroke">
                <path d="M-10 196L240 -12" />
                <path d="M96 212L412 78" />
              </g>
            </svg>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -right-12 h-40 w-40 -translate-y-1/2 sm:right-8"
            >
              <div className="animate-aura absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(62,155,92,0.45)_0%,rgba(62,155,92,0)_65%)] blur-xl" />
              <span className="animate-coverage absolute inset-0 rounded-full border border-brand-light/50" />
              <span className="animate-coverage absolute inset-0 rounded-full border border-brand-light/50 [animation-delay:1.4s]" />
              <span className="animate-coverage absolute inset-0 rounded-full border border-brand-light/50 [animation-delay:2.8s]" />
              <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light shadow-[0_0_14px_rgba(62,155,92,0.9)]" />
            </div>

            <span className="relative z-10 font-mono text-5xl leading-none font-bold text-brand-light">100%</span>
            <span className="relative z-10 font-mono text-[10px] leading-relaxed tracking-[0.2em] text-paper/70 uppercase">
              Acoperire
              <br />
              București
            </span>
          </div>
        </Reveal>
      </section>

      <div className="relative overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-8">
          {[...materials, ...materials].map((material, index) => (
            <span
              key={`${material}-${index}`}
              className="flex items-center gap-8 font-mono text-sm tracking-widest text-white/40 uppercase"
            >
              {material}
              <span className="h-1 w-1 rounded-full bg-brand-light" />
            </span>
          ))}
        </div>
      </div>

      <HowWeWork />

      <CoverageMap />

      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-paper sm:text-5xl">Întrebări frecvente</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
        </div>
        <Accordion className="border-t border-white/10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-b border-white/10">
              <AccordionTrigger className="gap-4 py-5 text-base font-semibold text-paper hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-brand-light">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-paper/70">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <FinalCta />
    </>
  );
}
