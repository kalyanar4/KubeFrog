import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="inner-page">
      <section className={`project-hero panel accent-${project.accent}`}>
        <div className="section-intro">
          <p className="eyebrow">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="lead-copy">{project.summary}</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">
              Build something like this
            </Link>
            <Link href="/work" className="button button-secondary">
              Back to all work
            </Link>
          </div>
        </div>
        <div className="signal-board">
          {project.stats.map((stat) => (
            <article key={stat.label} className="signal-tile">
              <p className="signal-value">{stat.value}</p>
              <p className="signal-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <article className="panel narrative-panel">
          <p className="eyebrow">Challenge</p>
          <h2>What needed to change</h2>
          <p className="body-copy">{project.challenge}</p>
        </article>
        <article className="panel narrative-panel">
          <p className="eyebrow">Outcome</p>
          <h2>What the concept delivers</h2>
          <p className="body-copy">{project.outcome}</p>
        </article>
      </section>

      <section className="content-section">
        <div className="section-intro">
          <p className="eyebrow">Blueprint</p>
          <h2>The product system behind the surface.</h2>
        </div>
        <div className="blueprint-grid">
          {project.blueprint.map((item) => (
            <article key={item.title} className="panel blueprint-card">
              <h3>{item.title}</h3>
              <p className="body-copy">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <article className="panel narrative-panel">
          <p className="eyebrow">Principles</p>
          <h2>What drives the interaction design</h2>
          <ul className="bullet-list">
            {project.pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </article>
        <article className="panel narrative-panel">
          <p className="eyebrow">Stack</p>
          <h2>How the platform expresses the idea</h2>
          <div className="tag-row">
            {project.stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
