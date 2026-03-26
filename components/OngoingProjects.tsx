"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Building2, TrendingUp, ArrowRight, Clock } from "lucide-react";
import { siteData } from "../lib/data";

export default function OngoingProjects() {
  const { title, subtitle, items } = (siteData.main as any).ongoingProjects;

  return (
    <section style={{ backgroundColor: "#fff", padding: "80px 5%" }} id="projects">
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "#6b7280" }}>{subtitle}</span>
            <h2 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "#0c1015", letterSpacing: "-0.04em", margin: "10px 0 0", lineHeight: 1.05 }}>
              {title}
            </h2>
          </div>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0c1015", color: "#fff", padding: "14px 28px", borderRadius: "100px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: "28px" }}>
          {items.map((project: any) => (
            <Link key={project.id} href={`/projects/${project.id}`} style={{ textDecoration: "none", display: "block" }}>
              <div
                style={{ backgroundColor: "#fff", border: "1px solid #F0F0F0", borderRadius: "24px", overflow: "hidden", transition: "box-shadow 0.35s ease, transform 0.35s ease", height: "100%" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.transform = "scale(1.06)")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.transform = "scale(1)")}
                  />
                  {/* Badges */}
                  <div style={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "8px" }}>
                    <span style={{ backgroundColor: project.status === "Launching Soon" ? "#F59E0B" : "#0c1015", color: "#fff", padding: "5px 14px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>
                      {project.status}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.6)", padding: "10px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>Construction Progress</span>
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: "13px" }}>{project.progress}%</span>
                    </div>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.25)", borderRadius: "100px", height: "5px" }}>
                      <div style={{ backgroundColor: "#F5C842", borderRadius: "100px", height: "5px", width: `${project.progress}%`, transition: "width 0.6s ease" }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#6b7280" }}>{project.category}</span>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0c1015", marginTop: "6px", marginBottom: "10px", letterSpacing: "-0.3px" }}>{project.title}</h3>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
                    <MapPin size={14} /> {project.location}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", paddingTop: "16px", borderTop: "1px solid #F0F0F0" }}>
                    {[
                      { icon: Building2, label: "Units", value: project.units },
                      { icon: TrendingUp, label: "Price From", value: project.priceRange?.split("–")[0]?.trim() },
                      { icon: Calendar, label: "Completion", value: project.completion },
                      { icon: Clock, label: "RERA", value: project.rera?.slice(0, 14) },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <Icon size={14} color="#0c1015" style={{ marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: "11px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
                          <div style={{ fontSize: "13px", color: "#0c1015", fontWeight: 600, marginTop: "2px" }}>{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "20px", color: "#0c1015", fontWeight: 700, fontSize: "14px" }}>
                    View Project Details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
