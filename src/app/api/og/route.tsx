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
          backgroundColor: "#0A0B0D",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          border: "1px solid #232830",
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
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#D4FF3A",
              }}
            />
            <span
              style={{
                color: "#ECEEF1",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              {identity.displayName}
            </span>
          </div>

          <div
            style={{
              color: "#9AA1AB",
              fontSize: 18,
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
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
              color: "#ECEEF1",
              fontSize: 56,
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "960px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: "#9AA1AB",
              fontSize: 24,
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
            borderTop: "1px solid #232830",
            paddingTop: "24px",
            color: "#7A828E",
            fontFamily: "monospace",
            fontSize: 16,
          }}
        >
          <div>Islamabad, Pakistan · Agentic Systems · GraphRAG · MLOps</div>
          <div style={{ color: "#D4FF3A" }}>afaqbhatti.dev</div>
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
