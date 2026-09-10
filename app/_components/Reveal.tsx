"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  /** Decalajul față de frații din același grup, în milisecunde. */
  delay?: number;
  className?: string;
};

/**
 * Dezvăluie conținutul când intră în viewport: urcă ușor și se aprinde, o
 * singură dată, cu delay opțional pentru eșalonare.
 *
 * Cazul `prefers-reduced-motion` e rezolvat în CSS, nu în JS: utilitarele
 * `motion-reduce:*` readuc elementul la starea finală indiferent ce spune
 * observatorul. Așa conținutul e vizibil și dacă JS-ul nu apucă să ruleze, iar
 * varianta veche, care pornea de la `opacity-0` fără nicio excepție, nu mai
 * poate ascunde pagina de cineva care a cerut mai puțină mișcare.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-1000 [transition-timing-function:cubic-bezier(0.2,0.6,0.2,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
