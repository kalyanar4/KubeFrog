import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore KubeFrog case studies and platform-ready product concepts.",
};

export default function WorkPage() {
  return (
    <main className="inner-page">
      <section className="page-hero panel">
        <p className="eyebrow">Work</p>
        <h1>Case studies designed to feel like products, not placeholders.</h1>
        <p className="lead-copy">
          Each project route exists to prove thinking, not just taste. The structure
          is now ready for deeper artifacts, prototypes, and future writing.
        </p>
      </section>

      <section className="content-section">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
