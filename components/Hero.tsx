"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import heroBanner from "../public/images/banner.jpg";

export default function Hero({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={styles.hero} id="home">
      <Image 
        src={heroBanner}
        alt="Modern Home Exterior"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className={styles.background}
      />
      <div className={styles.overlay} />

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: data.title.replace(/\n/g, '<br />') }} />
        <p className={styles.description}>
          {data.description}
        </p>

        <button className={styles.exploreBtn}>
          <span className={styles.dot}></span>
          Explore Properties
          <span className={styles.icon}>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </span>
        </button>

        <div className={styles.statsRow}>
          {data.stats.map((stat: any, index: number) => (
            <div className={styles.statItem} key={index}>
              <h3>{stat.prefix}{stat.value}<sup>{stat.suffix}</sup></h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className={styles.agentsBadge}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div style={{ display: "flex", marginLeft: 10 }}>
          {data.agentsBadge.avatars.map((avatar: number, i: number) => (
            <div key={i} style={{
              width: 48, height: 48, borderRadius: "50%", 
              border: "3px solid white", marginLeft: -15,
              background: "#ccc",
              backgroundImage: `url(https://i.pravatar.cc/100?img=${avatar})`,
              backgroundSize: "cover"
            }} />
          ))}
        </div>
        <div>
          <strong style={{ fontSize: 16, fontFamily: "var(--font-inter)"}}>{data.agentsBadge.text}</strong>
          <div style={{ color: "#F59E0B", fontSize: 16 }}>★★★★★ <span style={{color: "#666", fontSize: 13}}>{data.agentsBadge.rating}</span></div>
        </div>
      </motion.div>
    </section>
  );
}
