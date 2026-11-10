import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import {
  identity,
  education,
  experiences,
  stackCategories,
} from "@/content/profile";
import { flagshipProjects } from "@/content/projects";
import { TodoMarker } from "@/components/ui/todo-marker";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Web and PDF résumé for ${identity.fullName}, ${identity.role} based in ${identity.location}.`,
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="max-w-[840px] mx-auto px-6 py-12 sm:py-16">
      {/* Top Action Bar (Hidden on print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b hairline-b print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text transition-colors duration-150 focus-visible:rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to home</span>
        </Link>

        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="hidden sm:inline-block">
            <TodoMarker
              label={identity.resumePdfMarker || "TODO(owner): updated file"}
            />
          </div>

          <a
            href={identity.resumePdfUrl}
            download="Afaq_Bhatti_Resume.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded font-medium bg-accent text-accent-ink hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Résumé Document Sheet */}
      <article className="border hairline-border rounded bg-surface p-8 sm:p-12 print:border-none print:p-0 print:bg-transparent space-y-10">
        {/* Document Header */}
        <header className="border-b hairline-b pb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h1 className="font-display text-3xl sm:text-4xl text-text font-bold tracking-tight">
              {identity.fullName}
            </h1>
            <span className="font-mono text-sm text-accent font-medium">
              {identity.role}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <span>{identity.location}</span>
            <span>·</span>
            <ObfuscatedEmail showCopyButton={false} />
            <span>·</span>
            <a
              href={identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text underline underline-offset-2"
            >
              {identity.githubHandle}
            </a>
            <span>·</span>
            <a
              href={identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
            AI/ML Engineer focused on production LLM systems, GraphRAG retrieval
            engines, and multi-agent systems with rigorous empirical validation.{" "}
            {identity.openTo}.
          </p>
        </header>

        {/* Education Section */}
        <section aria-labelledby="resume-education">
          <h2
            id="resume-education"
            className="font-mono text-xs text-text font-semibold pb-2 border-b hairline-b mb-4"
          >
            Education
          </h2>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between font-mono text-xs">
              <span className="text-text font-semibold text-sm">
                {education.institution}
              </span>
              <span className="text-text-muted">Islamabad, Pakistan</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm text-text">
              <span>{education.degree}</span>
              <span className="font-mono text-xs text-text-muted">
                CGPA {education.cgpa}
              </span>
            </div>

            <div className="pt-1">
              <TodoMarker label={education.graduationDateMarker} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section aria-labelledby="resume-experience">
          <h2
            id="resume-experience"
            className="font-mono text-xs text-text font-semibold pb-2 border-b hairline-b mb-6"
          >
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between font-mono text-xs">
                  <span className="text-text font-semibold text-sm">
                    {exp.role} ·{" "}
                    <span className="font-normal text-text-muted">
                      {exp.company}
                    </span>
                  </span>
                  <span className="text-text-muted">
                    {exp.period} · {exp.location}
                  </span>
                </div>

                {exp.permissionMarker && (
                  <div className="py-1">
                    <TodoMarker label={exp.permissionMarker} />
                  </div>
                )}

                <ul className="space-y-2 text-xs sm:text-sm text-text-muted leading-relaxed list-outside pl-4">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="list-disc">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Flagship Projects Section */}
        <section aria-labelledby="resume-projects">
          <h2
            id="resume-projects"
            className="font-mono text-xs text-text font-semibold pb-2 border-b hairline-b mb-6"
          >
            Flagship Engineering Implementations
          </h2>

          <div className="space-y-6">
            {flagshipProjects.map((p) => (
              <div key={p.slug} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between font-mono text-xs">
                  <Link
                    href={`/work/${p.slug}`}
                    className="text-text font-semibold text-sm hover:text-accent underline underline-offset-2"
                  >
                    {p.title}
                  </Link>
                  <span className="text-text-muted">{p.year}</span>
                </div>

                <div className="font-mono text-[11px] text-text-faint">
                  Stack: {p.stack.join(" · ")}
                </div>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {p.headline}. {p.outcome}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section aria-labelledby="resume-stack">
          <h2
            id="resume-stack"
            className="font-mono text-xs text-text font-semibold pb-2 border-b hairline-b mb-4"
          >
            Technical Stack
          </h2>

          <div className="space-y-3 font-mono text-xs">
            {stackCategories.map((cat) => (
              <div
                key={cat.category}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2"
              >
                <span className="sm:col-span-4 text-text-muted font-medium">
                  {cat.category}:
                </span>
                <span className="sm:col-span-8 text-text">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
