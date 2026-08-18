import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Github, BookOpen, ShieldCheck, ScanFace, Clock3, BrainCircuit } from "lucide-react";

const projects = [
  {
    title: "Cloud-Based Bookstore",
    subtitle: "Cloud Application",
    description:
      "A cloud-oriented bookstore project exploring scalable application hosting, inventory workflows, database integration and AWS services including EC2 and S3.",
    tags: ["AWS", "EC2", "S3", "MySQL", "Web"],
    icon: BookOpen,
    span: "",
    github: "https://github.com/ammarabdullah-dev/cloud-bookstore-system",
  },
  {
    title: "Secure Data Sharing",
    subtitle: "Anti-Collusion Framework",
    description:
      "A multi-user cloud data-sharing framework centered on controlled access, group management, encryption and anti-collusion safeguards for revoked users.",
    tags: ["Cloud Security", "Access Control", "Encryption"],
    icon: ShieldCheck,
    span: "",
    github: "https://github.com/ammarabdullah-dev/cloud-secure-data-sharing-framework",
  },
  {
    title: "Multi-Face Recognition",
    subtitle: "Attendance Management",
    description:
      "A secure attendance application that uses multi-face recognition to automate identification and attendance recording through a Python and Flask application layer.",
    tags: ["Python", "Flask", "Face Recognition", "Cloud"],
    icon: ScanFace,
    span: "",
    github: "https://github.com/ammarabdullah-dev/cloud-face-recognition-attendance-system",
  },
  {
    title: "Skin Lesion Classification",
    subtitle: "Medical Imaging ML Prototype",
    description:
      "An educational Flask application that uses a fine-tuned YOLOv8 model to classify dermoscopic images across nine skin-lesion categories, with transparent model metrics and safety limitations.",
    tags: ["Python", "Flask", "YOLOv8", "Computer Vision", "Machine Learning"],
    icon: BrainCircuit,
    span: "",
    github: "https://github.com/ammarabdullah-dev/skin-lesion-classification-yolov8",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected projects"
          title="Projects built to turn theory into practice."
          description="Academic and hands-on work across cloud computing, security, machine learning, automation and application development."
          titleId="projects-title"
        />

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className={p.span}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 md:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: "var(--gradient-brand)" }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-white/[0.04]">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>

                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.title} GitHub repository`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/[0.04] text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5" /> Repo coming soon
                    </span>
                  )}
                </div>

                <div className="relative mt-6 flex-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
