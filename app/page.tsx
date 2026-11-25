/** @format */

import WorkflowBoard from "@/components/WorkflowBoard";
import {
  profile,
  roles,
  caseStudies,
  toolkit,
  education,
  certifications,
} from "@/lib/content";

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <path
        d="M3 9L9 3M4 3h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <header className="sec-head">
      <span className="sec-num">{n}</span>
      <h2>{title}</h2>
    </header>
  );
}

const stats = [
  { big: "4", small: "engineers led, 3 countries" },
  { big: "On time", small: "client delivery" },
  { big: "90%+", small: "model accuracy" },
  { big: "3.64", small: "GPA, cum laude" },
];

export default function Home() {
  return (
    <>
      <nav className="topbar">
        <div className="wrap topbar-in">
          <a href="#top" className="mark" aria-label="Home">
            <span className="mark-box">RL</span>
            <span className="mark-name">Rizka Luthfiani</span>
          </a>
          <div className="nav-links">
            <a href="#how">How I work</a>
            <a href="#work">Experience</a>
            <a href="#cases">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="btn btn-sm" href="/resume">
            Resume
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="wrap hero">
          <div className="hero-copy">
            <p className="eyebrow">Product Owner · Jakarta</p>
            <h1>
              I turn messy requirements into{" "}
              <span className="hl">shipped product</span>.
            </h1>
            <p className="lede">
              Product Owner at Terus E-Learning. Backlogs, sprints, and
              data-backed calls.
            </p>
            <div className="cta-row">
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn btn-ghost" href="/resume">
                Resume
              </a>
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
            </div>
          </div>
          <ul className="stats" aria-label="Highlights">
            {stats.map((s) => (
              <li key={s.small}>
                <b>{s.big}</b>
                <span>{s.small}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="how" className="sec-band">
          <div className="wrap sec">
            <SectionHead n="01" title="How I work" />
            <WorkflowBoard />
          </div>
        </section>

        <section id="work" className="wrap sec">
          <SectionHead n="02" title="Experience" />
          <ol className="roles">
            {roles.map((r) => (
              <li key={r.company} className="role">
                <span className="period">{r.period}</span>
                <div>
                  <h3>
                    {r.role}
                    <span className="at"> · </span>
                    {r.companyUrl ? (
                      <a href={r.companyUrl} target="_blank" rel="noreferrer">
                        {r.company}
                      </a>
                    ) : (
                      r.company
                    )}
                  </h3>
                  <p className="ctx">{r.oneLiner}</p>
                </div>
                {r.win ? <span className="win">{r.win}</span> : <span />}
              </li>
            ))}
          </ol>
        </section>

        <section id="cases" className="wrap sec">
          <SectionHead n="03" title="Projects" />
          <div className="cases">
            {caseStudies.map((c) => (
              <a
                key={c.id}
                className="case"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="case-top">
                  <span className="mono">{c.tags[0]}</span>
                  <span className="mono">{c.year}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.question}</p>
                <span className="case-link">
                  {c.linkLabel} <Arrow />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap sec">
          <SectionHead n="04" title="Toolkit" />
          <div className="toolkit">
            {toolkit.map((g) => (
              <div key={g.group} className="tk-row">
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap sec">
          <SectionHead n="05" title="Education" />
          <div className="edu-list">
            {education.map((e) => (
              <div key={e.school} className="edu">
                <strong>{e.school}</strong>
                <span>{e.detail}</span>
                <span className="mono">{e.period}</span>
              </div>
            ))}
          </div>
          <details className="certs">
            <summary>{certifications.length} certifications</summary>
            <ul>
              {certifications.map((c) => (
                <li key={c.name}>
                  <a href={c.href} target="_blank" rel="noreferrer">
                    <span>
                      {c.name} <em>· {c.org}</em>
                    </span>
                    <span className="mono">{c.year}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Let&apos;s talk product.</h2>
            <a className="big-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href={profile.medium} target="_blank" rel="noreferrer">
                Medium <Arrow />
              </a>
              <a href={profile.resumePdf} download>
                Resume PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} Rizka Luthfiani Fakhriah</span>
        <span>Jakarta</span>
      </footer>
    </>
  );
}
