import React from "react";

export function MarketIntelligenceDiagram() {
  return (
    <figure className="my-8 border hairline-border rounded bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-[11px] text-text-muted">
        <span className="font-semibold text-text">
          Multi-Agent Execution Graph
        </span>
        <span className="text-text-faint">LangGraph · Groq (LLaMA-3.3)</span>
      </div>

      <div className="w-full aspect-[640/320] flex items-center justify-center">
        <svg
          viewBox="0 0 640 320"
          className="w-full h-full"
          role="img"
          aria-label="Market Intelligence Graph Architecture: Market Data triggers concurrent fan-out to 5 independent specialist agents (Price Action, Sentiment, On-Chain, Macro, Risk). Outputs synchronize at a state aggregation barrier before final synthesis into a single trading verdict."
        >
          {/* Input Node */}
          <g>
            <rect
              x="25"
              y="125"
              width="100"
              height="70"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="75"
              y="155"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              MARKET DATA
            </text>
            <text
              x="75"
              y="172"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Feed Ingestion
            </text>
          </g>

          {/* Fan-Out Curves (Slate #1E2638) */}
          <path
            d="M 125 160 C 180 160, 200 45, 245 45"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 102, 245 102"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 160, 245 160"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 218, 245 218"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 275, 245 275"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />

          {/* 5 Specialist Agents */}
          <g>
            <rect
              x="245"
              y="25"
              width="130"
              height="40"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="310"
              y="49"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              01 Price Action
            </text>

            <rect
              x="245"
              y="82"
              width="130"
              height="40"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="310"
              y="106"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              02 Sentiment
            </text>

            <rect
              x="245"
              y="140"
              width="130"
              height="40"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="310"
              y="164"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              03 On-Chain
            </text>

            <rect
              x="245"
              y="198"
              width="130"
              height="40"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="310"
              y="222"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              04 Macro
            </text>

            <rect
              x="245"
              y="255"
              width="130"
              height="40"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="310"
              y="279"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              05 Risk Management
            </text>
          </g>

          {/* Fan-In Curves */}
          <path
            d="M 375 45 C 420 45, 435 160, 480 160"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 102 C 420 102, 435 160, 480 160"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 160 L 480 160"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 218 C 420 218, 435 160, 480 160"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 275 C 420 275, 435 160, 480 160"
            stroke="#1E2638"
            strokeWidth="1.25"
            fill="none"
          />

          {/* Verdict Synthesis Node */}
          <g>
            <rect
              x="480"
              y="125"
              width="130"
              height="70"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1.5"
            />
            <text
              x="545"
              y="152"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              VERDICT
            </text>
            <text
              x="545"
              y="170"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
            >
              Synthesized Decision
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint">
        Figure 3: LangGraph multi-agent execution topology. Five specialized
        agents execute concurrently via Groq LPU, converging at an aggregation
        barrier for weighted synthesis.
      </figcaption>
    </figure>
  );
}
