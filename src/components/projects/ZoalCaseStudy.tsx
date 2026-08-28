import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons/Icons";
import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import { TechTag } from "@/components/ui/TechTag";
import { zoalStudy } from "@/data/case-studies";
import { CaseStudySection } from "./CaseStudySection";
import { ZoalRecoveryFlow } from "./ZoalRecoveryFlow";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex min-w-0 gap-3">
      <span aria-hidden="true" className="mt-[0.65em] size-1 shrink-0 bg-primary" />
      <span className="min-w-0">{children}</span>
    </li>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="border-y border-outline">
      {items.map((item, index) => (
        <li
          key={item}
          className={`grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-[var(--spacing-stack-md)] py-[var(--spacing-stack-md)] ${
            index === 0 ? "" : "border-t border-outline-variant"
          }`}
        >
          <span className="font-mono-sm text-mono-sm text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0 font-body-md text-body-md text-on-surface-variant">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function ZoalCaseStudy() {
  return (
    <main className="flex-grow pt-16">
      <Container>
        <article className="pb-[clamp(5rem,9vw,8rem)]">
          <header className="pt-[clamp(4rem,8vw,8rem)]">
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            >
              <ArrowRightIcon className="size-4 rotate-180" />
              Back to Work
            </Link>

            <div className="mt-[var(--spacing-stack-lg)] border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
              <div className="grid min-w-0 gap-[var(--spacing-stack-lg)] lg:grid-cols-12 lg:items-center lg:gap-[var(--spacing-gutter)]">
                <div className="min-w-0 lg:col-span-7">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.12em] text-primary">
                    Client / Production
                  </p>
                  <h1 className="mt-[var(--spacing-stack-md)] font-display text-[clamp(2.5rem,7vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-background">
                    {zoalStudy.title}
                  </h1>
                  <p className="mt-[var(--spacing-stack-md)] max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
                    Production recovery for an existing Laravel application with PHP runtime,
                    Composer dependency, server compatibility, and authorized administrative
                    access problems.
                  </p>

                  <div className="mt-[var(--spacing-stack-lg)] flex min-w-0 flex-wrap gap-2">
                    <Pill>Laravel / PHP</Pill>
                    <Pill>Production Troubleshooting</Pill>
                  </div>

                  <div className="mt-[var(--spacing-stack-md)]">
                    <Link
                      href={zoalStudy.live ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded border border-primary bg-primary px-4 py-2 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
                    >
                      Live Project
                      <ExternalLinkIcon className="size-4" />
                    </Link>
                  </div>
                </div>

                <div className="min-w-0 overflow-hidden border border-outline-variant bg-surface-container-low lg:col-span-5">
                  <Image
                    src={zoalStudy.imagePlaceholder}
                    alt="Zoal Online production-recovery visual showing the existing application and a server-terminal context"
                    width={512}
                    height={382}
                    priority
                    sizes="(min-width: 1024px) 360px, calc(100vw - 72px)"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="mt-[clamp(5rem,9vw,8rem)] flex min-w-0 flex-col gap-[clamp(5rem,9vw,8rem)]">
            <CaseStudySection id="context" label="01 / Existing Application" title="Project Context">
              <div className="space-y-[var(--spacing-stack-md)]">
                {zoalStudy.context.map((paragraph) => (
                  <p key={paragraph} className="font-body-lg text-body-lg text-on-surface-variant">
                    {paragraph}
                  </p>
                ))}

                <aside className="border-l-2 border-primary bg-surface px-[var(--spacing-stack-md)] py-[var(--spacing-stack-md)]">
                  <h3 className="font-label-md text-label-md font-semibold text-on-background">
                    Recovery scope — not application ownership
                  </h3>
                  <ul className="mt-3 space-y-2 font-body-md text-body-md text-on-surface-variant">
                    {zoalStudy.boundaries.map((boundary) => (
                      <Bullet key={boundary}>{boundary}</Bullet>
                    ))}
                  </ul>
                </aside>
              </div>
            </CaseStudySection>

            <section
              id="problem"
              aria-labelledby="problem-heading"
              className="min-w-0 scroll-mt-24"
            >
              <header className="max-w-3xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  02 / Production State
                </p>
                <h2
                  id="problem-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  The Problem
                </h2>
                <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                  The failure involved more than one operational layer. Runtime compatibility,
                  dependency integrity, and administrative access each needed a separate check.
                </p>
              </header>

              <div className="mt-[var(--spacing-stack-lg)] grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] lg:grid-cols-3">
                {zoalStudy.problems.map((problem, index) => (
                  <article
                    key={problem.title}
                    className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]"
                  >
                    <p className="font-mono-sm text-mono-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                      {problem.title}
                    </h3>
                    <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                      {problem.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="diagnosis"
              aria-labelledby="diagnosis-heading"
              className="min-w-0 scroll-mt-24"
            >
              <header className="mb-[var(--spacing-stack-lg)] max-w-3xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  03 / Cross-Layer Check
                </p>
                <h2
                  id="diagnosis-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Diagnosis
                </h2>
                <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                  A practical diagnostic principle for this kind of issue is to locate the failure
                  boundary before considering changes to application business logic.
                </p>
              </header>
              <ZoalRecoveryFlow />
            </section>

            <section
              id="recovery"
              aria-labelledby="recovery-heading"
              className="min-w-0 scroll-mt-24 border border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]"
            >
              <header className="max-w-3xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  04 / Operational Repair
                </p>
                <h2
                  id="recovery-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Recovery Work
                </h2>
                <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                  A complete recovery approach considers the compatible application environment
                  rather than treating removal of one directory as the entire fix.
                </p>
              </header>

              <div className="mt-[var(--spacing-stack-lg)] grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] lg:grid-cols-3">
                {zoalStudy.recoveryAreas.map((area, index) => (
                  <article
                    key={area.title}
                    className={`min-w-0 border bg-surface-container-high p-[var(--spacing-stack-md)] ${
                      index === 1 ? "border-primary" : "border-outline"
                    }`}
                  >
                    <h3 className="font-headline-md text-headline-md text-on-background">
                      {area.title}
                    </h3>
                    <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-[var(--spacing-stack-lg)]">
                <p className="mb-3 font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-on-surface-variant">
                  Verified recovery sequence
                </p>
                <NumberedList items={zoalStudy.recoverySequence} />
              </div>
            </section>

            <CaseStudySection id="admin-access" label="05 / Authorized Recovery" title="Admin Access Recovery">
              <div className="border-l-2 border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                <div className="space-y-[var(--spacing-stack-md)]">
                  {zoalStudy.adminRecovery.map((paragraph) => (
                    <p key={paragraph} className="font-body-md text-body-md text-on-surface-variant">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="mindset" label="06 / Diagnostic Framework" title="Troubleshooting Mindset">
              <div>
                <p className="mb-[var(--spacing-stack-lg)] font-body-lg text-body-lg text-on-surface-variant">
                  A practical troubleshooting approach for this kind of production issue is to
                  inspect the application requirements, runtime environment, dependency state,
                  application behavior, and administrative access. This is a general diagnostic
                  framework, not a verified chronological record of the work.
                </p>
                <NumberedList items={zoalStudy.diagnosticSteps} />
              </div>
            </CaseStudySection>

            <section
              id="outcome"
              aria-labelledby="outcome-heading"
              className="grid min-w-0 scroll-mt-24 gap-[var(--spacing-gutter)] lg:grid-cols-12"
            >
              <aside className="flex min-w-0 flex-col justify-center border border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)] lg:col-span-4">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  07 / Result
                </p>
                <h2
                  id="outcome-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Working State Restored
                </h2>
                <p className="mt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
                  Qualitative recovery outcome only. No uptime, revenue, user, or SLA metric is
                  claimed.
                </p>
              </aside>

              <div className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)] lg:col-span-8">
                <h3 className="font-headline-md text-headline-md text-on-background">Outcome</h3>
                <ul className="mt-[var(--spacing-stack-md)] space-y-3 font-body-md text-body-md text-on-surface-variant">
                  {zoalStudy.outcome.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
                <p className="mt-[var(--spacing-stack-md)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
                  Client satisfaction was confirmed directly; no public or written testimonial is
                  presented.
                </p>
              </div>
            </section>

            <CaseStudySection id="demonstrates" label="08 / Practical Evidence" title="What This Project Demonstrates">
              <ul className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                {zoalStudy.demonstrates.map((item) => (
                  <li
                    key={item}
                    className="min-w-0 border-t border-outline pt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection id="stack" label="09 / Technology" title="Project Stack">
              <div>
                <p className="mb-[var(--spacing-stack-lg)] max-w-2xl font-body-md text-body-md text-on-surface-variant">
                  The stack lists only technology directly supported by the verified recovery
                  context. No database engine, deployment platform, or generic Laravel tooling is
                  inferred.
                </p>
                <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] sm:grid-cols-2 lg:grid-cols-3">
                  {zoalStudy.technicalStack.map((group) => (
                    <section
                      key={group.category}
                      className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)]"
                    >
                      <h3 className="font-label-md text-label-md font-semibold text-on-background">
                        {group.category}
                      </h3>
                      <div className="mt-3 flex min-w-0 flex-wrap gap-2">
                        {group.items.map((technology) => (
                          <TechTag
                            key={technology}
                            className={technology === "Laravel" ? "border-primary text-primary" : ""}
                          >
                            {technology}
                          </TechTag>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="learnings" label="10 / Reflection" title="What I Learned">
              <ol className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-2">
                {zoalStudy.learnings.map((learning, index) => (
                  <li
                    key={learning}
                    className="min-w-0 border-t border-outline pt-[var(--spacing-stack-md)]"
                  >
                    <p className="font-mono-sm text-mono-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                      {learning}
                    </p>
                  </li>
                ))}
              </ol>
            </CaseStudySection>

            <nav
              aria-label="Case study navigation"
              className="flex min-w-0 flex-col gap-[var(--spacing-stack-md)] border-y border-outline py-[var(--spacing-stack-lg)] sm:flex-row sm:items-center sm:justify-between"
            >
              <Link
                href="/projects/smart-book"
                className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                <ArrowRightIcon className="size-4 rotate-180" />
                Previous Project: Smart Book
              </Link>
              <Link
                href="/#work"
                className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-primary transition-opacity hover:opacity-80"
              >
                Back to Projects
                <ArrowRightIcon className="size-4" />
              </Link>
            </nav>
          </div>
        </article>
      </Container>
    </main>
  );
}
