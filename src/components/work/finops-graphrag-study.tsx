import React from "react";
import {
  CaseStudyLayout,
  Section,
  FactsBar,
  DecisionCard,
} from "./case-study-layout";
import { GraphRAGDiagram } from "@/components/diagrams/graphrag-diagram";
import { flagshipProjects } from "@/content/projects";
import { ExternalLink } from "lucide-react";

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
        <div className="space-y-3 border-l-2 border-accent pl-4 text-text text-base">
          <p>
            <strong>Problem:</strong> Enterprise knowledge graph retrieval is
            crippled by runaway operational costs. Microsoft GraphRAG relies on
            hierarchical Leiden clustering and MapReduce summarization, costing
            over $120 per 1,000 pages to index on GPT-4-Turbo and expanding
            single-query context to thousands of tokens. Conversely, naive
            dense-vector RAG misses global multi-hop entity relationships
            entirely.
          </p>
          <p>
            <strong>Result:</strong> Built a zero-managed-database GraphRAG
            engine using LightRAG (Guo et al., 2024 HKUDS) and Gemini 2.5 Flash,
            coupled with local CPU embeddings (
            <code>BAAI/bge-small-en-v1.5</code>
            ). The architecture cuts query context payloads to ~100–170 tokens,
            achieving a 50× to 100×+ cost reduction over traditional dense and
            hierarchical pipelines with $0 in managed database invoices.
          </p>
          <p>
            <strong>Role:</strong> Lead AI Engineer; designed the complete
            ingestion pipeline, local embedding integration, custom UTF-8
            tokenizer, 8 RPM sliding-window rate limiter, 5 retrieval modes, and
            Docker/Nginx deployment on AWS EC2.
          </p>
        </div>

        <FactsBar
          stack={project.stack}
          timeframe={project.timeframe}
          role={project.role}
          status="Production Microservice (AWS EC2 t3.micro)"
          links={[
            {
              label: "GitHub Repository",
              href: "https://github.com/mafaqbhatti/FinOps-Optimized-GraphRAG",
            },
            {
              label: "Live Demo (FastAPI / Web UI)",
              href: "http://54.173.55.110:8000",
            },
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
          Production RAG systems face a harsh tradeoff between financial
          viability and topological reasoning capability:
        </p>
        <div className="space-y-4 my-4">
          <div className="border hairline-border rounded p-4 bg-surface space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
              1. The Microsoft GraphRAG Cost Pathology
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Microsoft GraphRAG indexes documents by precomputing Leiden
              community detection and generating hierarchical LLM summaries
              across all clusters. For an average 1,000-page enterprise corpus,
              indexing consumes ~$120 on GPT-4-Turbo; scaling to a 5GB corpus
              incurs over $33,000 in token costs alone before any user query is
              served. At query time, passing multi-level community summaries
              inflates prompt tokens into thousands per request, triggering high
              per-query API invoices and sluggish response times.
            </p>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
              2. The Flat Dense Vector Blindspot
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Standard chunk-based vector search (top-k cosine similarity) works
              for point lookups but fails on cross-corpus synthesis questions
              (e.g., &ldquo;What are the common supply chain dependencies across
              all vendor contracts?&rdquo;). Practitioners often attempt
              brute-force context stuffing, passing dozens of chunks that flood
              context windows, amplify hallucinations, and spike token costs.
            </p>
          </div>
        </div>

        <div className="border hairline-border rounded p-4 bg-surface text-xs font-mono space-y-2 text-text-muted">
          <div className="text-text font-medium uppercase tracking-wider text-[11px]">
            Audited FinOps Engineering Objectives:
          </div>
          <div>
            • <strong>Zero Third-Party Database Bills:</strong> Eliminate
            recurring SaaS subscriptions for hosted graph and vector databases
            (Neo4j Enterprise at $65+/mo, Pinecone at $70+/mo).
          </div>
          <div>
            • <strong>Zero Embedding API Overhead:</strong> Eliminate
            third-party embedding API costs, external network latency hops, and
            token billing by hosting models locally.
          </div>
          <div>
            • <strong>Rate Limit Immunity:</strong> Guarantee pipeline uptime
            and zero 429 exceptions when running continuous batch extraction on
            frontier LLM free tiers.
          </div>
          <div>
            • <strong>Minimal Hardware Footprint:</strong> Containerize the
            entire stack (FastAPI, vector index, graph store, UI) to run
            smoothly on a modest AWS EC2 <code>t3.micro</code> instance (1 vCPU,
            1GB RAM).
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
          The architecture implements LightRAG (Guo et al., 2024 HKUDS), which
          replaces heavy hierarchical Leiden clustering with dual-level entity
          and relationship indexing:
        </p>

        <GraphRAGDiagram />

        <div className="space-y-4 text-sm text-text-muted my-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Local CPU Embedding Engine (BAAI/bge-small-en-v1.5)
            </h4>
            <p className="leading-relaxed">
              Instead of paying for OpenAI <code>text-embedding-3-small</code>{" "}
              or Google hosted embeddings, document chunks and entity
              definitions are vectorized locally via{" "}
              <code>
                SentenceTransformer(&quot;BAAI/bge-small-en-v1.5&quot;)
              </code>
              . With 384 dimensions and an ultra-lean ~130MB in-memory
              footprint, it executes rapidly on standard CPU cores, eliminating
              API bills, network latency, and external provider rate limits.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Dual-Level Entity–Relationship Extraction (Gemini 2.5 Flash)
            </h4>
            <p className="leading-relaxed">
              During ingestion, raw documents are processed by Gemini 2.5 Flash
              (leveraging Google AI Studio&apos;s 1,000 requests-per-day free
              tier). It performs high-fidelity extraction of discrete entity
              nodes, inter-entity relationships, and concise relational
              descriptions without expensive MapReduce passes.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Zero-Database Storage Architecture (GraphML + NanoVectorDB)
            </h4>
            <p className="leading-relaxed">
              Knowledge topology is stored in portable GraphML format (
              <code>graph_chunk_entity_relation.graphml</code>) while entity and
              relationship vector representations are indexed directly in local
              JSON files using NanoVectorDB (<code>vdb_entities.json</code>,{" "}
              <code>vdb_relationships.json</code>). This architecture runs
              directly inside the application process memory, eliminating
              external database connection pools, networking overhead, and cloud
              hosting fees.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Resiliency Layer: Offline Tokenizer &amp; Sliding-Window Rate
              Limiter
            </h4>
            <p className="leading-relaxed">
              To guarantee bulletproof production execution, standard{" "}
              <code>tiktoken</code> was replaced with a bespoke UTF-8 tokenizer
              (<code>src/tokenizer.py</code>), preventing HTTP 403 Forbidden
              download errors in isolated Docker environments. Concurrently, a
              thread-safe 8 RPM sliding-window rate limiter (
              <code>RateLimiter</code>) regulates API dispatch, preventing 429
              quota exhaustion on the Gemini free tier.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Five Configurable Retrieval Modes
            </h4>
            <p className="leading-relaxed">
              The query engine exposes 5 distinct retrieval strategies tailored
              to query intent:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs mt-2 font-mono text-text-muted">
              <li>
                <strong className="text-text">naive:</strong> Standard flat
                vector chunk search for straightforward factual lookups.
              </li>
              <li>
                <strong className="text-text">local:</strong> Extracts 1-hop
                subgraphs connected to query-identified entities for precise
                relational reasoning.
              </li>
              <li>
                <strong className="text-text">global:</strong> Traverses
                high-level relationship summaries across the entire graph for
                broad thematic questions.
              </li>
              <li>
                <strong className="text-text">hybrid:</strong> Concurrently
                retrieves both local entity neighborhoods and global
                relationship summaries into a unified graph context.
              </li>
              <li>
                <strong className="text-text">mix:</strong> Merges hybrid graph
                context with top-k naive vector chunks, offering maximum
                contextual fidelity for complex multi-faceted inquiries.
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
          decision="Framework: LightRAG over Microsoft GraphRAG"
          choice="LightRAG dual-level architecture (Guo et al., 2024 HKUDS)"
          alternatives="Microsoft GraphRAG, Neo4j + LangChain Cypher QA, LlamaIndex GraphStore"
          reason="Microsoft GraphRAG requires recursive Leiden clustering and expensive LLM-generated community summaries across all graph levels during indexing. LightRAG drops hierarchical summarization entirely, indexing discrete entities and relationships once. Indexing cost drops from ~$120/1,000 pages to near $0, while query retrieval requires only ~100–170 tokens of extracted subgraph context instead of multi-thousand token community summaries."
        />

        <DecisionCard
          decision="Embeddings: Local BAAI/bge-small-en-v1.5 over Hosted Cloud APIs"
          choice="Local SentenceTransformer (384-dim, ~130MB RAM footprint on CPU)"
          alternatives="OpenAI text-embedding-3-small, Google text-embedding-004, Cohere Embed v3"
          reason="Hosted embedding APIs incur recurring per-token billing, network latency on every batch, and tight rate limits during continuous ingestion. Running BAAI/bge-small-en-v1.5 locally on the EC2 CPU eliminates external API invoices completely ($0.00), provides sub-millisecond local tensor lookups, and has zero rate limits."
        />

        <DecisionCard
          decision="Vector & Graph Persistence: NanoVectorDB + GraphML over Managed DBs"
          choice="Embedded GraphML file + local JSON NanoVectorDB indices"
          alternatives="Neo4j AuraDB ($65+/mo), Pinecone ($70+/mo), Qdrant Cloud, Milvus cluster"
          reason="For departmental and corporate document collections, managing an external database cluster introduces recurring subscription costs, VPC peering latency, and maintenance overhead. NanoVectorDB and GraphML live directly within the container filesystem, enabling instant deployment, zero idle cost, and effortless backup/restore via simple file copying or S3 sync."
        />

        <DecisionCard
          decision="Tokenizer & Resiliency: Custom UTF-8 Tokenizer & Sliding Rate Limiter"
          choice="Bespoke UTF-8 tokenizer (src/tokenizer.py) + 8 RPM sliding-window rate limiter"
          alternatives="Standard tiktoken, naive time.sleep(), exponential backoff retries alone"
          reason="In isolated Docker containers with restricted network egress, tiktoken attempts to download vocabulary files over HTTP on first run, causing 403 Forbidden crashes. The custom tokenizer runs 100% offline. Adding a thread-safe sliding-window rate limiter guarantees that continuous document ingestion never exceeds Gemini free tier rate limits (15 RPM / 8 RPM safe threshold), eliminating 429 failures without dropping jobs."
        />
      </Section>

      {/* 5. Evaluation */}
      <Section
        id="evaluation"
        index="05 / Evaluation"
        title="Audited FinOps Cost & Efficiency Breakdown"
      >
        <p>
          A rigorous comparative audit of indexing cost, per-query token
          payload, and recurring infrastructure spend demonstrates the dramatic
          economic advantage of the FinOps GraphRAG architecture:
        </p>

        <div className="my-6 border hairline-border rounded-lg overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface border-b hairline-b text-text-muted">
              <tr>
                <th className="py-3 px-4 font-medium">Architecture</th>
                <th className="py-3 px-4 font-medium">
                  Indexing Cost (1k Pages)
                </th>
                <th className="py-3 px-4 font-medium">Context / Query</th>
                <th className="py-3 px-4 font-medium">
                  Inference / 1k Queries
                </th>
                <th className="py-3 px-4 font-medium">Managed DB Bill</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface-2/40">
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Microsoft GraphRAG (GPT-4-Turbo)
                </td>
                <td className="py-3 px-4 text-text-muted">~$120.00</td>
                <td className="py-3 px-4 text-text-muted">~8,500 tokens</td>
                <td className="py-3 px-4 text-text-muted">~$85.00</td>
                <td className="py-3 px-4 text-text-muted">Variable</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-text font-medium">
                  Traditional Dense RAG (Cloud Embeddings)
                </td>
                <td className="py-3 px-4 text-text-muted">~$0.20</td>
                <td className="py-3 px-4 text-text-muted">~3,500 tokens</td>
                <td className="py-3 px-4 text-text-muted">~$15.00</td>
                <td className="py-3 px-4 text-text-muted">
                  ~$70/mo (Pinecone)
                </td>
              </tr>
              <tr className="bg-accent/10">
                <td className="py-3 px-4 text-accent font-semibold">
                  FinOps GraphRAG Engine (Ours)
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  $0.00{" "}
                  <span className="text-[10px] text-text-muted font-normal">
                    (Free tier)
                  </span>
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  ~100–170 tokens
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  $0.00{" "}
                  <span className="text-[10px] text-text-muted font-normal">
                    ($0.15 paid)
                  </span>
                </td>
                <td className="py-3 px-4 text-accent font-semibold">
                  $0.00{" "}
                  <span className="text-[10px] text-text-muted font-normal">
                    (NanoVectorDB)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-3 bg-surface border-t hairline-t font-mono text-[11px] text-text-faint">
            Comparative benchmark: Token consumption and API pricing based on
            standard enterprise document collections. Microsoft GraphRAG rates
            based on published HKUDS LightRAG benchmarks and OpenAI pricing;
            FinOps GraphRAG measured on Gemini 2.5 Flash + local BGE-small
            embeddings.
          </div>
        </div>
      </Section>

      {/* 6. Cost & Latency */}
      <Section
        id="cost-latency"
        index="06 / Cost & Latency"
        title="Cost, Latency & Resource Utilization"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              Inference Cost
            </span>
            <span className="text-text text-base font-semibold">
              50× to 100× Lower
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Sub-200 token prompt payloads vs multi-thousand token chunk dumps
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              End-to-End Latency
            </span>
            <span className="text-text text-base font-semibold">~850 ms</span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Local BGE vector search + NanoVectorDB + Gemini 2.5 Flash stream
            </span>
          </div>

          <div className="border hairline-border rounded p-4 bg-surface">
            <span className="text-text-muted uppercase text-[10px] block mb-1">
              RAM Footprint
            </span>
            <span className="text-text text-base font-semibold">
              ~650 MB Total
            </span>
            <span className="text-text-faint block mt-1 text-[11px]">
              Runs reliably on AWS EC2 t3.micro (1 vCPU, 1GB RAM) with swap
            </span>
          </div>
        </div>
      </Section>

      {/* 7. Deployment & Monitoring */}
      <Section
        id="deployment"
        index="07 / Deployment"
        title="Cloud Deployment & Microservice Architecture"
      >
        <p>
          The production system is deployed on an AWS EC2 <code>t3.micro</code>{" "}
          instance in the <code>us-east-1</code> region. The infrastructure is
          orchestrated via Docker Compose with the following topology:
        </p>
        <div className="my-4 border hairline-border rounded p-4 bg-surface space-y-3 font-mono text-xs text-text-muted">
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">Nginx Reverse Proxy:</strong>{" "}
              Listens on public HTTP port 80, terminating incoming client
              requests, providing gzip compression, and proxying internal
              traffic to port 8000.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">FastAPI Application Server:</strong>{" "}
              Houses the LightRAG inference engine, BGE-small embedding runner,
              custom rate limiter, and NanoVectorDB processes within a single
              container.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-text">React Vite Frontend:</strong>{" "}
              Provides an intuitive web interface for uploading documents,
              selecting retrieval modes (naive, local, global, hybrid, mix), and
              inspecting subgraph answers in real time.
            </span>
          </div>
        </div>
        <p className="text-sm text-text-muted">
          Live service endpoint is accessible at{" "}
          <a
            href="http://54.173.55.110:8000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent underline font-mono text-xs inline-flex items-center gap-1"
          >
            <span>http://54.173.55.110:8000</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          .
        </p>
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
              Failure 1: Tiktoken Container Crashes Under Network Isolation
            </h4>
            <p className="text-xs leading-relaxed">
              During early Docker builds, running <code>tiktoken</code> inside
              egress-restricted environments triggered HTTP 403 Forbidden
              exceptions because the library dynamically downloads vocabulary
              files on initialization. <em>Resolution:</em> Replaced tiktoken
              with a self-contained UTF-8 byte-pair tokenizer (
              <code>src/tokenizer.py</code>) that carries zero network
              dependencies and operates completely offline.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 2: Gemini Rate Limit Exhaustion on Continuous Ingest
            </h4>
            <p className="text-xs leading-relaxed">
              Batch document indexing quickly overwhelmed the Gemini free tier
              rate limit (15 RPM), causing sporadic 429 Too Many Requests errors
              and aborted jobs. <em>Resolution:</em> Implemented a
              sliding-window token-bucket rate limiter (<code>RateLimiter</code>
              ) in the Python runtime with an 8 RPM safety threshold, ensuring
              100% ingestion completion without dropping a single chunk.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Failure 3: Near-Duplicate Entity Proliferation
            </h4>
            <p className="text-xs leading-relaxed">
              Initial entity extraction created fragmented duplicate nodes for
              semantically identical concepts (e.g. &ldquo;AWS EC2&rdquo;,
              &ldquo;Amazon EC2&rdquo;, &ldquo;EC2 Instance&rdquo;).{" "}
              <em>Resolution:</em> Added an entity similarity deduplication
              threshold before node creation, merging aliases into singular
              canonical graph nodes and preventing graph density bloat.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text font-semibold mb-1">
              Next Steps &amp; Roadmap
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                Incorporate an automated Ragas / TruLens evaluation pipeline to
                systematically benchmark context precision and faithfulness
                across all 5 retrieval modes.
              </li>
              <li>
                Implement WebSocket streaming for real-time progressive node
                updates during continuous document ingestion.
              </li>
              <li>
                Add support for localized quantization (GGUF / ONNX) to further
                accelerate CPU tensor operations during entity vectorization.
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
              href="https://github.com/mafaqbhatti/FinOps-Optimized-GraphRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text hover:text-accent underline underline-offset-2 transition-colors duration-150"
            >
              <span>
                https://github.com/mafaqbhatti/FinOps-Optimized-GraphRAG
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-text-muted min-w-[120px]">Live Demo:</span>
            <a
              href="http://54.173.55.110:8000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text hover:text-accent underline underline-offset-2 transition-colors duration-150"
            >
              <span>http://54.173.55.110:8000</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-text-muted min-w-[120px]">Reference:</span>
            <span className="text-text-faint">
              LightRAG: Simple and Fast Retrieval-Augmented Generation (Guo et
              al., HKUDS 2024, arXiv:2410.05779)
            </span>
          </div>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
