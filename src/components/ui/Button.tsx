import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  download?: boolean | string;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:opacity-90 transition-opacity border border-primary",
  secondary:
    "border border-outline text-on-background hover:bg-surface-container-low transition-colors bg-transparent",
  ghost:
    "text-primary hover:underline transition-colors bg-transparent border-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-label-md",
  md: "px-6 py-3 text-label-md",
  lg: "px-8 py-4 text-label-md",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-label-md rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} download={download} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
