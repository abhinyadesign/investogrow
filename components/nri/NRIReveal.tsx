"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function NRIReveal({ children, delay = 0, direction = "up" }: { children: ReactNode; delay?: number; direction?: "up" | "left" | "right" | "fade" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateMap = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", fade: "none" };
    el.style.opacity = "0";
    el.style.transform = translateMap[direction];
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return <div ref={ref}>{children}</div>;
}
