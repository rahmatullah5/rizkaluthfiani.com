/** @format */

"use client";

import { useState } from "react";
import { caseStudies } from "@/lib/content";
import s from "./Backlog.module.css";

const LABELS = ["All", ...new Set(caseStudies.map((c) => c.label))];

const LABEL_COLOR: Record<string, string> = {
  Analytics: "#2f9e72",
  Fintech: "#2446e0",
  "System design": "#9b51e0",
  ML: "#d9822b",
};

export default function Backlog() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(caseStudies[0].id);
  const items = caseStudies.filter(
    (c) => filter === "All" || c.label === filter,
  );

  return (
    <div className={s.wrap}>
      <div className={s.toolbar} role="tablist" aria-label="Filter projects">
        {LABELS.map((l) => {
          const n =
            l === "All"
              ? caseStudies.length
              : caseStudies.filter((c) => c.label === l).length;
          return (
            <button
              key={l}
              role="tab"
              aria-selected={filter === l}
              className={filter === l ? s.on : undefined}
              onClick={() => setFilter(l)}
            >
              {l !== "All" && (
                <i style={{ background: LABEL_COLOR[l] }} aria-hidden />
              )}
              {l}
              <span>{n}</span>
            </button>
          );
        })}
      </div>

      <div className={s.list}>
        <div className={s.head} aria-hidden>
          <span>ID</span>
          <span>Title</span>
          <span>Label</span>
          <span>Status</span>
          <span>Year</span>
        </div>
        {items.map((c, i) => {
          const isOpen = open === c.id;
          return (
            <div
              key={c.id}
              className={`${s.item} ${isOpen ? s.open : ""}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <button
                type="button"
                className={s.row}
                onClick={() => setOpen(isOpen ? null : c.id)}
                aria-expanded={isOpen}
              >
                <span className={s.id}>{c.id}</span>
                <span className={s.title}>
                  <span className={s.caret} aria-hidden>
                    ›
                  </span>
                  {c.title}
                </span>
                <span className={s.label}>
                  <i style={{ background: LABEL_COLOR[c.label] }} />
                  {c.label}
                </span>
                <span className={s.status}>
                  <svg viewBox="0 0 14 14" aria-hidden>
                    <circle cx="7" cy="7" r="6" />
                    <path d="M4.2 7.2l1.9 1.9 3.7-4" />
                  </svg>
                  Done
                </span>
                <span className={s.year}>{c.year}</span>
              </button>
              {isOpen && (
                <div className={s.body}>
                  <dl>
                    <div>
                      <dt>Problem</dt>
                      <dd>{c.question}</dd>
                    </div>
                    <div>
                      <dt>What I did</dt>
                      <dd>{c.did}</dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>{c.result}</dd>
                    </div>
                  </dl>
                  <a href={c.href} target="_blank" rel="noreferrer">
                    Open on {c.linkLabel} ↗
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
