import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
           <div className={styles.brandCol}>
              <div className={styles.logo}>
                 <Image src="/logo.png" alt="Investo Grow Logo" width={60} height={60} />
                 <span>Investo Grow</span>
              </div>
              
              <div className={styles.brandContact}>
                 <p>+1-800-555-1234</p>
                 <p>info@investogrow.com</p>
                 <p>123 Serenity Boulevard, Greenwood Heights, NY 11222, United States</p>
              </div>
           </div>
           
           <div className={styles.linksGrid}>
             <div className={styles.linkColumn}>
               <h4>Pages</h4>
               <Link href="/">Home</Link>
               <Link href="#services">Services</Link>
               <Link href="#properties">Properties</Link>
               <Link href="#about">About us</Link>
             </div>
             
             <div className={styles.linkColumn}>
               <h4>CMS Pages</h4>
               <Link href="#agents">Agents</Link>
               <Link href="#blog">Blog</Link>
               <Link href="#pricing">Pricing</Link>
               <Link href="#contact">Contact us</Link>
             </div>
             
             <div className={styles.linkColumn}>
               <h4>Utility Pages</h4>
               <Link href="/404">404 Error</Link>
               <Link href="#terms">Terms and Conditions</Link>
               <Link href="#privacy">Privacy Policy</Link>
               <Link href="#style">Style Guide</Link>
             </div>
           </div>
        </div>
        
        <div className={styles.footerBottom}>
           <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
             <p>© Copyright 2026 Investo Grow Consultancy Pvt. Ltd. All Rights Reserved.</p>
             <p style={{ fontSize: "0.875rem", color: "#a0a0a0" }}>CIN No Issue Date - 3rd Feb 2026 | GST No Issue Date - 12th March 2026</p>
           </div>
           <div className={styles.socials}>
              <Link href="#" className={styles.socialLink}>FB <ArrowUpRight size={14}/></Link>
              <Link href="#" className={styles.socialLink}>IN <ArrowUpRight size={14}/></Link>
              <Link href="#" className={styles.socialLink}>YT <ArrowUpRight size={14}/></Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
