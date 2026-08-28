export interface Project {
  slug: string;
  title: string;
  label: string;
  description: string;
  highlights: string[];
  tags: string[];
  tier: 1 | 2;
  github?: string;
  live?: string;
  imagePlaceholder: string;
}

export interface CaseStudy extends Project {
  team?: string;
  role: string;
  productConcept: string;
  contributions: string[];
  technicalStack: { category: string; items: string[] }[];
}

export interface CaseStudyDetail {
  title: string;
  description: string;
}

export interface DetailedCaseStudy extends CaseStudy {
  overview: string[];
  contributionDetails: CaseStudyDetail[];
  challenges: CaseStudyDetail[];
  outcome: string[];
  learnings: string[];
}

export interface GatewayCaseStudy extends CaseStudy {
  context: string[];
  nonContributions: string[];
  primaryFocus: string[];
  secondaryFocus: string;
  engineeringContext: CaseStudyDetail[];
  backendAndData: string[];
  databaseNormalization: string[];
  apiAndDashboard: string[];
  productionTroubleshooting: string[];
  deliveredFeatures: string;
  impact: string[];
  scaleContext: string;
  learnings: string[];
}

export interface SmartBookCaseStudy extends CaseStudy {
  university: string;
  overview: string[];
  primaryFocus: string[];
  frontendFocus: string;
  featureDetails: CaseStudyDetail[];
  pdfProcessing: string[];
  quizTypes: CaseStudyDetail[];
  aiBoundary: string;
  challenges: CaseStudyDetail[];
  outcome: string[];
  learnings: string[];
}

export interface ZoalCaseStudy extends CaseStudy {
  context: string[];
  boundaries: string[];
  problems: CaseStudyDetail[];
  diagnosticSteps: string[];
  recoveryAreas: CaseStudyDetail[];
  recoverySequence: string[];
  adminRecovery: string[];
  outcome: string[];
  demonstrates: string[];
  learnings: string[];
}

export interface ExperienceEntry {
  title: string;
  period: string;
  themes: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  status?: "Completed";
  graduationProject: string;
}

export interface Highlight {
  icon: "education" | "production" | "backend" | "accounts";
  text: string;
}
