import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GatewayCaseStudy } from "@/components/projects/GatewayCaseStudy";

export const metadata: Metadata = {
  title: "Gateway Case Study — Abdullah Elsman",
  description:
    "A production engineering case study covering Laravel backend work, MySQL normalization, API and dashboard data flow, and direct server troubleshooting on Gateway.",
  alternates: {
    canonical: "/projects/gateway",
  },
  openGraph: {
    type: "article",
    title: "Gateway Case Study — Abdullah Elsman",
    description:
      "Independent production engineering work across Laravel, MySQL, APIs, application fixes, and server troubleshooting.",
  },
  twitter: {
    card: "summary",
    title: "Gateway Case Study — Abdullah Elsman",
    description:
      "Production engineering work across Laravel, MySQL, APIs, application fixes, and server troubleshooting.",
  },
};

export default function GatewayCaseStudyPage() {
  return (
    <>
      <Header />
      <GatewayCaseStudy />
      <Footer />
    </>
  );
}
