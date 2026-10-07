"use client";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  variant?: "pill" | "outline";
}

export default function TechBadge({ name, icon, variant = "pill" }: TechBadgeProps) {
  if (variant === "outline") {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
        style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)", background: "var(--color-surface)" }}
      >
        {icon && <span className="text-sm">{icon}</span>}
        {name}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
      style={{ background: "var(--color-text)", color: "white" }}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {name}
    </span>
  );
}
