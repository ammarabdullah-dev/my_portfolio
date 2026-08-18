import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`relative w-full max-w-fit rounded-2xl px-2 py-2 transition-all duration-500 sm:rounded-full ${
          scrolled || open ? "glass-strong shadow-2xl" : "glass"
        }`}
      >
        <div className="flex items-center gap-2">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-2 rounded-full px-3 py-1.5">
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              AA
            </span>
            <span className="text-sm font-semibold tracking-tight">Ammar</span>
          </a>

          <div className="mx-1 hidden h-5 w-px bg-border md:block" />
          <ul className="hidden items-center md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-glow ml-1 hidden rounded-full px-4 py-1.5 text-sm font-medium sm:inline-flex"
          >
            Let's talk
          </a>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/[0.04] text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 border-t border-border/70 px-2 pb-2 pt-2 md:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={closeMenu}
              className="btn-glow mt-2 flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium"
            >
              Let's talk
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
