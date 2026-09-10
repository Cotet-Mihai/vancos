import { contact } from "../_lib/contact";
import { firma } from "../_lib/legal";
import { services } from "../_lib/services";
import { faqs } from "../_lib/faqs";
import { absolute, siteUrl } from "../_lib/site";

/**
 * `llms.txt` — rezumatul site-ului pentru asistenții AI (llmstxt.org).
 *
 * E generat, nu scris de mână, tocmai ca să nu rămână în urmă: prețurile,
 * programul, serviciile și întrebările frecvente vin din aceleași surse ca
 * paginile. Un fișier de context care contrazice site-ul e mai rău decât unul
 * absent, fiindcă asistentul îl citează cu încredere.
 */
export const dynamic = "force-static";

export function GET() {
  const program = contact.program.map((i) => `- ${i.zile}: ${i.ore}`).join("\n");

  const serviceList = services
    .map(
      (service) =>
        `### ${service.title}\n${service.description}\n\nAvantaje:\n${service.advantages
          .map((a) => `- ${a}`)
          .join("\n")}\n\nDetalii: ${absolute(`/servicii#${service.slug}`)}`,
    )
    .join("\n\n");

  const faqList = faqs.map((faq) => `**${faq.question}**\n${faq.answer}`).join("\n\n");

  const body = `# Vancos

> Firmă din București care preia și transportă deșeuri din construcții, demolări
> și gospodării, plus colectare diversificată de deșeuri reciclabile.

## Pe scurt

- **Denumire legală:** ${firma.denumire ?? "—"}
- **CUI:** ${firma.cui ?? "—"} · **Reg. Com.:** ${firma.registruComert ?? "—"}
- **Zonă deservită:** toate cele 6 sectoare ale Bucureștiului
- **Telefon:** ${contact.phone}
- **Email:** ${contact.email}
- **Punct de lucru:** ${contact.address}
- **Timp de intervenție:** de regulă 24-48h de la solicitare
- **Capacitate:** containere de până la 4 tone, autovehicule de 3,5 tone care
  circulă fără autorizație de circulație în oraș

## Program

${program}

## Servicii

${serviceList}

## Întrebări frecvente

${faqList}

## Pagini

- [Acasă](${siteUrl}/): prezentare, calculator de preț pentru materiale reciclabile
- [Servicii](${absolute("/servicii")}): cele patru servicii, în detaliu
- [Despre noi](${absolute("/despre-noi")}): cum lucrăm și zona de acoperire
- [Contact](${absolute("/contact")}): date de contact, program, formular de cerere
- [Termeni și condiții](${absolute("/termeni-si-conditii")})
- [Politica de cookie-uri](${absolute("/politica-cookie")})

## Note

Prețurile din calculatorul de pe site sunt orientative și se stabilesc final la
cântărirea și verificarea materialului.
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
