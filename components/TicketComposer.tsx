/** @format */

"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import s from "./TicketComposer.module.css";

const TYPES = [
  { id: "role", label: "Full-time role", title: "Product Owner role" },
  { id: "project", label: "Project", title: "Project collaboration" },
  { id: "chat", label: "Coffee chat", title: "Coffee chat" },
];
const PRIORITIES = ["P0 · Urgent", "P1 · This month", "P2 · Whenever"];

export default function TicketComposer() {
  const [type, setType] = useState(TYPES[0]);
  const [company, setCompany] = useState("");
  const [priority, setPriority] = useState(PRIORITIES[1]);

  const title = `${type.title}${company ? ` at ${company}` : ""}`;
  const body = `Hi Rizka,\n\nType: ${type.label}\nPriority: ${priority}\n${
    company ? `Company: ${company}\n` : ""
  }\n`;
  const href = `mailto:${profile.email}?subject=${encodeURIComponent(
    title,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className={s.card}>
      <div className={s.top}>
        <span className={s.key}>RIZKA-NEW</span>
        <span className={s.assignee}>
          Assignee <b>RL</b>
        </span>
      </div>

      <p className={s.title} aria-live="polite">
        {title}
        {!company && <span className={s.caret} aria-hidden />}
      </p>

      <div className={s.fields}>
        <div className={s.field}>
          <span>Type</span>
          <div className={s.seg} role="radiogroup" aria-label="Type">
            {TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={type.id === t.id}
                className={type.id === t.id ? s.on : undefined}
                onClick={() => setType(t)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <label className={s.field}>
          <span>Company</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your company"
            maxLength={60}
          />
        </label>

        <div className={s.field}>
          <span>Priority</span>
          <div className={s.seg} role="radiogroup" aria-label="Priority">
            {PRIORITIES.map((p) => (
              <button
                key={p}
                type="button"
                role="radio"
                aria-checked={priority === p}
                className={priority === p ? s.on : undefined}
                onClick={() => setPriority(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={s.actions}>
        <a className={s.send} href={href}>
          Create ticket → email
        </a>
        <span className={s.or}>
          or write to <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </span>
      </div>
    </div>
  );
}
