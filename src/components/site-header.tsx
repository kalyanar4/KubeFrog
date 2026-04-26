"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" onClick={() => setIsOpen(false)}>
        <span className="brand-kicker">KubeFrog</span>
        <span className="brand-caption">Design engineering platform</span>
      </Link>

      <button
        type="button"
        className="menu-button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((value) => !value)}
      >
        Menu
      </button>

      <nav id="site-nav" className={`site-nav ${isOpen ? "is-open" : ""}`}>
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "nav-link is-active" : "nav-link"}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
