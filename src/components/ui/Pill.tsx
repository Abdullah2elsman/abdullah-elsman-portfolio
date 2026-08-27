interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "outlined";
  className?: string;
}

export function Pill({
  children,
  variant = "default",
  className = "",
}: PillProps) {
  const variantStyles =
    variant === "outlined"
      ? "border border-outline-variant bg-transparent"
      : "bg-surface-container-high border border-outline-variant";

  return (
    <span
      className={`inline-block px-3 py-1 font-mono-sm text-mono-sm text-on-surface-variant rounded ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
