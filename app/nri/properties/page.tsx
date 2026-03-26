"use client";

import { useState } from "react";
import NRINavigation from "../../../components/nri/NRINavigation";
import NRIFooter from "../../../components/nri/NRIFooter";
import NRIPropertyCard from "../../../components/nri/NRIPropertyCard";
import NRIReveal from "../../../components/nri/NRIReveal";
import ContactModal from "../../../components/ContactModal";
import NRICTA from "../../../components/nri/NRICTA";
import { siteData } from "../../../lib/data";
import { Search, SlidersHorizontal, MapPin, Shield, TrendingUp, Clock } from "lucide-react";

const propertyCategories = ["All", "Luxury Residential", "Ultra Luxury", "Commercial", "Premium Villa"];

export default function NRIPropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const allProperties = [
    ...siteData.nri.properties,
    ...siteData.nri.properties.map(p => ({ ...p, id: p.id + "-b", badge: "New Launch" })),
    ...siteData.nri.properties.map(p => ({ ...p, id: p.id + "-c", badge: "Hot Deal" })),
  ];

  return (
    <main>
      <NRINavigation />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Hero Banner */}
      <section style={{ backgroundColor: "var(--nri-bg)", paddingTop: "160px", paddingBottom: "80px", paddingLeft: "8%", paddingRight: "8%" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <NRIReveal direction="up">
            <span className="nri-label">Curated Catalogue</span>
            <h1 style={{ fontSize: "clamp(42px,6vw,80px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: "12px", marginBottom: "20px" }}>
              Premium <span style={{ color: "var(--nri-accent)" }}>Properties</span>
            </h1>
            <p style={{ color: "var(--nri-text-muted)", fontSize: "18px", maxWidth: "600px", lineHeight: 1.7, marginBottom: "40px" }}>
              RERA-verified luxury properties in Noida's fastest-growing sectors, handpicked for maximum NRI returns.
            </p>
          </NRIReveal>

          {/* Search & Filter Bar */}
          <NRIReveal direction="up" delay={150}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "100px", padding: "14px 24px", flexGrow: 1, maxWidth: "480px" }}>
                <Search size={18} color="var(--nri-text-muted)" />
                <input placeholder="Search by location, project name..." style={{ background: "none", border: "none", outline: "none", color: "#fff", fontSize: "15px", width: "100%" }} />
              </div>
              <button onClick={() => setIsContactOpen(true)} className="coral-btn" style={{ whiteSpace: "nowrap" }}>
                <SlidersHorizontal size={16} /> Get Personalised List
              </button>
            </div>
          </NRIReveal>
        </div>
      </section>

      {/* Trust Badges */}
      <NRIReveal direction="up">
        <div style={{ backgroundColor: "var(--nri-bg-secondary)", borderTop: "1px solid var(--nri-card-border)", borderBottom: "1px solid var(--nri-card-border)", padding: "28px 8%" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: Shield, text: "100% RERA Verified" },
              { icon: TrendingUp, text: "12–22% Average Returns" },
              { icon: MapPin, text: "Prime Noida Locations" },
              { icon: Clock, text: "End-to-End NRI Support" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--nri-text-muted)", fontSize: "14px", fontWeight: 500 }}>
                <Icon size={18} color="var(--nri-accent)" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </NRIReveal>

      {/* Filter tabs */}
      <section style={{ backgroundColor: "var(--nri-bg)", padding: "48px 8% 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {propertyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "10px 24px", borderRadius: "100px", fontSize: "14px", fontWeight: 600,
                cursor: "pointer", transition: "all 0.3s ease",
                backgroundColor: activeFilter === cat ? "var(--nri-accent)" : "var(--nri-card-bg)",
                color: activeFilter === cat ? "#000" : "var(--nri-text-muted)",
                border: activeFilter === cat ? "none" : "1px solid var(--nri-card-border)"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Properties Grid */}
      <section style={{ backgroundColor: "var(--nri-bg)", padding: "24px 8% 80px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,340px),1fr))", gap: "28px" }}>
            {allProperties.map((prop, idx) => (
              <NRIReveal key={idx} direction="up" delay={idx * 60}>
                <NRIPropertyCard {...prop} onBook={() => setIsContactOpen(true)} />
              </NRIReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section style={{ backgroundColor: "var(--nri-bg-secondary)", padding: "80px 8%", borderTop: "1px solid var(--nri-card-border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <NRIReveal direction="up">
            <span className="nri-label">Why Noida</span>
            <h2 className="two-tone-title">India's #1 NRI <span>Investment Hub</span></h2>
          </NRIReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "48px" }}>
            {[
              { title: "Fastest Appreciation", desc: "Noida properties have seen 18-25% YoY appreciation, driven by Jewar Airport and infrastructure boom.", num: "25%" },
              { title: "Zero NRI Tax Hassle", desc: "We handle TDS, FEMA compliance, and repatriation advisory so your income flows freely back to you.", num: "0%" },
              { title: "RERA Protection", desc: "Every project is RERA-registered, guaranteeing delivery timelines and your investment security.", num: "100%" },
            ].map((item, i) => (
              <NRIReveal key={i} direction="up" delay={i * 100}>
                <div style={{ backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "24px", padding: "36px" }}>
                  <div style={{ fontSize: "48px", fontWeight: 800, color: "var(--nri-accent)", letterSpacing: "-3px", marginBottom: "16px" }}>{item.num}</div>
                  <h3 style={{ fontSize: "20px", color: "#fff", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ color: "var(--nri-text-muted)", lineHeight: 1.7, fontSize: "15px" }}>{item.desc}</p>
                </div>
              </NRIReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section style={{ backgroundColor: "var(--nri-bg)", padding: "80px 8%", borderTop: "1px solid var(--nri-card-border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <NRIReveal direction="up">
            <span className="nri-label">What NRIs Say</span>
            <h2 className="two-tone-title">Trusted by <span>Investors Globally</span></h2>
          </NRIReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "24px", marginTop: "48px" }}>
            {[
              { name: "Priya Sharma", city: "Dubai, UAE", text: "The team made my India investment completely stress-free. Legal, compliance, ROI — all handled end-to-end.", rating: 5 },
              { name: "Arjun Mehta", city: "Toronto, Canada", text: "22% returns in year one. I never thought investing from abroad would be this smooth and transparent.", rating: 5 },
              { name: "Kavita Iyer", city: "Singapore", text: "They found me a property I couldn't have discovered myself from abroad. The site visit video and reports were excellent.", rating: 5 },
            ].map((t, i) => (
              <NRIReveal key={i} direction="up" delay={i * 100}>
                <div style={{ backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "24px", padding: "32px" }}>
                  <div style={{ color: "var(--nri-accent)", fontSize: "18px", marginBottom: "16px" }}>★★★★★</div>
                  <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "15px", marginBottom: "24px", fontStyle: "italic" }}>"{t.text}"</p>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: "var(--nri-text-muted)", fontSize: "13px", marginTop: "4px" }}>{t.city}</div>
                  </div>
                </div>
              </NRIReveal>
            ))}
          </div>
        </div>
      </section>

      <NRICTA />
      <NRIFooter />
    </main>
  );
}
