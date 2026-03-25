import styles from "./About.module.css";
import Image from "next/image";
import { Eye, ShieldCheck, Heart, TrendingUp, Users, CheckCircle2 } from "lucide-react";

// Helper to render icons from a string name
const getIcon = (name: string, size = 24) => {
  switch (name) {
    case 'Eye': return <Eye size={size} />;
    case 'Heart': return <Heart size={size} />;
    case 'TrendingUp': return <TrendingUp size={size} />;
    case 'Users': return <Users size={size} />;
    case 'CheckCircle2': return <CheckCircle2 size={size} />;
    case 'ShieldCheck': return <ShieldCheck size={size} />;
    default: return <Eye size={size} />;
  }
};

export default function About({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        
        {/* About the Founder */}
        <div className={styles.topContentRow} style={{ marginBottom: "4rem" }}>
          <div className={styles.textContent}>
             <h2 className={styles.title} >{data.founder.heading}</h2>
             {data.founder.paragraphs.map((p: string, idx: number) => (
               <p key={idx} className={styles.description} >{p}</p>
             ))}
          </div>
          <div className={styles.imageContent}>
            <div className={styles.heroImageWrapper}>
               <Image 
                 src={data.founder.image} 
                 alt="Founder"
                 fill
                 style={{ objectFit: 'cover' }}
               />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className={styles.bottomCardsRow} style={{ gridTemplateColumns: "1fr 1fr", marginBottom: "4rem", display: "grid", gap: "2rem" }}>
           {data.visionMission.map((item: any, idx: number) => (
             <div className={styles.infoCard} key={idx}>
               <div className={styles.iconCircle}>
                 {getIcon(item.icon)}
               </div>
               <h3>{item.title}</h3>
               <p>{item.description}</p>
               {item.extraDescription && <p style={{ marginTop: "1rem" }}>{item.extraDescription}</p>}
             </div>
           ))}
        </div>

        {/* Why Invest With Us */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 className={styles.title} style={{ textAlign: "center", marginBottom: "3rem", width: "100%" }}>{data.whyInvest.title}</h2>
          <div className={styles.bottomCardsRow} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", display: "grid", gap: "2rem" }}>
            {data.whyInvest.items.map((item: any, idx: number) => (
              <div className={styles.infoCard} key={idx}>
                <div className={styles.iconCircle}>{getIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of Real Estate Investment */}
        <div>
          <h2 className={styles.title} style={{ textAlign: "center", marginBottom: "3rem", width: "100%" }}>{data.benefits.title}</h2>
          <div className={styles.bottomCardsRow} style={{ gridTemplateColumns: "1fr 1fr", display: "grid", gap: "2rem" }}>
            {data.benefits.items.map((item: any, idx: number) => (
              <div className={styles.infoCard} key={idx}>
                <div className={styles.iconCircle}>{getIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
