"use client";

import styles from "./Contact.module.css";
import Image from "next/image"; 

export default function Contact({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={styles.contactSectionWrapper}>
      <div className={styles.contactSection} id="contact">
        <div className={styles.backgroundImage}>
          <Image 
            src={data.image} 
            alt="Contact Background"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>
              {data.description}
            </p>
          </div>
          
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.row}>
                 <div className={styles.inputGroup}>
                   <input type="text" placeholder={data.formFields.firstName} />
                 </div>
                 <div className={styles.inputGroup}>
                   <input type="text" placeholder={data.formFields.lastName} />
                 </div>
              </div>
              
              <div className={styles.row}>
                 <div className={styles.inputGroup}>
                   <input type="email" placeholder={data.formFields.email} />
                 </div>
                 <div className={styles.inputGroup}>
                   <input type="tel" placeholder={data.formFields.phone} />
                 </div>
              </div>

              <div className={styles.inputGroup}>
                <textarea placeholder={data.formFields.message} rows={4}></textarea>
              </div>

              <button type="button" className={styles.submitBtn}>
                {data.formFields.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
