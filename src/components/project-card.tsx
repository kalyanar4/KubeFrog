import Link from "next/link";

import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card panel accent-${project.accent}`}>
      <div className="project-card-head">
        <p className="eyebrow">{project.label}</p>
        <h3>{project.title}</h3>
      </div>
      <p className="body-copy">{project.summary}</p>
      <ul className="bullet-list">
        {project.pillars.map((pillar) => (
          <li key={pillar}>{pillar}</li>
        ))}
      </ul>
      <div className="card-actions">
        <Link href={`/work/${project.slug}`} className="button button-primary">
          Open case study
        </Link>
      </div>
    </article>
  );
}
