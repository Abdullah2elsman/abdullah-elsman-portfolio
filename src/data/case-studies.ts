import type { CaseStudy } from "./types";

export const shareKStudy: CaseStudy = {
  slug: "share-k",
  title: "Share-k",
  label: "ITI Graduation Project • Backend Developer",
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
  team: "6",
  role: "Backend Developer",
  productConcept:
    "A platform connecting GitHub/open-source project owners with developers who want to contribute. A core feature uses GitHub evidence and AI-assisted analysis to evaluate developer skills and help with contributor/project matching.",
  contributions: [
    "Authentication",
    "Payments",
    "GitHub integration",
    "Docker setup and responsibility, shared with one teammate",
    "Backend integration with the AI service",
    "Participation in selected technical and architectural decisions",
  ],
  technicalStack: [
    { category: "Backend", items: ["NestJS", "Prisma"] },
    { category: "Database", items: ["PostgreSQL", "Redis"] },
    { category: "Infrastructure", items: ["Docker", "BullMQ"] },
    { category: "Services", items: ["FastAPI AI Service", "GitHub API"] },
  ],
};

export const gatewayStudy: CaseStudy = {
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
  role: "Independent Freelance Developer",
  productConcept:
    "A production English-learning platform containing approximately 12,000 registered accounts. Abdullah worked independently on backend performance, database normalization, API improvements, deployment, and server troubleshooting.",
  contributions: [
    "Improved backend data retrieval and response shapes.",
    "Added pagination to data-heavy endpoints.",
    "Fixed application bugs and addressed errors.",
    "Built two new pages/features across backend and frontend.",
    "Normalized poorly structured parts of the database.",
    "Improved dashboard/admin data flow.",
    "Addressed server-load and query/API issues.",
    "Handled server work and deployment directly.",
    "Troubleshot production and server problems.",
  ],
  technicalStack: [
    { category: "Backend", items: ["Laravel", "PHP"] },
    { category: "Frontend", items: ["React"] },
    { category: "Database", items: ["MySQL"] },
    { category: "Infrastructure", items: ["Linux / Server"] },
  ],
};
