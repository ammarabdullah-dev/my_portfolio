import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GraduationCap } from "lucide-react";

const items = [
  {
    degree: "Master's in Computer Applications",
    school: "Deccan College of Engineering & Technology",
    location: "Nampally, Hyderabad",
    period: "Aug 2024 — Aug 2026",
    badge: "In progress",
  },
  {
    degree: "Bachelor's in Computer Applications",
    school: "KL University",
    location: "Aziz Nagar, Hyderabad",
    period: "May 2021 — May 2024",
    badge: "CGPA 8.6 / 10",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Education" title="Academic foundation" />

        <div className="relative pl-6 md:pl-10">
          <div
            aria-hidden
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px"
            style={{ background: "linear-gradient(180deg, var(--color-primary), var(--color-accent), transparent)" }}
          />
          <div className="space-y-6">
            {items.map((it, i) => (
              <Reveal key={it.degree} delay={i * 0.08}>
                <div className="relative">
                  <span
                    className="absolute -left-[27px] top-7 grid h-4 w-4 place-items-center rounded-full border border-border bg-background md:-left-[37px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
                  </span>
                  <div className="glass group flex flex-col gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-7">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-white/[0.04]">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold md:text-xl">{it.degree}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {it.school} · {it.location}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground/70">
                          {it.period}
                        </p>
                      </div>
                    </div>
                    <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary md:self-center">
                      {it.badge}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
