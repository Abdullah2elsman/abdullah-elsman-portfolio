import type { DetailedCaseStudy, GatewayCaseStudy } from "./types";

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

export const gatewayStudy: GatewayCaseStudy = {
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
  role: "Software Developer / Backend-focused Full Stack",
  productConcept:
    "A production English-learning platform containing approximately 12,000 registered accounts. Abdullah worked independently on backend performance, database normalization, API improvements, deployment, and server troubleshooting.",
  contributions: [
    "Improved backend data retrieval and response shapes",
    "Added pagination where result sets needed more manageable handling",
    "Fixed application bugs and addressed errors",
    "Built two pages/features across backend and frontend",
    "Normalized poorly structured parts of the database",
    "Improved dashboard and admin data flow",
    "Addressed server-load, query, and API issues",
    "Handled production server and deployment troubleshooting directly",
  ],
  technicalStack: [
    { category: "Backend", items: ["PHP", "Laravel"] },
    { category: "Database", items: ["MySQL"] },
    { category: "Frontend", items: ["React"] },
    { category: "Environment", items: ["Linux / Server"] },
  ],
  context: [
    "Gateway is an existing production English-learning platform. Abdullah's work focused on improving, maintaining, and extending selected parts of the application rather than building the full product from scratch.",
    "The engagement required understanding the existing Laravel application, MySQL structure, API and dashboard flows, React frontend, and production server environment before making changes.",
  ],
  nonContributions: [
    "Payments",
    "Subscriptions",
    "Roles / permissions",
    "Notifications",
  ],
  primaryFocus: [
    "Laravel backend and application maintenance",
    "MySQL database structure and normalization",
    "APIs and backend-to-frontend data flow",
    "Production debugging and application fixes",
    "Server and deployment troubleshooting",
  ],
  secondaryFocus:
    "React frontend work was completed where required to deliver functionality, including two pages/features. The backend remained the primary engineering focus.",
  engineeringContext: [
    {
      title: "Database Structure",
      description:
        "Some existing database areas were poorly structured and needed normalization work.",
    },
    {
      title: "Data Retrieval",
      description:
        "Parts of the backend data retrieval needed improvement, including pagination where result sets were difficult to manage.",
    },
    {
      title: "API & Dashboard Flow",
      description:
        "Backend response shapes and admin/dashboard data flow needed coordinated backend and frontend work.",
    },
    {
      title: "Production Environment",
      description:
        "Application behavior, server load, queries, and API issues required investigation in the production environment.",
    },
  ],
  backendAndData: [
    "Improved backend data retrieval behavior in the areas worked on.",
    "Introduced pagination where result sets needed more manageable handling.",
    "Improved backend responses consumed by the frontend and reduced unnecessary data handling where applicable.",
    "Fixed application bugs and addressed errors in relevant parts of the system.",
  ],
  databaseNormalization: [
    "Normalized poorly structured parts of the existing MySQL database.",
    "Worked toward clearer data relationships and reduced unnecessary duplication where relevant.",
    "Made the affected database areas easier to understand and maintain from the application layer.",
  ],
  apiAndDashboard: [
    "Reshaped backend API responses and improved the data returned to the frontend.",
    "Improved admin and dashboard data flows across backend and frontend boundaries.",
    "Used React where required to complete the frontend side of delivered functionality, while keeping the work backend-focused.",
  ],
  productionTroubleshooting: [
    "Worked directly with the production environment and handled server troubleshooting personally.",
    "Investigated issues involving application behavior, server load, queries, and API behavior across system layers.",
    "Handled deployment-related troubleshooting directly without claiming ownership of a broader CI/CD or infrastructure architecture.",
  ],
  deliveredFeatures:
    "Implemented two application pages/features end-to-end, covering the required backend logic and data flow together with frontend integration. Their names and business purpose are intentionally not stated because those details are not verified in the current source of truth.",
  impact: [
    "Cleaner structure in the database areas that were normalized",
    "More manageable data retrieval through pagination",
    "Clearer API and frontend data flow in the areas worked on",
    "Resolved application and server issues",
    "Improved maintainability across the affected backend, database, and dashboard areas",
  ],
  scaleContext:
    "The production platform contained approximately 12,000 registered accounts. This is not an active-user, concurrency, traffic, or load-testing metric.",
  learnings: [
    "Understanding an unfamiliar production codebase before changing it.",
    "Tracing problems across application, API, database, and server boundaries.",
    "Improving an existing database structure rather than designing one from scratch.",
    "Balancing backend and frontend changes when delivering complete functionality.",
    "Handling real production, server, and deployment troubleshooting directly.",
  ],
};
