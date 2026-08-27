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
  note?: string;
}

export interface Highlight {
  icon: string;
  text: string;
}
