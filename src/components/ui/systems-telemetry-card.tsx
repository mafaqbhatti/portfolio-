"use client";

import React from "react";

export function SystemsTelemetryCard() {
  return (
    <div
      role="region"
      aria-label="Systems telemetry and runtime performance"
      className="w-full max-w-[500px] border hairline-border rounded bg-surface p-5 text-text"
    >
      {/* Telemetry Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-xs text-text-muted">
        <span className="font-semibold text-text tracking-tight">
          SYS.TELEMETRY // RUNTIME
        </span>
        <span className="text-[11px] text-cyan font-mono">
          STATUS: PRODUCTION
        </span>
      </div>

      {/* Latency & Compute Metrics Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-2.5 rounded bg-surface-2 border border-border">
          <div className="text-[10px] font-mono text-text-muted mb-0.5">
            P99 LATENCY
          </div>
          <div className="text-lg font-mono font-bold text-text">142ms</div>
          <div className="text-[10px] font-mono text-cyan">5× speedup</div>
        </div>

        <div className="p-2.5 rounded bg-surface-2 border border-border">
          <div className="text-[10px] font-mono text-text-muted mb-0.5">
            RAG INFERENCE
          </div>
          <div className="text-lg font-mono font-bold text-text">50×</div>
          <div className="text-[10px] font-mono text-accent">
            Cost reduction
          </div>
        </div>

        <div className="p-2.5 rounded bg-surface-2 border border-border">
          <div className="text-[10px] font-mono text-text-muted mb-0.5">
            EVAL TESTS
          </div>
          <div className="text-lg font-mono font-bold text-text">78/78</div>
          <div className="text-[10px] font-mono text-text-muted">Passing</div>
        </div>
      </div>

      {/* Architectural GraphRAG & Agent DAG Schematic */}
      <div className="w-full aspect-[440/220] rounded bg-surface-2 border border-border p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] text-text-muted">
          <span>GRAPH PIPELINE TOPOLOGY</span>
          <span className="text-text-faint">LIGHTRAG + LANGGRAPH</span>
        </div>

        <div className="relative w-full h-[140px] flex items-center justify-center">
          <svg
            viewBox="0 0 400 130"
            className="w-full h-full select-none"
            role="img"
            aria-label="Topology schematic showing prompt ingress routing through LightRAG entity retrieval and 5 parallel agents into a verified verdict."
          >
            <defs>
              <linearGradient id="swissWire" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00D2B4" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Hairline Wires */}
            <g fill="none" stroke="var(--border)" strokeWidth="1">
              <path d="M 75 65 L 145 35" />
              <path d="M 75 65 L 145 65" />
              <path d="M 75 65 L 145 95" />

              <path d="M 235 35 L 305 65" />
              <path d="M 235 65 L 305 65" />
              <path d="M 235 95 L 305 65" />
            </g>

            {/* Ingress Node */}
            <g>
              <rect
                x="15"
                y="45"
                width="60"
                height="40"
                rx="2"
                fill="var(--surface)"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x="45"
                y="62"
                textAnchor="middle"
                fill="var(--text-muted)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                INGRESS
              </text>
              <text
                x="45"
                y="74"
                textAnchor="middle"
                fill="var(--text)"
                fontSize="9.5"
                fontWeight="600"
                fontFamily="var(--font-geist-mono)"
              >
                Query
              </text>
            </g>

            {/* Middle Parallel Routing Nodes */}
            <g>
              {/* Node 1: NanoVectorDB */}
              <rect
                x="145"
                y="18"
                width="90"
                height="32"
                rx="2"
                fill="var(--surface)"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x="190"
                y="31"
                textAnchor="middle"
                fill="var(--cyan)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                LOCAL KV
              </text>
              <text
                x="190"
                y="43"
                textAnchor="middle"
                fill="var(--text)"
                fontSize="9"
                fontFamily="var(--font-geist-mono)"
              >
                NanoVectorDB
              </text>

              {/* Node 2: Gemini 2.5 Flash */}
              <rect
                x="145"
                y="52"
                width="90"
                height="32"
                rx="2"
                fill="var(--surface)"
                stroke="#1A56DB"
                strokeWidth="1"
              />
              <text
                x="190"
                y="65"
                textAnchor="middle"
                fill="#1A56DB"
                fontSize="8"
                fontWeight="600"
                fontFamily="var(--font-geist-mono)"
              >
                SYNTHESIS
              </text>
              <text
                x="190"
                y="77"
                textAnchor="middle"
                fill="var(--text)"
                fontSize="9"
                fontFamily="var(--font-geist-mono)"
              >
                Gemini 2.5 Flash
              </text>

              {/* Node 3: Groq LLaMA-3.3 */}
              <rect
                x="145"
                y="86"
                width="90"
                height="32"
                rx="2"
                fill="var(--surface)"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x="190"
                y="99"
                textAnchor="middle"
                fill="var(--text-muted)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                MULTI-AGENT
              </text>
              <text
                x="190"
                y="111"
                textAnchor="middle"
                fill="var(--text)"
                fontSize="9"
                fontFamily="var(--font-geist-mono)"
              >
                Groq LLaMA-3.3
              </text>
            </g>

            {/* Output Node: Verified Response */}
            <g>
              <rect
                x="305"
                y="45"
                width="80"
                height="40"
                rx="2"
                fill="var(--surface)"
                stroke="var(--cyan)"
                strokeWidth="1"
              />
              <text
                x="345"
                y="62"
                textAnchor="middle"
                fill="var(--cyan)"
                fontSize="8"
                fontWeight="600"
                fontFamily="var(--font-geist-mono)"
              >
                DEFENSE
              </text>
              <text
                x="345"
                y="74"
                textAnchor="middle"
                fill="var(--text)"
                fontSize="9.5"
                fontWeight="600"
                fontFamily="var(--font-geist-mono)"
              >
                Verdict
              </text>
            </g>
          </svg>
        </div>

        <div className="flex items-center justify-between font-mono text-[10px] text-text-faint pt-1 border-t border-border">
          <span>Active Nodes: 5 Parallel</span>
          <span>Security Guardrails: Verified</span>
        </div>
      </div>

      {/* Active Cluster Readout */}
      <div className="mt-4 pt-3 border-t hairline-t grid grid-cols-2 gap-2 text-[11px] font-mono text-text-muted">
        <div>
          <span className="text-text-faint">CLUSTER: </span>
          <span>AWS EC2 + Colab T4</span>
        </div>
        <div className="text-right">
          <span className="text-text-faint">STACK: </span>
          <span>FastAPI · PyTorch · DVC</span>
        </div>
      </div>
    </div>
  );
}
