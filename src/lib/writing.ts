import fs from "fs";
import path from "path";

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export function getWritingPosts(): WritingPost[] {
  if (!fs.existsSync(WRITING_DIR)) {
    return [];
  }

  const files = fs.readdirSync(WRITING_DIR);
  const mdxFiles = files.filter((f) => /\.(md|mdx)$/.test(f));

  if (mdxFiles.length === 0) {
    return [];
  }

  const posts: WritingPost[] = [];

  for (const file of mdxFiles) {
    const filePath = path.join(WRITING_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const slug = file.replace(/\.(md|mdx)$/, "");

    // Simple frontmatter parsing
    const titleMatch = content.match(/title:\s*["']?([^"'\n\r]+)["']?/);
    const dateMatch = content.match(/date:\s*["']?([^"'\n\r]+)["']?/);
    const descMatch = content.match(/description:\s*["']?([^"'\n\r]+)["']?/);

    posts.push({
      slug,
      title: titleMatch ? titleMatch[1] : slug,
      date: dateMatch ? dateMatch[1] : "",
      description: descMatch ? descMatch[1] : "",
      content,
    });
  }

  return posts;
}

export function hasWritingPosts(): boolean {
  return getWritingPosts().length > 0;
}

