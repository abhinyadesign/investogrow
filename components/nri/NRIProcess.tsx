"use client";

import { useState } from "react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";

export default function NRIProcess() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const steps = [
    { num: "01", title: "Discovery Call", desc: "We understand your investment goals, tax situation, and risk appetite through a free 30-min consultation." },
    { num: "02", title: "Curated Portfolio", desc: "We hand-pick RERA-verified Noida projects matching your precise criteria—no middlemen, only direct deals." },
    { num: "03", title: "Seamless Paperwork", desc: "Our in-house legal team handles all documentation, NRI-specific compliance, and power of attorney remotely." },
    { num: "04", title: "Yield & Growth", desc: "Sit back. We manage your asset locally while you track returns through your dedicated investor dashboard." },
  ];

  return (
    <section style={{ backgroundColor: "var(--nri-bg)", padding: "100px 8%" }}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <NRIReveal direction="up">
          <span className="nri-label">Simple Process</span>
          <h2 className="two-tone-title">How We <span>Work</span></h2>
        </NRIReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px", marginTop: "60px" }}>
          {steps.map((step, i) => (
            <NRIReveal key={step.num} direction="up" delay={i * 100}>
              <div
                style={{ borderTop: "2px solid var(--nri-card-border)", paddingTop: "36px", cursor: "default", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--nri-accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--nri-card-border)")}
              >
                <span style={{ fontSize: "48px", fontWeight: 800, color: "rgba(245,200,66,0.15)", letterSpacing: "-2px" }}>{step.num}</span>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginTop: "16px", marginBottom: "14px" }}>{step.title}</h3>
                <p style={{ color: "var(--nri-text-muted)", lineHeight: 1.7, fontSize: "15px" }}>{step.desc}</p>
              </div>
            </NRIReveal>
          ))}
        </div>

        <NRIReveal direction="up" delay={200}>
          <div style={{ marginTop: "60px", textAlign: "center" }}>
            <button className="coral-btn" onClick={() => setIsContactOpen(true)} style={{ padding: "16px 40px", fontSize: "15px" }}>
              Book Your Free Discovery Call →
            </button>
          </div>
        </NRIReveal>
      </div>
    </section>
  );
}
