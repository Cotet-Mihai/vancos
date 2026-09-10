import { type StaticImageData } from "next/image";
import Link from "next/link";
import imgConstructii from "../public/images/servicii-constructii.jpg";
import imgDemolari from "../public/images/servicii-demolari.jpg";
import imgGospodarii from "../public/images/servicii-gospodarii.jpg";
import imgReciclabile from "../public/images/servicii-reciclabile.jpg";
import { services } from "./_lib/services";
import { faqs } from "./_lib/faqs";
import { faqSchema } from "./_lib/schema";
import { JsonLd } from "./_components/JsonLd";
import { ServiceCard } from "./_components/ServiceCard";
import { Reveal } from "./_components/Reveal";
import { PriceCalculator } from "./_components/PriceCalculator";
import { HowWeWork } from "./_components/HowWeWork";
import { CoverageMap } from "./_components/CoverageMap";
import { Hero } from "./_components/Hero";
import { FinalCta } from "./_components/FinalCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  IconTruck,
  IconContainer,
  IconBolt,
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

// Asezarea de pe telefon, pe indexul argumentului. Primul tine doua randuri, cu
// continutul grupat la mijloc — `justify-between` il imprastia pe toata
// inaltimea de cand a disparut eticheta care statea sus. Al patrulea tine randul
// intreg si pentru ca altfel ramane un gol: cardul de acoperire cere doua
// coloane si nu incape langa el.
const whyUsLayout = [
  "row-span-2 justify-center gap-3 sm:row-span-1 sm:justify-start sm:gap-3",
  "",
  "",
  "col-span-2 sm:col-span-1",
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


export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />

      <section className="flex flex-col gap-10 py-16">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-10 px-6">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 rounded-full bg-brand-light" />
              <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">Serviciile noastre</span>
              <span className="h-[3px] w-8 rounded-full bg-brand-light" />
            </div>
            <h2 className="max-w-3xl text-3xl font-bold text-paper sm:text-5xl">
              Servicii pentru <span className="text-brand-gradient">orice tip de deșeu.</span>
            </h2>
            <p className="max-w-2xl text-paper/70">
              Colectăm și transportăm deșeuri din construcții, demolări, gospodării și materiale reciclabile. Rapid,
              eficient și fără complicații.
            </p>
          </Reveal>

          {/* Pe mobil si tableta cardurile stau 2 x 2; de la `lg` redevin rand,
              unde exista cursor pentru deschiderea la hover. Proprietatile flex
              ale copiilor sunt ignorate cat timp parintele e grila. */}
          <Reveal delay={120} className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-row">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex min-w-0 flex-1 transition-[flex-grow] duration-500 ease-out hover:flex-[3]"
              >
                <ServiceCard service={service} image={serviceImages[service.slug]} />
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mx-auto w-full max-w-[88rem] px-6">
          <div className="flex w-full flex-col items-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-6 text-center sm:flex-row sm:justify-between sm:gap-6 sm:rounded-full sm:px-10 sm:py-4 sm:text-left">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-paper">Ai deșeuri de ridicat?</h3>
              <p className="text-sm text-paper/70">Spune-ne ce ai de transportat și îți răspundem rapid.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start sm:gap-6 sm:divide-x sm:divide-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-paper/70 sm:pr-6">
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
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-2xl gap-12 px-6 py-16 lg:max-w-[88rem] lg:grid-cols-[1fr_34rem] lg:gap-32 lg:items-center">
        <Reveal className="flex flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.3em] text-brand-light uppercase">
            Cântar · Estimare · Reciclare
          </span>
          <h2 className="text-3xl leading-tight font-bold text-paper sm:text-5xl">
            Estimează rapid
            <br />
            <span className="text-brand-gradient">valoarea materialelor tale</span>
          </h2>
          <p className="max-w-xl text-paper/70">
            Află instant o estimare a valorii materialelor pe care vrei să le reciclezi. Prețuri orientative,
            actualizate, pentru o colaborare simplă și transparentă.
          </p>

          {/* Pe telefon primele doua stau umar la umar, deci se aseaza pe
              verticala ca sa incapa in jumatate de ecran; a treia tine tot
              randul si ramane orizontala. De la `sm` in sus lista redevine
              coloana, iar `col-span-2` nu mai are efect intr-un flex. */}
          <ul className="grid grid-cols-2 gap-3 sm:flex sm:flex-col">
            {calculatorBenefits.map((benefit, index) => {
              const wide = index === calculatorBenefits.length - 1;
              return (
                <li
                  key={benefit.title}
                  className={`flex rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none sm:flex-row sm:items-center sm:gap-4 sm:p-6 sm:text-left ${
                    wide ? "col-span-2 items-center gap-4" : "flex-col items-center gap-3 text-center"
                  }`}
                >
                  <span
                    className={`flex flex-shrink-0 items-center justify-center rounded-full border border-brand-light/25 bg-brand-light/15 text-brand-light sm:h-12 sm:w-12 ${
                      wide ? "h-12 w-12" : "h-10 w-10"
                    }`}
                  >
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className={`font-semibold text-paper sm:text-base ${wide ? "" : "text-sm"}`}>
                      {benefit.title}
                    </span>
                    <span className={`text-paper/70 sm:text-sm ${wide ? "text-sm" : "text-xs"}`}>
                      {benefit.description}
                    </span>
                  </span>
                </li>
              );
            })}
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
        </Reveal>

        <div id="calculator" className="scroll-mt-24">
          <Reveal delay={120}>
            <PriceCalculator />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col px-6 py-16">
        <Reveal className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          <div className="relative col-span-2 flex flex-col justify-center gap-3 overflow-hidden rounded-[1.75rem] border border-brand-light/25 bg-brand/15 p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="map-fade pointer-events-none absolute inset-0 flex items-center justify-end pr-4 text-[10rem] leading-none font-bold text-brand-light opacity-20 sm:text-[15rem]"
            >
              ?
            </span>
            <h2 className="relative z-10 text-3xl font-bold text-paper sm:text-5xl">De ce Vancos</h2>
            <span className="relative z-10 h-[3px] w-12 rounded-full bg-brand-light" />
            <p className="relative z-10 max-w-md text-sm text-paper/70 sm:text-base">
              Argumentele care ne diferențiază și te ajută să alegi rapid soluția potrivită pentru deșeurile tale.
            </p>
          </div>

          {whyUs.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col gap-2 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] motion-reduce:transition-none sm:gap-3 sm:p-6 ${whyUsLayout[index]}`}
            >
              <item.icon className="h-7 w-7 flex-shrink-0 text-brand-light sm:h-8 sm:w-8" />
              <h3 className="text-sm font-semibold text-paper sm:text-base">{item.title}</h3>
              <p className="text-xs leading-relaxed text-paper/70 sm:text-sm">{item.description}</p>
            </div>
          ))}

          <div className="relative col-span-2 flex min-h-36 items-center gap-5 overflow-hidden rounded-[1.75rem] border border-brand-light/25 bg-brand/15 p-5 sm:min-h-44 sm:p-6">
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

      <Reveal className="relative overflow-hidden border-y border-white/10 py-4">
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
      </Reveal>

      <HowWeWork />

      <CoverageMap />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-paper sm:text-5xl">Întrebări frecvente</h2>
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
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
