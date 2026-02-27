/** @format */

"use client";

import { useEffect, useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Terus E-Learning",
    companyUrl: null,
    role: "Product Owner",
    type: "Remote · Full-time",
    period: "Current",
    color: "#00C9A7",
    bullets: [
      "Leading product roadmap and backlog grooming for a growing e-learning platform.",
      "Translating user needs and business requirements into clear user stories and acceptance criteria.",
      "Collaborating with engineering, design, and content teams to deliver iterative product releases.",
    ],
  },
  {
    company: "ASAP Company",
    companyUrl: null,
    role: "Project Manager",
    type: "Remote · Part-time",
    period: "Previous",
    color: "#00b8e6",
    bullets: [
      "Successfully delivered a client project on time, leading an engineering team of 4 people across 3 countries.",
      "Managed the engineering team's task execution based on client requirements using agile sprint methodology.",
      "Acted as the primary bridge between clients and the engineering team, translating business needs into technical deliverables.",
    ],
  },
  {
    company: "Yayasan Anak Bangsa Bisa by GoTo",
    companyUrl: "https://www.goto-impact.org/generasi-gigih/",
    role: "Data Analyst Student",
    type: "Program · Generasi GIGIH",
    period: "2022",
    color: "#a78bfa",
    bullets: [
      "Completed a 6-month intensive Data Analytics program gaining proficiency in Python, SQL, Google BigQuery, and Looker.",
      "Developed skills in data cleaning, transformation, and exploratory analysis; applied ML techniques for predictive modeling.",
      "Final project: built a machine learning model predicting patient stroke risk with >90% accuracy, followed by visualization of key insights.",
    ],
  },
  {
    company: "Griin.id",
    companyUrl: "https://www.linkedin.com/company/griin-id/about/",
    role: "Marketing",
    type: "Remote · Full-time Internship",
    period: "2021",
    color: "#f59e0b",
    bullets: [
      "Generated two qualified leads and consistently met the company's KPIs.",
      "Sourced prospective leads, coordinated with the marketing division, evaluated client needs, and scheduled meetings with potential clients.",
      "Prepared daily and weekly reports, tracking progress in spreadsheets.",
    ],
  },
];

export default function Experience() {
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
      id="experience"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div className="reveal">
          <p className="section-label">Career journey</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            A track record of delivering outcomes across product management,
            project leadership, and data analytics.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`reveal ${styles.entry}`}
              style={{ "--accent": exp.color } as React.CSSProperties}
            >
              <div className={styles.dot} style={{ background: exp.color }} />
              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.role}>{exp.role}</div>
                    <div className={styles.company}>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.companyLink}
                        >
                          {exp.company} <ExternalLink size={12} />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>
                    <div className={styles.meta}>
                      <MapPin size={12} /> {exp.type}
                    </div>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className={styles.bullet}>
                      <span
                        className={styles.bulletDot}
                        style={{ background: exp.color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
