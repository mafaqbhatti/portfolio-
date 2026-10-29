"use client";

import { useEffect, useRef, useState } from "react";

export function HeroAgentDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={containerRef}
      className="w-full max-w-[500px] border hairline-border rounded-lg bg-surface p-4 sm:p-5 card-editorial"
    >
      {/* CAD Schematic Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b hairline-b font-mono text-[11px] text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="uppercase tracking-wider">Topology // DAG</span>
        </div>
        <span className="text-text-faint">LangGraph · 5 Agents</span>
      </div>

      {/* Precision SVG Schematic */}
      <div className="relative w-full aspect-[460/340] flex items-center justify-center">
        <svg
          viewBox="0 0 460 340"
          className="w-full h-full select-none"
          role="img"
          aria-label="Illustrative architecture diagram: Market data input fans out to 5 parallel specialist agents (Price Action, Sentiment, On-Chain, Macro, Risk), which synthesize concurrently into a single trading verdict."
        >
          <defs>
            {/* Subtle path definitions for motion */}
            <path id="cad-e1" d="M 112 170 C 138 170, 142 40, 168 40" />
            <path id="cad-e2" d="M 112 170 C 138 170, 142 105, 168 105" />
            <path id="cad-e3" d="M 112 170 L 168 170" />
            <path id="cad-e4" d="M 112 170 C 138 170, 142 235, 168 235" />
            <path id="cad-e5" d="M 112 170 C 138 170, 142 300, 168 300" />

            <path id="cad-o1" d="M 292 40 C 318 40, 322 170, 348 170" />
            <path id="cad-o2" d="M 292 105 C 318 105, 322 170, 348 170" />
            <path id="cad-o3" d="M 292 170 L 348 170" />
            <path id="cad-o4" d="M 292 235 C 318 235, 322 170, 348 170" />
            <path id="cad-o5" d="M 292 300 C 318 300, 322 170, 348 170" />
          </defs>

          {/* Technical Corner Registration Crosshairs */}
          <g
            stroke="var(--border)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          >
            <line x1="10" y1="14" x2="18" y2="14" />
            <line x1="14" y1="10" x2="14" y2="18" />

            <line x1="442" y1="14" x2="450" y2="14" />
            <line x1="446" y1="10" x2="446" y2="18" />

            <line x1="10" y1="326" x2="18" y2="326" />
            <line x1="14" y1="322" x2="14" y2="330" />

            <line x1="442" y1="326" x2="450" y2="326" />
            <line x1="446" y1="322" x2="446" y2="330" />
          </g>

          {/* Hairline Connective Wires */}
          <g fill="none" stroke="var(--border)" strokeWidth="1">
            <path d="M 112 170 C 138 170, 142 40, 168 40" />
            <path d="M 112 170 C 138 170, 142 105, 168 105" />
            <path d="M 112 170 L 168 170" />
            <path d="M 112 170 C 138 170, 142 235, 168 235" />
            <path d="M 112 170 C 138 170, 142 300, 168 300" />

            <path d="M 292 40 C 318 40, 322 170, 348 170" />
            <path d="M 292 105 C 318 105, 322 170, 348 170" />
            <path d="M 292 170 L 348 170" />
            <path d="M 292 235 C 318 235, 322 170, 348 170" />
            <path d="M 292 300 C 318 300, 322 170, 348 170" />
          </g>

          {/* Micro Data Flow Pulses (Respects motion & visibility) */}
          {isVisible && (
            <g className="data-flow-pulse" fill="var(--accent)">
              <circle r="1.75">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0s">
                  <mpath href="#cad-e1" />
                </animateMotion>
              </circle>
              <circle r="1.75">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.3s">
                  <mpath href="#cad-e2" />
                </animateMotion>
              </circle>
              <circle r="1.75">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s">
                  <mpath href="#cad-e3" />
                </animateMotion>
              </circle>
              <circle r="1.75">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.9s">
                  <mpath href="#cad-e4" />
                </animateMotion>
              </circle>
              <circle r="1.75">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#cad-e5" />
                </animateMotion>
              </circle>

              <circle r="1.75" opacity="0.8">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s">
                  <mpath href="#cad-o1" />
                </animateMotion>
              </circle>
              <circle r="1.75" opacity="0.8">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.7s">
                  <mpath href="#cad-o2" />
                </animateMotion>
              </circle>
              <circle r="1.75" opacity="0.8">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.0s">
                  <mpath href="#cad-o3" />
                </animateMotion>
              </circle>
              <circle r="1.75" opacity="0.8">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.3s">
                  <mpath href="#cad-o4" />
                </animateMotion>
              </circle>
              <circle r="1.75" opacity="0.8">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.6s">
                  <mpath href="#cad-o5" />
                </animateMotion>
              </circle>
            </g>
          )}

          {/* Node 00: Market Data Input */}
          <g>
            <rect
              x="20"
              y="148"
              width="92"
              height="44"
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="28"
              y="163"
              fill="var(--text-faint)"
              fontSize="8.5"
              fontFamily="var(--font-geist-mono)"
              letterSpacing="0.05em"
            >
              [SRC:STREAM]
            </text>
            <text
              x="28"
              y="179"
              fill="var(--text)"
              fontSize="10.5"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
            >
              Market Data
            </text>
            {/* Terminal Pin */}
            <circle cx="112" cy="170" r="2" fill="var(--text-muted)" />
          </g>

          {/* Parallel Specialist Agents (01 through 05) */}
          {[
            { id: "01", label: "Price Action", y: 22, cy: 40 },
            { id: "02", label: "Sentiment", y: 87, cy: 105 },
            { id: "03", label: "On-Chain", y: 152, cy: 170 },
            { id: "04", label: "Macro", y: 217, cy: 235 },
            { id: "05", label: "Risk", y: 282, cy: 300 },
          ].map((agent) => (
            <g key={agent.id}>
              {/* In/Out Pins */}
              <circle cx="168" cy={agent.cy} r="2" fill="var(--text-faint)" />
              <circle cx="292" cy={agent.cy} r="2" fill="var(--text-faint)" />

              <rect
                x="168"
                y={agent.y}
                width="124"
                height="36"
                rx="4"
                fill="var(--surface-2)"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x="178"
                y={agent.y + 14}
                fill="var(--text-faint)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
                letterSpacing="0.06em"
              >
                AGENT.{agent.id}
              </text>
              <text
                x="178"
                y={agent.y + 27}
                fill="var(--text)"
                fontSize="10"
                fontFamily="var(--font-geist-mono)"
                fontWeight="500"
              >
                {agent.label}
              </text>
            </g>
          ))}

          {/* Node 06: Fan-In Synthesis / Trading Verdict */}
          <g>
            {/* In Pin */}
            <circle cx="348" cy="170" r="2" fill="var(--accent)" />

            <rect
              x="348"
              y="148"
              width="96"
              height="44"
              rx="4"
              fill="var(--surface-2)"
              stroke="var(--accent)"
              strokeWidth="1"
            />
            <text
              x="356"
              y="163"
              fill="var(--accent)"
              fontSize="8.5"
              fontFamily="var(--font-geist-mono)"
              letterSpacing="0.05em"
              fontWeight="600"
            >
              [SYN:VERDICT]
            </text>
            <text
              x="356"
              y="179"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="500"
            >
              Trading Verdict
            </text>
          </g>
        </svg>
      </div>

      {/* Mandatory spec caption */}
      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint text-center sm:text-left">
        Illustrative architecture: market-intelligence system, LangGraph, 5
        specialist agents.
      </figcaption>
    </figure>
  );
}
