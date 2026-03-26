"use client";

import styles from "./NRIHero.module.css";
import Image from "next/image";
import { ArrowRight, Star, TrendingUp, Building2 } from "lucide-react";
import { useState } from "react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";

export default function NRIHero({ data }: { data: any }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (!data) return null;

  return (
    <section className={styles.hero}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div className={styles.inner}>

        {/* LEFT: Bold Agency Typography */}
        <div className={styles.left}>
          <NRIReveal direction="up" delay={0}>
            <span className="nri-label">Exclusive NRI Portfolio</span>
          </NRIReveal>
          <NRIReveal direction="up" delay={80}>
            <h1 className={styles.title}>
              {data.title} <span className={styles.titleHighlight}>{data.titleHighlight}</span>
            </h1>
          </NRIReveal>
          <NRIReveal direction="up" delay={160}>
            <p className={styles.description}>{data.description}</p>
          </NRIReveal>

          <NRIReveal direction="up" delay={240}>
            <div className={styles.actions}>
              <button className="coral-btn" onClick={() => setIsContactOpen(true)}>
                Explore Projects <ArrowRight size={18} />
              </button>
              <button className="outline-btn" onClick={() => setIsContactOpen(true)}>
                <Building2 size={18} /> Book a Call
              </button>
            </div>
          </NRIReveal>

          <NRIReveal direction="up" delay={320}>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>₹500Cr+</span>
                <span className={styles.statLabel}>Assets Managed</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>200+</span>
                <span className={styles.statLabel}>NRI Investors</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>14%</span>
                <span className={styles.statLabel}>Avg. Returns</span>
              </div>
            </div>
          </NRIReveal>
        </div>

        {/* RIGHT: Curved Image Collage */}
        <NRIReveal direction="right" delay={200}>
          <div className={styles.right}>
            <div className={styles.imageMain}>
              <Image src={data.image} alt="Premium Real Estate" fill style={{ objectFit: "cover" }} priority />
            </div>
            <div className={styles.imageSecondary}>
              <Image src="/images/MNaTdWhKQ4PCxwtMgQRe9ROUJoe510.jpg" alt="Luxury Interior" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.floatingBadge}>
              <TrendingUp size={20} color="var(--nri-accent)" />
              <div>
                <strong>14% Returns</strong>
                <p>Avg. Annual Yield</p>
              </div>
            </div>
            <div className={styles.ratingBadge}>
              <Star size={16} color="#000" fill="#000" />
              <span>4.9 Investor Rating</span>
            </div>
          </div>
        </NRIReveal>
      </div>
    </section>
  );
}
