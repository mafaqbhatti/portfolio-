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
    value: "0.65",
    unit: "IoU",
    label: "Held-Out Flood Accuracy",
    description:
      "Evaluated on 19,964 held-out satellite samples across Pakistan (Dice/F1: 0.7876, Recall: 0.8125).",
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

// Maximum 25 items, grouped and linked to where each was used
export const stackCategories: StackCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "Python",
        usedIn: [
          "Flood Forecasting",
          "FinOps GraphRAG",
          "Market Intelligence",
          "ITSOLERA",
          "Horquva",
        ],
      },
      {
        name: "C++",
        usedIn: ["Foundational systems & algorithm design at COMSATS"],
      },
      {
        name: "SQL",
        usedIn: ["FinOps GraphRAG", "ITSOLERA automated pipelines"],
      },
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: [
      { name: "PyTorch", usedIn: ["Flood Forecasting (ConvLSTM + U-Net)"] },
      {
        name: "TensorFlow",
        usedIn: ["ITSOLERA computer vision & forecasting models"],
      },
      { name: "scikit-learn", usedIn: ["ITSOLERA tabular baseline models"] },
    ],
  },
  {
    category: "LLMs & Agentic Systems",
    skills: [
      { name: "LangChain", usedIn: ["Prompt chaining & evaluation pipelines"] },
      {
        name: "LangGraph",
        usedIn: ["Distributed Multi-Agent Market Intelligence System"],
      },
      { name: "LangSmith", usedIn: ["Agent trace inspection & evaluation"] },
      { name: "LightRAG", usedIn: ["FinOps GraphRAG Engine"] },
    ],
  },
  {
    category: "Backends & APIs",
    skills: [
      {
        name: "FastAPI",
        usedIn: ["Horquva 12 security microservices", "FinOps GraphRAG"],
      },
      {
        name: "Flask",
        usedIn: ["ITSOLERA model inference APIs", "MLOps Emotion Detection"],
      },
    ],
  },
  {
    category: "Cloud, Containers & CI/CD",
    skills: [
      {
        name: "AWS (EC2, S3, IAM)",
        usedIn: ["FinOps GraphRAG", "Market Intelligence"],
      },
      {
        name: "Docker",
        usedIn: ["Containerized model inference APIs at ITSOLERA"],
      },
      {
        name: "Kubernetes",
        usedIn: ["Microservice deployment architecture at Horquva"],
      },
      {
        name: "GitHub Actions",
        usedIn: [
          "Automated retraining pipelines at ITSOLERA",
          "CI test suites",
        ],
      },
    ],
  },
  {
    category: "MLOps & Data Versioning",
    skills: [
      {
        name: "MLflow",
        usedIn: ["Experiment tracking & model registry at ITSOLERA"],
      },
      { name: "DVC", usedIn: ["Data and pipeline versioning at ITSOLERA"] },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", usedIn: ["Structured operational storage"] },
      { name: "MongoDB", usedIn: ["Unstructured document and entity storage"] },
    ],
  },
];
