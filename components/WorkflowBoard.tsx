/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import s from "./WorkflowBoard.module.css";

const STAGES = [
  { name: "Discover", caption: "Find the real need" },
  { name: "Define", caption: "Make it buildable" },
  { name: "Deliver", caption: "Ship it on time" },
  { name: "Measure", caption: "Check the numbers" },
];

const STEP_MS = 3200;

function Discover() {
  return (
    <div className={s.inner}>
      <span className={s.kicker}>Request · Sales lead</span>
      <p className={s.quote}>“Can we see sales per store, every week?”</p>
      <div className={s.notes}>
        {["per store", "weekly", "export"].map((n, i) => (
          <span key={n} style={{ animationDelay: `${0.5 + i * 0.35}s` }}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function Define() {
  return (
    <div className={s.inner}>
      <span className={s.kicker}>User story #142</span>
      <p className={s.story}>
        As a sales lead, I want weekly sales by store, so I can restock
        faster.
      </p>
      <ul className={s.checks}>
        {["Filter by store", "Weekly view", "Export to Excel"].map((c, i) => (
          <li key={c} style={{ animationDelay: `${0.5 + i * 0.45}s` }}>
            <i />
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Deliver() {
  return (
    <div className={s.inner}>
      <span className={s.kicker}>Sprint 3</span>
      <div className={s.team}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={{ animationDelay: `${0.2 + i * 0.15}s` }} />
        ))}
        <em>4 devs · 3 countries</em>
      </div>
      <div className={s.bar}>
        <div />
      </div>
      <div className={s.barLabel}>
        <span>Progress</span>
        <span className={s.onTime}>On schedule</span>
      </div>
    </div>
  );
}

function Measure() {
  const bars = [38, 52, 47, 66, 74, 88];
  return (
    <div className={s.inner}>
      <span className={s.kicker}>Weekly sales report</span>
      <div className={s.chart}>
        {bars.map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%`, animationDelay: `${0.2 + i * 0.12}s` }}
          />
        ))}
      </div>
      <p className={s.shipped}>
        <b>✓</b> Shipped · now in the team’s weekly review
      </p>
    </div>
  );
}

const VIEWS = [Discover, Define, Deliver, Measure];

export default function WorkflowBoard() {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.35 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const playing = visible;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setStage((i) => (i + 1) % 4), STEP_MS);
    return () => clearTimeout(t);
  }, [stage, playing]);

  const View = VIEWS[stage];

  return (
    <div
      ref={ref}
      className={s.board}
      style={{ "--i": stage } as React.CSSProperties}
    >
      <div className={s.cols} role="tablist" aria-label="How I work">
        {STAGES.map((st, i) => (
          <button
            key={st.name}
            role="tab"
            aria-selected={i === stage}
            className={`${s.col} ${i === stage ? s.active : ""} ${
              i < stage ? s.done : ""
            }`}
            onClick={() => setStage(i)}
          >
            <span className={s.num}>0{i + 1}</span>
            <span className={s.name}>{st.name}</span>
            <span className={s.caption}>{st.caption}</span>
            <span className={s.timer}>
              {i === stage && (
                <i
                  key={`${stage}-${playing}`}
                  style={{
                    animationDuration: `${STEP_MS}ms`,
                    animationPlayState: playing ? "running" : "paused",
                  }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className={s.lane}>
        {STAGES.map((st) => (
          <div key={st.name} className={s.slot} />
        ))}
        <div className={s.card} aria-live="polite">
          <View key={stage} />
        </div>
      </div>

      <p className={s.foot}>
        One request, end to end. Illustrative example.
      </p>
    </div>
  );
}
