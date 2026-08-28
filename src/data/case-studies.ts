import type { CaseStudy, DetailedCaseStudy } from "./types";

export const shareKStudy: DetailedCaseStudy = {
  slug: "share-k",
  title: "Share-k",
  label: "ITI Graduation Project • Backend Developer",
  description:
    "Developer collaboration platform connecting GitHub projects with contributors using AI-assisted skill evaluation.",
  highlights: [
    "Authentication",
    "Payments",
    "GitHub Integration",
    "Backend integration with the AI service",
    "Docker setup shared with one teammate",
  ],
  tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
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
    "Backend integration with the AI service",
    "Docker setup and responsibility, shared with one teammate",
    "Participation in selected technical and architectural decisions",
  ],
  technicalStack: [
    { category: "Backend", items: ["NestJS", "TypeScript"] },
    { category: "Database", items: ["PostgreSQL", "Prisma", "pgvector"] },
    { category: "Async", items: ["Redis", "BullMQ"] },
    { category: "AI Service", items: ["FastAPI"] },
    {
      category: "Frontend",
      items: ["React", "TanStack Start", "TypeScript", "Tailwind CSS"],
    },
    { category: "Infrastructure", items: ["Docker", "Docker Compose"] },
    { category: "Integration", items: ["GitHub Integration"] },
  ],
  overview: [
    "Share-k serves GitHub project owners who need contributors and developers who want to find projects where their skills can be useful. It gives owners a place to present repositories and project needs while giving contributors a profile-centered way to participate.",
    "GitHub-derived information supports the evaluation workflow, while AI-assisted analysis forms one part of the broader matching process. The application uses that context to help connect contributor skills with relevant project opportunities without overstating the role of AI in the product.",
  ],
  contributionDetails: [
    {
      title: "Authentication",
      description:
        "Implemented authentication functionality within the backend application.",
    },
    {
      title: "Payments",
      description:
        "Implemented payment functionality and its backend integration into the application flow.",
    },
    {
      title: "GitHub Integration",
      description:
        "Integrated GitHub with the backend so project and developer information could participate in the platform's collaboration and evaluation workflow.",
    },
    {
      title: "AI Service Integration",
      description:
        "Handled the backend-side integration with the separate AI service, connecting application workflows to AI-assisted analysis. The AI service itself was not Abdullah's implementation.",
    },
    {
      title: "Docker",
      description:
        "Shared responsibility for Docker setup and the project's containerized development environment with one teammate. This was not sole infrastructure or deployment ownership.",
    },
    {
      title: "Engineering Decisions",
      description:
        "Participated in selected technical and architectural decisions and backend modules as part of the team, without owning the full system architecture.",
    },
  ],
  challenges: [
    {
      title: "Coordinating System Integrations",
      description:
        "The application backend needed to coordinate project data with GitHub integration and a separate AI service while keeping the wider workflow understandable.",
    },
    {
      title: "Maintaining Clear Service Boundaries",
      description:
        "AI processing belonged to a separate FastAPI service. The backend-side integration connected that capability to application workflows while preserving the distinction between application responsibilities and AI processing.",
    },
    {
      title: "Working Across a Six-Person Team",
      description:
        "Module ownership and integration boundaries mattered in a project shared by six team members. Abdullah contributed within selected backend and technical areas rather than owning the entire platform.",
    },
    {
      title: "Development Environment Consistency",
      description:
        "Docker and Docker Compose supported a consistent project environment. Abdullah shared the setup responsibility with one teammate.",
    },
  ],
  outcome: [
    "The team presented Share-k live to ITI instructors.",
    "The project idea received positive verbal feedback during the presentation.",
  ],
  learnings: [
    "Defining backend integration boundaries when application workflows depend on GitHub and a separate AI service.",
    "Coordinating backend responsibilities and technical decisions within a six-person engineering team.",
    "Implementing backend modules as part of a broader frontend, data, async, and AI-service system.",
    "Collaborating with a teammate on Docker setup for a shared development environment.",
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
