import type { Highlight } from "./types";

export const personal = {
  name: "Abdullah Elsman",
  portrait: "/images/portfolio/portrait.jpg",
  eyebrow: "BACKEND-FOCUSED SOFTWARE ENGINEER",
  headline:
    "Building Robust, Scalable Backend Systems with Laravel & Node.js",
  heroDescription:
    "Backend-focused software engineer strongest in Laravel and PHP, building and improving APIs, databases, integrations, and maintainable production systems.",
  about: [
    "I am a backend-focused software engineer strongest in Laravel and backend problem solving, with Node.js as a secondary backend technology.",
    "I enjoy understanding existing systems, debugging production issues, designing APIs and databases, integrating services, improving performance, and handling deployment and server troubleshooting.",
  ],
  contactCTAHeading: "Let's Build Something Robust.",
  contactCTADescription:
    "Open to Backend Engineer and Software Engineer roles, full-stack opportunities where backend work is important, and selected freelance or client projects.",
  // Set this only after the final address is confirmed. Null prevents a fake mailto link.
  contactEmail: null as string | null,
  github: "https://github.com/Abdullah2elsman",
  linkedin: "https://www.linkedin.com/in/abdullah-elsman/",
} as const;

export const highlights: Highlight[] = [
  { icon: "education", text: "ITI Graduate" },
  { icon: "production", text: "Production Experience" },
  { icon: "backend", text: "Laravel / PHP" },
  { icon: "accounts", text: "~12K Registered Accounts" },
];

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
] as const;
