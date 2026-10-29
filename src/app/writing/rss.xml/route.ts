import { NextResponse } from "next/server";
import { getWritingPosts, hasWritingPosts } from "@/lib/writing";
import { identity } from "@/content/profile";

export async function GET() {
  if (!hasWritingPosts()) {
    return new NextResponse("RSS feed not available: No published posts.", {
      status: 404,
    });
  }

  const posts = getWritingPosts();
  const siteUrl = "https://afaqbhatti.dev";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${identity.fullName} — Technical Writing</title>
  <link>${siteUrl}/writing</link>
  <description>Technical engineering notes, evaluation benchmarks, and LLM systems analysis.</description>
  <language>en-us</language>
  ${posts
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${siteUrl}/writing/${p.slug}</link>
      <description><![CDATA[${p.description}]]></description>
      <pubDate>${new Date(p.date || Date.now()).toUTCString()}</pubDate>
      <guid>${siteUrl}/writing/${p.slug}</guid>
    </item>`
    )
    .join("")}
</channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

