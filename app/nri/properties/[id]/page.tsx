"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, ArrowLeft, Shield, CheckCircle, TrendingUp, Clock, Building } from "lucide-react";
import { siteData } from "../../../../lib/data";
import NRINavigation from "../../../../components/nri/NRINavigation";
import NRIFooter from "../../../../components/nri/NRIFooter";
import NRICTA from "../../../../components/nri/NRICTA";
import ContactModal from "../../../../components/ContactModal";
import NRIReveal from "../../../../components/nri/NRIReveal";
import { notFound } from "next/navigation";

export default function NRIPropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = (siteData.nri.properties as any[]).find(p => p.id === id);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) notFound();

  const images = [property.image, property.imageSecondary].filter(Boolean);

  return (
    <main>
      <NRINavigation />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* FULL-WIDTH HERO IMAGE */}
      <div style={{ position: "relative", width: "100%", height: "85vh", minHeight: "600px", marginTop: 0, overflow: "hidden" }}>
        <Image
          src={images[activeImage] || property.image}
          alt={property.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,14,23,0.2) 0%, rgba(15,14,23,0.8) 100%)" }} />

        {/* Navigation bar on top */}
        <div style={{ position: "absolute", top: "80px", left: "5%", right: "5%", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
          <Link href="/nri/properties" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", backgroundColor: "rgba(28,27,42,0.8)", backdropFilter: "blur(10px)", padding: "10px 20px", borderRadius: "100px", fontWeight: 600, fontSize: "14px", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}>
            <ArrowLeft size={16} /> Back to Properties
          </Link>
          {property.status && (
            <span style={{ backgroundColor: property.status === "Ready to Move" ? "var(--nri-accent)" : "rgba(28,27,42,0.9)", color: property.status === "Ready to Move" ? "#000" : "var(--nri-accent)", border: property.status !== "Ready to Move" ? "1px solid var(--nri-accent)" : "none", padding: "8px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: 700, backdropFilter: "blur(10px)" }}>
              {property.status}
            </span>
          )}
        </div>

        {/* Title overlay at bottom */}
        <div style={{ position: "absolute", bottom: "48px", left: "5%", right: "5%", zIndex: 10 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
            {property.badge && <span style={{ backgroundColor: "rgba(28,27,42,0.85)", color: "var(--nri-accent)", border: "1px solid rgba(245,200,66,0.3)", padding: "5px 16px", borderRadius: "100px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", backdropFilter: "blur(8px)" }}>{property.badge}</span>}
            {property.roi && <span style={{ backgroundColor: "var(--nri-accent)", color: "#000", padding: "5px 16px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>{property.roi}</span>}
          </div>
          <h1 style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: "0 0 12px", lineHeight: 1.05 }}>{property.title}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", fontSize: "16px" }}>
            <MapPin size={18} color="var(--nri-accent)" /> {property.location}
          </div>
        </div>

        {/* Thumbnail switcher */}
        {images.length > 1 && (
          <div style={{ position: "absolute", bottom: "48px", right: "5%", display: "flex", gap: "10px", zIndex: 10 }}>
            {images.map((img: string, i: number) => (
              <div key={i} onClick={() => setActiveImage(i)} style={{ width: "70px", height: "50px", borderRadius: "12px", overflow: "hidden", border: `2px solid ${i === activeImage ? "var(--nri-accent)" : "rgba(255,255,255,0.3)"}`, cursor: "pointer", position: "relative" }}>
                <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <section style={{ backgroundColor: "var(--nri-bg)", padding: "60px 5%" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "60px", alignItems: "start" }}>

          {/* LEFT: Property details */}
          <div>
            {/* Quick stats strip */}
            <NRIReveal direction="up">
              <div style={{ display: "flex", gap: "0", backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "20px", overflow: "hidden", marginBottom: "48px" }}>
                {[
                  { icon: Bed, label: "Bedrooms", value: property.beds },
                  { icon: Bath, label: "Bathrooms", value: property.baths },
                  { icon: Square, label: "Sq. Ft.", value: property.sqft.toLocaleString() },
                  { icon: Clock, label: "Possession", value: property.possession || "On Request" },
                ].map(({ icon: Icon, label, value }, i, arr) => (
                  <div key={label} style={{ flex: 1, padding: "24px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid var(--nri-card-border)" : "none" }}>
                    <Icon size={22} color="var(--nri-accent)" style={{ marginBottom: "8px" }} />
                    <div style={{ fontSize: "24px", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>{value}</div>
                    <div style={{ fontSize: "12px", color: "var(--nri-text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{label}</div>
                  </div>
                ))}
              </div>
            </NRIReveal>

            {/* Description */}
            <NRIReveal direction="up">
              <div style={{ marginBottom: "48px" }}>
                <span className="nri-label">About This Property</span>
                <h2 className="two-tone-title" style={{ marginBottom: "20px" }}>Property <span>Overview</span></h2>
                <p style={{ color: "var(--nri-text-muted)", lineHeight: 1.8, fontSize: "17px" }}>{property.description}</p>
              </div>
            </NRIReveal>

            {/* Key Highlights */}
            {property.highlights && (
              <NRIReveal direction="up">
                <div style={{ marginBottom: "48px" }}>
                  <span className="nri-label">Key Highlights</span>
                  <h2 className="two-tone-title" style={{ marginBottom: "24px" }}>What Makes It <span>Special</span></h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {property.highlights.map((h: string) => (
                      <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "12px", backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "16px", padding: "18px 20px" }}>
                        <CheckCircle size={18} color="var(--nri-accent)" style={{ flexShrink: 0, marginTop: "1px" }} />
                        <span style={{ color: "var(--nri-text-muted)", fontSize: "15px", lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </NRIReveal>
            )}

            {/* Amenities */}
            {property.amenities && (
              <NRIReveal direction="up">
                <div style={{ marginBottom: "48px" }}>
                  <span className="nri-label">World-Class Amenities</span>
                  <h2 className="two-tone-title" style={{ marginBottom: "24px" }}>Lifestyle <span>Amenities</span></h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
                    {property.amenities.map((a: string) => (
                      <div key={a} style={{ backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "12px", padding: "14px 18px", color: "var(--nri-text-muted)", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px", transition: "border-color 0.2s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.3)")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--nri-card-border)")}
                      >
                        <span style={{ color: "var(--nri-accent)", fontSize: "16px" }}>✦</span> {a}
                      </div>
                    ))}
                  </div>
                </div>
              </NRIReveal>
            )}

            {/* Developer & RERA */}
            <NRIReveal direction="up">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[
                  { icon: Building, label: "Developer", value: property.developer || "Premium Developer" },
                  { icon: Shield, label: "RERA Number", value: property.rera || "Verified" },
                  { icon: TrendingUp, label: "Expected ROI", value: property.roi || "15%+" },
                  { icon: Clock, label: "Possession", value: property.possession || "On Request" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "16px", padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "rgba(245,200,66,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} color="var(--nri-accent)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "var(--nri-text-muted)", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginTop: "4px" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </NRIReveal>
          </div>

          {/* RIGHT: Sticky Sidebar */}
          <div style={{ position: "sticky", top: "100px" }}>
            <NRIReveal direction="right">
              <div style={{ backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "28px", padding: "36px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--nri-accent)", letterSpacing: "-2px", marginBottom: "4px" }}>{property.price}</div>
                <p style={{ color: "var(--nri-text-muted)", fontSize: "14px", marginBottom: "28px" }}>All-inclusive price · No hidden charges</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  <button onClick={() => setIsContactOpen(true)} className="coral-btn" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                    Book Virtual Site Tour
                  </button>
                  <button onClick={() => setIsContactOpen(true)} className="outline-btn" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                    Request Callback
                  </button>
                </div>

                <div style={{ borderTop: "1px solid var(--nri-card-border)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { icon: Shield, text: "100% RERA Verified" },
                    { icon: TrendingUp, text: "No Middlemen — Direct Deal" },
                    { icon: CheckCircle, text: "Remote Friendly Process" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--nri-text-muted)", fontSize: "14px" }}>
                      <Icon size={16} color="var(--nri-accent)" /> {text}
                    </div>
                  ))}
                </div>
              </div>
            </NRIReveal>

            {/* Other properties */}
            <NRIReveal direction="right" delay={100}>
              <div style={{ marginTop: "24px", backgroundColor: "var(--nri-card-bg)", border: "1px solid var(--nri-card-border)", borderRadius: "20px", padding: "24px" }}>
                <p style={{ color: "var(--nri-text-muted)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Other Properties</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {(siteData.nri.properties as any[]).filter(p => p.id !== property.id).map(p => (
                    <Link key={p.id} href={`/nri/properties/${p.id}`} style={{ display: "flex", gap: "12px", alignItems: "center", textDecoration: "none", padding: "10px", borderRadius: "12px", transition: "background 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <div style={{ width: "56px", height: "44px", borderRadius: "8px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                      </div>
                      <div>
                        <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{p.title}</div>
                        <div style={{ color: "var(--nri-accent)", fontSize: "13px", fontWeight: 700 }}>{p.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </NRIReveal>
          </div>
        </div>

        {/* @media: Stack on mobile */}
        <style>{`
          @media (max-width: 900px) {
            section > div > div { grid-template-columns: 1fr !important; }
            section > div > div > div:last-child { position: static !important; }
          }
        `}</style>
      </section>

      <NRICTA />
      <NRIFooter />
    </main>
  );
}
