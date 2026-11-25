/** @format */

"use client";

import { useRef, useState } from "react";
import s from "./PriorityMatrix.module.css";

type Note = { id: number; text: string; x: number; y: number };

const START: Note[] = [
  { id: 1, text: "Talk to users", x: 20, y: 15 },
  { id: 2, text: "Write acceptance criteria", x: 27, y: 35 },
  { id: 3, text: "Ship the MVP", x: 70, y: 16 },
  { id: 4, text: "Sync a team across 3 countries", x: 72, y: 37 },
  { id: 5, text: "Weekly sales dashboard", x: 24, y: 66 },
  { id: 6, text: "Gold-plating", x: 64, y: 64 },
  { id: 7, text: "Features nobody asked for", x: 75, y: 84 },
];

function quadrant(n: Note) {
  if (n.y < 50) return n.x < 50 ? "Quick win" : "Big bet";
  return n.x < 50 ? "Fill-in" : "Not now";
}

export default function PriorityMatrix() {
  const [notes, setNotes] = useState(START);
  const [dragId, setDragId] = useState<number | null>(null);
  const [log, setLog] = useState("Drag a note. This is how I triage a backlog.");
  const box = useRef<HTMLDivElement>(null);
  const offset = useRef({ dx: 0, dy: 0 });

  const toPct = (cx: number, cy: number) => {
    const r = box.current!.getBoundingClientRect();
    return {
      x: Math.min(90, Math.max(10, ((cx - r.left) / r.width) * 100)),
      y: Math.min(93, Math.max(7, ((cy - r.top) / r.height) * 100)),
    };
  };

  const onDown = (e: React.PointerEvent, n: Note) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const p = toPct(e.clientX, e.clientY);
    offset.current = { dx: n.x - p.x, dy: n.y - p.y };
    setDragId(n.id);
    setNotes((all) => [...all.filter((a) => a.id !== n.id), n]);
  };

  const onMove = (e: React.PointerEvent) => {
    if (dragId === null) return;
    const p = toPct(e.clientX, e.clientY);
    setNotes((all) =>
      all.map((n) =>
        n.id === dragId
          ? {
              ...n,
              x: Math.min(90, Math.max(10, p.x + offset.current.dx)),
              y: Math.min(93, Math.max(7, p.y + offset.current.dy)),
            }
          : n,
      ),
    );
  };

  const onUp = () => {
    const n = notes.find((a) => a.id === dragId);
    if (n) setLog(`“${n.text}” → ${quadrant(n)}`);
    setDragId(null);
  };

  return (
    <figure className={s.wrap}>
      <div className={s.frame}>
        <span className={s.yAxis}>Impact ↑</span>
        <div
          ref={box}
          className={s.matrix}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <span className={`${s.q} ${s.q1}`}>Quick wins</span>
          <span className={`${s.q} ${s.q2}`}>Big bets</span>
          <span className={`${s.q} ${s.q3}`}>Fill-ins</span>
          <span className={`${s.q} ${s.q4}`}>Not now</span>
          {notes.map((n, i) => {
            const dead = quadrant(n) === "Not now";
            return (
              <button
                key={n.id}
                type="button"
                className={`${s.note} ${dragId === n.id ? s.drag : ""} ${
                  dead ? s.dead : ""
                }`}
                style={
                  {
                    left: `${n.x}%`,
                    top: `${n.y}%`,
                    "--r": `${((n.id * 37) % 7) - 3}deg`,
                    "--d": `${i * 70}ms`,
                  } as React.CSSProperties
                }
                onPointerDown={(e) => onDown(e, n)}
                aria-label={`${n.text}, ${quadrant(n)}`}
              >
                {n.text}
              </button>
            );
          })}
        </div>
        <span className={s.xAxis}>Effort →</span>
      </div>
      <figcaption className={s.log} aria-live="polite">
        <span>›</span> {log}
      </figcaption>
    </figure>
  );
}
