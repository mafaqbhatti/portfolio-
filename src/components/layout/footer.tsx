import Link from "next/link";
import { identity } from "@/content/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t hairline-t py-12 mt-24 text-text-muted font-mono text-xs">
      <div className="max-w-[1120px] mx-auto px-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span>
              © {currentYear} {identity.fullName}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${identity.email}`}
              className="hover:text-text transition-colors duration-150 focus-visible:rounded"
            >
              Email
            </a>
            <a
              href={identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors duration-150 focus-visible:rounded"
            >
              GitHub
            </a>
            <a
              href={identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors duration-150 focus-visible:rounded"
            >
              LinkedIn
            </a>
            <Link
              href="/resume"
              className="hover:text-text transition-colors duration-150 focus-visible:rounded"
            >
              Résumé
            </Link>
          </div>
        </div>

        {/* Minimalist Monospace Technical Coordinates */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-text-faint">
          <span>Islamabad, PK</span>
          <span>ARCH: SWISS SYSTEMS MODERNISM // NEXT.JS 15</span>
        </div>
      </div>
    </footer>
  );
}
