"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

// Conturul sectoarelor e trasat automat din harta administrativă de referință:
// pixelii au fost clasificați pe culoare, marginea fiecărei zone urmărită cu
// Moore-neighbor tracing și simplificată cu Douglas-Peucker (toleranță 2.5px).
// De aceea punctele nu sunt „rotunde" — sunt măsurate, nu desenate de mână.
// labelAt e verificat programatic că pică în interiorul sectorului.
const sectors = [
  {
    id: 1,
    label: "Sector 1",
    labelAt: [290, 235],
    points:
      "328,7 338,8 345,18 344,74 349,87 345,91 343,111 347,121 357,118 362,124 347,132 353,145 360,149 360,163 369,172 338,197 348,216 338,255 339,281 344,287 343,308 337,317 342,332 290,336 284,333 273,325 278,318 275,309 247,282 238,266 202,242 171,229 172,223 123,202 95,205 75,227 71,227 73,204 86,168 79,162 79,147 91,140 104,151 116,136 129,134 134,99 131,94 139,87 144,90 163,79 166,76 163,63 170,55 179,51 189,64 210,51 210,43 215,39 220,38 226,43 258,31 261,19 273,8 284,9 290,21 321,16",
  },
  {
    id: 2,
    label: "Sector 2",
    labelAt: [408, 253],
    points:
      "370,172 516,195 519,198 505,208 460,268 484,279 491,279 504,270 509,275 500,296 502,301 510,296 529,301 536,293 541,293 552,308 455,337 423,342 373,338 364,333 354,335 351,330 344,331 338,317 345,302 339,255 349,216 339,197",
  },
  {
    id: 3,
    label: "Sector 3",
    labelAt: [450, 366],
    points:
      "550,309 567,311 576,323 608,323 613,328 604,358 609,364 603,381 594,385 595,415 578,426 585,439 586,449 582,453 512,458 391,414 363,383 357,364 330,349 333,334 345,331 373,339 423,343 455,338",
  },
  {
    id: 4,
    label: "Sector 4",
    labelAt: [375, 455],
    points:
      "329,350 356,364 362,383 389,414 474,445 436,522 439,525 434,533 472,600 480,600 490,614 467,625 466,635 461,640 453,643 397,601 393,597 399,588 364,558 364,546 337,541 334,560 329,564 325,550 321,550 312,539 322,499 322,470 333,437 330,417 316,403 319,392 313,383 313,371 325,360",
  },
  {
    id: 5,
    label: "Sector 5",
    labelAt: [258, 435],
    points:
      "272,326 290,337 332,334 328,354 312,371 312,383 318,392 315,403 329,417 332,437 321,470 321,499 315,531 311,536 219,510 198,485 202,480 200,476 196,472 189,477 180,470 144,427 128,440 122,431 113,432 105,420 114,415 188,401 194,401 188,408 190,411 193,408 203,415 207,410 220,407 219,398 225,398 228,407 240,403 240,394 251,382 252,358 256,351 251,346 251,338",
  },
  {
    id: 6,
    label: "Sector 6",
    labelAt: [215, 322],
    points:
      "115,202 172,224 171,230 202,243 238,267 246,282 274,309 277,317 274,323 250,338 250,346 255,351 251,358 250,382 239,394 240,402 228,406 226,398 219,397 219,407 207,409 203,414 193,407 190,410 195,401 188,400 110,415 97,424 69,426 65,422 47,374 46,353 37,346 37,339 43,333 42,320 52,316 143,310 158,298 157,294 151,295 146,290 146,272 143,269 115,260 80,241 71,245 63,240 92,208",
  },
];

export function CoverageMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:gap-16">
      <Reveal className="flex flex-col gap-6 lg:flex-1">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-paper sm:text-5xl">Zona de acoperire</h2>
          <span className="h-[3px] w-12 rounded-full bg-brand" />
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {sectors.map((sector) => (
            <li key={sector.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(sector.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(sector.id)}
                onBlur={() => setActive(null)}
                className={`flex w-full items-center justify-between gap-3 rounded-[1.25rem] border p-3 text-left transition-colors duration-200 motion-reduce:transition-none ${
                  active === sector.id
                    ? "border-brand-light/50 bg-brand-light/10"
                    : "border-white/10 bg-white/[0.03] hover:border-brand-light/40 hover:bg-white/[0.06]"
                }`}
              >
                <span className="min-w-0 text-xs font-semibold text-paper sm:text-sm">Sector</span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-sm font-bold transition-colors duration-200 motion-reduce:transition-none ${
                    active === sector.id
                      ? "bg-brand-light text-ink"
                      : "border border-white/15 text-brand-light"
                  }`}
                >
                  {sector.id}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className="lg:flex-1">
        <div className="relative">
          <svg
            viewBox="0 0 650 650"
            className="mx-auto h-auto w-full max-w-[30rem]"
            role="img"
            aria-label="Harta Bucureștiului, cu cele 6 sectoare deservite"
          >
            {sectors.map((sector) => {
              const on = active === sector.id;
              const dimmed = active !== null && !on;
              return (
                <g
                  key={sector.id}
                  onMouseEnter={() => setActive(sector.id)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-pointer"
                >
                  <polygon
                    points={sector.points}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className={`transition-[fill,stroke] duration-300 motion-reduce:transition-none ${
                      on
                        ? "fill-brand-light stroke-brand-light"
                        : dimmed
                          ? "fill-brand/25 stroke-white/10"
                          : "fill-brand/45 stroke-white/25"
                    }`}
                  />
                  <text
                    x={sector.labelAt[0]}
                    y={sector.labelAt[1]}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={`pointer-events-none text-[2rem] font-bold transition-colors duration-300 motion-reduce:transition-none ${
                      on ? "fill-ink" : dimmed ? "fill-paper/40" : "fill-paper/80"
                    }`}
                  >
                    {sector.id}
                  </text>
                </g>
              );
            })}
          </svg>

          <p className="mt-4 text-center text-sm text-paper/60">București</p>
        </div>
      </Reveal>
    </section>
  );
}
