"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="Investo Grow" width={60} height={60} />
        Investo Grow
      </Link>

      <div className={`${styles.navContent} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
        <ul className={styles.links}>
          <li><Link href="#home" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="#services" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><Link href="#properties" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Properties</Link></li>
          <li><Link href="#about" className={styles.link} onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link href="#agents" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Agents</Link></li>
          <li><Link href="/nri" className={styles.link} onClick={() => setMobileMenuOpen(false)} style={{ color: "#d4af37", fontWeight: "bold" }}>NRI Corner</Link></li>
        </ul>

        <button className={styles.contactBtn}>
          <span className={styles.dot}></span>
          Contact Us Now
          <span className={styles.icon}>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </span>
        </button>
      </div>

      <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
