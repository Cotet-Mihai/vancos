"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  delay?: number;
  className?: string;
  variant?: "fade-up" | "line";
};

const variants = {
  "fade-up": { hidden: "translate-y-8 opacity-0", visible: "translate-y-0 opacity-100" },
  line: { hidden: "scale-x-0", visible: "scale-x-100" },
};

export function Reveal({ children, delay = 0, className = "", variant = "fade-up" }: RevealProps) {
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
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? variants[variant].visible : variants[variant].hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
