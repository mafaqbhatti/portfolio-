import fs from "fs";
import path from "path";

const SEARCH_DIRS = ["content", "src"];
const IGNORE_DIRS = ["node_modules", ".next", "legacy", ".git", "dist"];
const TODO_PATTERN = /TODO\(owner\):[^\n\r"]*/g;

interface TodoHit {
  file: string;
  line: number;
  match: string;
}

function scanDirectory(dir: string): TodoHit[] {
  const hits: TodoHit[] = [];

  if (!fs.existsSync(dir)) return hits;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (IGNORE_DIRS.includes(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      hits.push(...scanDirectory(fullPath));
    } else if (
      entry.isFile() &&
      /\.(ts|tsx|js|jsx|md|mdx|json)$/.test(entry.name)
    ) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const lines = content.split("\n");

      lines.forEach((lineText, idx) => {
        let match: RegExpExecArray | null;
        const regex = new RegExp(TODO_PATTERN);
        while ((match = regex.exec(lineText)) !== null) {
          hits.push({
            file: fullPath,
            line: idx + 1,
            match: match[0],
          });
        }
      });
    }
  }

  return hits;
}

function runCheck() {
  const isProduction =
    (process.env.NODE_ENV === "production" ||
      process.argv.includes("--strict")) &&
    process.env.ALLOW_TODOS !== "true";
  const allHits: TodoHit[] = [];

  for (const dir of SEARCH_DIRS) {
    allHits.push(...scanDirectory(dir));
  }

  if (allHits.length > 0) {
    console.error(
      `\n🚨 TODO(owner) markers detected (${allHits.length} found):\n`
    );
    for (const hit of allHits) {
      console.error(`  - ${hit.file}:${hit.line} -> "${hit.match}"`);
    }

    if (isProduction) {
      console.error(
        "\n❌ Build failed: Production builds are strictly prohibited while TODO(owner) markers remain."
      );
      console.error(
        "Resolve all TODO(owner) markers or verify pending details before deploying.\n"
      );
      process.exit(1);
    } else {
      console.warn(
        "\n⚠️  [DEV NOTICE] Active TODO(owner) markers found. These will render highlighted in development."
      );
    }
  } else {
    console.log(
      "✓ Content Integrity Check passed: Zero TODO(owner) markers found."
    );
  }
}

runCheck();
