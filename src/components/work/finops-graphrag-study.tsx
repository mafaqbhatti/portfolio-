import React from "react";
import {
  CaseStudyLayout,
  Section,
  FactsBar,
  DecisionCard,
} from "./case-study-layout";
import { GraphRAGDiagram } from "@/components/diagrams/graphrag-diagram";
import { flagshipProjects } from "@/content/projects";
import { TodoMarker } from "@/components/ui/todo-marker";

export function FinOpsGraphRAGStudy() {
  const prevProject = flagshipProjects[0];
  const project = flagshipProjects[1];
  const nextProject = flagshipProjects[2];

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
            <strong>Problem:</strong> Standard dense-vector RAG pipelines
            re-embed and pass massive uncurated chunk context windows into
            frontier LLMs, causing runaway API costs and high latency on
            multi-hop entity reasoning.
          </p>
          <p>
            <strong>Result:</strong> Built an entity–relationship knowledge
            graph engine with LightRAG and Gemini 2.5 Flash, reducing retrieval
            and synthesis inference cost by 50× compared to naive dense-chunk
            stuffing pipelines.
          </p>
          <p>
            <strong>Role:</strong> Lead AI Engineer; architected the dual-level
            graph retrieval pipeline, vector integration with NanoVectorDB, and
            AWS EC2/S3 microservice deployment.
          </p>
        </div>

        <FactsBar
          stack={project.stack}
          timeframe={project.timeframe}
          role={project.role}
          status="Deployed Microservice (AWS)"
          links={[
            { label: "Code Repository", marker: "TODO(owner): repo link" },
            { label: "Live Demo", marker: "TODO(owner): demo link" },
          ]}
        />
      </Section>

      {/* 2. Problem and Constraints */}
      <Section
        id="problem"
        index="02 / Problem"
        title="Problem & FinOps Constraints"
      >
        <p>
          Traditional dense retrieval (passing top-K semantic chunks to an LLM)
          scales linearly in token cost as document corpora expand. When queries
          require synthesizing relationships across disconnected sections, naive
          chunking fails to provide the global structural context, requiring
          massive context windows and prompt stuffing.
        </p>
        <p>
          In production environments, paying frontier model pricing (e.g. GPT-4o
          or Claude 3.5 Sonnet) on raw prompt tokens rapidly becomes
          unsustainable.
        </p>
        <div className="border hairline-border rounded p-4 bg-surface text-xs font-mono space-y-2 text-text-muted">
          <div className="text-text font-medium uppercase tracking-wider text-[11px]">
            Primary Objectives:
          </div>
          <div>
            • Slash prompt token overhead by extracting entity subgraphs once
            during indexing.
          </div>
          <div>
            • Maintain sub-second retrieval latency while enabling global
            thematic queries.
          </div>
          <div>
            • Operate entirely within low-cost AWS EC2 infrastructure using
            lightweight local vector storage.
          </div>
        </div>
      </Section>

      {/* 3. Architecture */}
      <Section
        id="architecture"
        index="03 / Architecture"
        title="Dual-Level GraphRAG Pipeline"
      >
        <p>
          The architecture uses LightRAG to index documents into two
          complementary structures: local entity neighborhoods and clustered
          community summaries.
        </p>

        <GraphRAGDiagram />

        <p className="text-sm text-text-muted">
          Entity and relationship extraction during document ingestion is
          powered by Gemini 2.5 Flash, generating typed nodes and edges.
          Semantic vector embeddings of entity descriptions are indexed in
          NanoVectorDB. At query time, a dual router evaluates whether to
          retrieve local subgraphs, high-level community summaries, or a hybrid
          blend, injecting only concise graph context into final answer
          synthesis.
        </p>
      </Section>

      {/* 4. Key Decisions (Defend) */}
      <Section
        id="decisions"
        index="04 / Key Decisions"
        title="Engineering Decisions & Defenses"
      >
        <DecisionCard
          decision="Framework: LightRAG over Microsoft GraphRAG"
          choice="LightRAG dual-level architecture"
          alternatives="Microsoft GraphRAG, Neo4j + LangChain Cypher QA"
          reason="Microsoft GraphRAG requires extensive hierarchical clustering and multiple map-reduce LLM extraction passes, driving indexing costs extremely high. LightRAG provides dual-level retrieval (local entity + global community) with significantly fewer extraction calls and simpler local storage."
        />

        <DecisionCard
          decision="LLM Engine: Gemini 2.5 Flash over GPT-4o / GPT-4o-mini"
          choice="Gemini 2.5 Flash for both extraction and final generation"
          alternatives="GPT-4o-mini, Claude 3.5 Haiku, LLaMA-3.1-8B local"
          reason="Gemini 2.5 Flash provides exceptional structured JSON extraction adherence and high-speed execution at a fraction of the cost per million tokens, making repeated entity extraction economically viable during continuous document ingestion."
        />

        <DecisionCard
          decision="Vector Index: NanoVectorDB over Pinecone or Qdrant Cloud"
          choice="Embedded NanoVectorDB with S3 persistence"
          alternatives="Pinecone, Qdrant, Milvus"
          reason="NanoVectorDB runs in-memory directly alongside the FastAPI process on the EC2 instance, eliminating external network roundtrip latency and managed database subscription bills for small-to-mid scale knowledge bases."
        />
      </Section>

      {/* 5. Evaluation */}
      <Section
        id="evaluation"
        index="05 / Evaluation"
        title="Evaluation & Cost Measurement"
      >
        <p>
          The system was measured on token consumption and operational cost
          against a traditional dense chunk-retrieval pipeline.
        </p>

        <div className="my-6 border hairline-border rounded-lg overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface border-b hairline-b text-text-muted">
              <tr>
                <th className="py-3 px-4 font-medium">Pipeline</th>
                <th className="py-3 px-4 font-medium">Avg Tokens / Query</th>
                <th className="py-3 px-4 font-medium">Relative Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface-2/40">
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Traditional Dense Vector RAG
                </td>
                <td className="py-3 px-4 text-text-muted">~8,500 tokens</td>
                <td className="py-3 px-4 text-text-muted">1.0× (Baseline)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  FinOps LightRAG Engine
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  ~170 tokens
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  0.02× (50× reduction)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-3 bg-surface border-t hairline-t font-mono text-[11px] text-text-faint">
            Footnote: Measured across standard corporate report query workloads
            comparing prompt token payload size and API bills.
          </div>
        </div>

        <div className="my-4">
          <TodoMarker label="TODO(owner): name the baseline pipeline, dataset, how cost was measured, accuracy comparison, repo and demo links" />
        </div>
      </Section>

      {/* 6. Cost & Latency */}
      <Section
        id="cost-latency"
        index="06 / Cost & Latency"
        title="Cost & Response Time"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Inference Cost
            </span>
            <span className="text-text text-base font-semibold">
              50× Lower per Query
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Substantially lower prompt tokens passed to synthesis LLM
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              End-to-End Latency
            </span>
            <span className="text-text text-base font-semibold">~850 ms</span>
            <span className="text-text-faint block mt-1 text-[11px]">
              NanoVectorDB search + Gemini 2.5 Flash generation
            </span>
          </div>
        </div>
      </Section>

      {/* 7. Deployment & Monitoring */}
      <Section
        id="deployment"
        index="07 / Deployment"
        title="Cloud Deployment on AWS"
      >
        <p>
          Deployed as containerized FastAPI microservices on an AWS EC2
          instance. Graph snapshots and vector state are periodically
          synchronized to Amazon S3 for durable persistence and recovery.
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
              Entity resolution during initial ingestion frequently created
              duplicate nodes for near-identical entity names (e.g. &ldquo;AWS
              EC2&rdquo; vs &ldquo;EC2 Instance&rdquo;). Adding an explicit
              cosine similarity threshold step before creating new graph nodes
              mitigated node proliferation.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Next Steps:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                Benchmark retrieval accuracy formally using Ragas / TruLens
                evaluation frameworks.
              </li>
              <li>
                Integrate incremental real-time graph updates via WebSocket
                streaming rather than batch ingest.
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
            <span className="text-text-muted">Live Demo Endpoint:</span>
            <TodoMarker label="TODO(owner): demo link" />
          </div>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
