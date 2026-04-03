"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, ArrowRight, Star, ArrowUpRight } from "lucide-react";
import styles from "./NRIPropertyCard.module.css";

interface PropertyProps {
  id?: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number | string;
  bedsLabel?: string;
  baths: number | string;
  bathsLabel?: string;
  sqft: number | string;
  badge?: string;
  roi?: string;
  onBook?: () => void;
}

export default function NRIPropertyCard({ id, image, title, location, price, beds, bedsLabel, baths, bathsLabel, sqft, badge, roi = "+15% ROI", onBook }: PropertyProps) {
  return (
    <div className={styles.card}>

      {/* IMAGE — clicking navigates to detail page */}
      {id ? (
        <Link href={`/nri/properties/${id}`} className={styles.imageLink}>
          <div className={styles.imageWrapper}>
            {badge && <span className={styles.badge}>{badge}</span>}
            <div className={styles.roiBadge}>{roi}</div>
            <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
            <div className={styles.imageOverlay} />
            {/* Hover arrow */}
            <div className={styles.hoverIcon}>
              <ArrowUpRight size={20} color="#000" strokeWidth={2.5} />
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles.imageWrapper}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <div className={styles.roiBadge}>{roi}</div>
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
          <div className={styles.imageOverlay} />
        </div>
      )}

      {/* CONTENT — separate from link so buttons still work */}
      <div className={styles.content}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <div className={styles.price}>{price}</div>
          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <Star size={12} color="var(--nri-accent)" fill="var(--nri-accent)" />
            <span style={{ fontSize: "12px", color: "var(--nri-text-muted)" }}>4.9</span>
          </div>
        </div>

        {id ? (
          <Link href={`/nri/properties/${id}`} style={{ textDecoration: "none" }}>
            <h3 className={styles.title} style={{ cursor: "pointer" }}>{title}</h3>
          </Link>
        ) : (
          <h3 className={styles.title}>{title}</h3>
        )}

        <div className={styles.location}>
          <MapPin size={14} /> {location}
        </div>
        <div className={styles.features}>
          <span className={styles.feature}><Bed size={14} /> {beds} {bedsLabel || "Beds"}</span>
          <span className={styles.feature}><Bath size={14} /> {baths} {bathsLabel || "Baths"}</span>
          <span className={styles.feature}><Square size={14} /> {typeof sqft === 'number' ? sqft.toLocaleString() : sqft} sqft</span>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
          <button onClick={onBook} className="coral-btn" style={{ flex: 1, justifyContent: "center", padding: "12px" }}>
            Book Site Visit <ArrowRight size={14} />
          </button>
          <button onClick={onBook} style={{ border: "1px solid var(--nri-card-border)", background: "transparent", color: "var(--nri-text-muted)", borderRadius: "100px", padding: "12px 16px", cursor: "pointer", fontSize: "13px", transition: "all 0.2s" }}>
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
