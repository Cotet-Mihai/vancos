"use server";

import { Resend } from "resend";
import { contact } from "../_lib/contact";
import { businessEmail, clientEmail } from "../_lib/email-template";
import type { RequestPayload, RequestResult } from "../_lib/request";

/**
 * Trimiterea cererilor din formulare.
 *
 * Rulează pe server, deci cheia nu ajunge niciodată în browser. Validarea se
 * face tot aici: cea din HTML e o curtoazie pentru vizitator, nu o barieră —
 * oricine poate trimite direct către acțiune.
 */

/** Expeditorul trebuie să fie pe domeniul verificat în Resend. */
const FROM_BUSINESS = "Formular Vancos <no-reply@vancos.ro>";
const FROM_CLIENT = "Vancos <no-reply@vancos.ro>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(payload: RequestPayload): string | null {
  if (payload.website) return "Cerere respinsă."; // câmpul-capcană a fost completat
  if (payload.name.trim().length < 2) return "Te rugăm să scrii numele tău.";
  if (!EMAIL_RE.test(payload.email.trim())) return "Adresa de email nu pare validă.";
  if (payload.phone.replace(/\D/g, "").length < 9) return "Numărul de telefon nu pare complet.";
  if (payload.kind === "preluare" && !payload.lines?.length) {
    return "Adaugă cel puțin un material înainte de a trimite.";
  }
  return null;
}

export async function sendRequest(payload: RequestPayload): Promise<RequestResult> {
  const problem = validate(payload);
  if (problem) return { ok: false, error: problem };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Cheia lipsește în Preview și în local, unde e setată doar pe Production.
    // Spunem asta pe față, în loc să ne prefacem că mesajul a plecat.
    console.error("RESEND_API_KEY lipsește: cererea nu a fost trimisă.");
    return {
      ok: false,
      error: `Trimiterea nu e disponibilă momentan. Sună-ne la ${contact.phone} și rezolvăm imediat.`,
    };
  }

  const resend = new Resend(apiKey);

  try {
    const toBusiness = await resend.emails.send({
      from: FROM_BUSINESS,
      to: contact.email,
      // Răspunsul din Gmail pleacă direct către client, fără copiat adrese.
      replyTo: payload.email,
      subject:
        payload.kind === "preluare"
          ? `Solicitare preluare — ${payload.name}`
          : `Cerere de ofertă — ${payload.name}`,
      html: businessEmail(payload),
    });

    if (toBusiness.error) {
      console.error("Resend (către firmă):", toBusiness.error);
      return {
        ok: false,
        error: `Nu am putut trimite cererea. Sună-ne la ${contact.phone} și rezolvăm imediat.`,
      };
    }

    // Confirmarea către client e secundară: dacă pică, cererea tot a ajuns la
    // Vancos, deci nu spunem vizitatorului că a eșuat ceva.
    const toClient = await resend.emails.send({
      from: FROM_CLIENT,
      to: payload.email,
      subject: "Am primit cererea ta · Vancos",
      html: clientEmail(payload),
    });

    if (toClient.error) {
      console.error("Resend (confirmare client):", toClient.error);
    }

    return { ok: true };
  } catch (error) {
    console.error("Resend a aruncat:", error);
    return {
      ok: false,
      error: `Nu am putut trimite cererea. Sună-ne la ${contact.phone} și rezolvăm imediat.`,
    };
  }
}
