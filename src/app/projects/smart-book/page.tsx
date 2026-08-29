import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmartBookCaseStudy } from "@/components/projects/SmartBookCaseStudy";

export const metadata: Metadata = {
  title: "Smart Book Case Study — Abdullah Elsman",
  description:
    "A university graduation-project case study covering Laravel backend work, PDF-based learning workflows, quiz functionality, significant Vanilla JavaScript frontend work, and integration with an external AI service.",
  alternates: {
    canonical: "/projects/smart-book",
  },
  openGraph: {
    type: "article",
    title: "Smart Book Case Study — Abdullah Elsman",
    description:
      "Backend and frontend engineering for a PDF-based educational platform with manual and AI-assisted quiz workflows.",
  },
  twitter: {
    card: "summary",
    title: "Smart Book Case Study — Abdullah Elsman",
    description:
      "Laravel and frontend engineering for a PDF-based educational platform with manual and AI-assisted quiz workflows.",
  },
};

export default function SmartBookCaseStudyPage() {
  return (
    <>
      <Header />
      <SmartBookCaseStudy />
      <Footer />
    </>
  );
}
