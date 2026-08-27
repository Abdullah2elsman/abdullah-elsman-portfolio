interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export function TechTag({ children, className = "" }: TechTagProps) {
  return (
    <span
      className={`inline-block bg-surface-container-high font-mono-sm text-mono-sm px-3 py-1 text-on-surface-variant rounded border border-outline-variant ${className}`}
    >
      {children}
    </span>
  );
}
