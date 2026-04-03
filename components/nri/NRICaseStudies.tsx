"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, TrendingUp } from "lucide-react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";
import { siteData } from "../../lib/data";

const cases = [
  {
    propertyId: "prop-1",
    title: "Gold Coast Penthouse",
    tag: "Luxury Residential",
    roi: "+22% ROI",
    location: "Sector 150, Noida",
    img: "/images/RQA2wDd4pBGiWeZ2ktDtcszRbrM.jpg",
  },
  {
    propertyId: "prop-2",
    title: "The Imperial Villas",
    tag: "Premium Township",
    roi: "+17% ROI",
    location: "Sector 143, Noida",
    img: "/images/BVa676Qcx73rJphRua2dXkWNAs.jpg",
  },
  {
    propertyId: "prop-3",
    title: "Skyline Residences",
    tag: "Ultra Luxury",
    roi: "+19% ROI",
    location: "Sector 128, Noida",
    img: "/images/yzpRxn2HI5TBopZVeE1K1WuVAd75d.jpg",
  },
];

export default function NRICaseStudies() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section style={{ backgroundColor: "var(--nri-bg-secondary)", padding: "100px 8%" }}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <NRIReveal direction="up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <span className="nri-label">Our Portfolio</span>
              <h2 className="two-tone-title" style={{ marginBottom: 0 }}>Success <span>Stories</span></h2>
            </div>
            <button className="outline-btn" onClick={() => setIsContactOpen(true)}>View All Projects</button>
          </div>
        </NRIReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {cases.map((c, i) => (
            <NRIReveal key={c.title} direction="up" delay={i * 120}>
              {/* Entire card is clickable → property detail page */}
              <Link href={`/nri/properties/${c.propertyId}`} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "460px", cursor: "pointer" }}
                >
                  <Image src={c.img} alt={c.title} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)", transition: "background 0.3s ease" }} />

                  {/* ROI Badge */}
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "var(--nri-accent)", color: "#000", borderRadius: "100px", padding: "6px 16px", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <TrendingUp size={14} /> {c.roi}
                  </div>

                  {/* Tag + title */}
                  <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                    <span style={{ color: "var(--nri-accent)", textTransform: "uppercase", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px" }}>{c.tag}</span>
                    <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: 800, marginTop: "8px", letterSpacing: "-0.5px" }}>{c.title}</h3>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={13} /> {c.location}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", color: "var(--nri-accent)", fontSize: "14px", fontWeight: 600 }}>
                      View Property Details <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Hover: gold circle icon */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "64px", height: "64px", backgroundColor: "var(--nri-accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease", pointerEvents: "none" }}
                    className="case-hover-icon"
                  >
                    <ArrowUpRight size={28} color="#000" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </NRIReveal>
          ))}
        </div>

        {/* CTA below */}
        <NRIReveal direction="up" delay={200}>
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <button className="coral-btn" onClick={() => setIsContactOpen(true)} style={{ padding: "16px 40px" }}>
              Request My Personalised Portfolio →
            </button>
          </div>
        </NRIReveal>
      </div>

      <style>{`
        a:hover .case-hover-icon { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
