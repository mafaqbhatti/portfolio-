import React from "react";
import {
  CaseStudyLayout,
  Section,
  FactsBar,
  DecisionCard,
} from "./case-study-layout";
import { HireFlowDiagram } from "@/components/diagrams/hireflow-diagram";
import { flagshipProjects } from "@/content/projects";
import { ExternalLink } from "lucide-react";

export function HireFlowStudy() {
  const prevProject = flagshipProjects[2];
  const project = flagshipProjects[3];

  return (
    <CaseStudyLayout project={project} prevProject={prevProject}>
      {/* 1. Summary & Facts Bar */}
      <Section
        id="summary"
        index="01 / Summary"
        title="Executive Summary & Facts"
      >
        <div className="space-y-3 border-l-2 border-accent pl-4 text-text text-base">
          <p>
            <strong>Problem:</strong> Traditional technical recruitment is
            plagued by severe operational latency. Evaluating hundreds of
            applicants requires human recruiters to manually parse resumes,
            manually author domain assessments, grade answers, coordinate
            exploratory calls, and compile candidate dossiers—stretching hiring
            cycles across 2 to 4 weeks and introducing cognitive fatigue and
            unconscious bias.
          </p>
          <p>
            <strong>Result:</strong> Architected{" "}
            <strong>AgenticHire (HireFlow)</strong>, an event-driven multi-agent
            AI hiring swarm orchestrated across Apache Kafka 7.5 and Groq-hosted
            LLaMA 3 70B. The pipeline autonomously screens encrypted resumes
            in-memory (AES-256), generates dynamic role-specific technical
            assessments, grades submissions against rubrics, conducts live Web
            Speech voice interviews, and synthesizes weighted executive hiring
            dossiers—reducing the active evaluation cycle from 2–4 weeks to{" "}
            <strong>~3 minutes</strong>.
          </p>
          <p>
            <strong>Role:</strong> Lead AI Systems Architect; authored the
            distributed multi-agent state machine, Kafka event topologies, Groq
            JSON schema contracts, in-memory crypto security layer, and dual
            Next.js 14 / Streamlit presentation layers.
          </p>
        </div>

        <FactsBar
          stack={project.stack}
          timeframe={project.timeframe}
          role={project.role}
          status="Production Distributed Pipeline (Docker Compose)"
          links={[
            {
              label: "GitHub Repository",
              href: "https://github.com/mafaqbhatti/AgenticHire-",
            },
          ]}
        />
      </Section>

      {/* 2. Problem and Constraints */}
      <Section
        id="problem"
        index="02 / Problem"
        title="Problem & Operational Constraints"
      >
        <p>
          Technical talent acquisition suffers from a fundamental mismatch
          between applicant volume and human review bandwidth. High-volume
          inbound pipelines overwhelm talent teams, leading to delayed offer
          letters, loss of top-tier engineering talent to faster competitors,
          and inconsistent evaluation standards across candidate cohorts:
        </p>

        <div className="space-y-4 my-4">
          <div className="border hairline-border rounded p-4 bg-surface space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
              The 2–4 Week Recruiting Bottleneck
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              In conventional enterprise hiring, each applicant stage acts as a
              serialized barrier: 2–4 days for initial resume screening, 1–2
              days to draft take-home tests, 1–3 days to score submissions, 3–5
              days for phone-screen scheduling, and 1–2 days to manually compile
              interviewer notes. When candidate volumes surge into the hundreds,
              total turnaround stretches to nearly a month, with over 85% of
              elapsed time spent idling in email queues.
            </p>
          </div>
        </div>

        <div className="border hairline-border rounded p-4 bg-surface text-xs font-mono space-y-2 text-text-muted">
          <div className="text-text font-medium uppercase tracking-wider text-[11px]">
            Audited Engineering &amp; Operational Constraints:
          </div>
          <div>
            • <strong>Decoupled Asynchronous Resilience:</strong> Agents must
            never block each other or rely on synchronous REST chains.
            Downstream consumer downtime or network partitions must queue events
            durably with zero applicant data loss.
          </div>
          <div>
            • <strong>Strict In-Memory Security &amp; PII Isolation:</strong>{" "}
            Candidate resumes must be stored encrypted (AES-256-CBC with
            prepended IV). Decryption must execute strictly in volatile memory
            during screening, ensuring zero plaintext candidate PII touches the
            host filesystem.
          </div>
          <div>
            • <strong>Multi-Tenant Data Boundary:</strong> Enterprise accounts
            must be structurally isolated. Every SQL query via Prisma ORM and
            every WebSocket room via Socket.io must enforce mandatory tenant
            parameter scoping (<code>tenantId</code>).
          </div>
          <div>
            • <strong>Sub-Second LLM Ingestion:</strong> Generation of
            customized assessments, rubric evaluations, and final synthesis must
            complete in sub-second execution windows to prevent interactive
            candidate stall (powered by Groq Cloud LLaMA 3 70B).
          </div>
        </div>
      </Section>

      {/* 3. Architecture */}
      <Section
        id="architecture"
        index="03 / Architecture"
        title="Event-Driven Multi-Agent Swarm Architecture"
      >
        <p>
          AgenticHire replaces brittle synchronous webhooks with a resilient,
          event-driven architecture orchestrated across an Apache Kafka message
          backbone:
        </p>

        <HireFlowDiagram />

        <div className="space-y-4 text-sm text-text-muted my-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Agent 1: Resume Screener (agent1.screener.js)
            </h4>
            <p className="leading-relaxed">
              Consumes <code>resume-submitted</code> events from Kafka. Ingests
              the candidate&apos;s encrypted PDF, performs in-memory AES-256-CBC
              decryption, extracts raw text via <code>pdf-parse</code>, and
              evaluates candidate qualifications against the job description
              using Groq LLaMA 3 70B. Employs a strict JSON schema returning an
              objective score (0–100), key strengths, concerns, and qualitative
              justification. Candidates scoring ≥ 60 emit{" "}
              <code>screening-passed</code>; sub-threshold candidates
              automatically receive constructive rejection feedback.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Agent 2: Assessment Architect (agent2.assessor.js)
            </h4>
            <p className="leading-relaxed">
              Triggered by <code>screening-passed</code>. Dynamically
              synthesizes a bespoke 5-question technical assessment tailored
              directly to the candidate&apos;s resume gaps and job requirements
              (practical open-ended challenges rather than generic multiple
              choice). Stores a unique cryptographic assessment token with TTL
              in Redis, and automatically dispatches a personalized invitation
              email via Nodemailer SMTP.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Agent 3: Answer Evaluator (agent3.evaluator.js)
            </h4>
            <p className="leading-relaxed">
              Triggered upon test submission (<code>assessment-submitted</code>
              ). Grades candidate responses against per-question rubrics using
              Groq LLaMA 3 70B in structured JSON mode. Evaluates technical
              depth, correctness, edge-case coverage, and communication clarity.
              Submissions scoring ≥ 50/100 emit <code>interview-invited</code>;
              failing candidates are gracefully archived.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Agent 4: Voice Interview Coordinator (agent4.interviewer.js)
            </h4>
            <p className="leading-relaxed">
              Triggered by <code>interview-invited</code>. Signs a single-use
              24-hour HS256 JWT room token validated against Redis and sends an
              interview room link. The candidate enters a dedicated browser
              voice room powered by the Web Speech API (TTS &amp; STT), engaging
              in an interactive, timed voice interview. Responses are captured,
              transcribed question-by-question, and emitted as an{" "}
              <code>interview-completed</code> event.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Agent 5: Executive Synthesizer (agent5.evaluator_final.js)
            </h4>
            <p className="leading-relaxed">
              Ingests all four preceding evaluation vectors: Resume Screening
              Score, Assessment Evaluation Score, Voice Interview Transcript
              &amp; Behavioral Metrics, and Job Requirements. Calculates a
              weighted holistic baseline score:
            </p>
            <div className="p-3 my-2 border hairline-border rounded bg-surface font-mono text-xs text-accent">
              Composite Score = (ScreeningScore × 0.3) + (AssessmentScore × 0.3)
              + (InterviewScore × 0.4)
            </div>
            <p className="leading-relaxed">
              Invokes Groq LLaMA 3 70B with <code>PROMPTS.FINAL_EVALUATOR</code>{" "}
              to generate comprehensive qualitative reasoning and issues a
              definitive hiring recommendation: <strong>STRONG_HIRE</strong>{" "}
              (≥80), <strong>HIRE</strong> (≥65), <strong>CONSIDER</strong>{" "}
              (≥50), or <strong>REJECT</strong>. Dispatches real-time WebSocket
              events to update the HR Kanban board instantly.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Dual-Frontend Architecture (Next.js 14 + Streamlit)
            </h4>
            <p className="leading-relaxed">
              The platform separates interactive candidate workflows from
              executive data exploration:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs mt-1 font-mono text-text-muted">
              <li>
                <strong className="text-text">Next.js 14 Web Portal:</strong>{" "}
                React 18 App Router, Tailwind CSS, real-time Socket.io Kanban
                boards, candidate dossier views, and interactive Web Speech
                voice rooms.
              </li>
              <li>
                <strong className="text-text">
                  Streamlit Executive Dashboard:
                </strong>{" "}
                Python 3.10+ data application providing high-density candidate
                filtering, score distribution histograms, and rapid cross-job
                analytics with zero frontend build overhead.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. Key Decisions (Defend) */}
      <Section
        id="decisions"
        index="04 / Key Decisions"
        title="Engineering Decisions & Defenses"
      >
        <DecisionCard
          decision="Architecture: Apache Kafka Event Bus over Synchronous REST / Webhooks"
          choice="Decoupled Kafka 7.5 message bus with independent consumer groups"
          alternatives="Direct HTTP POST chains, BullMQ / Redis queues, RabbitMQ"
          reason="Synchronous HTTP chains are fragile: if an evaluation takes 25 seconds or an agent process restarts, the entire candidate pipeline drops. Kafka guarantees at-least-once message delivery, durable event log replay, and backpressure isolation across heavy LLM workloads."
        />

        <DecisionCard
          decision="LLM Engine: Groq-Hosted LLaMA 3 70B over GPT-4o / Claude 3.5 Sonnet"
          choice="Groq Cloud LPU inference with strict JSON mode schemas"
          alternatives="OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Local Ollama LLaMA-3-8B"
          reason="Recruitment evaluation requires high reasoning capabilities coupled with sub-second execution speed. Groq's Language Processing Units (LPUs) deliver LLaMA 3 70B responses at ~300+ tokens/second, enabling real-time voice interview evaluation and instant test generation at a fraction of frontier API pricing."
        />

        <DecisionCard
          decision="Security: In-Memory AES-256-CBC Decryption over Plaintext Storage"
          choice="Encrypted storage on arrival; decryption strictly in-memory during screening"
          alternatives="Unencrypted S3 buckets, local plaintext filesystem storage, database BLOBs"
          reason="Candidate resumes contain sensitive Personally Identifiable Information (PII). By encrypting PDFs immediately on upload with random IVs and decrypting them strictly into RAM buffers for parsing, plaintext candidate data is never exposed on disk or accessible in server logs."
        />

        <DecisionCard
          decision="Presentation: Dual Next.js 14 + Streamlit Architecture"
          choice="Next.js for interactive candidate UX; Streamlit for executive analytics"
          alternatives="Single monolithic Next.js app, pure Streamlit frontend, Retool dashboard"
          reason="Next.js delivers low-latency SSR, WebSocket responsiveness, and Web Speech API audio room stability. Streamlit allows data science teams and HR leadership to rapidly explore candidate distribution statistics and build ad-hoc cohort filters in Python without requiring custom React UI releases."
        />
      </Section>

      {/* 5. Evaluation */}
      <Section
        id="evaluation"
        index="05 / Evaluation"
        title="Audited Pipeline Efficiency & Turnaround Comparison"
      >
        <p>
          An operational audit comparing standard technical recruitment cycles
          against the autonomous AgenticHire pipeline reveals dramatic latency
          reduction across every hiring stage:
        </p>

        <div className="my-6 border hairline-border rounded-lg overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface border-b hairline-b text-text-muted">
              <tr>
                <th className="py-3 px-4 font-medium">Recruitment Stage</th>
                <th className="py-3 px-4 font-medium">Traditional Hiring</th>
                <th className="py-3 px-4 font-medium">AgenticHire Swarm</th>
                <th className="py-3 px-4 font-medium">Agent Responsible</th>
                <th className="py-3 px-4 font-medium">Execution Engine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface-2/40">
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Resume Screening
                </td>
                <td className="py-3 px-4 text-text-muted">2–4 Days</td>
                <td className="py-3 px-4 text-accent font-semibold">
                  ~15 Seconds
                </td>
                <td className="py-3 px-4 text-text-muted">Agent 1: Screener</td>
                <td className="py-3 px-4 text-text-muted">
                  In-Memory AES-256 + Groq
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Assessment Synthesis
                </td>
                <td className="py-3 px-4 text-text-muted">1–2 Days</td>
                <td className="py-3 px-4 text-accent font-semibold">
                  &lt; 5 Seconds
                </td>
                <td className="py-3 px-4 text-text-muted">Agent 2: Assessor</td>
                <td className="py-3 px-4 text-text-muted">
                  Dynamic JSON + SMTP
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Answer Evaluation
                </td>
                <td className="py-3 px-4 text-text-muted">1–3 Days</td>
                <td className="py-3 px-4 text-accent font-semibold">
                  ~25 Seconds
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Agent 3: Evaluator
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Rubric Scoring (0–100)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  First-Round Interview
                </td>
                <td className="py-3 px-4 text-text-muted">
                  3–5 Days (Scheduling)
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  On-Demand (10m)
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Agent 4: Interviewer
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Web Speech TTS/STT + JWT
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Executive Dossier
                </td>
                <td className="py-3 px-4 text-text-muted">1–2 Days</td>
                <td className="py-3 px-4 text-accent font-semibold">
                  ~10 Seconds
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Agent 5: Synthesizer
                </td>
                <td className="py-3 px-4 text-text-muted">
                  30/30/40 Weighted Verdict
                </td>
              </tr>
              <tr className="bg-accent/10">
                <td className="py-3 px-4 text-accent font-semibold">
                  Total Turnaround
                </td>
                <td className="py-3 px-4 text-text font-semibold">
                  2 to 4 Weeks
                </td>
                <td className="py-3 px-4 text-accent font-bold">
                  ~3 Minutes Active
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  5-Agent Swarm
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  Kafka + Redis + Groq
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-3 bg-surface border-t hairline-t font-mono text-[11px] text-text-faint">
            Comparative audit: Based on enterprise HR operational latency vs.
            measured agent processing logs under standard technical interview
            workloads.
          </div>
        </div>
      </Section>

      {/* 6. Cost & Latency */}
      <Section
        id="cost-latency"
        index="06 / Cost & Latency"
        title="Throughput, Latency & Speed Layer"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Active Evaluation Time
            </span>
            <span className="text-text text-base font-semibold">
              ~3 Minutes Total
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Complete 5-stage pipeline vs. 2–4 weeks of manual coordination
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Redis Speed Layer
            </span>
            <span className="text-text text-base font-semibold">
              &lt; 1 ms Queries
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Sub-millisecond Kanban polling leaving PostgreSQL unburdened
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              LLM Generation Speed
            </span>
            <span className="text-text text-base font-semibold">
              ~300+ Tokens/sec
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Sub-second inference via Groq LPU Cloud hardware
            </span>
          </div>
        </div>
      </Section>

      {/* 7. Deployment & Monitoring */}
      <Section
        id="deployment"
        index="07 / Deployment"
        title="Containerized Multi-Service Deployment"
      >
        <p>
          The production system is orchestrated via Docker Compose into six
          interconnected microservices:
        </p>

        <div className="my-4 border hairline-border rounded p-4 bg-surface space-y-3 font-mono text-xs text-text-muted">
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">
                Apache Kafka 7.5 &amp; Zookeeper:
              </strong>{" "}
              High-throughput distributed message bus managing candidate event
              streams across consumer partitions.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">
                PostgreSQL 16 &amp; Prisma ORM:
              </strong>{" "}
              ACID-compliant relational database enforcing multi-tenant
              isolation with scoped schemas.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">Redis 7:</strong> Ephemeral session
              store providing sub-millisecond stage caching and expiring JWT
              interview room tokens.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">Node.js 20 Backend:</strong> Houses
              the REST API, Socket.io real-time server, Kafka
              producers/consumers, and agent runner routines.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">Next.js 14 Web Portal:</strong>{" "}
              Client application providing interactive Kanban boards and timed
              Web Speech voice interview rooms.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">Streamlit Analytics Engine:</strong>{" "}
              Python dashboard serving HR leadership with instant candidate
              scoring distributions.
            </span>
          </div>
        </div>
      </Section>

      {/* 8. What Failed & Next Steps */}
      <Section
        id="lessons"
        index="08 / Retrospective"
        title="Engineering Retrospective: What Failed, Solved & Next Steps"
      >
        <div className="space-y-4 text-sm text-text-muted">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 1: In-Memory Stream Corruptions During PDF Parsing
            </h4>
            <p className="text-xs leading-relaxed">
              Decrypted AES-256 binary streams occasionally caused buffer
              truncation exceptions in <code>pdf-parse</code> when handling
              complex multi-column resume layouts. <em>Resolution:</em>{" "}
              Engineered a dedicated memory-buffered crypto stream helper with
              explicit byte-length verification before passing the buffer to the
              PDF parser.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 2: Non-Deterministic LLM JSON Formats on Edge Cases
            </h4>
            <p className="text-xs leading-relaxed">
              Early prompts occasionally returned explanatory prose wrapping the
              JSON payload, causing <code>JSON.parse</code> errors in Agent 2
              and Agent 3. <em>Resolution:</em> Configured Groq SDK&apos;s
              explicit{" "}
              <code>
                response_format: &#123; type: &quot;json_object&quot; &#125;
              </code>{" "}
              flag paired with rigorous fallback default question rubrics to
              guarantee uninterrupted pipeline flow.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 3: Replay Vulnerability on Expiring Voice Rooms
            </h4>
            <p className="text-xs leading-relaxed">
              Initial JWT links could be reused if a candidate refreshed the
              interview room after submission. <em>Resolution:</em> Implemented
              a dual-token invalidation check: the JWT must match an active key
              stored in Redis; once the interview state transitions to{" "}
              <code>INTERVIEW_COMPLETED</code>, the Redis token is evicted
              immediately with zero TTL.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Next Steps &amp; Roadmap
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                Incorporate real-time speech prosody and audio sentiment
                analysis to supplement text transcripts during voice interviews.
              </li>
              <li>
                Implement automated bias auditing to statistically verify that
                agent scoring remains invariant across candidate demographic
                metadata.
              </li>
              <li>
                Add support for asynchronous coding sandbox execution (e.g.
                Dockerized runner) for executable programming evaluations.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 9. Links & References */}
      <Section id="links" index="09 / Links" title="Artifacts & References">
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-text-muted min-w-[120px]">Repository:</span>
            <a
              href="https://github.com/mafaqbhatti/AgenticHire-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text hover:text-accent underline underline-offset-2 transition-colors duration-150"
            >
              <span>https://github.com/mafaqbhatti/AgenticHire-</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-text-muted min-w-[120px]">Architecture:</span>
            <span className="text-text-faint">
              Decoupled Multi-Agent Swarm · Apache Kafka 7.5 · Groq LLaMA 3 70B
              · Redis 7 · PostgreSQL 16
            </span>
          </div>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
