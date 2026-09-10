import { contact } from "./contact";
import { firma } from "./legal";
import { services } from "./services";
import { absolute, siteName, siteUrl, type Faq } from "./site";

/**
 * Datele structurate ale site-ului.
 *
 * Toate se construiesc din aceleași surse din `_lib` pe care le folosește și
 * interfața — adresa, programul, serviciile, întrebările frecvente. Scrise de
 * mână, ar începe să difere de pagină la prima corectură, iar o schemă care
 * contrazice conținutul vizibil e tratată drept marcaj înșelător.
 */

/** `Luni-Vineri` → zilele în engleză, cerute de schema.org. */
const DAY_MAP: Record<string, string[]> = {
  "Luni-Vineri": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Sâmbătă: ["Saturday"],
  Duminică: ["Sunday"],
};

const openingHours = contact.program
  .filter((interval) => !interval.inchis)
  .map((interval) => {
    const [opens, closes] = interval.ore.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_MAP[interval.zile] ?? [],
      opens,
      closes,
    };
  });

const ORG_ID = `${siteUrl}/#organizatie`;

/**
 * `LocalBusiness` e tipul potrivit aici, nu `Organization`: firma servește o
 * zonă geografică delimitată, iar asta e chiar întrebarea pe care o pun
 * asistenții AI — „cine ridică moloz în București?".
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  name: siteName,
  legalName: firma.denumire ?? undefined,
  vatID: firma.cui ?? undefined,
  url: siteUrl,
  telephone: contact.phone.replace(/\s/g, ""),
  email: contact.email,
  description:
    "Vancos preia și transportă deșeuri din construcții, demolări și gospodării în București, plus colectare diversificată de deșeuri reciclabile.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Șoseaua Andronache nr. 254",
    addressLocality: "București",
    addressRegion: "Sector 2",
    addressCountry: "RO",
  },
  areaServed: {
    "@type": "City",
    name: "București",
  },
  openingHoursSpecification: openingHours,
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii de degajare și colectare deșeuri",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        serviceType: service.shortLabel,
        areaServed: { "@type": "City", name: "București" },
        provider: { "@id": ORG_ID },
        url: absolute(`/servicii#${service.slug}`),
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#site`,
  url: siteUrl,
  name: siteName,
  inLanguage: "ro-RO",
  publisher: { "@id": ORG_ID },
};

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Firul Ariadnei, ca motoarele să înțeleagă ierarhia paginilor interioare. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: absolute(step.path),
    })),
  };
}

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Serviciile Vancos",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.shortLabel,
      areaServed: { "@type": "City", name: "București" },
      provider: { "@id": ORG_ID },
      url: absolute(`/servicii#${service.slug}`),
    },
  })),
};
