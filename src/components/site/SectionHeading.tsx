import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
            isDark
              ? "border-secondary/30 bg-secondary/10 text-secondary"
              : "border-primary/20 bg-primary/5 text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
