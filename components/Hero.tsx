/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Download,
} from "lucide-react";
import styles from "./Hero.module.css";

const roles = ["Project Manager", "Product Owner", "Aspiring Data Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timerRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        70,
      );
    } else if (!deleting && displayed.length === current.length) {
      timerRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timerRef.current = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        38,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayed, deleting, roleIndex]);

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Grid pattern */}
      <div className={styles.grid} aria-hidden />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for opportunities
        </div>

        <h1 className={styles.headline}>
          Hi, I&apos;m <span className={styles.name}>Rizka Luthfiani</span>
        </h1>

        <div className={styles.typewriterRow}>
          <span className={styles.typewriterText}>{displayed}</span>
          <span className={styles.cursor} aria-hidden>
            |
          </span>
        </div>

        <p className={styles.summary}>
          Cumlaude graduate in Agrotechnology, now channeling analytical rigor
          into product &amp; project leadership and data engineering. I bridge
          teams, translate requirements, and deliver outcomes — on time, every
          time.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">
            <Mail size={16} /> Get in touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View my work
          </a>
          <a
            href="/Rizka-Luthfiani-Resume.pdf"
            download="Rizka-Luthfiani-Resume.pdf"
            className="btn btn-outline"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/rizka-luthfiani/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={styles.social}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/rizkaluthfiani"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={styles.social}
          >
            <Github size={18} />
          </a>
          <a
            href="https://medium.com/@bytebyme"
            target="_blank"
            rel="noreferrer"
            aria-label="Medium"
            className={styles.social}
          >
            <BookOpen size={18} />
          </a>
          <a
            href="mailto:hi.rizkaluthfiani@gmail.com"
            aria-label="Email"
            className={styles.social}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
