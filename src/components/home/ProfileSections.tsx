import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { personal } from "@/data/personal";

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24" aria-labelledby="experience-heading">
      <SectionHeading className="mb-[var(--spacing-stack-md)]">
        <span id="experience-heading">Experience</span>
      </SectionHeading>

      <div className="border border-outline bg-surface p-[var(--spacing-stack-md)]">
        {experience.map((entry) => (
          <article key={entry.title}>
            <div className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-6">
              <h3 className="min-w-0 font-headline-md text-headline-md text-on-background">
                {entry.title}
              </h3>
              <span className="shrink-0 pt-1 font-mono-sm text-mono-sm text-on-surface-variant">
                {entry.period}
              </span>
            </div>
            <ul className="mt-[var(--spacing-stack-md)] space-y-2 font-body-md text-body-md text-on-surface-variant">
              {entry.themes.map((theme) => (
                <li key={theme} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.65em] size-1 shrink-0 bg-primary" />
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24" aria-labelledby="education-heading">
      <SectionHeading className="mb-[var(--spacing-stack-md)]">
        <span id="education-heading">Education</span>
      </SectionHeading>

      <div className="border border-outline bg-surface p-[var(--spacing-stack-md)]">
        {education.map((entry, index) => (
          <article
            key={entry.institution}
            className={index === 0 ? "" : "mt-4 border-t border-outline pt-4"}
          >
            <h3 className="font-label-md text-label-md font-bold text-on-background">
              {entry.institution}
            </h3>
            <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
              {entry.degree}
            </p>
            <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1 font-mono-sm text-mono-sm">
              {entry.status && (
                <>
                  <dt className="text-on-surface-variant">Status</dt>
                  <dd className="font-medium text-on-background">{entry.status}</dd>
                </>
              )}
              <dt className="text-on-surface-variant">Graduation Project</dt>
              <dd className="font-medium text-on-background">{entry.graduationProject}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24" aria-labelledby="about-heading">
      <SectionHeading className="mb-[var(--spacing-stack-md)]">
        <span id="about-heading">About</span>
      </SectionHeading>

      <div className="space-y-4 border border-outline bg-surface p-[var(--spacing-stack-md)] font-body-md text-body-md text-on-surface-variant">
        {personal.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24" aria-labelledby="skills-heading">
      <SectionHeading className="mb-[var(--spacing-stack-md)]">
        <span id="skills-heading">Technical Skills</span>
      </SectionHeading>

      <div className="border border-outline bg-surface p-[var(--spacing-stack-md)]">
        {skillCategories.map((category, index) => {
          const isPrimaryBackend = category.title === "Backend — Primary";
          const isSecondaryFrontend = category.title === "Frontend — Secondary";

          return (
            <div
              key={category.title}
              className={index === 0 ? "" : "mt-4 border-t border-outline pt-4"}
            >
              <h3
                className={`mb-2 font-label-md text-label-md font-bold ${
                  isSecondaryFrontend ? "text-on-surface-variant" : "text-on-background"
                }`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const isStrongestSkill = isPrimaryBackend && (item === "PHP" || item === "Laravel");

                  return (
                    <span
                      key={item}
                      className={`inline-block rounded border px-3 py-1 font-mono-sm text-mono-sm ${
                        isStrongestSkill
                          ? "border-primary bg-primary text-on-primary"
                          : "border-outline-variant bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ProfileSections() {
  return (
    <section
      className="mt-[var(--spacing-section-gap)]"
      aria-label="Experience, education, about, and technical skills"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-[var(--spacing-gutter)] lg:grid-cols-12">
          <div className="flex min-w-0 flex-col gap-[var(--spacing-stack-lg)] lg:col-span-7">
            <ExperienceSection />
            <EducationSection />
          </div>
          <div className="flex min-w-0 flex-col gap-[var(--spacing-stack-lg)] lg:col-span-5">
            <AboutSection />
            <SkillsSection />
          </div>
        </div>
      </Container>
    </section>
  );
}
