import styles from "./NRIProperties.module.css";
import NRIPropertyCard from "./NRIPropertyCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Keeping this for backwards compatibility if any other components still rely on it directly.
// But we recommend passing data through props from lib/data.ts.
export const dummyProperties = [
  {
    id: "prop-1",
    image: "/images/Ho6IwoNLhdp9kCvS3CqnIvb0.jpg",
    title: "Gold Coast Penthouse",
    location: "Sector 150, Noida",
    price: "₹7.5 Cr",
    beds: 4,
    baths: 4,
    sqft: 4500,
    badge: "Premium"
  },
  {
    id: "prop-2",
    image: "/images/Ho6IwoNLhdp9kCvS3CqnIvb0.jpg",
    title: "The Imperial Villas",
    location: "Sector 143, Noida",
    price: "₹5.2 Cr",
    beds: 3,
    baths: 3,
    sqft: 3200,
    badge: "Hot Deal"
  },
  {
    id: "prop-3",
    image: "/images/Ho6IwoNLhdp9kCvS3CqnIvb0.jpg",
    title: "Skyline Residences",
    location: "Sector 128, Noida",
    price: "₹9.8 Cr",
    beds: 5,
    baths: 5,
    sqft: 6000,
    badge: "Ultra Luxury"
  }
];

export default function NRIProperties({ data }: { data?: any[] }) {
  const propertiesToRender = data || dummyProperties;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.subtitle}>Curated Portfolio</span>
            <h2 className={styles.title}>Exclusive Properties</h2>
          </div>
          <Link href="/nri/properties" className="gold-btn">
            View All <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className={styles.grid}>
          {propertiesToRender.map((prop: any, index: number) => (
             <NRIPropertyCard key={index} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
}
