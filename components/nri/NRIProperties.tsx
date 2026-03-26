"use client";

import { useState } from "react";
import styles from "./NRIProperties.module.css";
import NRIPropertyCard from "./NRIPropertyCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";
import { siteData } from "../../lib/data";

export default function NRIProperties({ data }: { data?: any[] }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const propertiesToRender = data || (siteData.nri.properties as any[]);

  return (
    <section className={styles.section}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div className={styles.container}>
        <NRIReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className={styles.subtitle}>Curated Portfolio</span>
            <h2 className="two-tone-title" style={{ marginTop: "1rem" }}>
              Exclusive <span>Properties</span>
            </h2>
            <p style={{ color: "var(--nri-text-muted)", maxWidth: "540px", margin: "0 auto 2rem", fontSize: "16px", lineHeight: 1.7 }}>
              Handpicked RERA-verified properties in Noida's premium sectors, delivering 12–22% annual returns for NRI investors.
            </p>
          </div>
        </NRIReveal>

        <NRIReveal direction="up" delay={60}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <Link href="/nri/properties" className="coral-btn">
              View All Properties <ArrowRight size={18} />
            </Link>
          </div>
        </NRIReveal>

        <div className={styles.grid}>
          {propertiesToRender.map((prop: any, index: number) => (
            <NRIReveal key={index} direction="up" delay={index * 100}>
              <NRIPropertyCard
                {...prop}
                onBook={() => setIsContactOpen(true)}
              />
            </NRIReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
