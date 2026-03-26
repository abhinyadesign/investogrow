"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, ArrowLeft } from "lucide-react";
import styles from "./NRINavigation.module.css";
import ContactModal from "../ContactModal";

export default function NRINavigation({ solid }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled || solid ? styles.scrolled : ""}`}>
      <Link href="/nri" className={styles.logo}>
        <Image src="/logo.png" alt="Investo Grow" width={60} height={60} />
        <span className="gold-text">Investo Grow</span> | <span style={{fontSize: "0.85rem", fontWeight: 400, color: "var(--nri-text)"}}>NRI EXCLUSIVE</span>
      </Link>

      <div className={`${styles.navContent} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
        <ul className={styles.links}>
          <li><Link href="/nri" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/nri/properties" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Properties</Link></li>
          <li><Link href="/nri/portfolio" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
          <li><Link href="/nri/plans" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Investment Plans</Link></li>
          <li><Link href="/nri/about" className={styles.link} onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li>
            <Link href="/" className={styles.link} style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--nri-text-muted)" }}>
              <ArrowLeft size={14} /> Main Site
            </Link>
          </li>
        </ul>

        <button className="coral-btn" onClick={() => setIsContactModalOpen(true)}>
          Free Consultation <ArrowUpRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </nav>
  );
}
