"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

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

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.description}>
          Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit Request"}
          </button>

          {statusMessage && (
            <div className={`${styles.message} ${status === "success" ? styles.success : styles.error}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
