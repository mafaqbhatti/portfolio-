import { stackCategories } from "@/content/profile";

export function StackSection() {
  return (
    <section
      id="stack"
      aria-label="Technical stack and usage"
      className="max-w-[1120px] mx-auto px-6 section-padding border-t hairline-t"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono-label text-text-muted">04 / Stack</span>
        <h2 className="font-h2 text-text mt-2">
          Technical stack and verified system usage.
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-[68ch]">
          Grouped by discipline. Every technology is tied to a system shipped or
          evaluated in production.
        </p>
      </div>

      {/* Grouped Stack Grid (No logos, no pills) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stackCategories.map((group) => (
          <div
            key={group.category}
            className="border hairline-border rounded-lg bg-surface p-6 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-text uppercase tracking-wider pb-3 border-b hairline-b font-medium">
                {group.category}
              </div>

              <ul className="mt-4 divide-y divide-border">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="py-2.5 flex flex-col gap-0.5">
                    <span className="font-mono text-xs text-text font-medium">
                      {skill.name}
                    </span>
                    <span className="font-sans text-[11px] text-text-muted leading-snug">
                      {skill.usedIn.join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
