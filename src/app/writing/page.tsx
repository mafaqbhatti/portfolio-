import { notFound } from "next/navigation";
import Link from "next/link";
import { getWritingPosts, hasWritingPosts } from "@/lib/writing";

export const metadata = {
  title: "Writing — Afaq Bhatti",
  description:
    "Technical notes, systems engineering analysis, and evaluation benchmarks.",
};

export default function WritingIndexPage() {
  if (!hasWritingPosts()) {
    notFound();
  }

  const posts = getWritingPosts();

  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <div className="mb-12 border-b hairline-b pb-6">
        <span className="font-mono-label text-text-muted">
          Writing / Field Notes
        </span>
        <h1 className="font-h2 text-text mt-2">
          Engineering write-ups & analysis
        </h1>
      </div>

      <div className="divide-y divide-border border-y hairline-b hairline-t">
        {posts.map((post) => (
          <article key={post.slug} className="py-6 space-y-1">
            <span className="font-mono text-xs text-text-muted">
              {post.date}
            </span>
            <h2 className="font-serif text-2xl text-text hover:text-accent">
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-text-muted">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
