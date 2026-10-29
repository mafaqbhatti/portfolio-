import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 py-28 sm:py-36 flex flex-col items-start justify-center">
      <span className="font-mono-label text-text-muted mb-2">
        404 / Not Found
      </span>
      <h1 className="font-hero text-text mb-4">Page does not exist.</h1>
      <p className="text-text-muted text-base sm:text-lg max-w-[60ch] leading-relaxed mb-8">
        The requested address was not found in the engineering registry. It may
        have been moved, archived, or is still in development.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-medium bg-accent text-accent-ink hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to index</span>
      </Link>
    </div>
  );
}
