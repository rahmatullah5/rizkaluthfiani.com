/** @format */

"use client";

import { useEffect, useRef } from "react";
import { Mail, Linkedin, Github, BookOpen, Phone } from "lucide-react";
import styles from "./Contact.module.css";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "hi.rizkaluthfiani@gmail.com",
    href: "mailto:hi.rizkaluthfiani@gmail.com",
    color: "#00C9A7",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/rizka-luthfiani",
    href: "https://www.linkedin.com/in/rizka-luthfiani/",
    color: "#0A66C2",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/rizkaluthfiani",
    href: "https://github.com/rizkaluthfiani",
    color: "#F5ECD7",
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "@bytebyme",
    href: "https://medium.com/@bytebyme",
    color: "#00b57a",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 812 9747 4940",
    href: "tel:+6281297474940",
    color: "#a78bfa",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div className={styles.inner}>
          <div className="reveal">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p className={styles.cta}>
              Whether you&apos;re looking for a <strong>Project Manager</strong>
              , a <strong>Product Owner</strong>, or someone who can bridge the
              gap between business and data — I&apos;d love to connect.
            </p>
            <a
              href="mailto:hi.rizkaluthfiani@gmail.com"
              className={`btn btn-primary ${styles.mailBtn}`}
            >
              <Mail size={16} /> Send me an email
            </a>
          </div>

          <div className={`reveal reveal-delay-2 ${styles.cards}`}>
            {links.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`glass-card ${styles.contactCard}`}
              >
                <div
                  className={styles.contactIcon}
                  style={{
                    background: `${color}14`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={18} color={color} />
                </div>
                <div>
                  <div className={styles.contactLabel}>{label}</div>
                  <div className={styles.contactValue}>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
