import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend — Primary",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Infrastructure & Tools",
    items: [
      "Docker",
      "Linux / Ubuntu Server",
      "Server Management",
      "Deployment",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Frontend — Secondary",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI Integrations",
    items: ["Backend-to-AI service integration", "AI APIs", "RAG exposure"],
  },
];
