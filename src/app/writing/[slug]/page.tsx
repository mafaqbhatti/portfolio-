import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getWritingPosts, hasWritingPosts } from "@/lib/writing";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getWritingPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function WritingPostPage({ params }: PageProps) {
  if (!hasWritingPosts()) {
    notFound();
  }

  const { slug } = await params;
  const post = getWritingPosts().find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text transition-colors duration-150 mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to writing</span>
      </Link>

      <header className="mb-10 pb-6 border-b hairline-b">
        <span className="font-mono text-xs text-text-muted">{post.date}</span>
        <h1 className="font-h2 text-text mt-2">{post.title}</h1>
        {post.description && (
          <p className="mt-3 text-lg text-text-muted">{post.description}</p>
        )}
      </header>

      <div className="prose-editorial text-text leading-relaxed text-base space-y-4">
        {post.content}
      </div>
    </div>
  );
}
