import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../config";

export function Footer() {
  return (
    <footer className="relative mt-12">
      <div className="divider-gradient" />
      <div className="glass-strong">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-xs font-bold text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              AA
            </span>
            <div>
              <p className="text-sm font-semibold">Ammar Abdullah</p>
              <p className="text-xs text-muted-foreground">Cloud & DevOps · Hyderabad</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[
              { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ...(siteConfig.github ? [{ icon: Github, href: siteConfig.github, label: "GitHub" }] : []),
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-border/60 px-6 py-4">
          <p className="mx-auto max-w-7xl text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ammar Abdullah · Crafted with intention in Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  );
}
