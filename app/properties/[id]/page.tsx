import Image from "next/image";
import Navigation from "@/components/Navigation";
import styles from "./PropertyDetail.module.css";
import { MapPin, ArrowUpRight, CheckSquare, Tv, Wind, Wifi, Droplets, Refrigerator, Armchair, Shirt, MonitorPlay } from "lucide-react";

export default async function PropertyPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const id = params.id;

  // Derive mock data based on ID for visual cloning
  const title = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const price = id === "the-one" ? "690,000" : id === "billionaire-mansion" ? "500,000" : "290,000";
  
  return (
    <main style={{ backgroundColor: "var(--background-secondary)", minHeight: "100vh" }}>
      <Navigation />
      
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
             <Image 
               src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2000"
               alt="Property Main"
               fill
               className={styles.image}
             />
          </div>
          <div className={styles.subImage}>
             <Image 
               src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
               alt="Interior 1"
               fill
               className={styles.image}
             />
          </div>
          <div className={styles.subImage}>
             <Image 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
               alt="Interior 2"
               fill
               className={styles.image}
             />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.location}>
              <MapPin size={20} strokeWidth={2} />
              Bel Air, LA
            </div>

            <p className={styles.description}>
              Experience the pinnacle of luxury living in this architectural masterpiece. 
              Designed with meticulous attention to detail, this residence offers breathtaking 
              views, state-of-the-art amenities, and unparalleled craftsmanship. Expansive living 
              spaces seamlessly blend indoor and outdoor environments, creating an entertainer's 
              paradise. The gourmet chef's kitchen, opulent master suite, and resort-style pool 
              elevate everyday living to an extraordinary experience.
            </p>
            <p className={styles.description}>
              Every inch of this property has been curated for those who demand the absolute best. 
              From the custom finishes to the smart home technology, no expense has been spared. 
              Located in one of the most prestigious neighborhoods, this home promises privacy, 
              security, and a life of absolute prestige.
            </p>

            {/* Features Section */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Features</h2>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}><CheckSquare size={18} /> 6 Bedrooms & 4 Bathrooms</div>
                <div className={styles.featureItem}><CheckSquare size={18} /> Bold Contemporary Design</div>
                <div className={styles.featureItem}><CheckSquare size={18} /> Professionally Landscaped Garden</div>
                <div className={styles.featureItem}><CheckSquare size={18} /> Spacious Driveway & Garage</div>
                <div className={styles.featureItem}><CheckSquare size={18} /> Investment-Ready Property</div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Amenities</h2>
              <div className={styles.amenitiesGrid}>
                <div className={styles.amenityItem}><Tv size={16} /> TV</div>
                <div className={styles.amenityItem}><Wind size={16} /> Air Conditioner</div>
                <div className={styles.amenityItem}><MonitorPlay size={16} /> Washing Machine</div>
                <div className={styles.amenityItem}><Wifi size={16} /> Internet</div>
                <div className={styles.amenityItem}><Droplets size={16} /> Water Heater</div>
                <div className={styles.amenityItem}><Refrigerator size={16} /> Refrigerator</div>
                <div className={styles.amenityItem}><Armchair size={16} /> Sofa</div>
                <div className={styles.amenityItem}><Shirt size={16} /> Wardrobe</div>
              </div>
            </div>

            {/* Location Section */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Location</h2>
              <div className={styles.mapContainer}>
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105634.61811807693!2d-118.44196884999999!3d34.0937456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                   width="100%" 
                   height="400" 
                   style={{ border: 0, borderRadius: '24px' }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <div className={styles.priceTitle}>Property<br/>For Investment</div>
              <div className={styles.price}>${price}</div>
              <p className={styles.sidebarDesc}>Get in touch for more about this property</p>
              
              <div className={styles.agentsInfo}>
                <div className={styles.agentsAvatars}>
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={styles.avatar} style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+40})` }} />
                  ))}
                </div>
                <strong className={styles.agentsText}>10+ Featured Agents</strong>
                <div className={styles.rating}>★★★★★ <span>5 / 5</span></div>
              </div>

              <button className={styles.requestBtn}>
                Request Info
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
