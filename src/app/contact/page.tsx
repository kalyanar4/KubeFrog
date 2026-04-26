import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Conversion-ready page for collaboration, review, and product direction.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-hero panel">
        <p className="eyebrow">Contact</p>
        <h1>Turn the platform into a project conversation.</h1>
        <p className="lead-copy">
          A stronger platform needs a clearer next step. This page restores the
          conversion layer so the experience can lead to collaboration, not just
          admiration.
        </p>
      </section>

      <section className="content-section split-section">
        <article className="panel narrative-panel">
          <p className="eyebrow">Engagement paths</p>
          <h2>What KubeFrog can lead into</h2>
          <ul className="bullet-list">
            <li>Design engineering collaborations</li>
            <li>Frontend platform and UI architecture work</li>
            <li>Product concept direction and interface reviews</li>
          </ul>
        </article>
        <article className="panel narrative-panel">
          <p className="eyebrow">Suggested actions</p>
          <h2>Clear next moves for visitors</h2>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:hello@kubefrog.dev">
              Start via email
            </a>
            <Link className="button button-secondary" href="/work">
              Review the case studies
            </Link>
          </div>
          <p className="body-copy">
            Replace the placeholder contact endpoint with your preferred studio email,
            form endpoint, or scheduling tool when you are ready.
          </p>
        </article>
      </section>
    </main>
  );
}
