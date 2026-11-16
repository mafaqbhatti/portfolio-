import {
  Identity,
  Education,
  KaggleStatus,
  ExperienceItem,
  ProofMetric,
  StackCategory,
} from "./types";

export const identity: Identity = {
  fullName: "Muhammad Afaq Bhatti",
  displayName: "Afaq Bhatti",
  role: "AI/ML Engineer",
  location: "Islamabad, Pakistan",
  openTo: "Open to full-time AI/ML roles and remote work",
  email: "afaqbhatti147@gmail.com",
  githubUrl: "https://github.com/mafaqbhatti",
  githubHandle: "github.com/mafaqbhatti",
  linkedinUrl: "https://www.linkedin.com/in/m-afaq-bhatti/",
  linkedinHandle: "linkedin.com/in/m-afaq-bhatti",
  resumePdfUrl: "/assets/Afaq_Bhatti_Resume.pdf",
  resumePdfMarker: "TODO(owner): updated file",
  domainMarker: "TODO(owner): production custom domain",
};

export const education: Education = {
  degree: "BS Computer Science",
  institution: "COMSATS University Islamabad",
  cgpa: "3.4/4.0",
  graduationDateMarker: "TODO(owner): confirm",
};

export const kaggleStatus: KaggleStatus = {
  verified: false,
  claim: "Global Top 14 data scientist",
  marker: "TODO(owner): profile URL and exact ranking category",
};

export const experiences: ExperienceItem[] = [
  {
    id: "horquva",
    company: "Horquva",
    role: "AI Evaluation Engineer Intern",
    location: "Islamabad",
    period: "Jun 2026 – Aug 2026",
    bullets: [
      "Designed the architecture of an AI security platform covering agent identity and authorization, guardrails, prompt-injection defense, tool permissions, memory isolation, risk assessment, and a kill switch.",
      "Built and evaluated 12 FastAPI security microservices with a shared contracts library, validated by 78 passing tests.",
    ],
    permissionMarker:
      "TODO(owner): written permission to publish; keep all descriptions architecture-level, with no internal repo or directory names",
  },
  {
    id: "itsolera",
    company: "ITSOLERA",
    role: "Data Science Intern",
    location: "Islamabad",
    period: "Jul 2025 – Sep 2025",
    bullets: [
      "Led a team shipping 6 ML solutions (including traffic-accident forecasting and demographic prediction) and built FinSentRisk (LSTM/ARIMA forecasting for market trends and risk).",
      "Cut model deployment time by 40% with containerized Flask inference APIs and automated ingestion pipelines, using DVC, MLflow, GitHub Actions, and automated retraining.",
    ],
  },
];

export const proofMetrics: ProofMetric[] = [
  {
    id: "rag-cost",
    value: "50×",
    label: "Lower RAG Inference Cost",
    description:
      "Reduced inference cost relative to traditional dense-vector pipelines via LightRAG graph entity caching.",
    methodLink: "/work/finops-graphrag#evaluation",
  },
  {
    id: "agent-speed",
    value: "5×",
    label: "Faster Execution",
    description:
      "Parallel fan-out execution across 5 specialist agents compared to sequential LLM workflow runs.",
    methodLink: "/work/market-intelligence#evaluation",
  },
  {
    id: "flood-accuracy",
    value: "84.5%",
    unit: "Recall",
    label: "Held-Out Inundation Recall",
    description:
      "Disaster-critical sensitivity prioritizing zero-miss flood detection across 19,964 held-out samples (Recall: 0.8435 / 84.5%, IoU: 0.6496, Dice: 0.7876).",
    methodLink: "/work/flood-forecasting#evaluation",
  },
  {
    id: "security-tests",
    value: "78",
    unit: "Tests",
    label: "Passing Security Microservice Tests",
    description:
      "Validating agent isolation, prompt guardrails, and tool authorization across 12 FastAPI services.",
    methodLink: "#experience",
    permissionMarker:
      "TODO(owner): written permission to publish; keep all descriptions architecture-level, with no internal repo or directory names",
  },
];

export const aboutCopy = {
  p1: "I am an AI/ML engineer based in Islamabad, Pakistan. I build LLM systems, GraphRAG retrieval pipelines, and multi-agent architectures that hold up under production traffic, and I build the validation harnesses to measure whether they do.",
  p2: "My work focuses on concrete engineering trade-offs: replacing brute-force context windows with graph entity extraction, running parallel agent fan-outs to cut execution latency, and building automated retraining pipelines with DVC, MLflow, and GitHub Actions.",
  lookingFor:
    "What I’m looking for: Full-time AI/ML engineering roles and remote engineering teams shipping production LLM systems.",
};

