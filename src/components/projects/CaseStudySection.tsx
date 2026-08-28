interface CaseStudySectionProps {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CaseStudySection({
  id,
  label,
  title,
  children,
  className = "",
}: CaseStudySectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`grid min-w-0 scroll-mt-24 gap-[var(--spacing-stack-lg)] lg:grid-cols-12 lg:gap-[var(--spacing-gutter)] ${className}`}
    >
      <header className="min-w-0 lg:col-span-4">
        <p className="mb-2 font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-primary">
          {label}
        </p>
        <h2
          id={headingId}
          className="font-headline-lg text-[clamp(1.75rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-on-background"
        >
          {title}
        </h2>
      </header>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </section>
  );
}
