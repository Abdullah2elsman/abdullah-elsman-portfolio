import type {
  DetailedCaseStudy,
  GatewayCaseStudy,
  SmartBookCaseStudy,
} from "./types";

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

export const smartBookStudy: SmartBookCaseStudy = {
  slug: "smart-book",
  title: "Smart Book",
  label: "University Graduation Project",
  description:
    "Educational platform for course and PDF-based learning with manual, subject, and AI-assisted quiz workflows.",
  highlights: [
    "Authentication",
    "Courses and subjects",
    "PDF learning workflow",
    "Manual and AI-generated quizzes",
    "Backend integration with the AI service",
    "Significant frontend functionality",
  ],
  tags: ["Laravel", "JavaScript", "MySQL", "AI Integration", "PDF Processing"],
  tier: 2,
  github: "https://github.com/Abdullah2elsman/Graduation-Project",
  imagePlaceholder: "/images/portfolio/smart-book-cover.jpg",
  team: "7",
  role: "Backend Developer with significant frontend contributions",
  university: "Sohag University",
  productConcept:
    "A university graduation project where students access courses, subjects, learning PDFs, and quizzes. AI-assisted functionality extends the learning workflow through a separate service connected to the Laravel backend.",
  contributions: [
    "Authentication",
    "Courses",
    "Subjects",
    "Users",
    "PDFs",
    "Subject quizzes",
    "Manual quizzes",
    "AI-generated quizzes",
    "Backend integration with the AI service",
    "Significant frontend functionality",
  ],
  technicalStack: [
    { category: "Backend", items: ["PHP", "Laravel"] },
    { category: "Database", items: ["MySQL"] },
    { category: "Frontend", items: ["Vanilla JavaScript", "HTML", "CSS"] },
    { category: "AI Integration", items: ["Backend-to-AI service integration"] },
  ],
  overview: [
    "Smart Book is an educational platform built for students to move through courses and subjects, access PDF learning materials, and work with quizzes inside one application workflow.",
    "Alongside normal course and quiz functionality, an external AI service augments selected learning flows. The Laravel application prepares PDF-derived content for that integration and receives generated learning output, including AI-assisted quizzes.",
  ],
  primaryFocus: [
    "Laravel backend functionality",
    "Authentication and user-related application flows",
    "Course, subject, and PDF functionality",
    "Manual, subject, and AI-generated quiz workflows",
    "Backend-side integration with the external AI service",
  ],
  frontendFocus:
    "Abdullah also implemented significant frontend functionality with Vanilla JavaScript, HTML, and CSS where complete features required work across the application boundary. This was supporting full-stack delivery, not sole frontend ownership or a frontend-specialist role.",
  featureDetails: [
    {
      title: "Authentication",
      description:
        "Worked on the application's authentication functionality without claiming unverified protocol or authorization details.",
    },
    {
      title: "Course & Subject Management",
      description:
        "Implemented functionality around the course and subject structure that organizes the platform's educational material.",
    },
    {
      title: "User Management",
      description:
        "Worked on user-related functionality required by the educational application and its learning workflows.",
    },
    {
      title: "PDF Learning Workflow",
      description:
        "Handled PDF functionality as a core part of the learning experience and as an input to the AI-assisted workflow.",
    },
    {
      title: "Quiz System",
      description:
        "Worked on subject quizzes, manual quiz creation, and AI-generated quizzes as distinct but connected application paths.",
    },
    {
      title: "AI Service Integration",
      description:
        "Implemented the Laravel/backend-side integration with the external AI service. Abdullah did not implement or train the AI model or service itself.",
    },
    {
      title: "Frontend Functionality",
      description:
        "Delivered significant Vanilla JavaScript, HTML, and CSS functionality needed to connect student and instructor-facing flows to the backend.",
    },
  ],
  pdfProcessing: [
    "Stored and served learning PDFs as part of course and subject workflows.",
    "Handled PDF pages and extracted PDF-derived text within the Laravel application.",
    "Prepared PDF-derived text and image content for the remembered AI-assisted integration workflow.",
    "Kept normal PDF access and application behavior separate from the external AI-processing boundary.",
  ],
  quizTypes: [
    {
      title: "Manual Quizzes",
      description:
        "Normal application quiz functionality allowed quizzes to be created without depending on AI processing.",
    },
    {
      title: "Subject Quizzes",
      description:
        "Quiz functionality connected assessment activity to the relevant subject and learning context.",
    },
    {
      title: "AI-Generated Quizzes",
      description:
        "The AI-assisted path used learning material sent through the backend integration to support generated quiz content.",
    },
  ],
  aiBoundary:
    "Abdullah's responsibility was the Laravel/backend integration boundary: preparing application data for the external AI service and connecting returned output to Smart Book workflows. The AI service and model were separate and are not presented as his implementation.",
  challenges: [
    {
      title: "Connecting Application Logic to an AI Service",
      description:
        "The Laravel application needed a clear boundary between normal product responsibilities and external AI processing.",
    },
    {
      title: "Handling Educational Material",
      description:
        "PDF-based learning content had to move through storage, access, page/content handling, and AI-assisted application flows.",
    },
    {
      title: "Supporting Manual and AI-Assisted Quizzes",
      description:
        "Normal subject and manually created quizzes needed to coexist with the AI-generated quiz path rather than being replaced by it.",
    },
    {
      title: "Coordinating Backend and Frontend Work",
      description:
        "Complete learning features required Laravel implementation together with significant Vanilla JavaScript frontend work in a seven-person project.",
    },
  ],
  outcome: [
    "Delivered as a Sohag University graduation project by a team of seven.",
    "Combined a traditional educational application workflow with restrained AI-assisted learning functionality.",
    "Demonstrated course, subject, PDF, user, and quiz functionality across backend and frontend layers.",
  ],
  learnings: [
    "Integrating a Laravel application with an external AI service while keeping ownership boundaries clear.",
    "Designing application flows around PDF-based learning content.",
    "Supporting manual, subject, and AI-generated quiz functionality within one product.",
    "Coordinating backend implementation with significant Vanilla JavaScript frontend work.",
    "Working within a seven-person university graduation-project team.",
    "Handling broader product responsibilities beyond a single backend endpoint.",
  ],
};
