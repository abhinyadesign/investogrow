"use client";

import { useState } from "react";
import styles from "./NRIFooter.module.css";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, PhoneCall, Mail } from "lucide-react";
import ContactModal from "../ContactModal";

export default function NRIFooter() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="Investo Grow Logo" width={60} height={60} />
              <span>Investo Grow <br /><span style={{ fontSize: "0.85rem", color: "var(--nri-text-muted)" }}>NRI EXCLUSIVE</span></span>
            </div>

            <div className={styles.brandContact}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <PhoneCall size={14} color="var(--nri-accent)" />
                <p style={{ margin: 0 }}>+91 98765 43210</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Mail size={14} color="var(--nri-accent)" />
                <p style={{ margin: 0 }}>nri@investogrow.com</p>
              </div>
              <button
                className="coral-btn"
                onClick={() => setIsContactOpen(true)}
                style={{ fontSize: "13px", padding: "10px 22px" }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4>Discover</h4>
              <Link href="/nri">NRI Home</Link>
              <Link href="/nri/properties">Premium Properties</Link>
              <Link href="/nri/portfolio">Portfolio</Link>
              <Link href="/nri/plans">Investment Plans</Link>
              <Link href="/nri/about">About Us</Link>
            </div>

            <div className={styles.linkColumn}>
              <h4>Services</h4>
              <button onClick={() => setIsContactOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", textAlign: "left", padding: 0, fontSize: "inherit" }}>Property Management</button>
              <button onClick={() => setIsContactOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", textAlign: "left", padding: 0, fontSize: "inherit" }}>Legal Assistance</button>
              <button onClick={() => setIsContactOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", textAlign: "left", padding: 0, fontSize: "inherit" }}>Tax Advisory</button>
              <button onClick={() => setIsContactOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", textAlign: "left", padding: 0, fontSize: "inherit" }}>Virtual Tours</button>
            </div>

            <div className={styles.linkColumn}>
              <h4>Legal & Support</h4>
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Help Center</Link>
              <Link href="/">Main Website</Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>© Copyright 2026 Investo Grow Consultancy Pvt. Ltd. All Rights Reserved.</p>
            <p style={{ color: "var(--nri-text-muted)", fontSize: "13px" }}>CIN No Issue Date - 3rd Feb 2026 | GST No Issue Date - 12th March 2026</p>
          </div>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}><Facebook size={18} /></Link>
            <Link href="#" className={styles.socialLink}><Instagram size={18} /></Link>
            <Link href="#" className={styles.socialLink}><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
