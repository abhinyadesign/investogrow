"use client";

import Image from "next/image";
import { MapPin, Bed, Bath, Square, ArrowLeft } from "lucide-react";
import Link from "next/link";
import styles from "./NRIPropertyDetails.module.css";
import { siteData } from "../../lib/data";
import { notFound } from "next/navigation";

export default function NRIPropertyDetails({ id }: { id: string }) {
  const property = siteData.nri.properties.find(p => p.id === id);
  
  if (!property) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "120px" }}>
      <div className={styles.container}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/nri/properties" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--nri-accent)", fontWeight: 600 }}>
             <ArrowLeft size={18} /> Back to Properties
          </Link>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image src={property.image} alt={property.title} fill style={{ objectFit: 'cover' }} priority />
        </div>

        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1>{property.title}</h1>
            <div className={styles.location}><MapPin size={20} /> {property.location}</div>
          </div>
          <div className={styles.pricing}>
            <div className={styles.price}>{property.price}</div>
            {property.badge && <div className={styles.badge}>{property.badge}</div>}
          </div>
        </div>

        <div className={styles.featuresStrip}>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}><Bed size={24} /></div>
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{property.beds}</span>
              <span className={styles.featureLabel}>Bedrooms</span>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}><Bath size={24} /></div>
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{property.baths}</span>
              <span className={styles.featureLabel}>Bathrooms</span>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}><Square size={24} /></div>
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{property.sqft}</span>
              <span className={styles.featureLabel}>Square Feet</span>
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <h2>Property Overview</h2>
            <p>
              Experience the pinnacle of luxury living with {property.title}. Located in the prestigious {property.location}, this property offers an unparalleled lifestyle designed specifically for discerning Non-Resident Indians who demand excellence.
            </p>
            <p>
              Every corner is crafted with meticulous attention to detail, boasting premium finishes, smart home integrations, and expansive living spaces that invite natural light. Whether you are seeking a lucrative investment opportunity yielding high rental returns or a secure, opulent second home in India, this estate stands as a testament to exceptional real estate.
            </p>
            <h2>Amenities</h2>
            <ul style={{ color: "var(--nri-text-muted)", lineHeight: 1.8, marginLeft: "1.5rem", marginTop: "1rem" }}>
              <li>24/7 Premium Security & Concierge Service</li>
              <li>State-of-the-Art Fitness Center & Spa</li>
              <li>Infinity Pool overlooking the skyline</li>
              <li>Dedicated NRI Client Support Desk onsite</li>
              <li>Smart Home Automation Systems</li>
              <li>Direct Airport Transfer Availability</li>
            </ul>
          </div>
          
          <aside>
            <div className={styles.sidebarCard}>
              <h3>Interested?</h3>
              <p>Secure this premium listing. Our dedicated NRI relationship managers handle everything from remote viewing to legal documentation transparently.</p>
              <button 
                className="gold-btn" 
                style={{ width: "100%", justifyContent: "center" }}
              >
                Schedule Virtual Tour
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
