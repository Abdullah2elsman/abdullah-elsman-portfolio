"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/personal";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-16 bg-surface border-b border-outline-variant justify-center">
      {/* Mobile menu trigger */}
      <button
        type="button"
        className="md:hidden text-on-surface absolute left-[var(--spacing-margin-mobile)] size-11 inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
      >
        {mobileOpen ? (
          <svg
            aria-hidden="true"
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {/* Desktop navigation — centered, pill hover */}
      <nav className="hidden md:flex gap-4 items-center" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-on-surface-variant hover:text-on-primary hover:bg-primary px-4 py-2 rounded-full transition-all font-label-md text-label-md"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile navigation overlay */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden fixed inset-0 top-16 bg-surface z-40 flex flex-col items-center gap-6 py-12"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface hover:text-primary transition-colors font-label-md text-label-md"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
