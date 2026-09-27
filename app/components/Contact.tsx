import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "Anuja1307", href: profile.github },
  { label: "LinkedIn", value: "anuja-r-s", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">Contact</h2>
        <div>
          <p className="max-w-lg text-base leading-relaxed text-ink-light/80 dark:text-ink/80">
            Open to internship and new-grad roles in backend or full-stack engineering. The fastest way to
            reach me is email.
          </p>
          <ul className="mt-8 space-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring group flex items-baseline gap-4 border-b border-line-light dark:border-line py-3"
                >
                  <span className="w-20 shrink-0 font-mono text-xs text-muted-light dark:text-muted">
                    {link.label}
                  </span>
                  <span className="text-sm text-ink-light/85 dark:text-ink/85 group-hover:text-signal transition-colors">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
