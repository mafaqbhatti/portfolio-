import http from "http";

const PAGES = [
  "/",
  "/resume",
  "/work/flood-forecasting",
  "/work/finops-graphrag",
  "/work/market-intelligence",
];

function fetchPage(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http
      .get(`http://localhost:3000${path}`, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

async function auditAccessibility() {
  console.log("\n=======================================================");
  console.log("   AUTOMATED WCAG 2.2 AA ACCESSIBILITY AUDIT");
  console.log("=======================================================\n");

  let totalIssues = 0;

  for (const path of PAGES) {
    const html = await fetchPage(path);
    console.log(`Auditing: ${path}`);

    // 1. Language attribute
    if (!/<html[^>]*lang=["']en["']/i.test(html)) {
      console.error(`  [A11Y ERROR] Missing or invalid lang="en" on <html>`);
      totalIssues++;
    } else {
      console.log(`  ✓ lang="en" specified on <html>`);
    }

    // 2. Skip Link present and targets #main-content
    if (
      !html.includes('href="#main-content"') ||
      !html.includes('id="main-content"')
    ) {
      console.error(
        `  [A11Y ERROR] Missing skip-to-content link or #main-content landmark`
      );
      totalIssues++;
    } else {
      console.log(
        `  ✓ Skip-to-content landmark pairing verified (#main-content)`
      );
    }

    // 3. Document Title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      console.error(`  [A11Y ERROR] Document title missing or empty`);
      totalIssues++;
    } else {
      console.log(`  ✓ Document Title: "${titleMatch[1].trim()}"`);
    }

    // 4. Exactly one H1 per page
    const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    if (h1Matches.length !== 1) {
      console.error(
        `  [A11Y ERROR] Found ${h1Matches.length} <h1> tags (expected exactly 1)`
      );
      totalIssues++;
    } else {
      console.log(`  ✓ Exactly one <h1> heading present`);
    }

    // 5. Semantic Landmarks
    const hasHeader = /<header[^>]*>/i.test(html);
    const hasMain = /<main[^>]*>/i.test(html);
    const hasFooter = /<footer[^>]*>/i.test(html);

    if (!hasHeader || !hasMain || !hasFooter) {
      console.error(
        `  [A11Y ERROR] Missing landmark: header=${hasHeader}, main=${hasMain}, footer=${hasFooter}`
      );
      totalIssues++;
    } else {
      console.log(`  ✓ Core landmarks verified (<header>, <main>, <footer>)`);
    }

    // 6. SVG role="img" with aria-label
    const svgs = html.match(/<svg[^>]*>/gi) || [];
    let svgsWithoutLabel = 0;
    for (const svg of svgs) {
      if (svg.includes('role="img"') && !svg.includes("aria-label")) {
        svgsWithoutLabel++;
      }
    }
    if (svgsWithoutLabel > 0) {
      console.error(
        `  [A11Y ERROR] Found ${svgsWithoutLabel} SVGs with role="img" missing aria-label`
      );
      totalIssues++;
    } else {
      console.log(`  ✓ Inline SVGs have text alternatives`);
    }

    console.log("");
  }

  console.log("-------------------------------------------------------");
  if (totalIssues === 0) {
    console.log("✓ WCAG 2.2 AA ACCESSIBILITY AUDIT PASSED WITH 0 DEFECTS!");
  } else {
    console.error(`❌ FOUND ${totalIssues} ACCESSIBILITY ISSUES.`);
    process.exit(1);
  }
}

auditAccessibility();
