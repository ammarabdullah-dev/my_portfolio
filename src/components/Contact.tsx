import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "../config";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_READY = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_READY) {
      const data = new FormData(formRef.current);
      const subject = String(data.get("subject") || "Portfolio enquiry");
      const name = String(data.get("from_name") || "Visitor");
      const replyTo = String(data.get("reply_to") || "");
      const message = String(data.get("message") || "");
      const body = `Name: ${name}\nEmail: ${replyTo}\n\n${message}`;
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setErrorMsg(null);

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID!, EMAILJS_TEMPLATE_ID!, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY!,
      });
      setStatus("sent");
      formRef.current.reset();
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg("The form could not send. Please email me directly.");
      setStatus("error");
    }
  };

  const statusText = EMAILJS_READY
    ? status === "sent"
      ? "Message sent successfully."
      : status === "sending"
      ? "Sending your message…"
      : status === "error"
      ? errorMsg ?? "Something went wrong."
      : "Your message will be sent securely through EmailJS."
    : "Until EmailJS is configured, Send message opens your default email app.";

  return (
    <section id="contact" className="relative py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something useful."
          description="Open to cloud, DevOps, infrastructure and technology opportunities. Reach out directly or use the form below."
          titleId="contact-title"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6 md:p-8">
              <div aria-hidden className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-3xl opacity-50" style={{ background: "var(--gradient-brand)" }} />
              <h3 className="relative text-lg font-semibold">Reach out directly</h3>
              <ul className="relative mt-6 space-y-3">
                {[
                  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: Phone, label: siteConfig.phone, href: siteConfig.phoneHref },
                  { icon: Linkedin, label: "LinkedIn profile", href: siteConfig.linkedin },
                  { icon: MapPin, label: siteConfig.location, href: siteConfig.locationUrl },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-white/[0.04] text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 break-words text-sm">{label}</span>
                      <span className="ml-auto hidden text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:inline">Open →</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Your name" id="name" name="from_name" placeholder="Your name" autoComplete="name" />
                <Field label="Email" id="email" name="reply_to" type="email" placeholder="you@example.com" autoComplete="email" />
              </div>
              <div className="mt-4">
                <Field label="Subject" id="subject" name="subject" placeholder="Cloud / DevOps opportunity" />
              </div>
              <div className="mt-4">
                <label htmlFor="msg" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  id="msg"
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  placeholder="Tell me about the opportunity or project…"
                  className="w-full resize-y rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p aria-live="polite" className={`text-xs ${status === "error" ? "text-red-400" : "text-muted-foreground"}`}>{statusText}</p>
                <button type="submit" disabled={status === "sending"} className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium disabled:opacity-60 sm:w-auto">
                  {status === "sending" ? <>Sending <Loader2 className="h-4 w-4 animate-spin" /></> : <>Send message <Send className="h-4 w-4" /></>}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required
        maxLength={200}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}
