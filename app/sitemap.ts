import type { MetadataRoute } from "next";
import { absolute } from "./_lib/site";

/** Prioritățile urmează rolul paginii, nu o convenție: Acasă și Servicii aduc
 *  cererile, paginile legale există ca să fie găsite la nevoie. */
const pages = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/servicii", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
  { path: "/despre-noi", changeFrequency: "yearly" as const, priority: 0.7 },
  { path: "/termeni-si-conditii", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/politica-cookie", changeFrequency: "yearly" as const, priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((page) => ({
    url: absolute(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
