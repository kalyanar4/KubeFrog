import type { Metadata } from "next";

import { experiments } from "@/data/site";

export const metadata: Metadata = {
  title: "Lab",
  description: "Interactive directions and product experiments inside KubeFrog.",
};

export default function LabPage() {
  return (
    <main className="inner-page">
      <section className="page-hero panel">
        <p className="eyebrow">Lab</p>
        <h1>A place for motion studies, interface systems, and UX experiments.</h1>
        <p className="lead-copy">
          The lab is the expandable layer of the platform. It is where KubeFrog can
          keep publishing prototypes without forcing everything into case-study form.
        </p>
      </section>

      <section className="content-section">
        <div className="lab-stack">
          {experiments.map((experiment) => (
            <article key={experiment.slug} className="panel experiment-panel">
              <p className="eyebrow">{experiment.type}</p>
              <h2>{experiment.title}</h2>
              <p className="body-copy">{experiment.summary}</p>
              <div className="lab-foot">
                <span className="status-pill">{experiment.status}</span>
                <span className="lab-hint">Ready for future prototype embeds</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
