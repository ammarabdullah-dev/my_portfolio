import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
}) {
  return (
    <div className="mb-14 flex flex-col items-start gap-4">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={titleId} className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
