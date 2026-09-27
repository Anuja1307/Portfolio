import { profile } from "@/lib/data";

const stack = ["Node.js", "Express", "Spring Boot", "MongoDB", "Redis", "Kafka", "Docker", "AWS EC2"];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-8">
        <div>
          <p
            className="reveal font-mono text-xs text-wire"
            style={{ animationDelay: "0ms" }}
          >
            {profile.location}
          </p>
          <h1
            className="reveal mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Anuja builds backend systems that hold up under real traffic.
          </h1>
          <p
            className="reveal mt-6 max-w-lg text-base leading-relaxed text-ink-light/75 dark:text-ink/75 md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            {profile.summary}
          </p>
          <div
            className="reveal mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#projects"
              className="focus-ring rounded-full bg-ink-light dark:bg-ink px-5 py-2.5 text-sm font-medium text-base-light dark:text-base transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring text-sm text-ink-light/80 dark:text-ink/80 underline decoration-line-light dark:decoration-line underline-offset-4 hover:decoration-signal"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring text-sm text-ink-light/80 dark:text-ink/80 underline decoration-line-light dark:decoration-line underline-offset-4 hover:decoration-signal"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="focus-ring text-sm text-ink-light/80 dark:text-ink/80 underline decoration-line-light dark:decoration-line underline-offset-4 hover:decoration-signal"
            >
              Contact
            </a>
          </div>
        </div>

        <div
          className="reveal rounded-2xl border border-line-light dark:border-line bg-surface-light/60 dark:bg-surface p-5 font-mono text-xs"
          style={{ animationDelay: "280ms" }}
        >
          <p className="text-muted-light dark:text-muted">{"// current stack"}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {stack.map((item) => (
              <li key={item} className="flex items-center justify-between border-b border-line-light/60 dark:border-line/60 pb-2 last:border-none last:pb-0">
                <span>{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-wire" />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-light dark:text-muted">CGPA 8.74 · B.Tech CSE, 2028</p>
        </div>
      </div>
    </section>
  );
}
