import styles from "./Testimonials.module.css";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
           <div className={styles.tag}>{data.tag}</div>
           <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: data.title.replace(/\n/g, '<br />') }} />
           <p className={styles.description}>
              {data.description}
           </p>
        </div>

        <div className={styles.grid}>
           {data.items.map((testimonial: any, index: number) => (
             <div key={index} className={styles.card}>
               <div className={styles.stars}>
                 {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className={styles.starIcon} />
                 ))}
               </div>
               <p className={styles.quoteText}>{testimonial.text}</p>
               <div className={styles.author}>
                  <div className={styles.avatarWrapper}>
                     <Image 
                       src={testimonial.image} 
                       alt={testimonial.name}
                       fill
                       style={{ objectFit: 'cover' }}
                     />
                  </div>
                  <div className={styles.authorInfo}>
                     <h4 className={styles.authorName}>{testimonial.name}</h4>
                     <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
