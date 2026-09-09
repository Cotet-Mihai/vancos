# Vancos presentation site — design

Date: 2026-09-09

## Purpose

A multi-page presentation (marketing) site for Vancos, a Bucharest-based waste
collection/removal company, built on the existing Next.js 16 App Router
project (Tailwind v4, Geist fonts already configured). Goal: communicate the
three services clearly and drive visitors to contact the company. No backend,
no CMS, no forms that submit to a server — this is a static presentation
site.

## Site map

Four routes, each with its own `page.tsx` under `app/`:

- `/` — Home: hero + tagline + CTA, short summary of the three services as
  cards linking to `/servicii`, an "advantages" strip (3.5t vehicles need no
  circulation permit anywhere in Bucharest, labor included on request,
  cutting/debitare available), final CTA to `/contact`.
- `/servicii` — Services: all three services in full detail, each with
  title, full description (from the source text below), an image, and a
  short bullet list of advantages.
- `/despre-noi` — About: short positioning text (responsiveness,
  flexibility, Bucharest coverage), company values, coverage area.
- `/contact` — Contact: placeholder contact details (phone, email,
  address/coverage area), a UI-only contact form that opens a pre-filled
  `mailto:` link on submit (no server action, no API route).

Shared `Header` (logo + nav + "Cere ofertă" CTA) and `Footer` (placeholder
contact details + quick links) live in `app/layout.tsx`, implemented as
non-routable colocated components in `app/_components/`.

## Source content (services, verbatim from client, Romanian)

1. **Degajare de deșeuri rezultate din construcții și demolări (până în 4
   tone/container)** — Avantajul principal: firma dispune de mașini de 3,5
   tone, care nu necesită autorizație de circulație în nicio zonă din
   București. Acesta este principalul motiv pentru care clienții apelează la
   noi.
2. **Preluare deșeuri din gospodării** — Dispunem de forță de muncă pentru
   încărcarea containerului, oferită la cerere în funcție de disponibilitate.
   Dacă deșeurile sunt prea voluminoase pentru transport, punem la dispoziție
   servicii de debitare prin aparat flex sau autogen, în funcție de nevoie și
   împrejurimi.
3. **Colectare diversificată a deșeurilor reciclabile** — Fier, aluminiu,
   cupru, bronz, alamă, plumb, precum și electronice și electrocasnice.

Contact details are unknown at design time — placeholders (`[telefon]`,
`[email]`, `[adresă/zonă]`, `[program]`) are used and must be filled in by
the client before launch.

## Visual system

- **Palette** (reference: ecoelite.ro — eco/green with earth tones), defined
  as Tailwind v4 `@theme` custom properties in `app/globals.css`:
  - Brand green (primary/CTA): dark forest green (~`#1F6B3A`)
  - Accent green (hover/highlights): lighter green (~`#3E9B5C`)
  - Neutral dark (text/footer bg): near-black anthracite (~`#1C1C1A`)
  - Neutral light (section backgrounds): warm off-white (~`#F5F4F0`)
  - Secondary warm accent (used sparingly for construction-related badges):
    a muted ochre/terracotta
- **Typography**: Geist Sans only (already installed via `next/font/google`
  in `app/layout.tsx`) — no second font added. Bold/tight tracking for
  headings, normal weight for body.
- **Icons**: hand-authored inline SVGs (single-line, minimal style) for:
  container/skip, truck, house/family, recyclable metals, cutting
  torch/flex. No icon library dependency.
- **Logo**: a simple hand-authored SVG mark (stylized skip/container shape
  combined with a recycling arrow) plus a "VANCOS" wordmark in Geist Bold.
  Used in the header and as the favicon.
- **Images**: a small set of real, freely-licensed (Unsplash) photos
  relevant to the services (construction debris/skip container, dump truck,
  scrap metal/recyclables) downloaded and stored locally under
  `public/images/`, served via `next/image` with static imports (no
  `remotePatterns` / remote-host dependency at runtime). If no good-fit
  photo exists for a given spot, use an illustrative gradient + icon
  background instead of a generic/irrelevant stock photo.

## Page-level structure

### Header / Footer (shared, `app/_components/`)

- `Header.tsx`: logo (SVG) + nav links (Acasă, Servicii, Despre noi,
  Contact) + "Cere ofertă" button (links to `/contact`). Mobile: hamburger
  toggle, implemented as a small client component (`"use client"`) since it
  needs open/close state; everything else stays server components.
- `Footer.tsx`: logo, placeholder contact block, quick nav links, coverage
  note ("Deservim toată zona București"), copyright line.

### `/` Home

1. Hero: full-width section, gradient/photo background, H1 tagline, short
   subhead, primary CTA ("Cere ofertă" → `/contact`) + secondary CTA
   ("Vezi serviciile" → `/servicii`).
2. Services summary: 3 `ServiceCard` components (icon, short title, 1-2 line
   summary, "Detalii" link to `/servicii#<anchor>`).
3. Advantages strip: 3-4 short items with icons (3.5t = fără autorizație,
   forță de muncă la cerere, debitare flex/autogen, acoperire toată zona
   București).
4. Closing CTA band: short prompt + button to `/contact`.

### `/servicii` Services

- Page intro (H1 + short lead-in).
- Three full sections (one per service), each: anchor id for deep-linking
  from Home, image, full description text, bullet list of advantages.
  Alternating image/text side for visual rhythm on desktop, stacked on
  mobile.

### `/despre-noi` About

- Short intro paragraph (positioning: responsiveness, flexibility,
  Bucharest coverage).
- Values/why-us list (reuses some advantage icons from Home for
  consistency).
- Coverage note.

### `/contact` Contact

- Contact details block: phone, email, address/coverage area, working
  hours — all placeholders.
- Contact form (client component): name, phone, message fields; on submit,
  builds and opens a `mailto:` link with subject/body prefilled from the
  fields. No server action, no API route, no validation library — plain
  HTML `required` attributes are enough for this MVP.

## Technical notes

- `app/layout.tsx`: keep Geist font setup; add `title: { template: '%s |
  Vancos', default: 'Vancos' }` and a real `description` in the root
  metadata. Each page sets its own `title`/`description` via exported
  `metadata`.
- No new dependencies (no shadcn, no animation library, no icon package,
  no form library) — Tailwind utilities plus small custom CSS where needed
  (e.g. hero gradient).
- Colocated non-routable components under `app/_components/` (per Next.js
  private-folder convention) for `Header`, `Footer`, `ServiceCard`, and the
  hand-authored `Icon*` components.
- Images: static imports from `public/images/` (or colocated under
  `app/_components/` if colocated with a specific component) so Next.js can
  infer width/height automatically; no `next.config.ts` changes needed.
- Mobile-first responsive layout using Tailwind breakpoints; only the
  header's mobile menu toggle and the contact form need client-side
  interactivity (`"use client"`), everything else stays server components.

## Out of scope (explicitly not building)

- CMS or any data source — all content is hardcoded in the page files.
- Real form submission / email sending backend.
- Multi-language support.
- Blog, testimonials, pricing calculator, or any page beyond the four
  listed above.
- Real contact details, real photos of the client's own trucks/team (client
  will supply these later to swap in).
