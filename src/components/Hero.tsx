import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { siteConfig } from "../config";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to cloud & DevOps opportunities
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight"
          >
            Ammar
            <br />
            <span className="text-gradient">Abdullah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            MCA student focused on cloud and DevOps, building practical projects with{" "}
            <span className="text-foreground">AWS, Linux, Python and modern web technologies</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
              View projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
              <Mail className="h-4 w-4" /> Contact me
            </a>
            {siteConfig.resume ? (
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                <Download className="h-4 w-4" /> Resume / CV
              </a>
            ) : (
              <span
                title="Add your resume path in src/config.ts when the PDF is ready"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-3 text-sm font-medium text-muted-foreground/60"
              >
                <Download className="h-4 w-4" /> Resume coming soon
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { k: "8.6", v: "BCA CGPA" },
              { k: "4", v: "Core AWS services" },
              { k: "4", v: "Featured projects" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative mt-24 overflow-hidden border-y border-border/60 bg-white/[0.02] py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-14">
              {["AWS", "Linux", "EC2 · VPC · IAM", "S3 · Cloud Security", "Python", "Git & GitHub", "CI/CD", "Bash", "UI/UX"].map((t) => (
                <span key={t} className="inline-flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
