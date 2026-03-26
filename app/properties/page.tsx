"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Search, ArrowRight } from "lucide-react";
import { siteData } from "../../lib/data";
import Navigation from "../../components/Navigation";
import ContactModal from "../../components/ContactModal";

const filters = ["All", "For Rent", "For Sale", "For Investment"];

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const allProps = siteData.main.mainProperties.items as any[];
  const filtered = activeFilter === "All"
    ? allProps
    : allProps.filter(p => p.status === activeFilter || p.status?.includes(activeFilter.replace("For ", "")));

  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navigation />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", paddingLeft: "5%", paddingRight: "5%", backgroundColor: "#F8F9FA", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "#6b7280" }}>Our Portfolio</span>
          <h1 style={{ fontSize: "clamp(40px,6vw,76px)", fontWeight: 800, color: "#0c1015", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "12px 0 20px" }}>
            Premium Properties
          </h1>
          <p style={{ color: "#6b7280", fontSize: "18px", maxWidth: "560px", lineHeight: 1.7, marginBottom: "36px" }}>
            Handpicked luxury properties — from iconic LA estates to Beverly Hills classics — ready to buy, rent, or invest.
          </p>

          {/* Search bar */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#fff", border: "1.5px solid #E5E7EB", borderRadius: "100px", padding: "14px 24px", flexGrow: 1, maxWidth: "440px" }}>
              <Search size={18} color="#9CA3AF" />
              <input placeholder="Search by location or title..." style={{ background: "none", border: "none", outline: "none", color: "#0c1015", fontSize: "15px", width: "100%" }} />
            </div>
            <button onClick={() => setIsContactOpen(true)} style={{ backgroundColor: "#0c1015", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "100px", fontWeight: 700, fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
              Get Personalised List <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ backgroundColor: "#fff", padding: "32px 5% 16px", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{ padding: "10px 24px", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease", backgroundColor: activeFilter === f ? "#0c1015" : "#F8F9FA", color: activeFilter === f ? "#fff" : "#6b7280", border: activeFilter === f ? "none" : "1px solid #E5E7EB" }}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Properties Grid */}
      <section style={{ backgroundColor: "#fff", padding: "48px 5% 80px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "28px" }}>
            {(filtered.length ? filtered : allProps).map((prop: any) => (
              <div key={prop.id} style={{ backgroundColor: "#fff", border: "1px solid #F0F0F0", borderRadius: "24px", overflow: "hidden", transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                {/* Image — links to detail */}
                <Link href={`/properties/${prop.id}`} style={{ display: "block", position: "relative", height: "260px", overflow: "hidden", textDecoration: "none" }}>
                  <Image src={prop.image} alt={prop.title} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.transform = "scale(1.05)")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.transform = "scale(1)")}
                  />
                  <span style={{ position: "absolute", top: "16px", left: "16px", backgroundColor: "#0c1015", color: "#fff", padding: "5px 14px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>
                    {prop.status}
                  </span>
                </Link>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: "#0c1015", letterSpacing: "-0.5px" }}>${prop.price}</div>
                  </div>
                  <Link href={`/properties/${prop.id}`} style={{ textDecoration: "none" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0c1015", marginBottom: "8px", cursor: "pointer" }}>{prop.title}</h3>
                  </Link>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
                    <MapPin size={14} /> {prop.location}
                  </div>
                  <div style={{ display: "flex", gap: "16px", color: "#6b7280", fontSize: "13px", paddingTop: "16px", borderTop: "1px solid #F0F0F0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Bed size={14} /> {prop.beds} Beds</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Bath size={14} /> {prop.baths} Baths</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Square size={14} /> {prop.sqft?.toLocaleString()} sqft</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                    <Link href={`/properties/${prop.id}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#0c1015", color: "#fff", borderRadius: "100px", padding: "12px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => setIsContactOpen(true)} style={{ border: "1.5px solid #E5E7EB", background: "transparent", color: "#6b7280", borderRadius: "100px", padding: "12px 16px", cursor: "pointer", fontSize: "13px" }}>
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#6b7280" }}>
              <p style={{ fontSize: "18px" }}>No properties match this filter.</p>
              <button onClick={() => setActiveFilter("All")} style={{ marginTop: "16px", backgroundColor: "#0c1015", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "100px", cursor: "pointer", fontWeight: 600 }}>Show All</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
