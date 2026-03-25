"use client";

import styles from "./NRIHero.module.css";
import Image from "next/image";
import { ArrowRight, Building } from "lucide-react";

export default function NRIHero({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image 
          src={data.image} 
          alt="Premium Real Estate"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />
      
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>{data.badge}</span>
        <h1 className={styles.title}>
          {data.title} <span className="gold-text">{data.titleHighlight}</span>
        </h1>
        <p className={styles.description}>
          {data.description}
        </p>
        
        <div className={styles.actions}>
          <button className="gold-btn">
            Explore Premium Projects <ArrowRight size={18} />
          </button>
          <button className="outline-btn">
            <Building size={18} /> Speak to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
}
