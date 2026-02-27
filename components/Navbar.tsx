/** @format */

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>RL</span>
          <span className={styles.logoText}>Rizka Luthfiani</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hi.rizkaluthfiani@gmail.com"
          className={`btn btn-primary ${styles.cta}`}
        >
          Hire Me
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hi.rizkaluthfiani@gmail.com"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
