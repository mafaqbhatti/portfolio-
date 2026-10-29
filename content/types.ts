export interface Identity {
  fullName: string;
  displayName: string;
  role: string;
  location: string;
  openTo: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  resumePdfUrl: string;
  resumePdfMarker?: string;
  domainMarker?: string;
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  graduationDateMarker: string;
}

export interface KaggleStatus {
  verified: boolean;
  claim: string;
  marker: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  permissionMarker?: string;
}

export interface ProofMetric {
  id: string;
  value: string;
  unit?: string;
  label: string;
  description: string;
  methodLink: string;
  permissionMarker?: string;
}

export interface StackCategory {
  category: string;
  skills: Array<{
    name: string;
    usedIn: string[];
  }>;
}

export interface FlagshipProject {
  slug: string;
  index: string;
  title: string;
  headline: string;
  outcome: string;
  role: string;
  year: string;
  timeframe: string;
  stack: string[];
  heroMetric: {
    value: string;
    label: string;
  };
  metricsFootnote: string;
  summary: string[];
  markers: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface CompactProject {
  name: string;
  tech: string;
  description: string;
  linkMarker?: string;
  permissionMarker?: string;
}
