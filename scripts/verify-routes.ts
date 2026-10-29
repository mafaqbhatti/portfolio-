import http from "http";

interface RouteCheck {
  path: string;
  expectedStatus: number;
  description: string;
}

const ROUTES_TO_TEST: RouteCheck[] = [
  { path: "/", expectedStatus: 200, description: "Home Page (all 7 sections)" },
  { path: "/resume", expectedStatus: 200, description: "Web Résumé Page" },
  {
    path: "/work/flood-forecasting",
    expectedStatus: 200,
    description: "Flagship Case Study 1",
  },
  {
    path: "/work/finops-graphrag",
    expectedStatus: 200,
    description: "Flagship Case Study 2",
  },
  {
    path: "/work/market-intelligence",
    expectedStatus: 200,
    description: "Flagship Case Study 3",
  },
  { path: "/robots.txt", expectedStatus: 200, description: "Robots.txt" },
  { path: "/sitemap.xml", expectedStatus: 200, description: "Sitemap.xml" },
  {
    path: "/api/og",
    expectedStatus: 200,
    description: "Dynamic OpenGraph Image Generation",
  },
  {
    path: "/resume.pdf",
    expectedStatus: 200,
    description: "Static Résumé PDF Download",
  },
  {
    path: "/writing",
    expectedStatus: 404,
    description: "Writing Route (Hidden when 0 posts exist)",
  },
  {
    path: "/writing/rss.xml",
    expectedStatus: 404,
    description: "Writing RSS (Hidden when 0 posts exist)",
  },
  {
    path: "/non-existent-page",
    expectedStatus: 404,
    description: "Custom 404 Error Page",
  },
];

const BANNED_WORDS = [
  "passionate",
  "results-driven",
  "cutting-edge",
  "leverage",
  "synergy",
  "ever-evolving",
  "journey",
];

function fetchRoute(
  path: string
): Promise<{ statusCode: number; body: string }> {
  return new Promise((resolve, reject) => {
    http
      .get(`http://localhost:3000${path}`, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () =>
          resolve({ statusCode: res.statusCode || 0, body: data })
        );
      })
      .on("error", reject);
  });
}

async function runVerification() {
  console.log("\n=======================================================");
  console.log("   AUTOMATED ROUTE & LINK INTEGRITY TEST SUITE");
  console.log("=======================================================\n");

  let failures = 0;

  for (const route of ROUTES_TO_TEST) {
    try {
      const res = await fetchRoute(route.path);
      const passed = res.statusCode === route.expectedStatus;

      if (passed) {
        console.log(
          `[PASS] ${route.path.padEnd(28)} -> HTTP ${res.statusCode} (${route.description})`
        );
      } else {
        console.error(
          `[FAIL] ${route.path.padEnd(28)} -> Expected ${route.expectedStatus}, got ${res.statusCode}`
        );
        failures++;
      }

      // Check for banned words in content bodies of successful pages
      if (res.statusCode === 200) {
        const lowerBody = res.body.toLowerCase();
        for (const word of BANNED_WORDS) {
          if (lowerBody.includes(word.toLowerCase())) {
            console.error(
              `[BANNED WORD VIOLATION] Found forbidden buzzword "${word}" on ${route.path}`
            );
            failures++;
          }
        }
      }
    } catch (err: any) {
      console.error(`[ERROR] Failed to fetch ${route.path}: ${err.message}`);
      failures++;
    }
  }

  console.log("\n-------------------------------------------------------");
  if (failures === 0) {
    console.log("✓ ALL ROUTE CHECKS & ANTI-PATTERN AUDITS PASSED CLEANLY!");
  } else {
    console.error(`❌ ${failures} CHECKS FAILED.`);
    process.exit(1);
  }
}

runVerification();
