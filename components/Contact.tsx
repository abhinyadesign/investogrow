"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import Image from "next/image"; 

export default function Contact({ data }: { data: any }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Thank you for contacting us! We'll be in touch shortly.");
        // Optional: clear form
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please try again later.");
    }
  };

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
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                 <div className={styles.inputGroup}>
                   <input type="text" name="firstName" placeholder={data.formFields.firstName} value={formData.firstName} onChange={handleChange} required />
                 </div>
                 <div className={styles.inputGroup}>
                   <input type="text" name="lastName" placeholder={data.formFields.lastName} value={formData.lastName} onChange={handleChange} required />
                 </div>
              </div>
              
              <div className={styles.row}>
                 <div className={styles.inputGroup}>
                   <input type="email" name="email" placeholder={data.formFields.email} value={formData.email} onChange={handleChange} required />
                 </div>
                 <div className={styles.inputGroup}>
                   <input type="tel" name="phone" placeholder={data.formFields.phone} value={formData.phone} onChange={handleChange} required />
                 </div>
              </div>

              <div className={styles.inputGroup}>
                <textarea name="message" placeholder={data.formFields.message} rows={4} value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : data.formFields.button}
              </button>

              {statusMessage && (
                <div style={{ marginTop: '1rem', color: status === 'success' ? '#4ade80' : '#f87171', fontSize: '0.9rem', textAlign: 'center' }}>
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
