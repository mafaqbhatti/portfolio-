import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { identity } from "@/content/profile";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || identity.fullName;
    const role = searchParams.get("role") || identity.role;
    const subtitle =
      searchParams.get("subtitle") ||
      "I build LLM systems that hold up in production, and measure whether they do.";

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0D14",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                color: "#F1F4F9",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              {identity.displayName}
            </span>
          </div>

          <div
            style={{
              color: "#8F9CAE",
              fontSize: 18,
              fontFamily: "monospace",
              letterSpacing: "0.02em",
            }}
          >
            {role}
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              color: "#F1F4F9",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: "#8F9CAE",
              fontSize: 22,
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer Metadata */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            color: "#5A677A",
            fontFamily: "monospace",
            fontSize: 16,
          }}
        >
          <div>Islamabad, Pakistan · Agentic Systems · GraphRAG · MLOps</div>
          <div style={{ color: "#00D2B4" }}>afaqbhatti.dev</div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response("Failed to generate OpenGraph image", { status: 500 });
  }
}
