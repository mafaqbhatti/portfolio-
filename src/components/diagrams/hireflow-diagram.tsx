import React from "react";

export function HireFlowDiagram() {
  return (
    <figure className="my-8 border hairline-border rounded bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between pb-3 mb-4 border-b hairline-b font-mono text-[11px] text-text-muted">
        <span className="font-semibold text-text">
          Autonomous 5-Agent Event-Driven Pipeline
        </span>
        <span className="text-text-faint">
          Apache Kafka · Groq LLaMA 3 70B · Redis 7
        </span>
      </div>

      <div className="w-full aspect-[640/320] flex items-center justify-center">
        <svg
          viewBox="0 0 640 320"
          className="w-full h-full"
          role="img"
          aria-label="HireFlow architecture: Decoupled 5-agent pipeline orchestrated across an Apache Kafka message bus, utilizing Groq LLaMA 3 70B for resume screening, dynamic assessment creation, rubric grading, live voice interviews, and executive hiring synthesis."
        >
          {/* Background Bus Layer */}
          <rect
            x="30"
            y="135"
            width="580"
            height="40"
            rx="4"
            fill="var(--surface-2)"
            stroke="#1A56DB"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <text
            x="320"
            y="159"
            textAnchor="middle"
            fill="#1A56DB"
            fontSize="10"
            fontFamily="var(--font-geist-mono)"
            fontWeight="600"
            letterSpacing="0.08em"
          >
            APACHE KAFKA 7.5 EVENT BUS (DECOUPLED ASYNC WORKERS)
          </text>

          {/* Top Row: Agents 1, 2, 3 */}
          {/* Agent 1 */}
          <g>
            <rect
              x="30"
              y="20"
              width="160"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#00D2B4"
              strokeWidth="1"
            />
            <text
              x="110"
              y="42"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              AGENT 1: SCREENER
            </text>
            <text
              x="110"
              y="58"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              In-Memory AES-256 PDF
            </text>
            <text
              x="110"
              y="74"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Groq LLaMA 3 70B (Score ≥60)
            </text>
            <path d="M 110 100 L 110 135" stroke="#00D2B4" strokeWidth="1.5" />
          </g>

          {/* Agent 2 */}
          <g>
            <rect
              x="240"
              y="20"
              width="160"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1"
            />
            <text
              x="320"
              y="42"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              AGENT 2: ASSESSOR
            </text>
            <text
              x="320"
              y="58"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Dynamic Test Synthesis
            </text>
            <text
              x="320"
              y="74"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Bespoke Questions &amp; SMTP
            </text>
            <path d="M 320 100 L 320 135" stroke="#1A56DB" strokeWidth="1.5" />
          </g>

          {/* Agent 3 */}
          <g>
            <rect
              x="450"
              y="20"
              width="160"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1E2638"
              strokeWidth="1"
            />
            <text
              x="530"
              y="42"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              AGENT 3: EVALUATOR
            </text>
            <text
              x="530"
              y="58"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Rubric-Based Scoring
            </text>
            <text
              x="530"
              y="74"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Multi-criteria (Score ≥50)
            </text>
            <path d="M 530 100 L 530 135" stroke="#1E2638" strokeWidth="1.5" />
          </g>

          {/* Bottom Row: Agents 4, 5 & Delivery */}
          {/* Agent 4 */}
          <g>
            <rect
              x="80"
              y="210"
              width="180"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#00D2B4"
              strokeWidth="1"
            />
            <text
              x="170"
              y="232"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              AGENT 4: INTERVIEWER
            </text>
            <text
              x="170"
              y="248"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Live Voice Dialogue Room
            </text>
            <text
              x="170"
              y="264"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              Web Speech TTS/STT + 24h JWT
            </text>
            <path d="M 170 175 L 170 210" stroke="#00D2B4" strokeWidth="1.5" />
          </g>

          {/* Agent 5 */}
          <g>
            <rect
              x="380"
              y="210"
              width="200"
              height="80"
              rx="2"
              fill="var(--surface-2)"
              stroke="#1A56DB"
              strokeWidth="1.5"
            />
            <text
              x="480"
              y="232"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              AGENT 5: SYNTHESIZER
            </text>
            <text
              x="480"
              y="248"
              textAnchor="middle"
              fill="#1A56DB"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Executive Hiring Dossier
            </text>
            <text
              x="480"
              y="264"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
            >
              30% Screen + 30% Test + 40% Voice
            </text>
            <text
              x="480"
              y="278"
              textAnchor="middle"
              fill="#00D2B4"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
              fontWeight="600"
            >
              Verdict: STRONG_HIRE / HIRE / REJECT
            </text>
            <path d="M 480 175 L 480 210" stroke="#1A56DB" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 pt-2.5 border-t hairline-t font-mono text-[11px] text-text-faint">
        Figure 3: Event-driven 5-agent pipeline topology. Asynchronous Kafka
        streaming connects in-memory AES-256 screening, bespoke assessment
        synthesis, rubric grading, live Web Speech voice interviews, and
        weighted executive hiring verdicts.
      </figcaption>
    </figure>
  );
}
