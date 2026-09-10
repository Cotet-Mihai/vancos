import type { Metadata } from "next";
import { Montserrat, Caveat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { CookieBanner } from "./_components/CookieBanner";
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
  title: {
    template: "%s | Vancos",
    default: "Vancos · Degajări deșeuri și colectare reciclabile în București",
  },
  description:
    "Vancos preia și transportă deșeuri din construcții, demolări și gospodării în București, plus colectare diversificată de deșeuri reciclabile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${montserrat.variable} ${caveat.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <BackgroundLayer />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
