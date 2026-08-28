import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons/Icons";
import { TechTag } from "@/components/ui/TechTag";
import {
  getTier1Projects,
  getTier2Projects,
} from "@/data/projects";
import type { Project } from "@/data/types";

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid min-w-0 grid-cols-1 gap-[var(--spacing-gutter)] border border-outline bg-surface p-[var(--spacing-gutter)] xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
      <div className="relative min-w-0 aspect-[4/3] overflow-hidden border border-outline-variant bg-surface-container-low">
        <Image
          src={project.imagePlaceholder}
          alt={`${project.title} project visual`}
          fill
          sizes="(min-width: 1280px) 500px, calc(100vw - 40px)"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between py-1">
        <div>
          <p className="mb-2 min-w-0 font-mono-sm text-mono-sm text-on-surface-variant">
            {project.label}
          </p>
          <h3 className="mb-3 font-headline-md text-headline-md text-on-background">
            {project.title}
          </h3>
          <p className="mb-4 font-body-md text-body-md text-on-surface-variant">
            {project.description}
          </p>
          <ul className="mb-4 space-y-1.5 font-body-md text-body-md text-on-surface-variant">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex min-w-0 gap-2">
                <span aria-hidden="true" className="mt-[0.65em] size-1 shrink-0 bg-primary" />
                <span className="min-w-0">{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mb-5 flex flex-wrap gap-2" aria-label={`${project.title} technical context`}>
            {project.tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex max-w-full w-fit items-center gap-2 border border-primary px-4 py-2 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-low"
        >
          View Case Study
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}

function SupportingProjectCard({ project }: { project: Project }) {
  const destination = project.github ?? project.live;
  const action = project.github ? "View Source" : "Visit Site";

  return (
    <article className="flex min-w-0 flex-col border border-outline bg-surface p-[var(--spacing-stack-md)]">
      <div className="relative mb-4 aspect-video overflow-hidden border border-outline-variant bg-surface-container-low">
        <Image
          src={project.imagePlaceholder}
          alt={`${project.title} project visual`}
          fill
          sizes="(min-width: 768px) 500px, calc(100vw - 72px)"
          className="object-cover"
        />
      </div>
      <p className="mb-1 font-mono-sm text-mono-sm text-on-surface-variant">
        {project.label}
      </p>
      <h3 className="mb-2 font-label-md text-label-md font-bold text-on-background">
        {project.title}
      </h3>
      <p className="mb-4 font-body-md text-body-md text-on-surface-variant">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2" aria-label={`${project.title} technical context`}>
        {project.tags.map((tag) => (
          <TechTag key={tag}>{tag}</TechTag>
        ))}
      </div>
      {destination && (
        <Link
          href={destination}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 font-label-md text-label-md text-primary hover:underline"
        >
          {action}
          <ExternalLinkIcon className="size-4" />
        </Link>
      )}
    </article>
  );
}

export function FeaturedProjects() {
  const tier1Projects = getTier1Projects();
  const tier2Projects = getTier2Projects();

  return (
    <section id="work" aria-labelledby="featured-projects-heading" className="scroll-mt-24">
      <Container>
        <h2
          id="featured-projects-heading"
          className="mb-[var(--spacing-stack-lg)] font-headline-lg text-headline-lg text-on-background"
        >
          Featured Projects
        </h2>

        <div className="flex flex-col gap-[var(--spacing-gutter)]">
          {tier1Projects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}

          <div className="mt-[var(--spacing-stack-md)] grid grid-cols-1 gap-[var(--spacing-gutter)] md:grid-cols-2">
            {tier2Projects.map((project) => (
              <SupportingProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
