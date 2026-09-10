"use client";

import { useEffect, useRef } from "react";

/**
 * Halo verde care urmărește cursorul în interiorul secțiunii părinte.
 *
 * Poziția se scrie direct în stil, printr-un `ref`, nu prin state: la mișcarea
 * mouse-ului ar însemna o re-randare pe fiecare pixel parcurs. Actualizarea e
 * limitată la un cadru, iar mișcarea propriu-zisă o face tranziția CSS, ca
 * haloul să alunece în urma cursorului în loc să sară cu el.
 *
 * Fără cursor — pe telefon, sau la `prefers-reduced-motion` — rămâne fix acolo
 * unde stătea și înainte, deci secțiunea arată la fel ca până acum.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const section = node?.parentElement;
    if (!node || !section) return;

    // Doar unde există un dispozitiv de indicare fin: pe touch, `mousemove` se
    // declanșează o dată, la atingere, și ar lăsa haloul agățat acolo.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;

    function onPointerMove(event: PointerEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!node || !section) return;
        const rect = section.getBoundingClientRect();
        node.style.left = `${event.clientX - rect.left}px`;
        node.style.top = `${event.clientY - rect.top}px`;
        node.style.translate = "-50% -50%";
        node.style.opacity = "1";
      });
    }

    function onPointerLeave() {
      if (!node) return;
      node.style.opacity = "";
    }

    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);
    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute -top-56 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,155,92,0.28)_0%,rgba(62,155,92,0)_70%)] blur-2xl transition-[left,top,opacity] duration-700 ease-out motion-reduce:transition-none"
    />
  );
}
