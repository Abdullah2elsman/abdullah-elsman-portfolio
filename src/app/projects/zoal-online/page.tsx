import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ZoalCaseStudy } from "@/components/projects/ZoalCaseStudy";

export const metadata: Metadata = {
  title: "Zoal Online Case Study — Abdullah Elsman",
  description:
    "A production-recovery case study covering Laravel and PHP runtime compatibility, Composer dependency repair, direct server troubleshooting, and authorized admin-access restoration.",
  alternates: {
    canonical: "/projects/zoal-online",
  },
  openGraph: {
    title: "Zoal Online Case Study — Abdullah Elsman",
    description:
      "Practical production recovery across a Laravel application, PHP runtime, Composer dependencies, and server environment.",
  },
};

export default function ZoalCaseStudyPage() {
  return (
    <>
      <Header />
      <ZoalCaseStudy />
      <Footer />
    </>
  );
}
