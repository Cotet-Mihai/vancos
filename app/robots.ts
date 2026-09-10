import type { MetadataRoute } from "next";
import { siteUrl } from "./_lib/site";

/**
 * Roboții asistenților AI sunt lăsați explicit să intre.
 *
 * Nu e o formalitate: un motor care nu poate citi pagina nu o poate cita. Sunt
 * enumerați pe nume tocmai ca o regulă generală adăugată cândva să nu îi taie
 * din greșeală odată cu roboții de scraping.
 */
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    // Rezumatul pentru asistenți AI, generat din aceleași surse ca paginile.
    // Nu e un standard recunoscut de roboți, dar e o urmă pe care o caută.
    host: siteUrl,
  };
}
