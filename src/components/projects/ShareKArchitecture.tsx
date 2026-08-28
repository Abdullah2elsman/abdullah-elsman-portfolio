const primaryFlow = [
  {
    label: "Frontend",
    technologies: "React · TanStack Start · TypeScript · Tailwind CSS",
  },
  {
    label: "Application Backend",
    technologies: "NestJS · TypeScript",
  },
  {
    label: "Application Data",
    technologies: "PostgreSQL · Prisma · pgvector",
  },
];

const connectedServices = [
  {
    label: "GitHub",
    technologies: "Project and developer context",
  },
  {
    label: "AI Service",
    technologies: "Separate FastAPI service",
  },
  {
    label: "Async Infrastructure",
    technologies: "Redis · BullMQ",
  },
];

function ArchitectureNode({
  label,
  technologies,
  primary = false,
}: {
  label: string;
  technologies: string;
  primary?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 flex-col justify-center border p-[var(--spacing-stack-md)] text-center ${
        primary
          ? "border-primary bg-surface-container-high"
          : "border-outline bg-surface-container-high"
      }`}
    >
      <p className="font-label-md text-label-md font-semibold text-on-background">{label}</p>
      <p className="mt-2 font-mono-sm text-mono-sm text-on-surface-variant">
        {technologies}
      </p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-primary">
      <span className="font-mono-sm text-xl md:hidden">↓</span>
      <span className="hidden font-mono-sm text-xl md:inline">→</span>
    </div>
  );
}

export function ShareKArchitecture() {
  return (
    <figure className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
      <figcaption className="mb-[var(--spacing-stack-lg)] border-b border-outline-variant pb-[var(--spacing-stack-md)]">
        <p className="font-label-md text-label-md font-semibold text-on-background">
          Project-level system context
        </p>
        <p className="mt-2 max-w-3xl font-body-md text-body-md text-on-surface-variant">
          This diagram describes the wider team project. It is not a list of technologies or
          components personally implemented by Abdullah.
        </p>
      </figcaption>

      <div
        className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch"
        aria-label="Primary application flow from frontend through backend to application data"
      >
        {primaryFlow.map((node, index) => (
          <div key={node.label} className="contents">
            <ArchitectureNode
              label={node.label}
              technologies={node.technologies}
              primary={node.label === "Application Backend"}
            />
            {index < primaryFlow.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>

      <div className="my-[var(--spacing-stack-lg)] flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-outline-variant" />
        <span className="font-mono-sm text-mono-sm text-on-surface-variant">
          Backend-connected project services
        </span>
        <span className="h-px flex-1 bg-outline-variant" />
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-3">
        {connectedServices.map((service) => (
          <ArchitectureNode key={service.label} {...service} />
        ))}
      </div>

      <div className="mt-[var(--spacing-stack-md)] border border-dashed border-outline p-[var(--spacing-stack-md)] text-center">
        <p className="font-label-md text-label-md font-semibold text-on-background">
          Development environment
        </p>
        <p className="mt-1 font-mono-sm text-mono-sm text-on-surface-variant">
          Docker · Docker Compose
        </p>
      </div>
    </figure>
  );
}
