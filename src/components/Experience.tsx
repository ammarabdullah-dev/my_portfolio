import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Briefcase, Check } from "lucide-react";

export function Experience() {
  const points = [
    "Designed user-centric interfaces for web and mobile applications",
    "Created wireframes and interactive prototypes",
    "Collaborated with cross-functional product teams",
    "Improved usability through iterative testing & feedback",
  ];

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Design experience that strengthened product thinking."
          description="A six-month UI/UX internship that developed practical experience in interface design, prototyping, usability feedback and cross-functional collaboration."
        />

        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div
              aria-hidden
              className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full blur-3xl opacity-40"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <div className="inline-flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-white/[0.04]">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">UI/UX Designer</h3>
                    <p className="text-sm text-muted-foreground">Areksoft Technologies</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border bg-white/[0.04] px-3 py-1">Hyderabad, Telangana</span>
                  <span className="rounded-full border border-border bg-white/[0.04] px-3 py-1">Jul 2023 — Dec 2023</span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">Internship</span>
                </div>
              </div>

              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
