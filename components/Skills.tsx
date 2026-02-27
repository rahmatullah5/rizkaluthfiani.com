/** @format */

"use client";

import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const pmSkills = [
  { name: "ClickUp", level: 90 },
  { name: "Trello", level: 88 },
  { name: "Scrum / Agile", level: 85 },
  { name: "Microsoft Teams", level: 90 },
  { name: "Google Workspace", level: 92 },
  { name: "Requirement Analysis", level: 85 },
  { name: "Stakeholder Management", level: 80 },
  { name: "Cross-functional Leadership", level: 82 },
];

const dataSkills = [
  { name: "Python", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Google BigQuery", level: 75 },
  { name: "Power BI", level: 82 },
  { name: "Tableau", level: 75 },
  { name: "Looker Studio", level: 78 },
  { name: "Machine Learning", level: 70 },
  { name: "Data Pipeline (DE)", level: 68 },
];

const tools = [
  "ClickUp",
  "Trello",
  "Moodle",
  "MS Office",
  "Google Workspace",
  "Python",
  "SQL",
  "BigQuery",
  "Power BI",
  "Tableau",
  "Looker",
  "Scrum",
  "Agile",
  "Jira",
  "Figma",
  "GitHub",
];

export default function Skills() {
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

    // Animate progress bars
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const bar = e.target as HTMLElement;
            bar.style.width = bar.dataset.level + "%";
          }
        });
      },
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll("[data-level]")
      .forEach((el) => barObs.observe(el));
    return () => {
      obs.disconnect();
      barObs.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div className="reveal">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            Two complementary skill sets — one for leading teams, one for
            unlocking data.
          </p>
        </div>

        <div className={styles.grid}>
          {/* PM Column */}
          <div className={`glass-card reveal reveal-delay-1 ${styles.col}`}>
            <div className={styles.colHeader}>
              <span
                className={styles.colTag}
                style={{ background: "rgba(0,201,167,0.12)", color: "#00C9A7" }}
              >
                PM / PO
              </span>
              <h3 className={styles.colTitle}>Project & Product</h3>
            </div>
            {pmSkills.map((s) => (
              <div key={s.name} className={styles.skillRow}>
                <div className={styles.skillLabel}>{s.name}</div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    data-level={s.level}
                    style={{
                      width: 0,
                      background: "linear-gradient(90deg, #00C9A7, #00b8e6)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Data Column */}
          <div className={`glass-card reveal reveal-delay-2 ${styles.col}`}>
            <div className={styles.colHeader}>
              <span
                className={styles.colTag}
                style={{
                  background: "rgba(167,139,250,0.12)",
                  color: "#a78bfa",
                }}
              >
                Data
              </span>
              <h3 className={styles.colTitle}>Analytics & Engineering</h3>
            </div>
            {dataSkills.map((s) => (
              <div key={s.name} className={styles.skillRow}>
                <div className={styles.skillLabel}>{s.name}</div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    data-level={s.level}
                    style={{
                      width: 0,
                      background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool chips */}
        <div className={`reveal ${styles.chips}`}>
          {tools.map((t) => (
            <span key={t} className={styles.chip}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
