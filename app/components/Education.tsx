import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">Education</h2>
        <div className="border-l-2 border-signal pl-6">
          <p className="font-display text-lg font-medium">{education.institution}</p>
          <p className="mt-1 text-sm text-ink-light/70 dark:text-ink/70">{education.location}</p>
          <p className="mt-3 text-sm text-ink-light/85 dark:text-ink/85">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-muted-light dark:text-muted">
            {education.gpa} · {education.period}
          </p>
        </div>
      </div>
    </section>
  );
}
