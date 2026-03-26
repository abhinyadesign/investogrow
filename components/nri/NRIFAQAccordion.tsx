"use client";
import { useState } from "react";

const faqs = [
  { q: "Can NRIs buy property in India?", a: "Yes. NRIs and PIOs can freely purchase any residential or commercial property in India under FEMA regulations, except agricultural land, plantation property, or farmhouse." },
  { q: "What is the typical ROI for NRI investments?", a: "Our curated Noida portfolio has historically delivered 12–22% annualised returns depending on the asset class, location, and holding period." },
  { q: "Do I need to be physically present to invest?", a: "No. Our entire process is remote-friendly. We handle documentation, site visits, and legal compliance on your behalf with whatsapp-level transparency." },
  { q: "How do I repatriate my rental income?", a: "Rental income earned by NRIs is freely repatriable after deducting applicable TDS, as per RBI and FEMA guidelines." },
  { q: "Is my investment RERA verified?", a: "Absolutely. Every project we recommend is RERA-registered. Documentation is verified by our legal team before we present any opportunity to you." },
];

export default function NRIFAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: "var(--nri-bg)", padding: "100px 8%" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span className="nri-label">Got Questions?</span>
        <h2 className="two-tone-title">Frequently Asked <span>Questions</span></h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0px", marginTop: "40px" }}>
          {faqs.map((faq, i) => (
            <div key={i}
              style={{ borderBottom: "1px solid var(--nri-card-border)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "none", border: "none", cursor: "pointer",
                  padding: "28px 0", textAlign: "left"
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: 600, color: open === i ? "var(--nri-accent)" : "#fff", transition: "color 0.3s", paddingRight: "32px" }}>
                  {faq.q}
                </span>
                <span style={{ color: "var(--nri-accent)", fontSize: "28px", fontWeight: 300, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s ease", flexShrink: 0 }}>+</span>
              </button>
              {open === i && (
                <p style={{ color: "var(--nri-text-muted)", paddingBottom: "28px", fontSize: "16px", lineHeight: 1.7, marginTop: "-8px" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
