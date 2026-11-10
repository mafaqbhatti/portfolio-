import Link from "next/link";
import { proofMetrics } from "@/content/profile";
import { TodoMarker } from "@/components/ui/todo-marker";

export function ProofStrip() {
  return (
    <section
      aria-label="Verified system metrics"
      className="w-full border-y hairline-b hairline-t bg-surface"
    >
      <div className="max-w-[1120px] mx-auto px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {proofMetrics.map((metric, idx) => (
            <div
              key={metric.id}
              className={`${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-text tracking-tight">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="font-mono text-xs text-text-muted">
                    {metric.unit}
                  </span>
                )}
              </div>

              <div className="font-sans text-xs text-text font-semibold mb-1">
                {metric.label}
              </div>

              <p className="text-xs text-text-muted leading-relaxed mb-3">
                {metric.description}
              </p>

              {metric.permissionMarker ? (
                <div className="mt-1">
                  <TodoMarker label={metric.permissionMarker} />
                </div>
              ) : (
                <Link
                  href={metric.methodLink}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted hover:text-accent transition-colors duration-150 group focus-visible:rounded"
                >
                  <span>How measured</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                    →
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
