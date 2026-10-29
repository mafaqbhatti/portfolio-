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
      className="w-full max-w-[500px] border hairline-border rounded-lg bg-surface p-4 sm:p-5"
    >
      {/* Editorial Diagram Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b hairline-b font-mono text-[11px] text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="uppercase tracking-wider">Architecture</span>
        </div>
        <span className="text-text-faint">LangGraph · 5 Agents</span>
      </div>

      {/* Inline SVG Diagram */}
      <div className="relative w-full aspect-[440/340] flex items-center justify-center">
        <svg
          viewBox="0 0 440 340"
          className="w-full h-full"
          role="img"
          aria-label="Illustrative architecture diagram: Market data input fans out to 5 parallel specialist agents (Price Action, Sentiment, On-Chain, Macro, Risk), which synthesize concurrently into a single trading verdict."
        >
          <defs>
            <linearGradient id="edgeLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--border)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--border)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--border)" stopOpacity="0.8" />
            </linearGradient>

            {/* Subtle flow path definitions */}
            <path id="flow-e1" d="M 80 170 C 130 170, 150 40, 205 40" />
            <path id="flow-e2" d="M 80 170 C 130 170, 150 105, 205 105" />
            <path id="flow-e3" d="M 80 170 C 140 170, 160 170, 205 170" />
            <path id="flow-e4" d="M 80 170 C 130 170, 150 235, 205 235" />
            <path id="flow-e5" d="M 80 170 C 130 170, 150 300, 205 300" />

            <path id="flow-o1" d="M 235 40 C 290 40, 310 170, 360 170" />
            <path id="flow-o2" d="M 235 105 C 290 105, 310 170, 360 170" />
            <path id="flow-o3" d="M 235 170 C 290 170, 310 170, 360 170" />
            <path id="flow-o4" d="M 235 235 C 290 235, 310 170, 360 170" />
            <path id="flow-o5" d="M 235 300 C 290 300, 310 170, 360 170" />
          </defs>

          {/* Connective Curves */}
          <g fill="none" stroke="var(--border)" strokeWidth="1.25">
            <path d="M 80 170 C 130 170, 150 40, 205 40" />
            <path d="M 80 170 C 130 170, 150 105, 205 105" />
            <path d="M 80 170 C 140 170, 160 170, 205 170" />
            <path d="M 80 170 C 130 170, 150 235, 205 235" />
            <path d="M 80 170 C 130 170, 150 300, 205 300" />

            <path d="M 235 40 C 290 40, 310 170, 360 170" />
            <path d="M 235 105 C 290 105, 310 170, 360 170" />
            <path d="M 235 170 C 290 170, 310 170, 360 170" />
            <path d="M 235 235 C 290 235, 310 170, 360 170" />
            <path d="M 235 300 C 290 300, 310 170, 360 170" />
          </g>

          {/* Continuous subtle data pulses (paused offscreen / reduced motion) */}
          {isVisible && (
            <g className="data-flow-pulse" fill="var(--accent)" opacity="0.85">
              <circle r="2.5">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                  <mpath href="#flow-e1" />
                </animateMotion>
              </circle>
              <circle r="2.5">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin="0.25s"
                >
                  <mpath href="#flow-e2" />
                </animateMotion>
              </circle>
              <circle r="2.5">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.5s">
                  <mpath href="#flow-e3" />
                </animateMotion>
              </circle>
              <circle r="2.5">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin="0.75s"
                >
                  <mpath href="#flow-e4" />
                </animateMotion>
              </circle>
              <circle r="2.5">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.0s">
                  <mpath href="#flow-e5" />
                </animateMotion>
              </circle>

              <circle r="2.5" fill="var(--chart-2)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#flow-o1" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="var(--chart-2)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin="1.45s"
                >
                  <mpath href="#flow-o2" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="var(--chart-2)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.7s">
                  <mpath href="#flow-o3" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="var(--chart-2)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin="1.95s"
                >
                  <mpath href="#flow-o4" />
                </animateMotion>
              </circle>
              <circle r="2.5" fill="var(--chart-2)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="2.2s">
                  <mpath href="#flow-o5" />
                </animateMotion>
              </circle>
            </g>
          )}

          {/* Input Node: Market Data */}
          <g>
            <circle
              cx="65"
              cy="170"
              r="18"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
            <text
              x="65"
              y="174"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              IN
            </text>
            <text
              x="65"
              y="202"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              Market Data
            </text>
          </g>

          {/* 5 Specialist Agent Nodes (Center Column) */}
          {/* Agent 1: Price Action */}
          <g>
            <circle
              cx="220"
              cy="40"
              r="14"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="220"
              y="44"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              01
            </text>
            <text
              x="220"
              y="22"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Price Action
            </text>
          </g>

          {/* Agent 2: Sentiment */}
          <g>
            <circle
              cx="220"
              cy="105"
              r="14"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="220"
              y="109"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              02
            </text>
            <text
              x="220"
              y="87"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Sentiment
            </text>
          </g>

          {/* Agent 3: On-Chain */}
          <g>
            <circle
              cx="220"
              cy="170"
              r="14"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="220"
              y="174"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              03
            </text>
            <text
              x="220"
              y="152"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              On-Chain
            </text>
          </g>

          {/* Agent 4: Macro */}
          <g>
            <circle
              cx="220"
              cy="235"
              r="14"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="220"
              y="239"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              04
            </text>
            <text
              x="220"
              y="217"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Macro
            </text>
          </g>

          {/* Agent 5: Risk */}
          <g>
            <circle
              cx="220"
              cy="300"
              r="14"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="220"
              y="304"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              05
            </text>
            <text
              x="220"
              y="325"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              Risk
            </text>
          </g>

          {/* Output Node: Trading Verdict (Fan-In Synthesis) */}
          <g>
            <circle
              cx="375"
              cy="170"
              r="18"
              fill="var(--surface-2)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text
              x="375"
              y="174"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              SYN
            </text>
            <text
              x="375"
              y="202"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
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
