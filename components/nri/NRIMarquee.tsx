"use client";

import styles from "./NRIMarquee.module.css";
import { Star } from "lucide-react";

export default function NRIMarquee() {
  const items = [
    "LIVING ABROAD?",
    "WANT INCOME?",
    "EASY INVESTMENTS",
    "SECURE FUTURE",
    "HIGH RETURNS",
    "SEAMLESS PROCESS",
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {/* Render the items three times to ensure infinite smooth scrolling */}
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className={styles.marqueeGroup}>
            {items.map((text, idx) => (
              <div key={idx} className={styles.marqueeItem}>
                <span className={styles.text}>{text}</span>
                <Star size={16} className={styles.icon} fill="currentColor" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
