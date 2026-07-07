"use client";

import { useEffect, useState } from "react";
import VaronisLogo from "@/components/VaronisLogo";
import CosmicCenterpiece from "@/components/CosmicCenterpiece";
import AdoptionHubPanel from "@/components/AdoptionHubPanel";
import { PROJECTS } from "@/lib/projects";
import { cvHref, mailtoHref, githubHref } from "@/lib/contact";

const FOCUS = [
  {
    k: "01",
    title: "Build the tooling teams adopt",
    body: "I ship MCP servers and Claude Code and Codex plugins that other engineers and agents actually install. Adoption starts with tools worth adopting.",
  },
  {
    k: "02",
    title: "Drive it, then measure it",
    body: "Enablement is a build problem: make the good path the easy path, then track whether it helped. Evals and scorecards, not vibes.",
  },
  {
    k: "03",
    title: "Hands-on across the stack",
    body: "React, Node, and TypeScript on top; Docker, Kubernetes, Terraform, and CI underneath. I wire AI into real workflows, not slideware.",
  },
];

const EXPERIENCE = [
  {
    role: "Software Developer",
    org: "Joomsy",
    when: "2025 — now",
    note: "Primary full-stack and DevOps engineer at an early-stage startup, team of five. I ship and run production.",
  },
  {
    role: "Independent AI Builder",
    org: "Freelance",
    when: "2026 — now",
    note: "Scoping briefs and shipping AI and agentic MVPs from intake to deploy: LLM apps, MCP tooling, the systems around them.",
  },
  {
    role: "Customer Support Engineer",
    org: "Wochit",
    when: "2021 — now",
    note: "Front-line technical support for a cloud video editor at scale; feeding real user friction back into the product.",
  },
];

const EDUCATION = [
  { title: "B.Sc. Computer Science", org: "Afeka College of Engineering" },
  { title: "DevOps workshop", org: "Wix — EKS, Kubernetes, Terraform, AWS" },
  { title: "Full-Stack bootcamp", org: "Coding Academy — Node, React, Mongo" },
];

