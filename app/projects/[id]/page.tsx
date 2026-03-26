"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Building2, ArrowLeft, Shield, CheckCircle, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { siteData } from "../../../lib/data";
import Navigation from "../../../components/Navigation";
import ContactModal from "../../../components/ContactModal";
import styles from "../../properties/[id]/PropertyDetail.module.css";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = ((siteData.main as any).ongoingProjects.items as any[]).find((p: any) => p.id === id);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) notFound();

  const images = [project.image, project.imageSecondary].filter(Boolean);
  const otherProjects = ((siteData.main as any).ongoingProjects.items as any[]).filter((p: any) => p.id !== id).slice(0, 2);

  const statusColor = project.status === "Launching Soon" ? "#F59E0B" : "#0c1015";

  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navigation />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* ── HERO IMAGE ── */}
      <div style={{ position: "relative", width: "100%", height: "80vh", minHeight: "560px", overflow: "hidden" }}>
        <Image src={images[activeImage] || project.image} alt={project.title} fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)" }} />

        {/* Top nav */}
        <div style={{ position: "absolute", top: "100px", left: "5%", right: "5%", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", padding: "10px 20px", borderRadius: "100px", fontWeight: 600, fontSize: "14px", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>
            <ArrowLeft size={16} /> All Projects
          </Link>
          <span style={{ backgroundColor: statusColor, color: "#fff", padding: "8px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: 700, backdropFilter: "blur(10px)" }}>
            {project.status}
          </span>
        </div>

        {/* Title overlay */}
        <div style={{ position: "absolute", bottom: "52px", left: "5%", right: "5%", zIndex: 10 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.7)" }}>{project.category}</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: "10px 0 12px", lineHeight: 1.05 }}>
            {project.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.75)", fontSize: "15px" }}>
            <MapPin size={16} color="#fff" /> {project.location}
          </div>

          {/* Progress bar in hero */}
          <div style={{ marginTop: "20px", maxWidth: "400px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px" }}>Construction Progress</span>
              <span style={{ color: "#F5C842", fontWeight: 700, fontSize: "15px" }}>{project.progress}%</span>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "100px", height: "6px" }}>
              <div style={{ backgroundColor: "#F5C842", borderRadius: "100px", height: "6px", width: `${project.progress}%` }} />
            </div>
          </div>
        </div>

        {/* Thumbnail switcher */}
        {images.length > 1 && (
          <div style={{ position: "absolute", bottom: "52px", right: "5%", display: "flex", gap: "10px", zIndex: 10 }}>
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
      <section style={{ backgroundColor: "#fff", padding: "60px 5%", position: "relative" }} >
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "60px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            {/* Stats strip */}
            <div className={styles.statsStrip} style={{ marginBottom: "48px" }}>
              {[
                { icon: Building2, label: "Total Units", value: project.units },
                { icon: Calendar, label: "Completion", value: project.completion },
                { icon: TrendingUp, label: "Price Range", value: project.priceRange?.split("–")[0]?.trim() },
                { icon: Clock, label: "Progress", value: `${project.progress}%` },
              ].map(({ icon: Icon, label, value }, i, arr) => (
                <div key={label} className={styles.statItem} style={{ borderRight: i < arr.length - 1 ? "1px solid #F0F0F0" : "none" }}>
                  <Icon size={22} color="#0c1015" style={{ marginBottom: "8px" }} />
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#0c1015", letterSpacing: "-0.5px" }}>{value}</div>
                  <div style={{ fontSize: "12px", color: "#8a93a2", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className={styles.section}>
              <span className={styles.sectionLabel}>About This Project</span>
              <h2 className={styles.sectionTitle}>Project <span>Overview</span></h2>
              <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "17px" }}>{project.description}</p>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div className={styles.section}>
                <span className={styles.sectionLabel}>Project Highlights</span>
                <h2 className={styles.sectionTitle}>What Makes It <span>Unique</span></h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {project.highlights.map((h: string) => (
                    <div key={h} className={styles.featureCard}>
                      <CheckCircle size={18} color="#0c1015" style={{ flexShrink: 0, marginTop: "1px" }} />
                      <span style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {project.amenities && (
              <div className={styles.section}>
                <span className={styles.sectionLabel}>World-Class Amenities</span>
                <h2 className={styles.sectionTitle}>Lifestyle <span>Amenities</span></h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
                  {project.amenities.map((a: string) => (
                    <div key={a} className={styles.amenityChip}>
                      <span style={{ color: "#0c1015", fontSize: "16px" }}>✦</span> {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Developer & RERA Info */}
            <div className={styles.section}>
              <span className={styles.sectionLabel}>Project Details</span>
              <h2 className={styles.sectionTitle}>Project <span>Information</span></h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { icon: Building2, label: "Developer", value: project.developer },
                  { icon: Shield, label: "RERA Number", value: project.rera },
                  { icon: TrendingUp, label: "Price Range", value: project.priceRange },
                  { icon: Calendar, label: "Completion Date", value: project.completion },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className={styles.infoCard}>
                    <div className={styles.infoIcon}><Icon size={20} color="#0c1015" /></div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#8a93a2", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
                      <div style={{ color: "#0c1015", fontWeight: 700, fontSize: "14px", marginTop: "4px" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Sidebar */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div className={styles.sidebar}>
              <div style={{ fontSize: "13px", color: "#8a93a2", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Starting From</div>
              <div style={{ fontSize: "36px", fontWeight: 800, color: "#0c1015", letterSpacing: "-2px", marginBottom: "4px" }}>
                {project.priceRange?.split("–")[0]?.trim()}
              </div>
              <p style={{ color: "#8a93a2", fontSize: "14px", marginBottom: "28px" }}>All-inclusive · RERA Verified · No Brokerage</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <button onClick={() => setIsContactOpen(true)} className={styles.primaryBtn}>
                  Book a Site Visit <ArrowRight size={16} />
                </button>
                <button onClick={() => setIsContactOpen(true)} className={styles.outlineBtn}>
                  Download Brochure
                </button>
              </div>

              <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: Shield, text: "RERA Registered" },
                  { icon: TrendingUp, text: "Construction Loan Available" },
                  { icon: CheckCircle, text: "Dedicated NRI Support" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6b7280", fontSize: "14px" }}>
                    <Icon size={16} color="#0c1015" /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Other projects */}
            {otherProjects.length > 0 && (
              <div className={styles.otherProps}>
                <p style={{ color: "#8a93a2", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Other Projects</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {otherProjects.map((p: any) => (
                    <Link key={p.id} href={`/projects/${p.id}`} className={styles.otherPropLink}>
                      <div style={{ width: "60px", height: "48px", borderRadius: "10px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                      </div>
                      <div>
                        <div style={{ color: "#0c1015", fontWeight: 600, fontSize: "14px" }}>{p.title}</div>
                        <div style={{ color: "#8a93a2", fontSize: "13px", marginTop: "2px" }}>{p.location}</div>
                        <div style={{ color: "#0c1015", fontSize: "12px", fontWeight: 700, marginTop: "2px" }}>{p.progress}% Complete</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { section > div { grid-template-columns: 1fr !important; } section > div > div:last-child { position: static !important; } }`}</style>
      </section>
    </main>
  );
}
