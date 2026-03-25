import styles from "./NRIAbout.module.css";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Users, CheckCircle } from "lucide-react";

const getIcon = (name: string, size = 24) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck size={size} />;
    case 'TrendingUp': return <TrendingUp size={size} />;
    case 'Users': return <Users size={size} />;
    case 'CheckCircle': return <CheckCircle size={size} />;
    default: return <ShieldCheck size={size} />;
  }
};

export default function NRIAbout({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.row}>
          <div className={styles.textContent}>
            <span className={styles.subtitle}>{data.commitment.subtitle}</span>
            <h2 className={styles.title}>{data.commitment.title}</h2>
            {data.commitment.paragraphs.map((p: string, idx: number) => (
               <p key={idx} className={styles.description}>{p}</p>
            ))}
          </div>
          <div className={styles.imageContent}>
            <Image 
              src={data.commitment.image}
              alt="Premium Service"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className={styles.subtitle}>{data.whyChooseUs.subtitle}</span>
          <h2 className={styles.title} style={{ marginTop: "1rem" }}>{data.whyChooseUs.title}</h2>
        </div>

        <div className={styles.cardsGrid}>
          {data.whyChooseUs.items.map((item: any, idx: number) => (
            <div className={styles.card} key={idx}>
              <div className={styles.iconWrapper}>{getIcon(item.icon)}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
