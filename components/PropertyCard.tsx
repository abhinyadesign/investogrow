"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, SquareSquare } from "lucide-react";
import styles from "./PropertyCard.module.css";
import { motion } from "framer-motion";

export interface Property {
  id: string;
  image: string;
  status: string;
  location: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
}

export default function PropertyCard({ property, index }: { property: Property, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={`/properties/${property.id}`} className={styles.card}>
        <div className={styles.imageWrapper}>
          <div className={styles.badge}>{property.status}</div>
          <Image 
            src={property.image}
            alt={property.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.location}>
            <MapPin size={16} strokeWidth={2} />
            {property.location}
          </div>
          <h3 className={styles.title}>{property.title}</h3>
          
          <div className={styles.specs}>
            <div className={styles.specItem}>
              <BedDouble size={18} strokeWidth={1.5} /> {property.beds}
            </div>
            <div className={styles.specItem}>
              <Bath size={18} strokeWidth={1.5} /> {property.baths}
            </div>
            <div className={styles.specItem}>
              <SquareSquare size={18} strokeWidth={1.5} /> {property.sqft.toLocaleString()} sq.ft
            </div>
          </div>
          
          <div className={styles.price}>
            $ {property.price}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
