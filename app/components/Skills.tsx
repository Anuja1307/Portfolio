import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="mb-10 grid gap-4 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">Skills</h2>
      </div>

      <div className="grid gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="font-display text-sm font-medium">{group.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line-light dark:border-line px-2.5 py-1 font-mono text-[11px] text-ink-light/75 dark:text-ink/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
