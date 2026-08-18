import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Cloud, Terminal, Server, Palette, Code2, FileCode, Braces } from "lucide-react";

const skills = [
  { name: "Cloud Computing", level: "Working knowledge", icon: Cloud },
  { name: "Linux", level: "Working knowledge", icon: Terminal },
  { name: "AWS Fundamentals", level: "Working knowledge", icon: Server },
  { name: "UI/UX & Prototyping", level: "Working knowledge", icon: Palette },
  { name: "HTML", level: "Working knowledge", icon: FileCode },
  { name: "CSS", level: "Working knowledge", icon: Code2 },
  { name: "JavaScript", level: "Working knowledge", icon: Braces },
  { name: "Python", level: "Working knowledge", icon: Code2 },
];

const stack = ["AWS", "Linux", "Python", "MySQL", "Git", "GitHub", "HTML5", "CSS3", "JavaScript", "Bash", "Figma"];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="A focused, growing toolkit."
          description="Building depth in cloud and infrastructure while keeping a designer's eye for clarity and craft."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-6 md:p-8">
              <ul className="space-y-4">
                {skills.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-white/[0.02] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-white/[0.04]">
                        <s.icon className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-sm font-medium">{s.name}</span>
                    </div>
                    <span className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground">
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6 md:p-8">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl opacity-50"
                style={{ background: "var(--gradient-brand)" }}
              />
              <h3 className="relative text-sm font-medium uppercase tracking-widest text-muted-foreground">Tech stack</h3>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="cursor-default rounded-full border border-border bg-white/[0.04] px-3.5 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="divider-gradient relative mt-8" />

              <h3 className="relative mt-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">Currently exploring</h3>
              <ul className="relative mt-4 space-y-2 text-sm">
                {["CI/CD pipelines", "Bash scripting", "Docker & containers", "Infrastructure as Code"].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
