import React from "react";

export function MarketIntelligenceDiagram() {
  return (
    <figure className="my-8 border hairline-border rounded-lg bg-surface p-4 sm:p-6 card-editorial">
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-[11px] text-text-muted">
        <span className="uppercase tracking-wider">
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
              rx="6"
              fill="var(--surface-2)"
              stroke="var(--border)"
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

          {/* Fan-Out Curves */}
          <path
            d="M 125 160 C 180 160, 200 45, 245 45"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 102, 245 102"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 160, 245 160"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 218, 245 218"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 125 160 C 180 160, 200 275, 245 275"
            stroke="var(--border)"
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
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--border)"
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
              Price Action Agent
            </text>

            <rect
              x="245"
              y="82"
              width="130"
              height="40"
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--border)"
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
              Sentiment Agent
            </text>

            <rect
              x="245"
              y="140"
              width="130"
              height="40"
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--border)"
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
              On-Chain Agent
            </text>

            <rect
              x="245"
              y="198"
              width="130"
              height="40"
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--border)"
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
              Macro Agent
            </text>

            <rect
              x="245"
              y="255"
              width="130"
              height="40"
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--border)"
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
              Risk Agent
            </text>
          </g>

          {/* Fan-In Curves */}
          <path
            d="M 375 45 C 420 45, 440 160, 485 160"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 102 C 420 102, 440 160, 485 160"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 160 C 420 160, 440 160, 485 160"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 218 C 420 218, 440 160, 485 160"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M 375 275 C 420 275, 440 160, 485 160"
            stroke="var(--border)"
            strokeWidth="1.25"
            fill="none"
          />

          {/* Output Verdict Node */}
          <g>
            <rect
              x="485"
              y="125"
              width="130"
              height="70"
              rx="6"
              fill="var(--surface-2)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text
              x="550"
              y="155"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              TRADING VERDICT
            </text>
            <text
              x="550"
              y="172"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              LangGraph Fan-In
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint">
        Figure 3: Concurrent fan-out / fan-in multi-agent graph. Five
        domain-specialist agents execute concurrently on Groq-hosted LLaMA-3.3,
        delivering a 5× end-to-end latency reduction over serial chains.
      </figcaption>
    </figure>
  );
}
