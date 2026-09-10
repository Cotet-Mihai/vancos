import type { Metadata } from "next";
import { Montserrat, Caveat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "./_components/CookieBanner";
import { JsonLd } from "./_components/JsonLd";
import { siteUrl } from "./_lib/site";
import { localBusinessSchema, websiteSchema } from "./_lib/schema";
import { BackgroundLayer } from "./_components/BackgroundLayer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // `metadataBase` face ca toate adresele relative de mai jos — canonice, Open
  // Graph, imagini — să devină absolute. Fără el, Next avertizează la build, iar
  // rețelele sociale primesc adrese pe care nu le pot rezolva.
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Vancos",
    default: "Vancos · Degajări deșeuri și colectare reciclabile în București",
  },
  description:
    "Vancos preia și transportă deșeuri din construcții, demolări și gospodării în București, plus colectare diversificată de deșeuri reciclabile. Containere până la 4 tone, intervenție în 24-48h, toate cele 6 sectoare.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Vancos",
    url: "/",
    title: "Vancos · Degajări deșeuri și colectare reciclabile în București",
    description:
      "Degajare deșeuri din construcții, demolări și gospodării, plus colectare de reciclabile. Containere până la 4 tone, intervenție în 24-48h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancos · Degajări deșeuri și colectare reciclabile în București",
    description:
      "Degajare deșeuri din construcții, demolări și gospodării, plus colectare de reciclabile în toate cele 6 sectoare.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${montserrat.variable} ${caveat.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
        <BackgroundLayer />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        {/* Vercel Analytics nu scrie nimic pe dispozitiv: numără printr-un
            identificator calculat din cerere, șters după 24 de ore. Nu intră sub
            art. 4 alin. (5) GDPR, deci nu trece prin bannerul de consimțământ —
            e menționat însă în politica de cookie-uri, la inventar. */}
        <Analytics />
      </body>
    </html>
  );
}
