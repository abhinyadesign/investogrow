import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import styles from "./NRIPropertyCard.module.css";

interface PropertyProps {
  id?: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  badge?: string;
}

export default function NRIPropertyCard({ id, image, title, location, price, beds, baths, sqft, badge }: PropertyProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (id) {
       return <Link href={`/nri/properties/${id}`} style={{ textDecoration: 'none' }}>{children}</Link>;
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.content}>
        <div className={styles.price}>{price}</div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.location}>
          <MapPin size={16} /> {location}
        </div>
        <div className={styles.features}>
          <span className={styles.feature}><Bed size={16} /> {beds} Beds</span>
          <span className={styles.feature}><Bath size={16} /> {baths} Baths</span>
          <span className={styles.feature}><Square size={16} /> {sqft} sqft</span>
        </div>
      </div>
     </div>
    </CardWrapper>
  );
}
