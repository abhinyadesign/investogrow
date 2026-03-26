"use client";

import { useState } from "react";
import styles from "./NRIAbout.module.css";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import ContactModal from "../ContactModal";
import NRIReveal from "./NRIReveal";

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
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (!data) return null;


  return (
    <section className={styles.section}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div className={styles.container}>

        <div className={styles.row}>
          <NRIReveal direction="left">
            <div className={styles.textContent}>
              <span className={styles.subtitle}>{data.commitment.subtitle}</span>
              {(() => {
                const words = data.commitment.title.split(" ");
                const lastWord = words.pop();
                return (
                  <h2 className="two-tone-title">
                    {words.join(" ")} <span>{lastWord}</span>
                  </h2>
                );
              })()}
              {data.commitment.paragraphs.map((p: string, idx: number) => (
                <p key={idx} className={styles.description}>{p}</p>
              ))}
              <button className="coral-btn" onClick={() => setIsContactOpen(true)} style={{ marginTop: "12px", alignSelf: "flex-start" }}>
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          </NRIReveal>
          <NRIReveal direction="right">
            <div className={styles.imageContent}>
              <Image
                src={data.commitment.image}
                alt="Premium Service"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </NRIReveal>
        </div>

        <NRIReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className={styles.subtitle}>{data.whyChooseUs.subtitle}</span>
            {(() => {
              const words = data.whyChooseUs.title.split(" ");
              const lastWord = words.pop();
              return (
                <h2 className="two-tone-title" style={{ marginTop: "1rem" }}>
                  {words.join(" ")} <span>{lastWord}</span>
                </h2>
              );
            })()}
          </div>
        </NRIReveal>

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
