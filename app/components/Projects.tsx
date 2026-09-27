import { projects } from "@/lib/data";
import SystemFlow from "./SystemFlow";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="mb-12 grid gap-4 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">Featured projects</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-light/70 dark:text-ink/70">
          Two projects that best show how I build: one product-facing with an AI layer,
          one systems-facing with distributed, event-driven infrastructure.
        </p>
      </div>

      <div className="space-y-6">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-line-light dark:border-line bg-surface-light/50 dark:bg-surface p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                <div className="md:max-w-md">
                  <h3 className="font-display text-xl font-medium">{project.title}</h3>
                  <p className="mt-1 text-sm text-signal">{project.pitch}</p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring h-fit shrink-0 rounded-full border border-line-light dark:border-line px-4 py-1.5 text-xs font-medium hover:border-signal"
                  >
                    View on GitHub
                  </a>
                )}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-light dark:text-muted">Problem</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-light/80 dark:text-ink/80">{project.problem}</p>
                  <p className="mt-4 text-sm font-medium text-muted-light dark:text-muted">Approach</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-light/80 dark:text-ink/80">{project.approach}</p>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-ink-light/80 dark:text-ink/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-line-light dark:border-line pt-5">
                <SystemFlow nodes={project.flow} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line-light dark:border-line px-2.5 py-1 font-mono text-[11px] text-ink-light/70 dark:text-ink/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
