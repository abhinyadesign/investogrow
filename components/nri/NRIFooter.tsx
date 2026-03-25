import styles from "./NRIFooter.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function NRIFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
           <div className={styles.brandCol}>
              <div className={styles.logo}>
                 <Image src="/logo.png" alt="Investo Grow Logo" width={60} height={60} />
                 <span>Investo Grow <br /><span style={{fontSize: "0.85rem", color: "var(--nri-text)"}}>NRI EXCLUSIVE</span></span>
              </div>
              
              <div className={styles.brandContact}>
                 <p>Exclusive NRI Support: +91 98765 43210</p>
                 <p>nri-support@investogrow.com</p>
                 <p>Investo Grow Consultancy Pvt. Ltd.</p>
              </div>
           </div>
           
           <div className={styles.linksGrid}>
             <div className={styles.linkColumn}>
               <h4>Discover</h4>
               <Link href="/nri">NRI Home</Link>
               <Link href="/nri/properties">Premium Collections</Link>
               <Link href="/nri/about">About Us</Link>
               <Link href="/">Main Website</Link>
             </div>
             
             <div className={styles.linkColumn}>
               <h4>Services</h4>
               <Link href="#">Property Management</Link>
               <Link href="#">Legal Assistance</Link>
               <Link href="#">Tax Advisory</Link>
               <Link href="#">Virtual Tours</Link>
             </div>
             
             <div className={styles.linkColumn}>
               <h4>Legal & Support</h4>
               <Link href="#">Terms and Conditions</Link>
               <Link href="#">Privacy Policy</Link>
               <Link href="#">Help Center</Link>
             </div>
           </div>
        </div>
        
        <div className={styles.footerBottom}>
           <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
             <p>© Copyright 2026 Investo Grow Consultancy Pvt. Ltd. All Rights Reserved.</p>
             <p>CIN No Issue Date - 3rd Feb 2026 | GST No Issue Date - 12th March 2026</p>
           </div>
           <div className={styles.socials}>
              <Link href="#" className={styles.socialLink}><Facebook size={18}/></Link>
              <Link href="#" className={styles.socialLink}><Instagram size={18}/></Link>
              <Link href="#" className={styles.socialLink}><Linkedin size={18}/></Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
