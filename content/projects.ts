import { FlagshipProject, CompactProject } from "./types";

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "flood-forecasting",
    index: "01",
    title: "Flood Forecasting for Pakistan",
    headline:
      "Pixel-level flood probability maps via multi-sensor satellite fusion",
    outcome:
      "IoU 0.6496 and Dice 0.7876 on 19,964 held-out multi-sensor samples",
    role: "Final-year project (owns all AI/ML components)",
    year: "2026",
    timeframe: "2025 – 2026",
    stack: [
      "PyTorch",
      "ResNet18",
      "ConvLSTM",
      "U-Net",
      "Monte Carlo Dropout",
      "Google Colab (Tesla T4)",
    ],
    heroMetric: {
      value: "0.65",
      label: "Held-out IoU",
    },
    metricsFootnote:
      "Evaluated on 19,964 held-out satellite samples across Pakistan (Sentinel-1 SAR, GPM, SMAP).",
    summary: [
      "Designed and implemented an end-to-end multi-sensor deep learning pipeline to predict pixel-level flood extents across Pakistan.",
      "Fused Sentinel-1 Synthetic Aperture Radar (SAR), GPM precipitation, SMAP soil moisture, elevation, slope, and land cover into a temporal spatiotemporal model.",
      "Combined a ResNet18 spatial feature extractor with a ConvLSTM temporal encoder and U-Net decoder, estimating uncertainty via Monte Carlo Dropout.",
    ],
    markers: [
      "TODO(owner): confirm these are the final numbers; baseline model and its scores; sample prediction maps; error analysis",
    ],
  },
  {
    slug: "finops-graphrag",
    index: "02",
    title: "FinOps GraphRAG Engine",
    headline: "Knowledge graph retrieval engine with 50× lower inference cost",
    outcome:
      "50× lower inference cost versus traditional dense-vector pipelines",
    role: "Lead AI Engineer",
    year: "2026",
    timeframe: "Apr 2026",
    stack: [
      "LightRAG",
      "Gemini 2.5 Flash",
      "BAAI/bge-small-en-v1.5",
      "NanoVectorDB",
      "GraphML",
      "FastAPI",
      "Docker",
      "AWS EC2",
    ],
    heroMetric: {
      value: "50×",
      label: "Cost reduction",
    },
    metricsFootnote:
      "Measured token consumption and API cost per retrieval against traditional dense retrieval architectures.",
    summary: [
      "Architected a zero-managed-DB knowledge graph retrieval engine using LightRAG (HKUDS) and Gemini 2.5 Flash for dual-level entity-relationship extraction.",
      "Eliminated hosted embedding bills by running CPU-optimized BAAI/bge-small-en-v1.5 locally, paired with a custom UTF-8 tokenizer and sliding-window rate limiter.",
      "Supports 5 distinct retrieval modes (naive, local, global, hybrid, mix) over local GraphML and NanoVectorDB, containerized on an AWS EC2 t3.micro instance.",
    ],
    repoUrl: "https://github.com/mafaqbhatti/FinOps-Optimized-GraphRAG",
    demoUrl: "http://54.173.55.110:8000",
    markers: [],
  },
  {
    slug: "market-intelligence",
    index: "03",
    title: "Distributed Multi-Agent Market Intelligence System",
    headline:
      "Parallel fan-out / fan-in multi-agent system on LangGraph and Groq",
    outcome: "5× faster execution than sequential multi-agent execution",
    role: "Lead AI Engineer",
    year: "2026",
    timeframe: "Mar 2026",
    stack: ["LangGraph", "Groq (LLaMA-3.3)", "AWS EC2", "Streamlit"],
    heroMetric: {
      value: "5×",
      label: "Speed improvement",
    },
    metricsFootnote:
      "Measured end-to-end wall-clock latency across 5 parallel specialist agents versus serial chain invocation.",
    summary: [
      "Architected a parallel multi-agent system orchestrating 5 specialist agents: Price Action, Sentiment, On-Chain, Macro, and Risk.",
      "Implemented using LangGraph with Groq-hosted LLaMA-3.3 for sub-second inference, fanning out concurrently and synthesizing into a unified trading verdict.",
      "Deployed on AWS EC2 and monitored with a live Streamlit operational interface.",
    ],
    markers: [
      'TODO(owner): confirm the exact agent list (the old site\'s diagram showed six nodes: Market Data, Price Action, Sentiment, On-Chain, Macro, Risk; reconcile with "5 agents"), measurement method, repo link',
    ],
  },
  {
    slug: "hireflow-recruitment",
    index: "04",
    title: "HireFlow AI Recruitment Platform",
    headline:
      "Autonomous 5-agent AI recruitment pipeline compressing weeks into 3 minutes",
    outcome:
      "2–4 week hiring cycle compressed into ~3 minutes of autonomous processing",
    role: "Lead AI Systems Architect",
    year: "2026",
    timeframe: "Feb 2026 – Apr 2026",
    stack: [
      "Groq (LLaMA 3 70B)",
      "Apache Kafka",
      "PostgreSQL 16",
      "Redis 7",
      "Node.js 20",
      "Next.js 14",
      "Streamlit",
      "Docker",
    ],
    heroMetric: {
      value: "3 min",
      label: "Active turnaround",
    },
    metricsFootnote:
      "Benchmarked active evaluation turnaround across multi-stage candidate workflows from resume screening to executive hiring verdict.",
    summary: [
      "Architected an event-driven 5-agent autonomous recruitment pipeline powered by Apache Kafka 7.5 and Groq-hosted LLaMA 3 70B.",
      "Autonomously screens in-memory decrypted resumes (AES-256), generates bespoke technical assessments, grades submissions, conducts live Web Speech voice interviews, and synthesizes executive hiring dossiers.",
      "Enforces strict multi-tenant data isolation via PostgreSQL 16/Prisma, sub-millisecond Redis stage caching, real-time Socket.io Kanban updates, and dual Next.js 14 / Streamlit frontends.",
    ],
    repoUrl: "https://github.com/mafaqbhatti/AgenticHire-",
    markers: [],
  },
];

export const compactProjects: CompactProject[] = [
  {
    name: "VisionRAG",
    tech: "ColPali · ColQwen2 · Gemini",
    description:
      "Visual RAG pipeline querying complex PDFs with charts and tables without OCR extraction data loss.",
    linkMarker: "TODO(owner): repository/demo link",
  },
  {
    name: "MLOps Emotion Detection",
    tech: "CNN · Flask · DVC · MLflow · GitHub Actions",
    description:
      "Automated model retraining and deployment pipeline with data versioning and experiment tracking.",
    linkMarker: "TODO(owner): repository/demo link",
  },
  {
    name: "ai-codebase-architect",
    tech: "AST Parsing · LLM Code Intelligence",
    description:
      "Automated codebase dependency analysis, architectural refactoring plans, and system documentation.",
    linkMarker: "TODO(owner): repository/demo link",
  },
  {
    name: "Horquva AI Security Platform Summary",
    tech: "FastAPI · Agent Guardrails · Microservices",
    description:
      "Architectural design for agent authorization, prompt-injection defense, tool permissions, and kill switch.",
    permissionMarker:
      "TODO(owner): written permission to publish; keep all descriptions architecture-level, with no internal repo or directory names",
  },
];
