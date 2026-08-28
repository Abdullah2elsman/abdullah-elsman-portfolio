import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons/Icons";
import { Pill } from "@/components/ui/Pill";
import { TechTag } from "@/components/ui/TechTag";
import { gatewayStudy } from "@/data/case-studies";
import { CaseStudySection } from "./CaseStudySection";
import { GatewayDiagnosticFlow } from "./GatewayDiagnosticFlow";

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

export function GatewayCaseStudy() {
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
              <div className="max-w-4xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.12em] text-primary">
                  Freelance / Production
                </p>
                <h1 className="mt-[var(--spacing-stack-md)] font-display text-[clamp(2.5rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-background">
                  {gatewayStudy.title}
                </h1>
                <p className="mt-[var(--spacing-stack-md)] max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
                  Production engineering work on an existing English-learning platform, focused
                  on Laravel backend improvements, MySQL structure, API and dashboard data flow,
                  application fixes, and direct server and deployment troubleshooting.
                </p>
              </div>

              <div className="mt-[var(--spacing-stack-lg)] flex flex-wrap items-center gap-2">
                <Pill className="max-w-full">{gatewayStudy.role}</Pill>
                <Pill>Worked Independently</Pill>
                <Pill>~12K Registered Accounts</Pill>
              </div>

              <div className="mt-[var(--spacing-stack-md)] flex flex-wrap gap-2">
                <Link
                  href={gatewayStudy.live ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded border border-primary bg-primary px-4 py-2 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
                >
                  Live Project
                  <ExternalLinkIcon className="size-4" />
                </Link>
                <Link
                  href={gatewayStudy.github ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded border border-outline px-4 py-2 font-label-md text-label-md text-on-background transition-colors hover:border-primary hover:text-primary"
                >
                  <GitHubIcon className="size-4" />
                  GitHub Repository
                  <ExternalLinkIcon className="size-4" />
                </Link>
              </div>

              <div className="mt-[var(--spacing-stack-lg)] overflow-hidden border border-outline-variant bg-surface-container-low">
                <Image
                  src={gatewayStudy.imagePlaceholder}
                  alt="Gateway English-learning dashboard shown on a laptop with supporting application and server panels"
                  width={512}
                  height={286}
                  priority
                  sizes="(min-width: 1120px) 928px, calc(100vw - 72px)"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </header>

          <div className="mt-[clamp(5rem,9vw,8rem)] flex min-w-0 flex-col gap-[clamp(5rem,9vw,8rem)]">
            <CaseStudySection id="context" label="01 / Existing System" title="Project Context">
              <div className="space-y-[var(--spacing-stack-md)]">
                {gatewayStudy.context.map((paragraph) => (
                  <p key={paragraph} className="font-body-lg text-body-lg text-on-surface-variant">
                    {paragraph}
                  </p>
                ))}
                <aside className="border-l-2 border-primary bg-surface px-[var(--spacing-stack-md)] py-[var(--spacing-stack-md)]">
                  <h3 className="font-label-md text-label-md font-semibold text-on-background">
                    Existing functionality — not my implementation
                  </h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                    Payments, subscriptions, roles and permissions, and notifications were already
                    working. Abdullah understood these areas but did not implement or repair them.
                  </p>
                </aside>
              </div>
            </CaseStudySection>

            <CaseStudySection id="role" label="02 / Independent Work" title="My Role">
              <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-gutter)] md:grid-cols-2">
                <section className="min-w-0 border border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                    Primary Focus
                  </p>
                  <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                    Backend-focused production engineering
                  </h3>
                  <ul className="mt-[var(--spacing-stack-md)] space-y-2 font-body-md text-body-md text-on-surface-variant">
                    {gatewayStudy.primaryFocus.map((focus) => (
                      <Bullet key={focus}>{focus}</Bullet>
                    ))}
                  </ul>
                </section>
                <section className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-on-surface-variant">
                    Work Model
                  </p>
                  <h3 className="mt-2 font-headline-md text-headline-md text-on-background">
                    Worked Independently
                  </h3>
                  <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                    {gatewayStudy.secondaryFocus}
                  </p>
                </section>
              </div>
            </CaseStudySection>

            <CaseStudySection
              id="engineering-context"
              label="03 / Starting Point"
              title="What I Found"
            >
              <div className="grid min-w-0 grid-cols-1 border-y border-outline md:grid-cols-2">
                {gatewayStudy.engineeringContext.map((item, index) => (
                  <article
                    key={item.title}
                    className={`min-w-0 py-[var(--spacing-stack-md)] md:px-[var(--spacing-stack-md)] ${
                      index > 0 ? "border-t border-outline-variant md:border-t-0" : ""
                    } ${index % 2 === 1 ? "md:border-l md:border-outline-variant" : ""} ${
                      index >= 2 ? "md:border-t md:border-outline-variant" : ""
                    }`}
                  >
                    <p className="font-mono-sm text-mono-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-label-md text-label-md font-semibold text-on-background">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection
              id="backend-data"
              label="04 / Laravel"
              title="Backend & Data Retrieval"
            >
              <NumberedList items={gatewayStudy.backendAndData} />
            </CaseStudySection>

            <section
              id="database-normalization"
              aria-labelledby="database-normalization-heading"
              className="min-w-0 scroll-mt-24 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]"
            >
              <div className="grid min-w-0 gap-[var(--spacing-stack-lg)] lg:grid-cols-12 lg:gap-[var(--spacing-gutter)]">
                <header className="min-w-0 lg:col-span-5">
                  <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                    05 / MySQL
                  </p>
                  <h2
                    id="database-normalization-heading"
                    className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                  >
                    Database Normalization
                  </h2>
                  <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                    Some existing MySQL areas were poorly structured. The work focused on making
                    those areas clearer and more maintainable without claiming unverified schema
                    counts, normalization levels, or performance gains.
                  </p>
                </header>
                <div className="min-w-0 lg:col-span-7">
                  <NumberedList items={gatewayStudy.databaseNormalization} />
                </div>
              </div>
            </section>

            <CaseStudySection
              id="api-dashboard"
              label="06 / Data Flow"
              title="API & Dashboard Flow"
            >
              <NumberedList items={gatewayStudy.apiAndDashboard} />
            </CaseStudySection>

            <section
              id="production-troubleshooting"
              aria-labelledby="production-troubleshooting-heading"
              className="min-w-0 scroll-mt-24"
            >
              <header className="mb-[var(--spacing-stack-lg)] max-w-3xl">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  07 / Production
                </p>
                <h2
                  id="production-troubleshooting-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Production Troubleshooting
                </h2>
                <p className="mt-[var(--spacing-stack-md)] font-body-lg text-body-lg text-on-surface-variant">
                  Abdullah worked directly with the production environment, tracing issues across
                  application, backend, database, and server boundaries instead of treating each
                  layer in isolation.
                </p>
              </header>

              <GatewayDiagnosticFlow />

              <ul className="mt-[var(--spacing-stack-lg)] grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-3">
                {gatewayStudy.productionTroubleshooting.map((item) => (
                  <li
                    key={item}
                    className="min-w-0 border-t border-outline pt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <CaseStudySection
              id="delivered-features"
              label="08 / Delivery"
              title="Two Delivered Pages / Features"
            >
              <div className="border-l-2 border-primary bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {gatewayStudy.deliveredFeatures}
                </p>
              </div>
            </CaseStudySection>

            <section
              id="impact"
              aria-labelledby="impact-heading"
              className="grid min-w-0 scroll-mt-24 grid-cols-1 gap-[var(--spacing-gutter)] lg:grid-cols-12"
            >
              <div className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)] lg:col-span-8">
                <p className="font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  09 / Qualitative Outcome
                </p>
                <h2
                  id="impact-heading"
                  className="mt-2 font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
                >
                  Engineering Impact
                </h2>
                <ul className="mt-[var(--spacing-stack-lg)] grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                  {gatewayStudy.impact.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>

              <aside className="flex min-w-0 flex-col justify-center border border-primary bg-surface p-[var(--spacing-stack-md)] text-center sm:p-[var(--spacing-stack-lg)] lg:col-span-4">
                <p className="font-display text-[clamp(2.5rem,4vw,3rem)] font-bold leading-none text-on-background">
                  ~12K
                </p>
                <p className="mt-2 font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
                  Registered Accounts
                </p>
                <p className="mt-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
                  {gatewayStudy.scaleContext}
                </p>
              </aside>
            </section>

            <CaseStudySection id="stack" label="10 / Technology" title="Project Stack">
              <div>
                <p className="mb-[var(--spacing-stack-lg)] max-w-2xl font-body-md text-body-md text-on-surface-variant">
                  Laravel and PHP represent the primary engineering focus. React was used as
                  supporting frontend context where required.
                </p>
                <div className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] sm:grid-cols-2">
                  {gatewayStudy.technicalStack.map((group) => (
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

            <CaseStudySection id="learnings" label="11 / Reflection" title="What I Learned">
              <ol className="grid min-w-0 grid-cols-1 gap-[var(--spacing-stack-md)] md:grid-cols-2">
                {gatewayStudy.learnings.map((learning, index) => (
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
                href="/projects/share-k"
                className="inline-flex min-h-11 items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
              >
                <ArrowRightIcon className="size-4 rotate-180" />
                Previous Project: Share-k
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
