import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons/Icons";
import { personal } from "@/data/personal";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="mt-[var(--spacing-section-gap)] scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="flex flex-col items-center gap-[var(--spacing-stack-md)] border border-outline bg-surface px-[var(--spacing-stack-lg)] py-[var(--spacing-section-gap)] text-center">
          <h2 id="contact-heading" className="font-headline-lg text-headline-lg text-on-background">
            {personal.contactCTAHeading}
          </h2>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            {personal.contactCTADescription}
          </p>

          <div className="mt-[var(--spacing-stack-md)] flex flex-col items-center gap-2">
            {personal.contactEmail ? (
              <a
                href={`mailto:${personal.contactEmail}`}
                className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
              >
                <MailIcon className="size-5" />
                Get in Touch
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-describedby="email-status"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded bg-primary px-8 py-4 font-label-md text-label-md text-on-primary opacity-65"
              >
                <MailIcon className="size-5" />
                Get in Touch
              </button>
            )}
            {!personal.contactEmail && (
              <p id="email-status" className="font-mono-sm text-mono-sm text-on-surface-variant">
                Confirmed email address pending.
              </p>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-5">
            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </Link>
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
