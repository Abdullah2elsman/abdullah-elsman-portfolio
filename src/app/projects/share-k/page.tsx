import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShareKCaseStudy } from "@/components/projects/ShareKCaseStudy";

export const metadata: Metadata = {
  title: "Share-k Case Study — Abdullah Elsman",
  description:
    "An engineering case study of Share-k, an ITI graduation project connecting GitHub project owners with contributors through backend integrations and AI-assisted skill evaluation.",
  alternates: {
    canonical: "/projects/share-k",
  },
  openGraph: {
    type: "article",
    title: "Share-k Case Study — Abdullah Elsman",
    description:
      "Backend engineering contributions and project-level architecture for the Share-k developer collaboration platform.",
  },
  twitter: {
    card: "summary",
    title: "Share-k Case Study — Abdullah Elsman",
    description:
      "Backend engineering contributions to the Share-k developer collaboration platform.",
  },
};

export default function ShareKCaseStudyPage() {
  return (
    <>
      <Header />
      <ShareKCaseStudy />
      <Footer />
    </>
  );
}
