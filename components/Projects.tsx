/** @format */

"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Country Clustering with Data Analytics",
    year: "2025",
    desc: "Grouped countries by socio-economic characteristics using data clustering techniques to support NGO decision-making.",
    tags: ["Python", "Clustering", "ML"],
    href: "https://github.com/rizkaluthfiani/NGO-country-clustering",
    accent: "#00C9A7",
  },
  {
    title: "High-Risk Loan Prediction",
    year: "2025",
    desc: "Built multiple ML models to predict non-performing loans and credit risk using real financial datasets.",
    tags: ["Python", "Machine Learning", "Finance"],
    href: "https://github.com/rizkaluthfiani/credit-risk-npl-prediction",
    accent: "#a78bfa",
  },
  {
    title: "Digital Library Database Design",
    year: "2024",
    desc: "Designed a complete e-library database system using Entity Relationship Diagrams and visual schema modeling.",
    tags: ["SQL", "ERD", "Database Design"],
    href: "https://medium.com/@bytebyme/infinibook-e-library-system-database-design-with-entity-relationship-diagram-0ac2224d2bf8",
    accent: "#00b8e6",
  },
  {
    title: "Consumer Trends in Online Lending",
    year: "2024",
    desc: "Analyzed the surge of personal online loans among young Indonesian adults using public financial data.",
    tags: ["Python", "EDA", "Finance"],
    href: "https://medium.com/@bytebyme/exploring-the-surge-of-personal-online-loans-among-young-adults-in-indonesia-35c290a49272",
    accent: "#f59e0b",
  },
  {
    title: "FMCG Sales Reporting Dashboard",
    year: "2024",
    desc: "Designed an interactive sales reporting tool for a Fast-Moving Consumer Goods company using Power BI.",
    tags: ["Power BI", "Dashboard", "FMCG"],
    href: "https://github.com/rizkaluthfiani/kopken-powerbi-sales-analysis",
    accent: "#00C9A7",
  },
  {
    title: "Stroke Risk Prediction (ML)",
    year: "2022",
    desc: "Trained and validated machine learning models predicting stroke probability, achieving >90% accuracy.",
    tags: ["Python", "ML", "Healthcare"],
    href: "https://github.com/reyhannaufal/stroke-model-gigih",
    accent: "#a78bfa",
  },
  {
    title: "Herbicide Effectiveness Research",
    year: "2023",
    desc: "Published undergraduate research on glyphosate potassium efficacy in controlling weeds in productive tea plants.",
    tags: ["Research", "Academic", "Agriculture"],
    href: "https://gauravpublications.com/journal/research-on-crops/volume-25/issue-1-march-2024/ROC-1027",
    accent: "#34d399",
  },
];

export default function Projects() {
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
      id="projects"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div className="reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of data, analysis, and research work spanning multiple
            domains.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={`glass-card reveal ${styles.card}`}
              style={{ "--accent": p.accent } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <span className={styles.year}>{p.year}</span>
                <ExternalLink size={16} className={styles.extIcon} />
              </div>
              <div
                className={styles.accentLine}
                style={{ background: p.accent }}
              />
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={styles.tag}
                    style={{
                      color: p.accent,
                      borderColor: `${p.accent}33`,
                      background: `${p.accent}0d`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
