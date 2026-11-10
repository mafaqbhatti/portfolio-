"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface HeaderProps {
  hasWritingPosts?: boolean;
}

export function Header({ hasWritingPosts = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-none border-b hairline-b"
          : "bg-bg border-b border-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark (Space Grotesk) */}
        <Link
          href="/"
          className="font-display font-bold text-lg sm:text-xl text-text hover:text-accent transition-colors duration-150 tracking-tight focus-visible:rounded"
        >
          Afaq Bhatti
        </Link>

        {/* Center/Right Nav (Small Mono) */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-4 sm:gap-7 font-mono text-xs text-text-muted"
        >
          <Link
            href="/#work"
            className="hover:text-text transition-colors duration-150 focus-visible:rounded"
          >
            Work
          </Link>
          <Link
            href="/#experience"
            className="hover:text-text transition-colors duration-150 focus-visible:rounded"
          >
            Experience
          </Link>
          <Link
            href="/#about"
            className="hover:text-text transition-colors duration-150 focus-visible:rounded"
          >
            About
          </Link>
          {hasWritingPosts && (
            <Link
              href="/writing"
              className="hover:text-text transition-colors duration-150 focus-visible:rounded"
            >
              Writing
            </Link>
          )}
          <Link
            href="/resume"
            className="hover:text-text transition-colors duration-150 focus-visible:rounded"
          >
            Résumé
          </Link>
        </nav>

        {/* Actions: Clean architectural availability chip & Theme toggle */}
        <div className="flex items-center gap-3">
          <div
            className="hidden md:inline-flex items-center px-2.5 py-1 rounded border border-border font-mono text-[11px] text-text-muted bg-surface"
            title="Candidate availability"
          >
            <span>Open to AI/ML roles</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
