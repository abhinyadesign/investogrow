"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  num: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: boolean;
}

function CounterNumber({ target, prefix = "", suffix = "", decimals = false }: { target: number; prefix?: string; suffix?: string; decimals?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(decimals ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <div ref={ref} style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 800, color: "var(--nri-accent)", letterSpacing: "-3px", lineHeight: 1 }}>
      {prefix}{decimals ? count.toFixed(1) : count}{suffix}
    </div>
  );
}

const stats: Stat[] = [
  { num: 500, prefix: "₹", suffix: "Cr+", label: "Total Assets Managed" },
  { num: 200, suffix: "+", label: "NRI Families Served" },
  { num: 14, suffix: "%", label: "Avg. Annual Returns", decimals: false },
  { num: 25, suffix: "+", label: "Years of Expertise" },
  { num: 100, suffix: "%", label: "Transparent Dealings" },
];

export default function NRIStats() {
  return (
    <section style={{ backgroundColor: "var(--nri-bg-secondary)", padding: "80px 8%", borderTop: "1px solid var(--nri-card-border)", borderBottom: "1px solid var(--nri-card-border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "48px", maxWidth: "1400px", margin: "0 auto" }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <CounterNumber target={stat.num} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
            <p style={{ color: "var(--nri-text-muted)", marginTop: "12px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
