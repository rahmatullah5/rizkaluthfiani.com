/** @format */

import { Heart } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>RL</span>
          <span className={styles.logoText}>Rizka Luthfiani</span>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} · Built with{" "}
          <Heart size={12} className={styles.heart} /> and lots of data
        </p>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/rizka-luthfiani/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rizkaluthfiani"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@bytebyme"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
