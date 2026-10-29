import { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipProjects } from "@/content/projects";
import { FloodForecastingStudy } from "@/components/work/flood-forecasting-study";
import { FinOpsGraphRAGStudy } from "@/components/work/finops-graphrag-study";
import { MarketIntelligenceStudy } from "@/components/work/market-intelligence-study";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return flagshipProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = flagshipProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: project.title,
    description: project.headline,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.outcome,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = flagshipProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  switch (slug) {
    case "flood-forecasting":
      return <FloodForecastingStudy />;
    case "finops-graphrag":
      return <FinOpsGraphRAGStudy />;
    case "market-intelligence":
      return <MarketIntelligenceStudy />;
    default:
      notFound();
  }
}
