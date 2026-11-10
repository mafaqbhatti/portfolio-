"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FlagshipProject } from "@/content/types";
import { TodoMarker } from "@/components/ui/todo-marker";

interface CaseStudyLayoutProps {
  project: FlagshipProject;
  prevProject?: FlagshipProject;
  nextProject?: FlagshipProject;
  children: React.ReactNode;
}

const TOC_SECTIONS = [
  { id: "summary", label: "01. Summary & Facts" },
  { id: "problem", label: "02. Problem & Constraints" },
  { id: "architecture", label: "03. Architecture" },
  { id: "decisions", label: "04. Key Decisions (Defend)" },
  { id: "evaluation", label: "05. Evaluation & Errors" },
  { id: "cost-latency", label: "06. Cost & Latency" },
  { id: "deployment", label: "07. Deployment & Monitoring" },
  { id: "lessons", label: "08. What Failed & Next" },
  { id: "links", label: "09. Links & Artifacts" },
];

export function CaseStudyLayout({
  project,
  prevProject,
  nextProject,
  children,
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("summary");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const section of TOC_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-[1120px] mx-auto px-6 py-12 sm:py-16">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text transition-colors duration-150 focus-visible:rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to selected work</span>
        </Link>
      </div>

      {/* Hero Title & Headline */}
      <div className="mb-12 border-b hairline-b pb-8">
        <div className="font-mono text-xs text-text-muted mb-2">
          Case Study / {project.index}
        </div>
        <h1 className="font-h2 text-text mb-4">{project.title}</h1>
        <p className="text-lg text-text-muted max-w-[68ch] leading-relaxed">
          {project.headline}
        </p>

        {project.markers.length > 0 && (
          <div className="mt-4">
            <TodoMarker label={project.markers[0]} />
          </div>
        )}
      </div>

      {/* Two-Column Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Sticky Table of Contents (Desktop only) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24">
          <div className="border hairline-border rounded bg-surface p-5">
            <div className="font-mono text-xs text-text-muted pb-3 mb-3 border-b hairline-b font-medium">
              Table of Contents
            </div>
            <nav className="space-y-1 font-mono text-xs">
              {TOC_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block py-1.5 px-2 rounded transition-colors duration-150 ${
                    activeSection === section.id
                      ? "text-accent bg-surface-2 font-medium"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Right Column: Case Study Narrative (Prose max 68ch / 720px) */}
        <article className="lg:col-span-8 max-w-[720px] prose-editorial">
          {children}
        </article>
      </div>

      {/* Prev / Next Case Study Navigation */}
      <div className="mt-24 pt-8 border-t hairline-t grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className="border hairline-border rounded p-5 hover:bg-surface-2/60 transition-colors duration-150 flex flex-col items-start gap-1 group focus-visible:rounded"
          >
            <span className="text-text-muted flex items-center gap-1 group-hover:-translate-x-0.5 transition-transform duration-150">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous case study
            </span>
            <span className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors duration-150">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="border hairline-border rounded p-5 hover:bg-surface-2/60 transition-colors duration-150 flex flex-col items-start sm:items-end gap-1 group focus-visible:rounded"
          >
            <span className="text-text-muted flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-150">
              Next case study <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors duration-150 text-left sm:text-right">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

// Reusable Section Shell with Anchor ID
export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-10 border-b hairline-b scroll-mt-24">
      <div className="mb-4">
        <span className="font-mono text-xs text-text-muted">{index}</span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text mt-1">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-text leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </section>
  );
}

// Facts Bar Component (Section 1)
export function FactsBar({
  stack,
  timeframe,
  role,
  status,
  links,
}: {
  stack: string[];
  timeframe: string;
  role: string;
  status: string;
  links: Array<{ label: string; href?: string; marker?: string }>;
}) {
  return (
    <div className="my-6 border hairline-border rounded bg-surface p-5 font-mono text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <span className="text-text-muted text-[11px] block mb-1 font-medium">
            Role & Ownership
          </span>
          <span className="text-text font-medium">{role}</span>
        </div>

        <div>
          <span className="text-text-muted text-[11px] block mb-1 font-medium">
            Timeframe & Status
          </span>
          <span className="text-text font-medium">
            {timeframe} · {status}
          </span>
        </div>

        <div className="sm:col-span-2 pt-2 border-t hairline-t">
          <span className="text-text-muted text-[11px] block mb-1 font-medium">
            Core Stack
          </span>
          <div className="text-text-faint">{stack.join(" · ")}</div>
        </div>

        <div className="sm:col-span-2 pt-2 border-t hairline-t">
          <span className="text-text-muted text-[11px] block mb-1 font-medium">
            Artifacts & References
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {links.map((link, idx) => (
              <span key={idx}>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-text hover:text-accent underline underline-offset-2 transition-colors duration-150"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <span className="text-text-muted">{link.label}:</span>
                    <TodoMarker label={link.marker || "TODO(owner): link"} />
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Key Decision Block (Section 4 - "Defend")
export function DecisionCard({
  decision,
  choice,
  alternatives,
  reason,
}: {
  decision: string;
  choice: string;
  alternatives: string;
  reason: string;
}) {
  return (
    <div className="my-4 border hairline-border rounded bg-surface p-5 space-y-3 font-sans text-sm">
      <div className="font-mono text-xs text-accent font-semibold">
        Decision: {decision}
      </div>

      <div>
        <span className="font-mono text-xs text-text-muted block">
          Selected Approach:
        </span>
        <span className="text-text font-medium">{choice}</span>
      </div>

      <div>
        <span className="font-mono text-xs text-text-muted block">
          Alternatives Evaluated:
        </span>
        <span className="text-text-faint">{alternatives}</span>
      </div>

      <div className="pt-2 border-t hairline-t">
        <span className="font-mono text-xs text-text-muted block">
          Engineering Rationale:
        </span>
        <p className="text-text-muted text-xs leading-relaxed mt-1">{reason}</p>
      </div>
    </div>
  );
}
