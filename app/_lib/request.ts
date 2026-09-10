/**
 * Forma unei cereri trimise din site, comună celor două formulare.
 *
 * Stă separat de acțiunea de server ca să o poată importa și componentele de
 * client, fără să tragă după ele SDK-ul de email.
 */
export type PickupLine = {
  name: string;
  quantity: number;
  pricePerKg: number;
};

export type RequestPayload = {
  /** „ofertă" vine din formularul de contact, „preluare" din calculator. */
  kind: "oferta" | "preluare";
  name: string;
  email: string;
  phone: string;
  /** Doar la cererea de ofertă. */
  wasteType?: string;
  details?: string;
  /** Doar la solicitarea de preluare, din calculator. */
  lines?: PickupLine[];
  total?: number;
  /** Câmp-capcană: rămâne gol la oameni, se completează la roboți. */
  website?: string;
};

export type RequestResult = { ok: true } | { ok: false; error: string };

export const lei = (value: number) =>
  value.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
