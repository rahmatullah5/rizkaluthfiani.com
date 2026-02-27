/** @format */

"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, GraduationCap, Award } from "lucide-react";
import styles from "./Education.module.css";

const certs = [
  {
    provider: "Pacmann",
    name: "SQL & Relational Database",
    year: "2024",
    href: "https://drive.google.com/file/d/1vZfxYqMas9J4E4KhUCo09XVe1CGiBHC9/view",
  },
  {
    provider: "Pacmann",
    name: "Basic Python Programming",
    year: "2024",
    href: "https://drive.google.com/file/d/1mels8gSO6vYDNpvh5Zw9V3y_Jhsf75VH/view",
  },
  {
    provider: "Dicoding",
    name: "Machine Learning",
    year: "2024",
    href: "https://drive.google.com/file/d/1fczkB9c2W_b0jxAQ5QCyTPxmszsg5WvV/view",
  },
  {
    provider: "Dicoding",
    name: "Dasar-dasar DevOps (AWS)",
    year: "2023",
    href: "https://drive.google.com/file/d/1dUuHCcSUE8Rq9YTqsmTkHsQ3mRUOh1_L/view",
  },
  {
    provider: "YABB / GoTo",
    name: "Data Analyst Track",
    year: "2022",
    href: "https://drive.google.com/file/d/1TawVpZwzewZSiCsx4mT_NlCVsov6a8b_/view",
  },
  {
    provider: "Cloudswyft",
    name: "Essential Math for Machine Learning",
    year: "2022",
    href: "https://drive.google.com/file/d/1Y-y1xY03UpOI_3XK9ZXURn1ATdq4e4xA/view",
  },
  {
    provider: "Cloudswyft",
    name: "Introduction to Python Programming",
    year: "2022",
    href: "https://drive.google.com/file/d/1YtIuY4vslDRKj6lCxDyuN86dZ9H7aX6B/view",
  },
  {
    provider: "Cloudswyft",
    name: "Introduction to Data Science",
    year: "2022",
    href: "https://drive.google.com/file/d/1MyfPLFDDyTPKQfecj9AbF4ifI110S_wJ/view",
  },
  {
    provider: "DQLab",
    name: "COVID-19 Data Analysis",
    year: "2021",
    href: "https://drive.google.com/file/d/1SPF4ciubQCFCYPN1AlZpT2VI-n26RmtL/view",
  },
  {
    provider: "Sanbercode",
    name: "Python and Data Science",
    year: "2020",
    href: "https://drive.google.com/file/d/1vN7_22Y8RfGsCuYs360tML3rygFjL5sO/view",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="education"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div className="reveal">
          <p className="section-label">Qualifications</p>
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        <div className={styles.eduGrid}>
          {/* Formal */}
          <div className={`glass-card reveal reveal-delay-1 ${styles.eduCard}`}>
            <div className={styles.eduIcon}>
              <GraduationCap size={24} color="#00C9A7" />
            </div>
            <div>
              <div className={styles.eduDegree}>
                Bachelor of Agrotechnology · <em>Cumlaude</em>
              </div>
              <div className={styles.eduSchool}>
                Padjadjaran University, Bandung
              </div>
              <div className={styles.eduMeta}>2019 – 2023 · GPA 3.64 / 4.0</div>
            </div>
          </div>

          {/* Informal */}
          <div className={`glass-card reveal reveal-delay-2 ${styles.eduCard}`}>
            <div className={styles.eduIcon}>
              <Award size={24} color="#a78bfa" />
            </div>
            <div>
              <div className={styles.eduDegree}>Data Engineer Student</div>
              <div className={styles.eduSchool}>
                <a
                  href="https://www.linkedin.com/school/pacmann/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.schoolLink}
                >
                  Pacmann Bright Future Program <ExternalLink size={12} />
                </a>
              </div>
              <div className={styles.eduMeta}>July 2024 – Present</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`reveal ${styles.certsSection}`}>
          <h3 className={styles.certsTitle}>Certifications</h3>
          <div className={styles.certsList}>
            {certs.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`glass-card ${styles.certCard}`}
              >
                <div className={styles.certProvider}>{c.provider}</div>
                <div className={styles.certName}>{c.name}</div>
                <div className={styles.certFooter}>
                  <span className={styles.certYear}>{c.year}</span>
                  <ExternalLink size={13} className={styles.certIcon} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