// Grouped by discipline and verified against active repositories & production systems
export const stackCategories: StackCategory[] = [
  {
    category: "Languages & Core Runtimes",
    skills: [
      {
        name: "Python",
        usedIn: [
          "Flood Forecasting",
          "FinOps GraphRAG",
          "MarketMind",
          "AgenticHire",
          "NeRF Turntable",
          "MLOps Blueprint",
        ],
      },
      {
        name: "TypeScript / JavaScript",
        usedIn: [
          "MarketMind UI",
          "AssessOps CBT Platform",
          "Portfolio Website",
        ],
      },
      {
        name: "C++",
        usedIn: ["Foundational systems & algorithm design at COMSATS"],
      },
      {
        name: "SQL",
        usedIn: [
          "FinOps GraphRAG",
          "Relational schema design",
          "ITSOLERA pipelines",
        ],
      },
    ],
  },
  {
    category: "Machine Learning & 3D Vision",
    skills: [
      {
        name: "PyTorch",
        usedIn: [
          "Flood Forecasting (ConvLSTM + U-Net)",
          "NeRF Turntable (Volumetric Rendering)",
        ],
      },
      {
        name: "NeRF & COLMAP",
        usedIn: [
          "NeRF Turntable 3D (Structure-from-Motion & Instant-NGP view synthesis)",
        ],
      },
      {
        name: "scikit-learn",
        usedIn: [
          "MLOps Production Blueprint",
          "ITSOLERA tabular baseline models",
        ],
      },
      {
        name: "TensorFlow",
        usedIn: ["ITSOLERA computer vision & forecasting models"],
      },
    ],
  },
  {
    category: "LLMs & Agentic Systems",
    skills: [
      {
        name: "LangGraph",
        usedIn: [
          "MarketMind (Parallel fan-out multi-agent financial intelligence)",
        ],
      },
      {
        name: "LightRAG",
        usedIn: [
          "FinOps GraphRAG Engine (Dual-level knowledge graph entity extraction)",
        ],
      },
      {
        name: "LangChain",
        usedIn: [
          "AgenticHire (Multi-agent resume analysis)",
          "Prompt chaining & evaluation",
        ],
      },
      {
        name: "Groq LPU & Gemini",
        usedIn: [
          "MarketMind",
          "ATS Resume Compiler",
          "FinOps GraphRAG",
          "AgenticHire",
        ],
      },
      {
        name: "LangSmith",
        usedIn: ["Agent trace inspection & evaluation pipelines"],
      },
    ],
  },
  {
    category: "Backends, Streaming & Interactive UIs",
    skills: [
      {
        name: "FastAPI",
        usedIn: [
          "Horquva 12 security microservices",
          "FinOps GraphRAG",
          "AgenticHire",
          "ATS Resume Compiler",
        ],
      },
      {
        name: "Server-Sent Events (SSE)",
        usedIn: [
          "LLM Streaming (Token-by-token generation)",
          "AgenticHire real-time agent output",
        ],
      },
      {
        name: "Streamlit",
        usedIn: [
          "AgenticHire interactive recruiter studio",
          "NeRF Turntable 3D controller",
        ],
      },
      {
        name: "Express.js & Node.js",
        usedIn: ["AssessOps assessment engine & API gateway"],
      },
      {
        name: "Flask",
        usedIn: ["ITSOLERA model inference APIs", "MLOps Emotion Detection"],
      },
    ],
  },
  {
    category: "MLOps, Orchestration & QA",
    skills: [
      {
        name: "MLflow",
        usedIn: [
          "MLOps Production Blueprint (Experiment tracking & model registry)",
          "ITSOLERA pipelines",
        ],
      },
      {
        name: "DVC",
        usedIn: [
          "MLOps Production Blueprint (Data versioning & pipeline reproducibility)",
          "ITSOLERA",
        ],
      },
      {
        name: "Prefect",
        usedIn: [
          "MLOps Production Blueprint (Declarative DAG workflow orchestration)",
        ],
      },
      {
        name: "BentoML",
        usedIn: [
          "MLOps Production Blueprint (Production containerized model packaging & serving)",
        ],
      },
      {
        name: "Selenium & Pytest",
        usedIn: [
          "AssessOps (Automated headless E2E testing container)",
          "MLOps Blueprint unit suites",
        ],
      },
    ],
  },
  {
    category: "Cloud, DevOps & Data Infrastructure",
    skills: [
      {
        name: "Docker & Docker Compose",
        usedIn: [
          "AssessOps microservices",
          "FinOps GraphRAG",
          "MarketMind",
          "MLOps Blueprint",
        ],
      },
      {
        name: "Jenkins",
        usedIn: [
          "AssessOps (Automated declarative CI/CD pipelines & build alerting)",
        ],
      },
      {
        name: "Terraform / OpenTofu",
        usedIn: [
          "MLOps Production Blueprint (Declarative AWS infrastructure as code)",
        ],
      },
      {
        name: "AWS (EC2, S3, Lambda, ECR)",
        usedIn: ["MLOps Production Blueprint", "FinOps GraphRAG", "MarketMind"],
      },
      {
        name: "PostgreSQL & MongoDB",
        usedIn: [
          "AssessOps (MongoDB document persistence)",
          "PostgreSQL structured relational storage",
        ],
      },
      {
        name: "GitHub Actions",
        usedIn: [
          "Automated CI test suites",
          "ITSOLERA automated retraining workflows",
        ],
      },
    ],
  },
];