export default function VaronisApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="vr-root">
      {/* NAV */}
      <header className={`vr-nav ${scrolled ? "is-solid" : ""}`}>
        <div className="vr-nav-inner">
          <a href="#top" className="vr-nav-brand" aria-label="bar for Varonis, back to top">
            <VaronisLogo />
          </a>
          <nav className="vr-nav-links" aria-label="Sections">
            <a href="#approach">Approach</a>
            <a href="#work">Work</a>
            <a href="#track">Track record</a>
          </nav>
          <a className="vr-btn vr-btn-green vr-nav-cta" href={mailtoHref}>
            Get in touch
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="vr-hero">
        <div className="vr-stars" aria-hidden="true" />
        <div className="vr-hero-glow" aria-hidden="true" />
        <div className="vr-hero-inner">
          <div className="vr-hero-copy">
            <p className="vr-eyebrow">For the AI Platform &amp; Adoption Specialist role</p>
            <h1 className="vr-hero-title">
              <span className="vr-title-roman">I build the tooling</span>
              <span className="vr-title-italic">AI adoption runs on.</span>
            </h1>
            <p className="vr-hero-sub">
              Varonis took its engineering org to full AI adoption and published the
              gains. I build the layer that makes that happen and hold: MCP servers,
              Claude Code plugins, the agents around them, and the evals to prove they
              help. Here is the work, in the open.
            </p>
            <div className="vr-hero-cta">
              <a className="vr-btn vr-btn-blue" href="#work">
                See the work
              </a>
              <a className="vr-btn vr-btn-ghost" href={cvHref} target="_blank" rel="noopener">
                Download CV
              </a>
            </div>
          </div>
          <div className="vr-hero-art">
            <CosmicCenterpiece />
          </div>
        </div>
      </section>

      {/* APPROACH — blueprint band */}
      <section id="approach" className="vr-band vr-band-dark">
        <div className="vr-stars vr-stars-dim" aria-hidden="true" />
        <div className="vr-wrap">
          <div className="vr-band-head">
            <p className="vr-kicker">
              <span className="vr-kicker-mark" /> What I&apos;d do here
            </p>
            <h2 className="vr-h2">
              Your AI Hub, MY&nbsp;AI&nbsp;Score, the MCP catalog. I&apos;ve been
              building this shape already.
            </h2>
            <p className="vr-lead">
              This role is the internal-facing side of Varonis&apos; own adoption story.
              Below is a sketch of that surface, next to the tooling I ship. Cloud is
              AWS-deep for me today; I&apos;d ramp on Azure fast, the fundamentals carry.
            </p>
          </div>

          <AdoptionHubPanel />

          <div className="vr-focus">
            {FOCUS.map((f) => (
              <article key={f.k} className="vr-focus-card">
                <span className="vr-focus-k">{f.k}</span>
                <h3 className="vr-focus-title">{f.title}</h3>
                <p className="vr-focus-body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK — white grid */}
      <section id="work" className="vr-band vr-band-light">
        <div className="vr-wrap">
          <div className="vr-band-head vr-band-head-light">
            <p className="vr-kicker vr-kicker-dark">
              <span className="vr-kicker-mark" /> Selected work
            </p>
            <h2 className="vr-h2 vr-h2-dark">Shipped, public, running.</h2>
            <p className="vr-lead vr-lead-dark">
              The tooling other engineers and agents install, the durable systems under
              it, and a few product and craft builds. Every card is a live link.
            </p>
          </div>

          <div className="vr-grid">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                className={`vr-tile vr-accent-${p.accent} ${p.span === 2 ? "vr-tile-wide" : ""}`}
                href={p.href}
                target="_blank"
                rel="noopener"
              >
                <span className="vr-tile-tag">{p.tag}</span>
                <span className="vr-tile-name">{p.name}</span>
                <span className="vr-tile-blurb">{p.blurb}</span>
                <span className="vr-tile-go" aria-hidden="true">
                  Open →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD — white, compact */}
      <section id="track" className="vr-band vr-band-light vr-band-track">
        <div className="vr-wrap">
          <div className="vr-track">
            <div className="vr-track-col">
              <h2 className="vr-h3-dark">Experience</h2>
              {EXPERIENCE.map((e) => (
                <div key={e.org} className="vr-track-row">
                  <div className="vr-track-line">
                    <span className="vr-track-role">{e.role}</span>
                    <span className="vr-track-when">{e.when}</span>
                  </div>
                  <span className="vr-track-org">{e.org}</span>
                  <p className="vr-track-note">{e.note}</p>
                </div>
              ))}
            </div>
            <div className="vr-track-col">
              <h2 className="vr-h3-dark">Education</h2>
              {EDUCATION.map((e) => (
                <div key={e.title} className="vr-track-row">
                  <span className="vr-track-role">{e.title}</span>
                  <span className="vr-track-org">{e.org}</span>
                </div>
              ))}
              <div className="vr-track-stack">
                <span className="vr-track-stack-h">Stack</span>
                <p>
                  TypeScript · Node · React · Next.js · Python · Go · Docker ·
                  Kubernetes · Terraform · AWS · MCP · Claude Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE — cosmic */}
      <section className="vr-close">
        <div className="vr-stars" aria-hidden="true" />
        <div className="vr-close-glow" aria-hidden="true" />
        <div className="vr-wrap vr-close-inner">
          <h2 className="vr-close-title">
            <span className="vr-title-roman">Let&apos;s make adoption</span>
            <span className="vr-title-italic">the easy path at Varonis.</span>
          </h2>
          <p className="vr-close-sub">
            I&apos;m Bar, based in Israel. Happy to walk through any of this, or grab a
            coffee in Herzliya.
          </p>
          <div className="vr-hero-cta">
            <a className="vr-btn vr-btn-green" href={mailtoHref}>
              Email me
            </a>
            <a className="vr-btn vr-btn-ghost" href={cvHref} target="_blank" rel="noopener">
              Download CV
            </a>
            <a className="vr-btn vr-btn-ghost" href={githubHref} target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>
        <footer className="vr-footer">
          <span>Bar Moshe</span>
          <span className="vr-footer-note">
            Built for the Varonis application. Not affiliated with Varonis.
          </span>
        </footer>
      </section>
    </div>
  );
}
