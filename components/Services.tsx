"use client";

import styles from "./Services.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services({ data }: { data: any }) {
  const [activeService, setActiveService] = useState(data?.items?.[0]?.id || "01");

  if (!data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
           <h2 className={styles.mainTitle}>{data.title}</h2>
           <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.accordionContainer}>
            {data.items.map((service: any) => (
              <div 
                 key={service.id} 
                 className={`${styles.accordionItem} ${activeService === service.id ? styles.active : ''}`}
                 onClick={() => setActiveService(service.id)}
              >
                 <div className={styles.accordionHeader}>
                   <span className={styles.accordionNumber}>{service.id}</span>
                   <h3 className={styles.accordionTitle}>{service.title}</h3>
                 </div>
                 
                 <AnimatePresence>
                   {activeService === service.id && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                       className={styles.accordionBody}
                     >
                       <p className={styles.description}>{service.description}</p>
                       <button className={styles.learnMoreBtn}>Learn More</button>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className={styles.imageDisplay}>
            <AnimatePresence mode="popLayout">
               {data.items.map((service: any) => (
                 service.id === activeService && (
                   <motion.div
                     key={"img-" + service.id}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                     className={styles.imageWrapper}
                   >
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                   </motion.div>
                 )
               ))}
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.bottomLinkContainer}>
           <button className={styles.whyChooseUsBtn}>Why Choose Us</button>
        </div>
      </div>
    </section>
  );
}
