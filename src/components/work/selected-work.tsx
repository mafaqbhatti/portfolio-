"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { flagshipProjects, compactProjects } from "@/content/projects";
import { TodoMarker } from "@/components/ui/todo-marker";

export function SelectedWork() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Architectural preview cards
  const getPreviewContent = (slug: string) => {
    switch (slug) {
      case "flood-forecasting":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-surface border border-border rounded shadow-xl">
            <div className="font-mono text-[10px] text-text-muted flex justify-between">
              <span>SAR + SATELLITE FUSION</span>
              <span className="text-cyan font-semibold">IoU 0.65</span>
            </div>
            <div className="py-2">
              <div className="text-xs font-mono text-text font-bold mb-1">
                ResNet18 + ConvLSTM + U-Net
              </div>
              <div className="text-[11px] text-text-muted">
                19,964 held-out multi-sensor samples across Pakistan
              </div>
            </div>
            <div className="font-mono text-[10px] text-text-faint">
              PyTorch · Sentinel-1 · GPM · SMAP
            </div>
          </div>
        );
      case "finops-graphrag":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-surface border border-border rounded shadow-xl">
            <div className="font-mono text-[10px] text-text-muted flex justify-between">
              <span>LOCAL KNOWLEDGE GRAPH</span>
              <span className="text-accent font-semibold">50× COST</span>
            </div>
            <div className="py-2">
              <div className="text-xs font-mono text-text font-bold mb-1">
                LightRAG + Gemini 2.5 Flash
              </div>
              <div className="text-[11px] text-text-muted">
                Dual-level entity extraction with NanoVectorDB traversal
              </div>
            </div>
            <div className="font-mono text-[10px] text-text-faint">
              BGE-small · NanoVectorDB · FastAPI · AWS EC2
            </div>
          </div>
        );
      case "market-intelligence":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-surface border border-border rounded shadow-xl">
            <div className="font-mono text-[10px] text-text-muted flex justify-between">
              <span>FAN-OUT / FAN-IN MULTI-AGENT</span>
              <span className="text-cyan font-semibold">5× FASTER</span>
            </div>
            <div className="py-2">
              <div className="text-xs font-mono text-text font-bold mb-1">
                LangGraph + Groq LLaMA-3.3
              </div>
              <div className="text-[11px] text-text-muted">
                5 concurrent agents synthesizing into one trading verdict
              </div>
            </div>
            <div className="font-mono text-[10px] text-text-faint">
              AWS EC2 · Streamlit Interface
            </div>
          </div>
        );
      case "hireflow-recruitment":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-surface border border-border rounded shadow-xl">
            <div className="font-mono text-[10px] text-text-muted flex justify-between">
              <span>AUTONOMOUS AGENT PIPELINE</span>
              <span className="text-cyan font-semibold">3-MIN CYCLE</span>
            </div>
            <div className="py-2">
              <div className="text-xs font-mono text-text font-bold mb-1">
                5-Agent Swarm · Apache Kafka · Redis
              </div>
              <div className="text-[11px] text-text-muted">
                Screening, assessment, live voice interview & executive
                synthesis
              </div>
            </div>
            <div className="font-mono text-[10px] text-text-faint">
              Groq LLaMA 3 70B · Next.js 14 · Streamlit
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      aria-label="Selected case studies and implementations"
      className="max-w-[1120px] mx-auto px-6 section-padding"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs text-text-muted">
          01 / Selected work
        </span>
        <h2 className="font-h2 text-text mt-2">
          Systems shipped and measured in production.
        </h2>
      </div>

      {/* Flagship Case Study Dossiers */}
      <div className="relative border-t hairline-t divide-y divide-border">
        {flagshipProjects.map((project) => (
          <div
            key={project.slug}
            onMouseEnter={() => setHoveredSlug(project.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
            className="group relative"
          >
            <Link
              href={`/work/${project.slug}`}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline transition-colors duration-150 group-hover:bg-surface-2/60 px-3 -mx-3 rounded"
            >
              {/* Dossier Index */}
              <div className="md:col-span-1 font-mono text-sm text-text-muted">
                {project.index}
              </div>

              {/* Title & Structured Outcome */}
              <div className="md:col-span-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text group-hover:text-accent transition-colors duration-150">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">
                  {project.outcome}
                </p>
                {project.markers.length > 0 && (
                  <div className="mt-2">
                    <TodoMarker label={project.markers[0]} />
                  </div>
                )}
              </div>

              {/* Stack (Mono) */}
              <div className="md:col-span-3 font-mono text-xs text-text-faint group-hover:text-text-muted transition-colors duration-150">
                {project.stack.slice(0, 3).join(" · ")}
              </div>

              {/* Year & Action Arrow */}
              <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 font-mono text-xs text-text-muted">
                <span>{project.year}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </div>
            </Link>

            {/* Desktop Floating Preview Card */}
            {hoveredSlug === project.slug && (
              <div
                aria-hidden="true"
                className="hidden lg:block pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 z-30 w-72 h-44 animate-in fade-in duration-150"
              >
                {getPreviewContent(project.slug)}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Compact Engineering Index Table */}
      <div className="mt-20">
        <div className="mb-6 flex items-baseline justify-between border-b hairline-b pb-3">
          <span className="font-mono text-xs text-text-muted">
            More / Additional implementations
          </span>
          <span className="font-mono text-xs text-text-faint">
            Engineering Index
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b hairline-b text-text-muted">
                <th className="py-3 pr-6 font-medium">Project</th>
                <th className="py-3 px-6 font-medium hidden sm:table-cell">
                  Stack
                </th>
                <th className="py-3 px-6 font-medium">Description</th>
                <th className="py-3 pl-6 font-medium text-right">Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {compactProjects.map((item) => (
                <tr
                  key={item.name}
                  className="hover:bg-surface-2/40 transition-colors duration-150"
                >
                  <td className="py-4 pr-6 text-text font-medium whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-text-faint hidden sm:table-cell whitespace-nowrap">
                    {item.tech}
                  </td>
                  <td className="py-4 px-6 text-text-muted font-sans text-xs leading-relaxed">
                    {item.description}
                  </td>
                  <td className="py-4 pl-6 text-right whitespace-nowrap">
                    {item.permissionMarker ? (
                      <TodoMarker label={item.permissionMarker} />
                    ) : item.linkMarker ? (
                      <TodoMarker label={item.linkMarker} />
                    ) : (
                      <span className="text-text-faint">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
