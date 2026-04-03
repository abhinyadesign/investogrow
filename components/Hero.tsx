"use client";

import Image from "next/image";
import Link from "next/link";
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

        <Link href="/properties" style={{ textDecoration: "none" }}>
          <button className={styles.exploreBtn}>
            <span className={styles.dot}></span>
            Explore Properties
            <span className={styles.icon}>
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </span>
          </button>
        </Link>

        <div className={styles.statsRow}>
          {data.stats.map((stat: any, index: number) => (
            <div className={styles.statItem} key={index}>
              <h3>{stat.prefix}{stat.value}<sup>{stat.suffix}</sup></h3>
              <p>{stat.label}</p>
            </div>
          ))}

          <motion.div 
            className={styles.agentsBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.badgeAvatars}>
              {data.agentsBadge.avatars.map((avatar: string, i: number) => (
                <div key={i} className={styles.avatarCircle} style={{
                  backgroundImage: `url(${avatar})`,
                }} />
              ))}
            </div>
            <div className={styles.badgeText}>
              <strong>{data.agentsBadge.text}</strong>
              <div className={styles.badgeRating}>★★★★★ <span>{data.agentsBadge.rating}</span></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
