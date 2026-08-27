import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "share-k",
    title: "Share-k",
    label: "ITI Graduation Project · Backend Developer",
    description:
      "Developer collaboration platform connecting GitHub projects with contributors using AI-assisted skill evaluation.",
    highlights: [
      "Authentication",
      "Payments",
      "GitHub Integration",
      "Docker",
      "AI Service Integration",
    ],
    tags: ["NestJS", "PostgreSQL", "Prisma", "Redis", "Docker"],
    tier: 1,
    github: "https://github.com/ITI-Sharek",
    imagePlaceholder: "/images/portfolio/share-k-cover.jpg",
  },
  {
    slug: "gateway",
    title: "Gateway",
    label: "Freelance / Production Project",
    description:
      "Real-world Laravel production work involving performance, database normalization, APIs, deployment, and server troubleshooting.",
    highlights: [
      "Backend Optimization",
      "Database Normalization",
      "API Improvements",
      "Deployment",
      "Server Troubleshooting",
    ],
    tags: ["Laravel", "React", "MySQL", "Linux / Server", "Performance / APIs"],
    tier: 1,
    live: "https://gatewaysystem.net/login",
    github: "https://github.com/Abdullah2elsman/Gateway",
    imagePlaceholder: "/images/portfolio/gateway-cover.jpg",
  },
  {
    slug: "smart-book",
    title: "Smart Book",
    label: "University Graduation Project",
    description:
      "Educational platform for course/PDF-based learning with quizzes and AI-assisted educational features.",
    highlights: [
      "Authentication",
      "Courses & Subjects",
      "PDF Processing",
      "Quizzes",
      "AI Integration",
    ],
    tags: ["Laravel", "JavaScript", "MySQL", "AI Integration", "PDF Processing"],
    tier: 2,
    github: "https://github.com/Abdullah2elsman/Graduation-Project",
    imagePlaceholder: "/images/portfolio/smart-book-cover.jpg",
  },
  {
    slug: "zoal-online",
    title: "Zoal Online",
    label: "Production Client Work",
    description:
      "Production Laravel recovery and server troubleshooting involving PHP compatibility, dependency repair, and operational restoration.",
    highlights: [
      "Server Recovery",
      "Dependency Repair",
      "PHP Compatibility",
      "Production Troubleshooting",
    ],
    tags: [
      "Laravel",
      "PHP",
      "Linux / Server",
      "Composer / Dependencies",
      "Production Troubleshooting",
    ],
    tier: 2,
    live: "https://zoal.online/",
    imagePlaceholder: "/images/portfolio/zoal-cover.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getTier1Projects(): Project[] {
  return projects.filter((p) => p.tier === 1);
}

export function getTier2Projects(): Project[] {
  return projects.filter((p) => p.tier === 2);
}
