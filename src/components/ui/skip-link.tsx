import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-ink focus:font-mono focus:text-xs focus:font-semibold focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
    >
      Skip to main content
    </a>
  );
}
