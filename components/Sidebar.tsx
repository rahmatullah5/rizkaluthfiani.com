/** @format */

"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import s from "./Sidebar.module.css";

export const VIEWS = [
  { id: "overview", label: "Overview", glyph: "◧" },
  { id: "how", label: "How I work", glyph: "⇢" },
  { id: "roadmap", label: "Roadmap", glyph: "▤" },
  { id: "backlog", label: "Backlog", glyph: "☰" },
  { id: "specs", label: "Specs", glyph: "◫" },
  { id: "contact", label: "New ticket", glyph: "+" },
];

export default function Sidebar({ counts }: { counts: Record<string, number> }) {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    VIEWS.forEach((v) => {
      const el = document.getElementById(v.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className={s.side}>
      <a href="#overview" className={s.me}>
        <span className={s.avatar}>RL</span>
        <span>
          <b>Rizka Luthfiani</b>
          <small>Product Owner</small>
        </span>
      </a>

      <p className={s.group}>Workspace</p>
      <nav className={s.nav}>
        {VIEWS.map((v) => (
          <a
            key={v.id}
            href={`#${v.id}`}
            className={active === v.id ? s.on : undefined}
            aria-current={active === v.id ? "true" : undefined}
          >
            <span className={s.glyph} aria-hidden>
              {v.glyph}
            </span>
            {v.label}
            {counts[v.id] !== undefined && (
              <span className={s.count}>{counts[v.id]}</span>
            )}
          </a>
        ))}
      </nav>

      <div className={s.bottom}>
        <p className={s.group}>Links</p>
        <a href={profile.resumePdf} download>
          Resume.pdf
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.medium} target="_blank" rel="noreferrer">
          Medium ↗
        </a>
      </div>
    </aside>
  );
}
