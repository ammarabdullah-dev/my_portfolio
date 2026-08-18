import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Cloud, ShieldCheck, GitBranch, BookOpen } from "lucide-react";

const pillars = [
  { icon: Cloud, title: "Cloud architectures", text: "AWS fundamentals across EC2, VPC, IAM and S3." },
  { icon: ShieldCheck, title: "Cloud security", text: "Designing with least-privilege and secure defaults." },
  { icon: GitBranch, title: "CI/CD & Bash", text: "Expanding into pipelines and infrastructure scripting." },
  { icon: BookOpen, title: "Always learning", text: "Hands-on projects to deepen practical expertise." },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Building toward cloud and DevOps engineering."
          description="An MCA student developing practical skills across AWS, Linux, cloud security, automation and application development."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-10">
              <div
                aria-hidden
                className="absolute -right-32 -top-32 h-72 w-72 rounded-full blur-3xl opacity-50"
                style={{ background: "var(--gradient-brand)" }}
              />
              <p className="relative text-lg leading-relaxed text-foreground/90">
                I am building a career around cloud and DevOps, with a growing understanding of modern cloud
                architecture, infrastructure and operations. My AWS foundation currently includes <span className="text-primary">EC2, VPC, IAM, S3</span>, and cloud security
                principles. I use academic and hands-on projects to turn those concepts into practical experience.
              </p>
              <p className="relative mt-5 text-base leading-relaxed text-muted-foreground">
                Currently expanding capabilities in <span className="text-foreground">CI/CD pipelines</span> and{" "}
                <span className="text-foreground">Bash scripting</span>, with a commitment to continuous
                learning. My goal is to contribute to cloud, DevOps and infrastructure-focused teams while continuing to strengthen practical engineering skills.
              </p>

              <div className="divider-gradient relative mt-8" />

              <dl className="relative mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { k: "Hyderabad", v: "Based in" },
                  { k: "MCA", v: "Currently pursuing" },
                  { k: "8.6/10", v: "Bachelor's CGPA" },
                  { k: "Open", v: "To opportunities" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dt>
                    <dd className="mt-1 text-lg font-semibold text-gradient">{s.k}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
