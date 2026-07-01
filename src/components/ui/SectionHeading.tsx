import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses}`}>
      {eyebrow && (
        <span className="rounded-full bg-leaf-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-leaf-600">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl font-heading text-3xl font-bold text-cocoa-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-lg text-cocoa-600">{subtitle}</p>
      )}
    </div>
  );
}
