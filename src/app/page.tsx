import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";
import { identity } from "@/content/profile";
import { HeroAgentDiagram } from "@/components/diagrams/hero-agent-diagram";
import { ProofStrip } from "@/components/ui/proof-strip";
import { SelectedWork } from "@/components/work/selected-work";
import { ExperienceSection } from "@/components/experience/experience-section";
import { AboutSection } from "@/components/about/about-section";
import { StackSection } from "@/components/stack/stack-section";
import { ContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section
        aria-label="Introduction and positioning"
        className="max-w-[1120px] mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Desktop 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{identity.location}</span>
              <span className="text-text-faint">/</span>
              <span>AI/ML Engineering</span>
            </div>

            <h1 className="font-hero text-text text-balance">
              I build LLM systems that hold up in production, and measure
              whether they do.
            </h1>

            <p className="mt-6 text-text-muted text-base sm:text-lg leading-relaxed max-w-[60ch]">
              {identity.role} in {identity.location}. Agentic systems, GraphRAG,
              and the MLOps around them. {identity.openTo}.
            </p>

            {/* Two CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded font-medium bg-accent text-accent-ink hover:opacity-95 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                <span>See case studies</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border hairline-border text-text hover:border-text hover:bg-surface transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FileText className="w-3.5 h-3.5 text-text-muted" />
                <span>Résumé</span>
              </Link>
            </div>
          </div>

          {/* Right Column (Desktop 5 cols): Hand-built SVG Architecture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroAgentDiagram />
          </div>
        </div>
      </section>

      {/* 2. PROOF STRIP */}
      <ProofStrip />

      {/* 3. SELECTED WORK & COMPACT TABLE */}
      <SelectedWork />

      {/* 4. EXPERIENCE */}
      <ExperienceSection />

      {/* 5. ABOUT & EDUCATION */}
      <AboutSection />

      {/* 6. STACK & USAGE LINKAGE */}
      <StackSection />

      {/* 7. CONTACT & OBFUSCATED EMAIL */}
      <ContactSection />
    </div>
  );
}
