"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "./Navigation.module.css";
import ContactModal from "./ContactModal";

export default function Navigation({ solid }: { solid?: boolean }) {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    
    // Only intercept if we are already on the home page and the element exists
    if (window.location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        // Use lenis for smooth scroll if available, otherwise native scroll
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Update URL hash without jumping
        window.history.pushState({}, '', `/#${targetId}`);
      }
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled || solid ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo} onClick={(e) => {
        if (window.location.pathname === '/') {
          e.preventDefault();
          if ((window as any).__lenis) {
            (window as any).__lenis.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }}>
        <Image src="/logo.png" alt="Investo Grow" width={60} height={60} />
        Investo Grow
      </Link>

      <div className={`${styles.navContent} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
        <ul className={styles.links}>
          <li><Link href="/" className={styles.link} onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              setMobileMenuOpen(false);
              if ((window as any).__lenis) (window as any).__lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>Home</Link></li>
          <li><Link href="/#services" className={styles.link} onClick={(e) => handleNavClick(e, 'services')}>Services</Link></li>
          <li><Link href="/#properties" className={styles.link} onClick={(e) => handleNavClick(e, 'properties')}>Properties</Link></li>
          <li><Link href="/#about" className={styles.link} onClick={(e) => handleNavClick(e, 'about')}>About</Link></li>
          <li><Link href="/#agents" className={styles.link} onClick={(e) => handleNavClick(e, 'agents')}>Agents</Link></li>
          <li><Link href="/nri" className={styles.link} onClick={() => setMobileMenuOpen(false)} style={{ color: "#d4af37", fontWeight: "bold" }}>NRI Corner</Link></li>
        </ul>

        <button className={styles.contactBtn} onClick={() => setIsContactModalOpen(true)}>
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

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </nav>
  );
}
