/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { roles } from "@/lib/content";
import s from "./Roadmap.module.css";

// Oldest first, so the chart reads left → right.
const rows = [...roles].reverse();

const TRACK_COLOR: Record<string, string> = {
  Marketing: "#f0b429",
  Data: "#2f9e72",
  Project: "#6b7cff",
  Product: "#2446e0",
};

export default function Roadmap() {
  const [open, setOpen] = useState(rows.length - 1);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.25 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const r = rows[open];

  return (
    <div ref={ref} className={`${s.wrap} ${shown ? s.shown : ""}`}>
      <div className={s.chart}>
        <div className={s.scale} aria-hidden>
          <span>Earlier</span>
          <span className={s.todayLbl}>Today</span>
          <span>Next</span>
        </div>

        {rows.map((row, i) => (
          <button
            key={row.company}
            type="button"
            className={`${s.row} ${i === open ? s.active : ""}`}
            onClick={() => setOpen(i)}
            aria-expanded={i === open}
          >
            <span className={s.label}>
              <i style={{ background: TRACK_COLOR[row.track] }} />
              <b>{row.role}</b>
              <small>{row.company}</small>
            </span>
            <span className={s.lane}>
              <span
                className={`${s.bar} ${row.period === "Current" ? s.live : ""}`}
                style={
                  {
                    "--from": `${row.span[0]}%`,
                    "--w": `${row.span[1] - row.span[0]}%`,
                    "--c": TRACK_COLOR[row.track],
                    "--delay": `${i * 180}ms`,
                  } as React.CSSProperties
                }
              >
                <span>{row.track}</span>
              </span>
            </span>
          </button>
        ))}

        <a href="#contact" className={`${s.row} ${s.next}`}>
          <span className={s.label}>
            <i />
            <b>Next role</b>
            <small>Your product team?</small>
          </span>
          <span className={s.lane}>
            <span className={s.ghost}>You? →</span>
          </span>
        </a>

        <span className={s.today} aria-hidden />
      </div>

      <div className={s.detail} key={open}>
        <div className={s.dHead}>
          <span
            className={s.chip}
            style={{ background: TRACK_COLOR[r.track] }}
          >
            {r.track}
          </span>
          <span className={s.period}>{r.period}</span>
        </div>
        <h3>{r.role}</h3>
        <p className={s.company}>
          {r.companyUrl ? (
            <a href={r.companyUrl} target="_blank" rel="noreferrer">
              {r.company} ↗
            </a>
          ) : (
            r.company
          )}{" "}
          · {r.mode}
        </p>
        <ul>
          {r.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {r.outcome && (
          <p className={s.outcome}>
            <span>Result</span>
            {r.outcome}
          </p>
        )}
      </div>
    </div>
  );
}
