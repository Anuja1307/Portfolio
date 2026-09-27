import { research } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">Research</h2>
        <div>
          <p className="font-display text-lg font-medium leading-snug">{research.title}</p>
          <p className="mt-1 font-mono text-xs text-muted-light dark:text-muted">{research.venue}</p>
          <ul className="mt-4 space-y-2">
            {research.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink-light/80 dark:text-ink/80">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wire" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
