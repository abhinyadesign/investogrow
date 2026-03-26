"use client";

import { useState } from "react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";
import { ArrowRight } from "lucide-react";

export default function NRICTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section style={{ backgroundColor: "var(--nri-bg)", padding: "100px 8%" }}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <NRIReveal direction="up">
          <div style={{ backgroundColor: "var(--nri-accent)", borderRadius: "40px", padding: "80px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", backgroundColor: "rgba(0,0,0,0.06)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "280px", height: "280px", backgroundColor: "rgba(0,0,0,0.04)", borderRadius: "50%" }} />

            <span style={{ display: "inline-block", backgroundColor: "rgba(0,0,0,0.1)", color: "#000", borderRadius: "100px", padding: "6px 20px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px", position: "relative", zIndex: 1 }}>
              Start Today
            </span>
            <h2 style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 800, color: "#000", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px", position: "relative", zIndex: 1 }}>
              Your India Investment Awaits
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(0,0,0,0.7)", maxWidth: "560px", margin: "0 auto 40px", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
              Join 200+ NRI families who earn premium passive income from India's fastest-growing real estate market.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button onClick={() => setIsContactOpen(true)} style={{ backgroundColor: "#000", color: "var(--nri-accent)", border: "none", padding: "16px 36px", borderRadius: "100px", fontWeight: 700, fontSize: "15px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Book Free Call <ArrowRight size={18} />
              </button>
              <button onClick={() => setIsContactOpen(true)} style={{ backgroundColor: "transparent", color: "#000", border: "2px solid rgba(0,0,0,0.25)", padding: "16px 36px", borderRadius: "100px", fontWeight: 600, fontSize: "15px", cursor: "pointer" }}>
                View Projects
              </button>
            </div>
          </div>
        </NRIReveal>
      </div>
    </section>
  );
}
