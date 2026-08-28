import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons/Icons";
import { Pill } from "@/components/ui/Pill";
import { TechTag } from "@/components/ui/TechTag";
import { shareKStudy } from "@/data/case-studies";
import { CaseStudySection } from "./CaseStudySection";
import { ShareKArchitecture } from "./ShareKArchitecture";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex min-w-0 gap-3">
      <span aria-hidden="true" className="mt-[0.65em] size-1 shrink-0 bg-primary" />
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export function ShareKCaseStudy() {
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

            <div className="mt-[var(--spacing-stack-lg)] max-w-4xl">
              <p className="font-mono-sm text-mono-sm uppercase tracking-[0.12em] text-primary">
                ITI Graduation Project
              </p>
              <h1 className="mt-[var(--spacing-stack-md)] font-display text-[clamp(2.5rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-background">
                {shareKStudy.title}
              </h1>
              <p className="mt-[var(--spacing-stack-md)] max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
                Share-k is a developer collaboration platform connecting GitHub project owners
                with contributors. GitHub-derived information and AI-assisted analysis support
                skill evaluation and contributor matching within the broader project workflow.
              </p>
            </div>

            <div className="mt-[var(--spacing-stack-lg)] flex flex-wrap items-center gap-2">
              <Pill>Backend Developer</Pill>
              <Pill>Team of 6</Pill>
              <Link
                href={shareKStudy.github ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0 inline-flex min-h-11 items-center gap-2 rounded border border-primary px-4 py-2 font-label-md text-label-md text-primary transition-colors hover:bg-surface sm:ml-2"
              >
                <GitHubIcon className="size-4" />
                GitHub Organization
                <ExternalLinkIcon className="size-4" />
              </Link>
            </div>

            <div className="mt-[var(--spacing-stack-lg)] overflow-hidden border border-outline bg-surface">
              <Image
                src={shareKStudy.imagePlaceholder}
                alt="Share-k interface showing GitHub project context, a developer profile, AI skill evaluation, and contribution activity"
                width={512}
                height={286}
                priority
                sizes="(min-width: 1120px) 992px, calc(100vw - 40px)"
                className="h-auto w-full object-contain"
              />
            </div>
          </header>

          <div className="mt-[clamp(5rem,9vw,8rem)] flex min-w-0 flex-col gap-[clamp(5rem,9vw,8rem)]">
            <CaseStudySection id="overview" label="01 / Context" title="Project Overview">
              <div className="space-y-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                {shareKStudy.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="role" label="02 / Scope" title="Role & Responsibilities">
              <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-gutter)] md:grid-cols-2">
                <section className="min-w-0 border border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                    My Role
                  </p>
                  <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                    Backend Developer
                  </h3>
                  <p className="mt-1 font-label-md text-label-md text-on-surface-variant">
                    Six-person team
                  </p>
                  <ul className="mt-[var(--spacing-stack-md)] space-y-2 font-body-md text-body-md text-on-surface-variant">
                    {shareKStudy.contributions.map((contribution) => (
                      <Bullet key={contribution}>{contribution}</Bullet>
                    ))}
                  </ul>
                </section>

                <section className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-on-surface-variant">
                    Project Context
                  </p>
                  <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                    A Shared Team System
                  </h3>
                  <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                    The wider project included frontend, backend, database, async infrastructure,
                    GitHub integration, and a separate AI service. These project capabilities
                    describe the team&apos;s system and do not imply personal ownership of every
                    component.
                  </p>
                  <p className="mt-[var(--spacing-stack-md)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                    Queue infrastructure and the AI service belong to project-level context. They
                    are not claimed as Abdullah&apos;s implementations.
                  </p>
                </section>
              </div>
            </CaseStudySection>

            <CaseStudySection id="contributions" label="03 / Ownership" title="My Contributions">
              <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-2">
                {shareKStudy.contributionDetails.map((contribution, index) => (
                  <article
                    key={contribution.title}
                    className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]"
                  >
                    <p className="font-mono-sm text-mono-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                      {contribution.title}
                    </h3>
                    <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                      {contribution.description}
                    </p>
                  </article>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="architecture" label="04 / System" title="System Architecture">
              <ShareKArchitecture />
            </CaseStudySection>

            <CaseStudySection
              id="challenges"
              label="05 / Engineering"
              title="Challenges & Decisions"
            >
              <div className="border-y border-outline">
                {shareKStudy.challenges.map((challenge, index) => (
                  <article
                    key={challenge.title}
                    className={`grid min-w-0 gap-3 py-[var(--spacing-stack-md)] sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-[var(--spacing-stack-md)] ${
                      index === 0 ? "" : "border-t border-outline-variant"
                    }`}
                  >
                    <p className="font-mono-sm text-mono-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="min-w-0">
                      <h3 className="font-label-md text-label-md font-semibold text-on-background">
                        {challenge.title}
                      </h3>
                      <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                        {challenge.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="stack" label="06 / Technology" title="Project Stack">
              <div>
                <p className="mb-[var(--spacing-stack-lg)] max-w-2xl font-body-md text-body-md text-on-surface-variant">
                  These technologies describe the overall Share-k project. They are intentionally
                  separate from the personal contribution list above.
                </p>
                <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] sm:grid-cols-2 xl:grid-cols-3">
                  {shareKStudy.technicalStack.map((group) => (
                    <section
                      key={group.category}
                      className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)]"
                    >
                      <h3 className="font-label-md text-label-md font-semibold text-on-background">
                        {group.category}
                      </h3>
                      <div className="mt-3 flex min-w-0 flex-wrap gap-2">
                        {group.items.map((technology) => (
                          <TechTag key={technology}>{technology}</TechTag>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="outcome" label="07 / Presentation" title="Outcome">
              <div className="border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                <ul className="space-y-3 font-body-lg text-body-lg text-on-surface-variant">
                  {shareKStudy.outcome.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
                <p className="mt-[var(--spacing-stack-md)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
                  Verbal presentation feedback only; no award or written testimonial is claimed.
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="learnings" label="08 / Reflection" title="What I Learned">
              <ol className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-2">
                {shareKStudy.learnings.map((learning, index) => (
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
                href="/#work"
                className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                <ArrowRightIcon className="size-4 rotate-180" />
                Back to Projects
              </Link>
              <Link
                href="/projects/gateway"
                className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-primary transition-opacity hover:opacity-80"
              >
                Next Project: Gateway
                <ArrowRightIcon className="size-4" />
              </Link>
            </nav>
          </div>
        </article>
      </Container>
    </main>
  );
}
