const diagnosticLayers = [
  {
    title: "Application",
    detail: "Behavior · bugs · errors",
  },
  {
    title: "Backend & APIs",
    detail: "Laravel · responses · data flow",
  },
  {
    title: "Database",
    detail: "MySQL · structure · queries",
  },
  {
    title: "Production Server",
    detail: "Linux · load · deployment",
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

export function GatewayDiagnosticFlow() {
  return (
    <figure className="min-w-0 border border-outline bg-surface p-[var(--spacing-stack-md)] sm:p-[var(--spacing-stack-lg)]">
      <figcaption className="mb-[var(--spacing-stack-lg)] max-w-3xl">
        <p className="font-label-md text-label-md font-semibold text-on-background">
          Cross-layer diagnostic frame
        </p>
        <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
          Production troubleshooting required tracing behavior across connected application
          layers. This flow represents the diagnostic scope; it does not claim one specific
          incident, cause, or infrastructure architecture.
        </p>
      </figcaption>

      <div
        className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch"
        aria-label="Diagnostic flow from application through backend, database, and production server"
      >
        {diagnosticLayers.map((layer, index) => (
          <div key={layer.title} className="contents">
            <div
              className={`flex min-w-0 flex-col justify-center border p-[var(--spacing-stack-md)] text-center ${
                layer.title === "Backend & APIs"
                  ? "border-primary bg-surface-container-high"
                  : "border-outline bg-surface-container-high"
              }`}
            >
              <h3 className="font-label-md text-label-md font-semibold text-on-background">
                {layer.title}
              </h3>
              <p className="mt-2 font-mono-sm text-mono-sm text-on-surface-variant">
                {layer.detail}
              </p>
            </div>
            {index < diagnosticLayers.length - 1 && <DiagnosticArrow />}
          </div>
        ))}
      </div>
    </figure>
  );
}
