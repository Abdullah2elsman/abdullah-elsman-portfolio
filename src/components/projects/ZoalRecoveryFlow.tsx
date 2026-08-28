const diagnosticLayers = [
  {
    title: "Application",
    detail: "Laravel requirements and runtime state",
  },
  {
    title: "PHP Runtime",
    detail: "Server compatibility boundary",
  },
  {
    title: "Composer Dependencies",
    detail: "Vendor installation and required packages",
    primary: true,
  },
  {
    title: "Server Environment",
    detail: "Direct production terminal work",
  },
];

function DiagnosticArrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-primary">
      <span className="font-mono-sm text-xl lg:hidden">↓</span>
      <span className="hidden font-mono-sm text-xl lg:inline">→</span>
    </div>
  );
}

export function ZoalRecoveryFlow() {
  return (
    <figure className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
      <figcaption className="border-b border-outline-variant pb-[var(--spacing-stack-md)]">
        <p className="font-label-md text-label-md font-semibold text-on-background">
          Production diagnostic frame
        </p>
        <p className="mt-2 max-w-3xl font-body-md text-body-md text-on-surface-variant">
          The investigation separated application requirements from PHP runtime compatibility,
          dependency state, and the surrounding production environment before recovery work was
          applied.
        </p>
      </figcaption>

      <div
        className="mt-[var(--spacing-stack-lg)] grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch"
        aria-label="Diagnostic flow from the Laravel application through PHP runtime and Composer dependencies to the production server environment"
      >
        {diagnosticLayers.map((layer, index) => (
          <div key={layer.title} className="contents">
            <div
              className={`flex min-w-0 flex-col justify-center border p-[var(--spacing-stack-md)] text-center ${
                layer.primary
                  ? "border-primary bg-surface-container-high"
                  : "border-outline bg-surface-container-high"
              }`}
            >
              <p className="font-label-md text-label-md font-semibold text-on-background">
                {layer.title}
              </p>
              <p className="mt-2 font-mono-sm text-mono-sm text-on-surface-variant">
                {layer.detail}
              </p>
            </div>
            {index < diagnosticLayers.length - 1 && <DiagnosticArrow />}
          </div>
        ))}
      </div>

      <p className="mt-[var(--spacing-stack-lg)] border-t border-outline-variant pt-[var(--spacing-stack-md)] font-mono-sm text-mono-sm text-on-surface-variant">
        High-level troubleshooting scope only; no exact command sequence, log output, hosting
        architecture, or incident timeline is claimed.
      </p>
    </figure>
  );
}
