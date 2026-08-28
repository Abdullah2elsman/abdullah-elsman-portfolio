import Link from "next/link";
import { personal, navLinks } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-[var(--spacing-stack-lg)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col md:flex-row justify-between items-center gap-[var(--spacing-stack-md)] bg-surface border-t border-outline-variant mt-[var(--spacing-section-gap)]">
      <div className="font-body-md text-body-md text-on-surface-variant opacity-80">
        &copy; {year} {personal.name}
      </div>
      <nav
        className="flex flex-wrap justify-center gap-[var(--spacing-stack-md)]"
        aria-label="Footer navigation"
      >
        <Link
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-md text-label-md font-bold text-primary underline hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          GitHub
        </Link>
        <Link
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          LinkedIn
        </Link>
        {navLinks
          .filter((link) => link.label === "Work" || link.label === "About")
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {link.label}
            </Link>
          ))}
      </nav>
    </footer>
  );
}
