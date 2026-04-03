"use client";

import styles from "./Agents.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Agents({ data }: { data: any }) {
  if (!data) return null;
  const extendedAgents = [...data.items, ...data.items];

  return (
    <section className={styles.section} id="agents">
      <div className={styles.container}>
        <div className={styles.header}>
           <h2 className={styles.title} >{data.title}</h2>
           {data.description && (
             <p className={styles.description}>{data.description}</p>
           )}
        </div>
        
        <div className={styles.agentsGrid}>
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 25, ease: "linear", repeat: Infinity }}
             className={styles.scrollContainer}
           >
              {extendedAgents.map((agent: any, index: number) => (
                 <div key={index} className={styles.agentCard}>
                    <div className={styles.imageWrapper}>
                       <Image 
                         src={agent.image} 
                         alt={agent.name}
                         fill
                         style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                       />
                    </div>
                    <div className={styles.info}>
                       <h3 className={styles.name}>{agent.name}</h3>
                       <p className={styles.role}>{agent.role}</p>
                    </div>
                 </div>
              ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
}
