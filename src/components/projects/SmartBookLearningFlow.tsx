const applicationPath = [
  {
    label: "Student / Course",
    detail: "Learning context",
  },
  {
    label: "Subject / Material",
    detail: "Educational content",
  },
  {
    label: "PDF",
    detail: "Learning source",
  },
  {
    label: "Laravel Backend",
    detail: "Application and integration boundary",
    primary: true,
  },
];

const assistedPath = [
  {
    label: "External AI Service",
    detail: "Separate processing responsibility",
  },
  {
    label: "Generated Output",
    detail: "AI-assisted learning output or quiz",
    primary: true,
  },
  {
    label: "Student",
    detail: "Output returns to the learning workflow",
  },
];

function FlowNode({
  label,
  detail,
  primary = false,
}: {
  label: string;
  detail: string;
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
      <p className="mt-2 font-mono-sm text-mono-sm text-on-surface-variant">{detail}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-primary">
      <span className="font-mono-sm text-xl lg:hidden">↓</span>
      <span className="hidden font-mono-sm text-xl lg:inline">→</span>
    </div>
  );
}

export function SmartBookLearningFlow() {
  return (
    <figure className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
      <figcaption className="border-b border-outline-variant pb-[var(--spacing-stack-md)]">
        <p className="font-label-md text-label-md font-semibold text-on-background">
          Educational and AI-assisted workflow
        </p>
        <p className="mt-2 max-w-3xl font-body-md text-body-md text-on-surface-variant">
          AI augments the normal learning path through a separate service. The Laravel backend
          connects that service to the application; it is not the AI implementation itself.
        </p>
      </figcaption>

      <div className="mt-[var(--spacing-stack-lg)]">
        <p className="mb-3 font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-on-surface-variant">
          Application learning path
        </p>
        <div
          className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch"
          aria-label="Application path from student and course context through learning materials and PDF content to the Laravel backend"
        >
          {applicationPath.map((node, index) => (
            <div key={node.label} className="contents">
              <FlowNode {...node} />
              {index < applicationPath.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>

      <div className="my-[var(--spacing-stack-lg)] flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-outline-variant" />
        <span className="font-mono-sm text-mono-sm text-primary">↓ backend integration</span>
        <span className="h-px flex-1 bg-outline-variant" />
      </div>

      <div>
        <p className="mb-3 font-mono-sm text-mono-sm uppercase tracking-[0.08em] text-on-surface-variant">
          AI-assisted continuation
        </p>
        <div
          className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch"
          aria-label="AI-assisted path from the external AI service through generated learning output back to the student"
        >
          {assistedPath.map((node, index) => (
            <div key={node.label} className="contents">
              <FlowNode {...node} />
              {index < assistedPath.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-[var(--spacing-stack-lg)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
        This is intentionally a high-level application flow and does not imply unverified AI
        processing or infrastructure components.
      </p>
    </figure>
  );
}
