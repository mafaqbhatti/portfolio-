/* ==========================================================================
   Project data — sourced from resume + GitHub README feature table.
   Edit this file to add/update projects; main.js renders it automatically.
   ========================================================================== */

const projects = [
  {
    title: "FinOps-Optimized GraphRAG",
    subtitle: "Local Knowledge Graph Engine",
    date: "Apr 2026",
    metric: "1/6000th inference cost",
    description:
      "Built a GraphRAG system with LightRAG and Gemini 2.5 Flash for entity–relationship extraction. Multi-mode retrieval (hybrid / global / local) combines NanoVectorDB semantic search with graph traversal, deployed on AWS EC2 + S3 via FastAPI.",
    tags: ["LightRAG", "Gemini 2.5 Flash", "FastAPI", "AWS EC2", "NanoVectorDB"],
    path: "~/projects/finops-graphrag",
    github: "https://github.com/M-Afaq-Bhatti"
  },
  {
    title: "Multi-Agent Market Intelligence",
    subtitle: "Distributed Fan-Out / Fan-In System",
    date: "Mar 2026",
    metric: "5x faster than sequential",
    description:
      "A parallel multi-agent system built with LangGraph + Groq LLaMA-3.3 — 5 specialist agents analyze price action, sentiment, on-chain metrics, macro conditions, and risk simultaneously, synthesizing outputs into one trading verdict. Deployed on AWS EC2 with a Streamlit dashboard.",
    tags: ["LangGraph", "Groq · LLaMA-3.3", "AWS EC2", "Streamlit"],
    path: "~/projects/market-intelligence",
    github: "https://github.com/M-Afaq-Bhatti"
  },
  {
    title: "NeRF Turntable",
    subtitle: "2D Photos to 3D Neural Rendering",
    date: "2025",
    metric: "Full NeRF built from scratch, no libraries",
    description:
      "A from-scratch PyTorch implementation of Neural Radiance Fields — positional encoding, an 8-layer density/color MLP, and volumetric ray-marching, trained on 20 turntable photos to synthesize novel 360° views. Wrapped in a FastAPI + React app with an async render-job queue so anyone can generate a rotating GIF from the trained model on demand.",
    tags: ["PyTorch", "NeRF", "Volumetric Rendering", "FastAPI", "React"],
    path: "~/projects/nerf-turntable",
    github: "https://github.com/M-Afaq-Bhatti/nerf"
  },
  {
    title: "VisionRAG",
    subtitle: "Multimodal Document Intelligence",
    date: "Apr 2026",
    metric: "Sub-second, no OCR loss",
    description:
      "A visual RAG pipeline using ColPali (ColQwen2) + Gemini to query complex PDFs — tables and charts included — without the data loss OCR introduces. Sub-second responses across multi-page corpora.",
    tags: ["ColPali", "ColQwen2", "Gemini", "Visual RAG"],
    path: "~/projects/vision-rag",
    github: "https://github.com/M-Afaq-Bhatti"
  },
  {
    title: "MLOps Emotion Detection Pipeline",
    subtitle: "End-to-End CNN Serving",
    date: "Jul 2025",
    metric: "Zero-touch retraining",
    description:
      "CNN-based emotion detection served via Flask, wrapped in a full MLOps pipeline — DVC for data versioning, MLflow for experiment tracking, and GitHub Actions CI/CD — enabling automatic retraining as new data arrives.",
    tags: ["CNN", "Flask", "DVC", "MLflow", "CI/CD"],
    path: "~/projects/emotion-detection",
    github: "https://github.com/M-Afaq-Bhatti"
  }
  
];