import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons/Icons";
import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import { TechTag } from "@/components/ui/TechTag";
import { smartBookStudy } from "@/data/case-studies";
import { CaseStudySection } from "./CaseStudySection";
import { SmartBookLearningFlow } from "./SmartBookLearningFlow";

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

export function SmartBookCaseStudy() {
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
                    University Graduation Project
                  </p>
                  <h1 className="mt-[var(--spacing-stack-md)] font-display text-[clamp(2.5rem,7vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-background">
                    {smartBookStudy.title}
                  </h1>
                  <p className="mt-[var(--spacing-stack-md)] max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
                    An educational platform connecting courses, subjects, learning PDFs, and quiz
                    workflows, with AI-assisted functionality integrated through the Laravel
                    backend.
                  </p>

                  <div className="mt-[var(--spacing-stack-lg)] flex min-w-0 flex-wrap gap-2">
                    <Pill className="max-w-full">{smartBookStudy.role}</Pill>
                    <Pill>Team of {smartBookStudy.team}</Pill>
                    <Pill>{smartBookStudy.university}</Pill>
                  </div>

                  <div className="mt-[var(--spacing-stack-md)]">
                    <Link
                      href={smartBookStudy.github ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded border border-primary bg-primary px-4 py-2 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
                    >
                      <GitHubIcon className="size-4" />
                      GitHub Repository
                      <ExternalLinkIcon className="size-4" />
                    </Link>
                  </div>
                </div>

                <div className="min-w-0 overflow-hidden border border-outline-variant bg-surface-container-low lg:col-span-5">
                  <Image
                    src={smartBookStudy.imagePlaceholder}
                    alt="Smart Book learning interface showing a digital textbook with AI-assisted learning points and a generated quiz"
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
            <CaseStudySection id="overview" label="01 / Educational Product" title="Project Overview">
              <div className="space-y-[var(--spacing-stack-md)]">
                {smartBookStudy.overview.map((paragraph) => (
                  <p key={paragraph} className="font-body-lg text-body-lg text-on-surface-variant">
                    {paragraph}
                  </p>
                ))}
                <div className="grid min-w-0 grid-cols-2 gap-2 border-t border-outline pt-[var(--spacing-stack-md)] sm:grid-cols-4">
                  {["Courses", "Subjects", "PDFs", "Quizzes"].map((item) => (
                    <div
                      key={item}
                      className="min-w-0 border border-outline-variant bg-surface px-3 py-3 text-center font-mono-sm text-mono-sm text-on-surface-variant"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="role" label="02 / Team of 7" title="My Role">
              <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-gutter)] md:grid-cols-2">
                <section className="min-w-0 border border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                    Primary Focus
                  </p>
                  <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                    Laravel backend development
                  </h3>
                  <ul className="mt-[var(--spacing-stack-md)] space-y-2 font-body-md text-body-md text-on-surface-variant">
                    {smartBookStudy.primaryFocus.map((focus) => (
                      <Bullet key={focus}>{focus}</Bullet>
                    ))}
                  </ul>
                </section>

                <section className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-on-surface-variant">
                    Supporting Full-Stack Work
                  </p>
                  <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                    Significant frontend contributions
                  </h3>
                  <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                    {smartBookStudy.frontendFocus}
                  </p>
                  <p className="mt-[var(--spacing-stack-md)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
                    Multi-member project; no sole ownership of the complete platform is claimed.
                  </p>
                </section>
              </div>
            </CaseStudySection>

            <CaseStudySection id="features" label="03 / Contribution Areas" title="Core Features I Worked On">
              <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-2">
                {smartBookStudy.featureDetails.map((feature) => {
                  const emphasized = [
                    "PDF Learning Workflow",
                    "Quiz System",
                    "AI Service Integration",
                  ].includes(feature.title);

                  return (
                    <article
                      key={feature.title}
                      className={`min-w-0 border bg-surface p-[var(--spacing-stack-md)] ${
                        emphasized ? "border-primary" : "border-outline"
                      }`}
                    >
                      <h3 className="font-label-md text-label-md font-semibold text-on-background">
                        {feature.title}
                      </h3>
                      <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                        {feature.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </CaseStudySection>

            <section
              id="learning-flow"
              aria-labelledby="learning-flow-heading"
              className="min-w-0 scroll-mt-24"
            >
              <header className="mb-[var(--spacing-stack-lg)] max-w-3xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  04 / Workflow
                </p>
                <h2
                  id="learning-flow-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Learning & AI Flow
                </h2>
              </header>
              <SmartBookLearningFlow />
            </section>

            <section
              id="pdf-processing"
              aria-labelledby="pdf-processing-heading"
              className="min-w-0 scroll-mt-24 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]"
            >
              <div className="grid min-w-0 gap-[var(--spacing-stack-lg)] lg:grid-cols-12 lg:gap-[var(--spacing-gutter)]">
                <header className="min-w-0 lg:col-span-5">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                    05 / Learning Material
                  </p>
                  <h2
                    id="pdf-processing-heading"
                    className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                  >
                    PDF Processing
                  </h2>
                  <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                    PDFs were both student-facing learning material and a source for the
                    AI-assisted workflow. The repository confirms PDF page and text handling in
                    the Laravel application.
                  </p>
                  <p className="mt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
                    Text and image content are described only at the remembered integration-flow
                    level; no OCR or unverified processing architecture is claimed.
                  </p>
                </header>
                <div className="min-w-0 lg:col-span-7">
                  <NumberedList items={smartBookStudy.pdfProcessing} />
                </div>
              </div>
            </section>

            <section
              id="quiz-workflow"
              aria-labelledby="quiz-workflow-heading"
              className="min-w-0 scroll-mt-24"
            >
              <header className="max-w-3xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  06 / Assessment Paths
                </p>
                <h2
                  id="quiz-workflow-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Quiz Architecture
                </h2>
                <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                  Smart Book kept normal quiz functionality alongside an AI-assisted generation
                  path. AI complemented the product instead of replacing its core application
                  behavior.
                </p>
              </header>

              <div className="mt-[var(--spacing-stack-lg)] grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] lg:grid-cols-3">
                {smartBookStudy.quizTypes.map((quiz, index) => (
                  <article
                    key={quiz.title}
                    className={`min-w-0 border bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)] ${
                      index === 2 ? "border-primary" : "border-outline"
                    }`}
                  >
                    <p className="font-mono-sm text-mono-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                      {quiz.title}
                    </h3>
                    <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                      {quiz.description}
                    </p>
                  </article>
                ))}
              </div>

              <aside className="mt-[var(--spacing-stack-md)] border-l-2 border-primary bg-surface px-[var(--spacing-stack-md)] py-[var(--spacing-stack-md)]">
                <h3 className="font-label-md text-label-md font-semibold text-on-background">
                  AI integration boundary
                </h3>
                <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                  {smartBookStudy.aiBoundary}
                </p>
              </aside>
            </section>

            <CaseStudySection id="challenges" label="07 / Engineering" title="Challenges & Decisions">
              <div className="border-y border-outline">
                {smartBookStudy.challenges.map((challenge, index) => (
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

            <CaseStudySection id="stack" label="08 / Technology" title="Project Stack">
              <div>
                <p className="mb-[var(--spacing-stack-lg)] max-w-2xl font-body-md text-body-md text-on-surface-variant">
                  Laravel/PHP was the primary application backend. Vanilla JavaScript, HTML, and
                  CSS supported the significant frontend contribution. The AI component is shown
                  only as an external integration because its service source is not present in the
                  inspected repository.
                </p>
                <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] sm:grid-cols-2">
                  {smartBookStudy.technicalStack.map((group) => (
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

            <section
              id="outcome"
              aria-labelledby="outcome-heading"
              className="grid min-w-0 scroll-mt-24 gap-[var(--spacing-gutter)] lg:grid-cols-12"
            >
              <header className="min-w-0 lg:col-span-4">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  09 / Graduation Project
                </p>
                <h2
                  id="outcome-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Outcome
                </h2>
              </header>
              <div className="min-w-0 border border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)] lg:col-span-8">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  Sohag University · Team of 7
                </p>
                <ul className="mt-[var(--spacing-stack-md)] space-y-3 font-body-lg text-body-lg text-on-surface-variant">
                  {smartBookStudy.outcome.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
                <p className="mt-[var(--spacing-stack-md)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
                  No award, adoption, user-count, or production-scale outcome is claimed.
                </p>
              </div>
            </section>

            <CaseStudySection id="learnings" label="10 / Reflection" title="What I Learned">
              <ol className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-2">
                {smartBookStudy.learnings.map((learning, index) => (
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
                href="/projects/gateway"
                className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                <ArrowRightIcon className="size-4 rotate-180" />
                Previous Project: Gateway
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
