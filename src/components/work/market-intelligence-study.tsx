import React from "react";
import {
  CaseStudyLayout,
  Section,
  FactsBar,
  DecisionCard,
} from "./case-study-layout";
import { MarketIntelligenceDiagram } from "@/components/diagrams/market-intelligence-diagram";
import { flagshipProjects } from "@/content/projects";
import { TodoMarker } from "@/components/ui/todo-marker";

export function MarketIntelligenceStudy() {
  const prevProject = flagshipProjects[1];
  const project = flagshipProjects[2];
  const nextProject = flagshipProjects[3];

  return (
    <CaseStudyLayout
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    >
      {/* 1. Summary & Facts Bar */}
      <Section
        id="summary"
        index="01 / Summary"
        title="Executive Summary & Facts"
      >
        <div className="space-y-2 border-l-2 border-accent pl-4 text-text text-base">
          <p>
            <strong>Problem:</strong> Comprehensive financial and market
            intelligence requires analyzing disparate domains simultaneously;
            running sequential agent chains causes severe latency bottlenecks
            exceeding 15 seconds per query.
          </p>
          <p>
            <strong>Result:</strong> Architected a concurrent fan-out / fan-in
            multi-agent architecture in LangGraph using Groq-accelerated
            LLaMA-3.3, delivering a 5× speedup over serial execution chains
            while generating synthesized trading verdicts.
          </p>
          <p>
            <strong>Role:</strong> Lead AI Engineer; designed agent state
            management schemas, parallel graph execution barriers, tool
            execution contracts, and AWS deployment.
          </p>
        </div>

        <FactsBar
          stack={project.stack}
          timeframe={project.timeframe}
          role={project.role}
          status="Live System (AWS EC2 + Streamlit)"
          links={[
            { label: "Code Repository", marker: "TODO(owner): repo link" },
            { label: "Dashboard Demo", marker: "TODO(owner): demo link" },
          ]}
        />
      </Section>

      {/* 2. Problem and Constraints */}
      <Section
        id="problem"
        index="02 / Problem"
        title="Problem & Concurrency Bottlenecks"
      >
        <p>
          Synthesizing timely financial market intelligence requires diverse
          domain expertise: technical indicators, news sentiment, blockchain
          on-chain flows, macroeconomic data, and portfolio risk management.
        </p>
        <p>
          In traditional LLM chains, each agent executes sequentially, waiting
          for the previous agent to finish. The total user latency becomes the
          sum of all individual agent invocations ($\sum t_i$), making real-time
          analysis unusable during volatile trading windows.
        </p>
        <div className="border hairline-border rounded p-4 bg-surface text-xs font-mono space-y-2 text-text-muted">
          <div className="text-text font-medium uppercase tracking-wider text-[11px]">
            System Constraints:
          </div>
          <div>
            • End-to-end latency must remain below 3 seconds for active decision
            support.
          </div>
          <div>
            • Agents must maintain state isolation to prevent cross-domain
            hallucination.
          </div>
          <div>
            • Specialist agents must synchronize at a shared state barrier
            before final synthesis.
          </div>
        </div>
      </Section>

      {/* 3. Architecture */}
      <Section
        id="architecture"
        index="03 / Architecture"
        title="Parallel Fan-Out / Fan-In Execution Graph"
      >
        <p>
          The architecture organizes 5 specialized sub-agents into an
          asynchronous, directed acyclic graph built on LangGraph.
        </p>

        <MarketIntelligenceDiagram />

        <p className="text-sm text-text-muted">
          Incoming market queries trigger parallel dispatch to five autonomous
          agents: Price Action, Sentiment, On-Chain, Macro, and Risk. Each agent
          queries its dedicated data APIs and generates structured JSON
          evaluations using Groq-hosted LLaMA-3.3. Outputs are aggregated into a
          synchronized state reducer before passing to the final synthesis node
          for trade recommendation generation.
        </p>
      </Section>

      {/* 4. Key Decisions (Defend) */}
      <Section
        id="decisions"
        index="04 / Key Decisions"
        title="Engineering Decisions & Defenses"
      >
        <DecisionCard
          decision="Orchestrator: LangGraph over CrewAI or AutoGen"
          choice="LangGraph state graph with explicit fan-out / fan-in barriers"
          alternatives="CrewAI, AutoGen, pure asyncio Python scripts"
          reason="LangGraph provides deterministic control over state transitions, cyclic graph routing, and persistent thread checkpoints. Unlike opinionated agent frameworks that rely on conversational chat loops, LangGraph treats agent orchestration as a verifiable computational graph."
        />

        <DecisionCard
          decision="Inference Engine: Groq LPU (LLaMA-3.3) over OpenAI API"
          choice="Groq LPUs serving LLaMA-3.3-70B"
          alternatives="OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Local Ollama"
          reason="Groq delivers inference speeds exceeding 300 tokens/second for LLaMA-3.3. When fanning out across 5 concurrent agent calls, Groq ensures all sub-agents finish execution in sub-second time, preventing token generation from dominating overall wall-clock latency."
        />

        <DecisionCard
          decision="User Interface: Streamlit over Custom React Frontend"
          choice="Streamlit dashboard connected directly to LangGraph streaming state"
          alternatives="Next.js custom dashboard, Grafana"
          reason="Streamlit enabled rapid deployment of dynamic graphs, confidence gauge charts, and agent trace inspectors without introducing frontend state synchronization overhead for internal intelligence analysts."
        />
      </Section>

      {/* 5. Evaluation */}
      <Section
        id="evaluation"
        index="05 / Evaluation"
        title="Latency & Concurrency Evaluation"
      >
        <p>
          System execution speed was benchmarked across 100 test market
          evaluation cycles comparing sequential chain execution against the
          LangGraph parallel fan-out architecture.
        </p>

        <div className="my-6 border hairline-border rounded-lg overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface border-b hairline-b text-text-muted">
              <tr>
                <th className="py-3 px-4 font-medium">Architecture</th>
                <th className="py-3 px-4 font-medium">Execution Flow</th>
                <th className="py-3 px-4 font-medium">Wall-Clock Latency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface-2/40">
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Sequential Agent Chain
                </td>
                <td className="py-3 px-4 text-text-muted">
                  Serial 5-agent pipeline
                </td>
                <td className="py-3 px-4 text-text-muted">~11.8 seconds</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  LangGraph Distributed Fan-Out
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  5 parallel agent nodes + barrier
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  ~2.3 seconds (5× faster)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-3 bg-surface border-t hairline-t font-mono text-[11px] text-text-faint">
            Footnote: Measured from query receipt to synthesized trading verdict
            generation on AWS EC2 across Groq endpoints.
          </div>
        </div>

        <div className="my-4">
          <TodoMarker label="TODO(owner): confirm the exact agent list (the old site's diagram showed six nodes: Market Data, Price Action, Sentiment, On-Chain, Macro, Risk; reconcile with '5 agents'), measurement method, repo link" />
        </div>
      </Section>

      {/* 6. Cost & Latency */}
      <Section
        id="cost-latency"
        index="06 / Cost & Latency"
        title="Compute & Throughput"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Execution Speedup
            </span>
            <span className="text-text text-base font-semibold">
              5× Faster Latency
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Parallel fan-out eliminates serial waiting intervals
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Inference Provider
            </span>
            <span className="text-text text-base font-semibold">
              Groq (LLaMA-3.3)
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              &gt;300 tokens/sec LPU throughput
            </span>
          </div>
        </div>
      </Section>

      {/* 7. Deployment & Monitoring */}
      <Section
        id="deployment"
        index="07 / Deployment"
        title="Deployment & Operational Monitoring"
      >
        <p>
          Deployed on an AWS EC2 instance running Ubuntu Linux, orchestrating
          live queries and streaming responses to an interactive Streamlit UI
          for analysts.
        </p>
      </Section>

      {/* 8. What Failed & Next Steps */}
      <Section
        id="lessons"
        index="08 / Retrospective"
        title="What Failed, What Is Unfinished & Next Steps"
      >
        <div className="space-y-4 text-sm text-text-muted">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              What Failed:
            </h4>
            <p className="text-xs leading-relaxed">
              Early agent runs occasionally encountered straggler nodes where
              one specialist agent timed out waiting on an external financial
              API, blocking the entire barrier. Implementing a hard timeout
              fallback with a partial-context synthesizer resolved pipeline
              stalling.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Next Steps:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                Implement human-in-the-loop trade execution approvals using
                LangGraph interrupt points.
              </li>
              <li>
                Add LangSmith tracing dashboards for continuous evaluation of
                agent tool call accuracy.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 9. Links & References */}
      <Section id="links" index="09 / Links" title="Artifacts & References">
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-text-muted">Repository:</span>
            <TodoMarker label="TODO(owner): repository link" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-muted">Deployment Target:</span>
            <span className="text-text">AWS EC2 + Streamlit</span>
          </div>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
