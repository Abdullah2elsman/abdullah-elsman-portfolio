import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16 flex flex-col gap-[var(--spacing-section-gap)]">
        <section className="py-[var(--spacing-section-gap)] text-center px-[var(--spacing-margin-mobile)]">
          <h1 className="font-display text-display text-on-background">
            Homepage — Phase 2
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
