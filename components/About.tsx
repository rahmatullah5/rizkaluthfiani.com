/** @format */

"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Database, GraduationCap, Award } from "lucide-react";
import styles from "./About.module.css";

const stats = [
  { icon: Briefcase, label: "Roles", value: "PM & PO" },
  { icon: Database, label: "Domain", value: "Data Eng." },
  { icon: GraduationCap, label: "Degree", value: "Cumlaude" },
  { icon: Award, label: "GPA", value: "3.64 / 4.0" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`section ${styles.about}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Avatar */}
          <div className={`reveal ${styles.avatarCol}`}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>RL</span>
              </div>
              <div className={styles.avatarRing} />
              <div className={styles.avatarRing2} />
            </div>
          </div>

          {/* Text */}
          <div className={styles.textCol}>
            <p className="section-label reveal">About me</p>
            <h2 className="section-title reveal reveal-delay-1">
              Where Structure Meets Analytics
            </h2>
            <p className={`reveal reveal-delay-2 ${styles.bio}`}>
              I&apos;m <strong>Rizka Luthfiani Fakhriah</strong>, a
              Jakarta-based professional who graduated <em>cumlaude</em> from
              Padjadjaran University and has since carved a dual path in product
              &amp; project management and data engineering. I thrive at the
              intersection of people, processes, and data — translating complex
              requirements into clear deliverables and actionable insights.
            </p>
            <p className={`reveal reveal-delay-3 ${styles.bio}`}>
              As a Product Owner and Project Manager, I&apos;ve led
              cross-functional engineering teams across multiple time zones. As
              a Data Engineer student at Pacmann and a former Data Analyst
              through the GoTo impact program, I bring a growing technical
              toolkit to every project I touch.
            </p>

            <div className={`reveal reveal-delay-4 ${styles.statsGrid}`}>
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className={`glass-card ${styles.statCard}`}>
                  <Icon size={18} color="var(--teal)" />
                  <div>
                    <div className={styles.statValue}>{value}</div>
                    <div className={styles.statLabel}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
