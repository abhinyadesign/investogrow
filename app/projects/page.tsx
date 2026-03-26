"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Building2, TrendingUp, ArrowRight, Clock, Search } from "lucide-react";
import { siteData } from "../../lib/data";
import Navigation from "../../components/Navigation";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";

const categories = ["All", "Luxury Residential", "Premium Villas", "Ultra Luxury", "Commercial & Mixed-Use"];

export default function ProjectsListingPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const allProjects = (siteData.main as any).ongoingProjects.items as any[];
  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p: any) => p.category === activeFilter);

  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navigation solid />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", paddingLeft: "5%", paddingRight: "5%", backgroundColor: "#F8F9FA", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "#6b7280" }}>Under Construction</span>
          <h1 style={{ fontSize: "clamp(40px,6vw,76px)", fontWeight: 800, color: "#0c1015", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "12px 0 20px" }}>
            Ongoing Projects
          </h1>
          <p style={{ color: "#6b7280", fontSize: "18px", maxWidth: "560px", lineHeight: 1.7, marginBottom: "36px" }}>
            RERA-registered projects currently under construction — invest early and maximise your returns.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#fff", border: "1.5px solid #E5E7EB", borderRadius: "100px", padding: "14px 24px", flexGrow: 1, maxWidth: "440px" }}>
              <Search size={18} color="#9CA3AF" />
              <input placeholder="Search by project or location..." style={{ background: "none", border: "none", outline: "none", color: "#0c1015", fontSize: "15px", width: "100%" }} />
            </div>
            <button onClick={() => setIsContactOpen(true)} style={{ backgroundColor: "#0c1015", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "100px", fontWeight: 700, fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
              Get Investment Advice <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section style={{ backgroundColor: "#fff", padding: "28px 5% 16px", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{ padding: "10px 22px", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease", backgroundColor: activeFilter === cat ? "#0c1015" : "#F8F9FA", color: activeFilter === cat ? "#fff" : "#6b7280", border: activeFilter === cat ? "none" : "1px solid #E5E7EB" }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ backgroundColor: "#fff", padding: "48px 5% 80px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "28px" }}>
            {(filtered.length ? filtered : allProjects).map((project: any) => (
              <Link key={project.id} href={`/projects/${project.id}`} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{ backgroundColor: "#fff", border: "1px solid #F0F0F0", borderRadius: "24px", overflow: "hidden", transition: "box-shadow 0.35s ease, transform 0.35s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                    <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
                    <span style={{ position: "absolute", top: "16px", left: "16px", backgroundColor: project.status === "Launching Soon" ? "#F59E0B" : "#0c1015", color: "#fff", padding: "5px 14px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>
                      {project.status}
                    </span>
                    {/* Progress bar */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.6)", padding: "10px 16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>Progress</span>
                        <span style={{ color: "#F5C842", fontWeight: 700, fontSize: "13px" }}>{project.progress}%</span>
                      </div>
                      <div style={{ backgroundColor: "rgba(255,255,255,0.25)", borderRadius: "100px", height: "5px" }}>
                        <div style={{ backgroundColor: "#F5C842", borderRadius: "100px", height: "5px", width: `${project.progress}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#6b7280" }}>{project.category}</span>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0c1015", marginTop: "6px", marginBottom: "10px" }}>{project.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
                      <MapPin size={14} /> {project.location}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", paddingTop: "16px", borderTop: "1px solid #F0F0F0", marginBottom: "20px" }}>
                      {[
                        { icon: Building2, label: "Units", value: project.units },
                        { icon: TrendingUp, label: "From", value: project.priceRange?.split("–")[0]?.trim() },
                        { icon: Calendar, label: "Completion", value: project.completion },
                        { icon: Clock, label: "RERA", value: project.rera?.slice(0, 14) },
                      ].map(({ icon: Icon, label, value }) => (
                        <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                          <Icon size={13} color="#0c1015" style={{ marginTop: "2px", flexShrink: 0 }} />
                          <div>
                            <div style={{ fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
                            <div style={{ fontSize: "13px", color: "#0c1015", fontWeight: 600 }}>{value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0c1015", fontWeight: 700, fontSize: "14px" }}>
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#6b7280" }}>
              <p>No projects in this category.</p>
              <button onClick={() => setActiveFilter("All")} style={{ marginTop: "16px", backgroundColor: "#0c1015", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "100px", cursor: "pointer", fontWeight: 600 }}>Show All</button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
