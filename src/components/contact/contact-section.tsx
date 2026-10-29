import Link from "next/link";
import { identity } from "@/content/profile";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact and professional links"
      className="max-w-[1120px] mx-auto px-6 section-padding border-t hairline-t"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono-label text-text-muted">05 / Contact</span>
        <h2 className="font-h2 text-text mt-2">
          Start an engineering conversation.
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-[68ch]">
          Open to full-time AI/ML engineering roles and remote teams shipping
          production LLM systems.
        </p>
      </div>

      <div className="border hairline-border rounded-lg bg-surface p-8 sm:p-12 space-y-8">
        <div>
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
            Primary Email (Click or Copy)
          </div>
          <ObfuscatedEmail large={true} showCopyButton={true} />
        </div>

        <div className="pt-8 border-t hairline-t grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div>
            <div className="text-text-muted uppercase tracking-wider text-[11px] mb-1">
              Code & Projects
            </div>
            <a
              href={identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent underline underline-offset-4 transition-colors duration-150 inline-flex items-center gap-1 focus-visible:rounded"
            >
              <span>{identity.githubHandle}</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <div className="text-text-muted uppercase tracking-wider text-[11px] mb-1">
              Network
            </div>
            <a
              href={identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent underline underline-offset-4 transition-colors duration-150 inline-flex items-center gap-1 focus-visible:rounded"
            >
              <span>{identity.linkedinHandle}</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <div className="text-text-muted uppercase tracking-wider text-[11px] mb-1">
              Document
            </div>
            <Link
              href="/resume"
              className="text-text hover:text-accent underline underline-offset-4 transition-colors duration-150 inline-flex items-center gap-1 focus-visible:rounded"
            >
              <span>View Web Résumé</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
