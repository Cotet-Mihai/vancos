import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { contact } from "./_lib/contact";

/**
 * Imaginea care apare când cineva trimite linkul pe WhatsApp, Facebook sau
 * LinkedIn. Stă în rădăcină, deci o moștenesc toate paginile.
 *
 * Fonturile sunt TTF puse în `_assets`, nu cele din `next/font`: generatorul nu
 * citește woff2, iar fontul lui implicit nu are „ș" și „ț".
 */
export const alt = "Vancos · Degajare moloz și colectare deșeuri reciclabile în București";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [medium, extraBold, truck] = await Promise.all([
    readFile(join(process.cwd(), "app/_assets/fonts/Montserrat-Medium.ttf")),
    readFile(join(process.cwd(), "app/_assets/fonts/Montserrat-ExtraBold.ttf")),
    readFile(join(process.cwd(), "public/images/hero-truck-2.png")),
  ]);
  const truckSrc = `data:image/png;base64,${truck.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#141412" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- generatorul OG nu știe de next/image */}
        <img
          src={truckSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "linear-gradient(90deg, rgba(20,20,18,0.96) 0%, rgba(20,20,18,0.85) 45%, rgba(20,20,18,0) 75%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: 720,
            height: "100%",
            fontFamily: "Montserrat",
            color: "#f5f4f0",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, letterSpacing: 4, color: "#6fd694" }}>
            VANCOS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", fontSize: 60, fontWeight: 800, lineHeight: 1.05 }}>
              Degajare moloz și colectare reciclabile
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 28,
                fontWeight: 500,
                color: "rgba(245,244,240,0.8)",
              }}
            >
              <span>București, toate cele 6 sectoare</span>
              <span>Intervenție în 24-48h</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800 }}>{contact.phone}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: medium, style: "normal", weight: 500 },
        { name: "Montserrat", data: extraBold, style: "normal", weight: 800 },
      ],
    },
  );
}
