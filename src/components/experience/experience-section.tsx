import { experiences } from "@/content/profile";
import { TodoMarker } from "@/components/ui/todo-marker";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional work experience"
      className="max-w-[1120px] mx-auto px-6 section-padding border-t hairline-t"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs text-text-muted">
          02 / Experience
        </span>
        <h2 className="font-h2 text-text mt-2">
          Engineering roles and delivered outcomes.
        </h2>
      </div>

      {/* Experience Rows */}
      <div className="divide-y divide-border border-y hairline-b hairline-t">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
          >
            {/* Dates (Mono, left column) */}
            <div className="md:col-span-3 font-mono text-xs text-text-muted pt-1">
              {exp.period}
            </div>

            {/* Role, Company & Bullets (Right column) */}
            <div className="md:col-span-9">
              <div className="flex flex-wrap items-baseline gap-2 mb-3">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text">
                  {exp.role}
                </h3>
                <span className="font-mono text-sm text-text-muted">
                  / {exp.company}, {exp.location}
                </span>
              </div>

              {exp.permissionMarker && (
                <div className="mb-4">
                  <TodoMarker label={exp.permissionMarker} />
                </div>
              )}

              <ul className="space-y-3 text-text-muted text-sm sm:text-base leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-accent mt-1.5 select-none">
                      —
                    </span>
                    <span>{bullet}</span>
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
