import { Container } from "@/components/layout/Container";
import {
  AccountsIcon,
  BackendIcon,
  EducationIcon,
  ProductionIcon,
} from "@/components/icons/Icons";
import { highlights } from "@/data/personal";

const icons = {
  education: EducationIcon,
  production: ProductionIcon,
  backend: BackendIcon,
  accounts: AccountsIcon,
};

export function ProofStrip() {
  return (
    <Container>
      <section
        aria-label="Professional highlights"
        className="mb-[var(--spacing-section-gap)] grid grid-cols-1 border-y border-outline-variant bg-surface min-[480px]:grid-cols-2 xl:grid-cols-4"
      >
        {highlights.map((highlight) => {
          const Icon = icons[highlight.icon];

          return (
            <div
              key={highlight.text}
              className="flex min-w-0 min-h-20 items-center justify-center gap-2 px-4 py-5 text-center font-mono-sm text-mono-sm text-on-surface-variant"
            >
              <Icon className="size-4 shrink-0 text-primary" />
              <span className="min-w-0">{highlight.text}</span>
            </div>
          );
        })}
      </section>
    </Container>
  );
}
