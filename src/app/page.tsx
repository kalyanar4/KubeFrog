import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { StatCard } from "@/components/stat-card";
import { experiments, heroStats, platformPillars, projects } from "@/data/site";

export default function HomePage() {
  return (
    <main className="page-home">
      <section className="hero-section">
        <div className="hero-copy-block">
          <p className="eyebrow">Master platform rebuild</p>
          <h1>
            A cinematic frontend platform for
            <span className="headline-accent"> design engineering proof.</span>
          </h1>
          <p className="lead-copy">
            KubeFrog now combines the fast visual upgrade with a real platform
            architecture: a studio-style homepage, deep project pages, an experiment
            lab, and clear conversion routes.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="button button-primary">
              Explore the work
            </Link>
            <Link href="/contact" className="button button-secondary">
              Start a project
            </Link>
          </div>
        </div>

        <div className="hero-stage panel">
          <div className="stage-orb stage-orb-one" />
          <div className="stage-orb stage-orb-two" />
          <div className="stage-card stage-card-primary">
            <p className="eyebrow">Active frame</p>
            <h2>Fast upgrade feeling, platform-grade structure.</h2>
            <p className="body-copy">
              The homepage now behaves like an immersive studio pitch instead of a
              single-page brochure.
            </p>
          </div>
          <div className="stage-card stage-card-secondary">
            <p className="eyebrow">Platform surfaces</p>
            <ul className="bullet-list">
              <li>Case studies with proof and system thinking</li>
              <li>Lab concepts for motion and product experiments</li>
              <li>Conversion-ready pages for real opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {heroStats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </section>

      <section className="content-section">
        <div className="section-intro">
          <p className="eyebrow">Platform vision</p>
          <h2>From showcase page to design engineering system.</h2>
          <p className="body-copy">
            The rebuild solves the biggest platform gaps: proof, conversion, growth
            architecture, and a more memorable interaction model.
          </p>
        </div>
        <div className="pillar-grid">
          {platformPillars.map((pillar) => (
            <article key={pillar.title} className="panel info-panel">
              <h3>{pillar.title}</h3>
              <p className="body-copy">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-intro">
          <p className="eyebrow">Featured case studies</p>
          <h2>Real routes, real project narratives, stronger trust.</h2>
          <p className="body-copy">
            Instead of three floating blurbs, each concept now has a dedicated page
            with challenge framing, outcomes, and product-system thinking.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <div className="section-intro">
          <p className="eyebrow">Lab</p>
          <h2>Interactive directions that can keep evolving.</h2>
          <p className="body-copy">
            The lab section gives KubeFrog a living edge. It is where motion
            systems, dashboard logic, and UX experiments can keep expanding over time.
          </p>
          <Link href="/lab" className="button button-secondary">
            Visit the lab
          </Link>
        </div>
        <div className="lab-stack">
          {experiments.map((experiment) => (
            <article key={experiment.slug} className="panel experiment-panel">
              <p className="eyebrow">{experiment.type}</p>
              <h3>{experiment.title}</h3>
              <p className="body-copy">{experiment.summary}</p>
              <p className="status-pill">{experiment.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section cta-section panel">
        <div>
          <p className="eyebrow">Conversion layer</p>
          <h2>Make the site beautiful, but also useful.</h2>
          <p className="body-copy">
            The rebuild adds a real next step for visitors who want to collaborate,
            review the work, or use KubeFrog as a launch point for broader product
            direction.
          </p>
        </div>
        <div className="hero-actions">
          <Link href="/contact" className="button button-primary">
            Start a conversation
          </Link>
          <Link href="/work" className="button button-secondary">
            Read a case study
          </Link>
        </div>
      </section>
    </main>
  );
}
