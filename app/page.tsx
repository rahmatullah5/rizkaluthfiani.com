/** @format */

import Sidebar from "@/components/Sidebar";
import PriorityMatrix from "@/components/PriorityMatrix";
import WorkflowBoard from "@/components/WorkflowBoard";
import Roadmap from "@/components/Roadmap";
import Backlog from "@/components/Backlog";
import TicketComposer from "@/components/TicketComposer";
import {
  roles,
  caseStudies,
  toolkit,
  education,
  certifications,
  extras,
} from "@/lib/content";

function ViewHead({
  crumb,
  title,
  meta,
}: {
  crumb: string;
  title: string;
  meta?: string;
}) {
  return (
    <header className="view-head">
      <p className="crumb">
        rizka <span>/</span> {crumb}
      </p>
      <div className="view-title">
        <h2>{title}</h2>
        {meta && <span className="meta">{meta}</span>}
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="app">
      <Sidebar
        counts={{ roadmap: roles.length, backlog: caseStudies.length }}
      />

      <main className="main">
        <section id="overview" className="view hero">
          <div className="hero-text">
            <p className="crumb">
              rizka <span>/</span> overview
            </p>
            <h1>
              Product Owner who decides <em>what gets built next</em> — and
              makes sure it ships.
            </h1>
            <dl className="facts">
              <div>
                <dt>Now</dt>
                <dd>Product Owner, Terus E-Learning</dd>
              </div>
              <div>
                <dt>Before</dt>
                <dd>PM for 4 engineers in 3 countries</dd>
              </div>
              <div>
                <dt>Also</dt>
                <dd>SQL, Python, Power BI</dd>
              </div>
            </dl>
            <div className="cta-row">
              <a className="btn" href="#contact">
                Open a ticket
              </a>
              <a className="btn btn-ghost" href="/resume">
                Resume
              </a>
            </div>
          </div>
          <PriorityMatrix />
        </section>

        <section id="how" className="view dark">
          <ViewHead crumb="how-i-work" title="How I work" meta="auto-plays" />
          <WorkflowBoard />
        </section>

        <section id="roadmap" className="view">
          <ViewHead
            crumb="roadmap"
            title="Career roadmap"
            meta="click a row"
          />
          <Roadmap />
        </section>

        <section id="backlog" className="view">
          <ViewHead
            crumb="backlog"
            title="Shipped side projects"
            meta={`${caseStudies.length} done`}
          />
          <Backlog />
        </section>

        <section id="specs" className="view">
          <ViewHead crumb="specs" title="Specs" />
          <div className="specs">
            <div className="panel">
              <h3>Toolkit</h3>
              {toolkit.map((g) => (
                <div key={g.group} className="prop">
                  <span className="prop-k">{g.group}</span>
                  <ul className="pills">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="panel">
              <h3>Education</h3>
              {education.map((e) => (
                <div key={e.school} className="prop">
                  <span className="prop-k">{e.period}</span>
                  <span>
                    <b>{e.school}</b>
                    <br />
                    <span className="muted">{e.detail}</span>
                  </span>
                </div>
              ))}
              <div className="prop">
                <span className="prop-k">Languages</span>
                <span>{extras.languages}</span>
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
            </div>
          </div>
        </section>

        <section id="contact" className="view dark contact">
          <ViewHead crumb="new-ticket" title="Got a product that needs an owner?" />
          <TicketComposer />
        </section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} Rizka Luthfiani Fakhriah</span>
          <span>Jakarta, Indonesia</span>
        </footer>
      </main>
    </div>
  );
}
