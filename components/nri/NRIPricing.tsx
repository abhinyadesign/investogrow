"use client";

import { useState } from "react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";
import { ArrowRight } from "lucide-react";

const plans = [
  { name: "Emerging", price: "₹50L", suffix: "entry", features: ["RERA Verified Projects", "Dedicated Relationship Manager", "Monthly ROI Reports", "Legal Advisory (Basic)"], isHighlighted: false },
  { name: "Premium", price: "₹1 Cr", suffix: "entry", features: ["All Emerging Benefits", "Priority Deal Access", "Full Legal & Compliance Suite", "Tax Optimisation Advisory", "Quarterly Portfolio Review"], isHighlighted: true },
  { name: "Ultra HNI", price: "₹5 Cr+", suffix: "entry", features: ["All Premium Benefits", "Bespoke Portfolio Construction", "Offshore Structuring", "Dedicated Wealth Concierge", "Guaranteed ROI SLAs"], isHighlighted: false },
];

export default function NRIPricing() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section style={{ backgroundColor: "var(--nri-bg-secondary)", padding: "100px 8%" }}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <NRIReveal direction="up">
          <span className="nri-label">Tailored For You</span>
          <h2 className="two-tone-title">Investment <span>Tiers</span></h2>
        </NRIReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px", marginTop: "60px", alignItems: "center" }}>
          {plans.map((plan, i) => (
            <NRIReveal key={plan.name} direction="up" delay={i * 100}>
              <div style={{ backgroundColor: plan.isHighlighted ? "rgba(245,200,66,0.04)" : "var(--nri-card-bg)", border: plan.isHighlighted ? "2px solid var(--nri-accent)" : "1px solid var(--nri-card-border)", borderRadius: "32px", padding: plan.isHighlighted ? "56px 44px" : "44px", position: "relative", boxShadow: plan.isHighlighted ? "0 0 60px rgba(245,200,66,0.07)" : "none" }}>
                {plan.isHighlighted && (
                  <span style={{ position: "absolute", top: "-16px", left: "50%", transform: "translateX(-50%)", backgroundColor: "var(--nri-accent)", color: "#000", padding: "6px 24px", borderRadius: "100px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", whiteSpace: "nowrap" }}>
                    Recommended
                  </span>
                )}
                <span className="nri-label" style={{ marginBottom: "12px" }}>{plan.name}</span>
                <div style={{ fontSize: "56px", fontWeight: 800, color: plan.isHighlighted ? "var(--nri-accent)" : "#fff", letterSpacing: "-3px", lineHeight: 1 }}>
                  {plan.price} <span style={{ fontSize: "16px", fontWeight: 400, color: "var(--nri-text-muted)", letterSpacing: 0 }}>{plan.suffix}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "32px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ color: "var(--nri-text-muted)", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--nri-accent)", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsContactOpen(true)} className={plan.isHighlighted ? "coral-btn" : "outline-btn"} style={{ width: "100%", justifyContent: "center" }}>
                  Get Started <ArrowRight size={16} />
                </button>
              </div>
            </NRIReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
