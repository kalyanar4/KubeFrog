import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";

import { SceneCanvas } from "@/components/scene-canvas";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "KubeFrog | Design Engineering Platform",
    template: "%s | KubeFrog",
  },
  description:
    "A multi-page design engineering platform featuring cinematic UI, project case studies, and experimental product interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <SceneCanvas />
        <div className="page-shell">
          <SiteHeader />
          {children}
          <footer className="site-footer">
            <div>
              <p className="eyebrow">KubeFrog</p>
              <p className="footer-title">Built as a design engineering platform.</p>
            </div>
            <div className="footer-links">
              <p>Multi-page architecture</p>
              <p>Case studies + lab surfaces</p>
              <p>GitHub Pages ready</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
