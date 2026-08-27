import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ShareKCaseStudy() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16 flex flex-col gap-[var(--spacing-section-gap)]">
        <section className="py-[var(--spacing-section-gap)] text-center px-[var(--spacing-margin-mobile)]">
          <h1 className="font-display text-display text-on-background">
            Share-k Case Study — Phase 4
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
