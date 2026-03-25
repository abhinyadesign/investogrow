"use client";

import styles from "./FAQ.module.css";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
           <div className={styles.tag}>{data.tag}</div>
           <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: data.title.replace(/\n/g, '<br />') }} />
        </div>

        <div className={styles.accordionContainer}>
           {data.items.map((item: any, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.questionRow}>
                     <h3 className={styles.question}>{item.question}</h3>
                     <div className={styles.iconWrapper}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                     </div>
                  </div>
                  <div className={styles.answerWrapper} style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}>
                     <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              );
           })}
        </div>
      </div>
    </section>
  );
}
