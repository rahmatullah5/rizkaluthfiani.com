/** @format */

import type { Metadata } from "next";
import Link from "next/link";
import {
  profile,
  roles,
  caseStudies,
  toolkit,
  education,
  certifications,
  extras,
} from "@/lib/content";
import s from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume — Rizka Luthfiani, Product Owner",
};

const resumeSummary =
  "Product Owner with hands-on experience owning backlogs, writing user stories and running sprints for an e-learning platform. As Project Manager, led a 4-person engineering team across 3 countries to an on-time client delivery. Comfortable going to the data myself with SQL, Python, BigQuery and Power BI. Cum laude graduate, Padjadjaran University.";

function groupCerts() {
  const map = new Map<string, typeof certifications>();
  for (const c of certifications) {
    map.set(c.org, [...(map.get(c.org) ?? []), c]);
  }
  return [...map.entries()];
}

export default function Resume() {
  return (
    <div className={s.page}>
      <div className={s.toolbar}>
        <Link href="/">← rizkaluthfiani.com</Link>
        <a className={s.dl} href={profile.resumePdf} download>
          Download PDF
        </a>
      </div>

      <article className={s.sheet}>
        <header className={s.head}>
          <div>
            <h1>{profile.name}</h1>
            <p className={s.title}>Product Owner · Project Manager</p>
          </div>
          <ul className={s.contact}>
            <li>{profile.location}</li>
            <li>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin}>linkedin.com/in/rizka-luthfiani</a>
            </li>
            <li>
              <a href="https://rizkaluthfiani.com">rizkaluthfiani.com</a>
            </li>
          </ul>
        </header>

        <p className={s.summary}>{resumeSummary}</p>

        <section>
          <h2>Experience</h2>
          {roles.map((r) => (
            <div key={r.company} className={s.role}>
              <div className={s.roleHead}>
                <strong>{r.role}</strong>
                <span>
                  {r.company} · {r.mode}
                </span>
                <span className={s.right}>{r.period}</span>
              </div>
              <ul>
                {r.outcome && (
                  <li>
                    <b>{r.outcome}</b>
                  </li>
                )}
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <dl className={s.skills}>
            {toolkit.map((g) => (
              <div key={g.group}>
                <dt>{g.group}</dt>
                <dd>{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Selected projects</h2>
          <ul className={s.projects}>
            {caseStudies.slice(0, 5).map((c) => (
              <li key={c.id}>
                <a href={c.href}>
                  <strong>{c.title}</strong>
                </a>{" "}
                ({c.year}) — {c.did}
              </li>
            ))}
          </ul>
        </section>

        <section className={s.twoCol}>
          <div>
            <h2>Education</h2>
            {education.map((e) => (
              <div key={e.school} className={s.edu}>
                <div className={s.roleHead}>
                  <strong>{e.school}</strong>
                  <span className={s.right}>{e.period}</span>
                </div>
                <p>{e.detail}</p>
              </div>
            ))}
            <p className={s.small}>
              <b>Languages:</b> {extras.languages}
            </p>
            <p className={s.small}>
              <b>Speaking:</b> Moderator, IAAS English Week 2021
            </p>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul className={s.certs}>
              {groupCerts().map(([org, items]) => (
                <li key={org}>
                  <b>{org}</b> —{" "}
                  {items.map((c, i) => (
                    <span key={c.name}>
                      <a href={c.href}>{c.name}</a> ({c.year})
                      {i < items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
