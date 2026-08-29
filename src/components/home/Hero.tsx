import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons/Icons";
import { personal } from "@/data/personal";
import { siteConfig } from "@/data/site";

export function Hero() {
  const cvAvailable = existsSync(
    join(process.cwd(), "public", siteConfig.cvPath.replace(/^\//, "")),
  );

  return (
    <section className="py-[var(--spacing-section-gap)]" aria-labelledby="hero-heading">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
          <div className="flex min-w-0 flex-col items-start gap-[var(--spacing-stack-md)]">
            <p className="font-mono-sm text-mono-sm uppercase tracking-wider text-on-surface-variant">
              {personal.eyebrow}
            </p>
            <p className="font-headline-md text-headline-md text-on-surface-variant">
              {personal.name}
            </p>
            <h1
              id="hero-heading"
              className="max-w-[660px] font-display text-[clamp(2.25rem,2rem+1.1vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-on-background"
            >
              {personal.headline}
            </h1>
            <p className="max-w-[650px] font-body-lg text-body-lg text-on-surface-variant">
              {personal.heroDescription}
            </p>

            <div className="mt-[var(--spacing-stack-md)] flex flex-wrap items-center gap-[var(--spacing-stack-md)]">
              {cvAvailable ? (
                <Button href={siteConfig.cvPath} download className="whitespace-nowrap">
                  <DownloadIcon className="size-[18px]" />
                  Download CV
                </Button>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-describedby="cv-status"
                  className="inline-flex cursor-not-allowed items-center gap-2 whitespace-nowrap rounded border border-primary bg-primary px-6 py-3 font-label-md text-label-md text-on-primary opacity-65"
                >
                  <DownloadIcon className="size-[18px]" />
                  Download CV
                </button>
              )}
              {!cvAvailable && (
                <span id="cv-status" className="sr-only">
                  The final CV document has not been added yet.
                </span>
              )}
              <Button href="/#work" variant="secondary" className="whitespace-nowrap">
                View My Work
              </Button>
              <div className="ml-2 flex items-center gap-3">
                <Link
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Abdullah Elsman's GitHub profile"
                  className="inline-flex size-10 items-center justify-center text-on-surface-variant transition-colors hover:text-primary"
                >
                  <GitHubIcon className="size-5" />
                </Link>
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Abdullah Elsman's LinkedIn profile"
                  className="inline-flex size-10 items-center justify-center text-on-surface-variant transition-colors hover:text-primary"
                >
                  <LinkedInIcon className="size-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end">
            <div className="aspect-square w-full max-w-80 border border-outline bg-surface p-2">
              <Image
                src={personal.portrait}
                alt="Abdullah Elsman in a professional office setting"
                width={640}
                height={640}
                priority
                className="size-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
