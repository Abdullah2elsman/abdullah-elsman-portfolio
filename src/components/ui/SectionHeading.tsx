interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={`font-headline-lg text-headline-lg text-on-background border-b border-outline pb-2 ${className}`}
    >
      {children}
    </Tag>
  );
}
