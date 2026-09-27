const focusAreas = [
  {
    label: "Backend & APIs",
    detail: "REST API design across Node/Express and Spring Boot, with an eye for clean service boundaries.",
  },
  {
    label: "Data & caching",
    detail: "MongoDB and MySQL schema design paired with Redis for session state and hot-path performance.",
  },
  {
    label: "AI integration",
    detail: "Applying NLP, embeddings, and RAG to real product features like resume analysis and semantic search.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">About</h2>
        <div className="space-y-8">
          <p className="max-w-2xl text-base leading-relaxed text-ink-light/80 dark:text-ink/80">
            I&rsquo;m a Computer Science undergraduate at Amrita Vishwa Vidyapeetham, currently in my third year.
            Most of my work sits at the backend: designing APIs, modeling data, and wiring up authentication —
            then extending that with AI components where they solve a real problem, rather than as decoration.
            I&rsquo;ve also worked outside pure software, running field research on rural drinking-water access as
            part of Amrita&rsquo;s Live-in-Labs programme.
          </p>
          <ul className="grid gap-6 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <li key={area.label} className="border-t border-line-light dark:border-line pt-4">
                <p className="font-display text-sm font-medium">{area.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-light/70 dark:text-ink/70">{area.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
