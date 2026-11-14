import React from "react";

export function GraphRAGDiagram() {
  return (
    <figure className="my-8 border hairline-border rounded bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-[11px] text-text-muted">
        <span className="font-semibold text-text">
          Dual-Level Retrieval Pipeline
        </span>
        <span className="text-text-faint">
          LightRAG · Gemini 2.5 Flash · BGE-small
        </span>
      </div>

      <div className="w-full aspect-[640/300] flex items-center justify-center">
        <svg
          viewBox="0 0 640 300"
          className="w-full h-full"
          role="img"
          aria-label="FinOps GraphRAG architecture: Ingestion extracts entities and relations via Gemini 2.5 Flash into a knowledge graph. Queries execute dual-level retrieval combining local entity neighborhood search in NanoVectorDB with global graph community summaries."
        >
          {/* Query Ingestion */}
          <g>
            <rect
              x="25"
              y="110"
              width="100"
              height="70"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="75"
              y="142"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              QUERY
            </text>
            <text
              x="75"
              y="160"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              User Prompt
            </text>
          </g>

          <path d="M 125 145 L 175 145" stroke="#1E2638" strokeWidth="1.5" />

          {/* Router */}
          <g>
            <rect
              x="175"
              y="95"
              width="110"
              height="100"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1"
            />
            <text
              x="230"
              y="130"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              LIGHTRAG
            </text>
            <text
              x="230"
              y="148"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Dual Router
            </text>
            <text
              x="230"
              y="172"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Hybrid Retrieval
            </text>
          </g>

          {/* Dual Paths */}
          <path
            d="M 285 125 C 320 125, 330 65, 360 65"
            stroke="#1E2638"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 285 165 C 320 165, 330 225, 360 225"
            stroke="#1E2638"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Local Retrieval */}
          <g>
            <rect
              x="360"
              y="30"
              width="130"
              height="70"
              rx="2"
              fill="var(--surface-2)"
              stroke="#00D2B4"
              strokeWidth="1"
            />
            <text
              x="425"
              y="58"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              LOCAL RETRIEVAL
            </text>
            <text
              x="425"
              y="76"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              NanoVectorDB
            </text>
            <text
              x="425"
              y="90"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Entity 1-hop subgraphs
            </text>
          </g>

          {/* Global Retrieval */}
          <g>
            <rect
              x="360"
              y="190"
              width="130"
              height="70"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="425"
              y="218"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              GLOBAL RETRIEVAL
            </text>
            <text
              x="425"
              y="236"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Community Summaries
            </text>
            <text
              x="425"
              y="250"
              textAnchor="middle"
              fill="var(--text-faint)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              High-level thematic clustering
            </text>
          </g>

          {/* Converge to Synthesis */}
          <path
            d="M 490 65 C 515 65, 520 125, 535 125"
            stroke="#1E2638"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 490 225 C 515 225, 520 165, 535 165"
            stroke="#1E2638"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Synthesis LLM */}
          <g>
            <rect
              x="535"
              y="105"
              width="85"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1.5"
            />
            <text
              x="577"
              y="135"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              SYNTHESIS
            </text>
            <text
              x="577"
              y="152"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Gemini 2.5
            </text>
            <text
              x="577"
              y="167"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Flash
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint">
        Figure 2: Dual-level GraphRAG topology. LightRAG combines low-cost local
        entity subgraphs via NanoVectorDB with clustered community summaries,
        avoiding dense brute-force chunk stuffing.
      </figcaption>
    </figure>
  );
}
