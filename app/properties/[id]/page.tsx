"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Bed, Bath, Square, ArrowLeft, Shield, CheckCircle, TrendingUp, Clock, Building, ArrowRight, Star } from "lucide-react";
import { siteData } from "../../../lib/data";
import Navigation from "../../../components/Navigation";
import ContactModal from "../../../components/ContactModal";
import styles from "./PropertyDetail.module.css";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = (siteData.main.mainProperties.items as any[]).find(p => p.id === id);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) notFound();

  const images = [property.image, property.imageSecondary].filter(Boolean);
  const otherProperties = (siteData.main.mainProperties.items as any[]).filter(p => p.id !== id);

  const statusColor = property.status === "For Sale" || property.status === "For Sell"
    ? "#10B981"
    : property.status === "For Rent"
    ? "#3B82F6"
    : "#F59E0B";

  return (
    <main style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Navigation solid />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* ── HERO IMAGE ── */}
      <div style={{ position: "relative", width: "100%", height: "calc(80vh - 80px)", minHeight: "560px", marginTop: "80px", overflow: "hidden" }}>
        <Image
          src={images[activeImage] || property.image}
          alt={property.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />

        {/* Back link */}
        <div style={{ position: "absolute", top: "32px", left: "5%", right: "5%", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
          <Link href="/#properties" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", padding: "10px 20px", borderRadius: "100px", fontWeight: 600, fontSize: "14px", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>
            <ArrowLeft size={16} /> Back to Properties
          </Link>
          <span style={{ backgroundColor: statusColor, color: "#fff", padding: "8px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: 700 }}>
            {property.status}
          </span>
        </div>

        {/* Title overlay */}
        <div style={{ position: "absolute", bottom: "48px", left: "5%", right: "5%", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)", marginBottom: "12px", fontSize: "15px" }}>
            <MapPin size={16} color="#fff" /> {property.location}
          </div>
          <h1 style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: 0, lineHeight: 1.05 }}>
            {property.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px" }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={14} color="#F5C842" fill="#F5C842" />)}
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginLeft: "4px" }}>5.0 Premium Listing</span>
          </div>
        </div>

        {/* Thumbnail switcher */}
        {images.length > 1 && (
          <div style={{ position: "absolute", bottom: "48px", right: "5%", display: "flex", gap: "10px", zIndex: 10 }}>
            {images.map((img: string, i: number) => (
              <div key={i} onClick={() => setActiveImage(i)}
                style={{ width: "72px", height: "52px", borderRadius: "12px", overflow: "hidden", border: `2px solid ${i === activeImage ? "#F5C842" : "rgba(255,255,255,0.4)"}`, cursor: "pointer", position: "relative" }}>
                <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "60px 0" }}>
        <div className={styles.pageGrid}>

          {/* LEFT */}
          <div>
            {/* Stats Strip */}
            <div className={styles.statsStrip}>
              {[
                { icon: Bed, label: "Bedrooms", value: property.beds },
                { icon: Bath, label: "Bathrooms", value: property.baths },
                { icon: Square, label: "Sq. Ft.", value: property.sqft?.toLocaleString() },
                { icon: Clock, label: "Possession", value: property.possession || "On Request" },
              ].map(({ icon: Icon, label, value }, i, arr) => (
                <div key={label} className={styles.statItem} style={{ borderRight: i < arr.length - 1 ? "1px solid #F0F0F0" : "none" }}>
                  <Icon size={22} color="#0c1015" style={{ marginBottom: "8px" }} />
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#0c1015", letterSpacing: "-0.5px" }}>{value}</div>
                  <div style={{ fontSize: "12px", color: "#8a93a2", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className={styles.section}>
              <span className={styles.sectionLabel}>About This Property</span>
              <h2 className={styles.sectionTitle}>Property <span style={{ color: "#0c1015" }}>Overview</span></h2>
              <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "17px" }}>{property.description}</p>
            </div>

            {/* Key Highlights */}
            {property.highlights && (
              <div className={styles.section}>
                <span className={styles.sectionLabel}>Key Highlights</span>
                <h2 className={styles.sectionTitle}>What Makes It <span>Special</span></h2>
                <div className={styles.featuresGrid}>
                  {property.highlights.map((h: string) => (
                    <div key={h} className={styles.featureCard}>
                      <CheckCircle size={18} color="#0c1015" style={{ flexShrink: 0, marginTop: "1px" }} />
                      <span style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {property.amenities && (
              <div className={styles.section}>
                <span className={styles.sectionLabel}>Lifestyle Amenities</span>
                <h2 className={styles.sectionTitle}>World-Class <span>Amenities</span></h2>
                <div className={styles.amenitiesGrid}>
                  {property.amenities.map((a: string) => (
                    <div key={a} className={styles.amenityChip}>
                      <span style={{ color: "#0c1015", fontSize: "16px" }}>✦</span> {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Info Grid */}
            <div className={styles.section}>
              <span className={styles.sectionLabel}>Property Details</span>
              <h2 className={styles.sectionTitle}>Property <span>Information</span></h2>
              <div className={styles.infoGrid}>
                {[
                  { icon: Building, label: "Developer", value: property.developer || "Premium Developer" },
                  { icon: Shield, label: "Status", value: property.status || "Verified" },
                  { icon: TrendingUp, label: "Investment Potential", value: "High ROI" },
                  { icon: Clock, label: "Possession", value: property.possession || "On Request" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <Icon size={20} color="#0c1015" />
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#8a93a2", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
                      <div style={{ color: "#0c1015", fontWeight: 700, fontSize: "15px", marginTop: "4px" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Sidebar */}
          <div className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
              <div style={{ fontSize: "36px", fontWeight: 800, color: "#0c1015", letterSpacing: "-2px", marginBottom: "4px" }}>
                ${property.price}
              </div>
              <p style={{ color: "#8a93a2", fontSize: "14px", marginBottom: "28px" }}>All-inclusive price · No hidden charges</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <button onClick={() => setIsContactOpen(true)} className={styles.primaryBtn}>
                  Schedule a Viewing <ArrowRight size={16} />
                </button>
                <button onClick={() => setIsContactOpen(true)} className={styles.outlineBtn}>
                  Request More Info
                </button>
              </div>

              <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: Shield, text: "Verified Listing" },
                  { icon: TrendingUp, text: "High ROI Potential" },
                  { icon: CheckCircle, text: "Direct — No Middlemen" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6b7280", fontSize: "14px" }}>
                    <Icon size={16} color="#0c1015" /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Other properties */}
            <div className={styles.otherProps}>
              <p style={{ color: "#8a93a2", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
                Similar Properties
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {otherProperties.map((p: any) => (
                  <Link key={p.id} href={`/properties/${p.id}`} className={styles.otherPropLink}>
                    <div style={{ width: "60px", height: "48px", borderRadius: "10px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                      <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <div style={{ color: "#0c1015", fontWeight: 600, fontSize: "14px" }}>{p.title}</div>
                      <div style={{ color: "#8a93a2", fontSize: "13px", marginTop: "2px" }}>{p.location}</div>
                      <div style={{ color: "#0c1015", fontSize: "13px", fontWeight: 700, marginTop: "2px" }}>${p.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
