import Link from "next/link";
import {
  identity,
  education,
  kaggleStatus,
  aboutCopy,
} from "@/content/profile";
import { TodoMarker } from "@/components/ui/todo-marker";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About and background"
      className="max-w-[1120px] mx-auto px-6 section-padding border-t hairline-t"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono-label text-text-muted">03 / About</span>
        <h2 className="font-h2 text-text mt-2">
          Systems engineering, evaluation, and background.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Main Editorial Copy (Left / Main) */}
        <div className="md:col-span-8 space-y-6 text-text leading-relaxed text-base sm:text-lg">
          <p>{aboutCopy.p1}</p>
          <p className="text-text-muted">{aboutCopy.p2}</p>

          <div className="pt-4 border-t hairline-t">
            <p className="font-medium text-text text-sm sm:text-base">
              {aboutCopy.lookingFor}
            </p>
          </div>

          {/* Direct Profile Links */}
          <div className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs text-text-muted">
            <a
              href={identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-150 underline underline-offset-4 focus-visible:rounded"
            >
              GitHub ↗
            </a>
            <a
              href={identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-150 underline underline-offset-4 focus-visible:rounded"
            >
              LinkedIn ↗
            </a>
            <Link
              href="/resume"
              className="text-text hover:text-accent transition-colors duration-150 underline underline-offset-4 focus-visible:rounded"
            >
              Résumé (Web & PDF) →
            </Link>

            {/* Kaggle link: Omitted site-wide unless verified per spec */}
            {kaggleStatus.verified ? (
              <a
                href="https://kaggle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors duration-150 underline underline-offset-4 focus-visible:rounded"
              >
                Kaggle ↗
              </a>
            ) : (
              <div className="inline-flex items-center">
                <TodoMarker label={kaggleStatus.marker} />
              </div>
            )}
          </div>
        </div>

        {/* Education & Academic Credentials (Right / Sidebar) */}
        <div className="md:col-span-4 border hairline-border rounded-lg bg-surface p-6 font-mono text-xs space-y-4">
          <div className="text-text-muted uppercase tracking-wider text-[11px] pb-2 border-b hairline-b">
            Academic Background
          </div>

          <div>
            <div className="text-text font-medium text-sm">
              {education.degree}
            </div>
            <div className="text-text-muted mt-0.5">
              {education.institution}
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-2 border-t hairline-t text-text-muted">
            <span>Cumulative GPA</span>
            <span className="text-text font-semibold">{education.cgpa}</span>
          </div>

          <div className="pt-2 border-t hairline-t text-text-muted">
            <div className="text-[11px] text-text-faint mb-1">
              Graduation Status
            </div>
            <TodoMarker label={education.graduationDateMarker} />
          </div>
        </div>
      </div>
    </section>
  );
}
