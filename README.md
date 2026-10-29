# Muhammad Afaq Bhatti — Personal Engineering Portfolio

Production-grade personal portfolio website for **Afaq Bhatti**, AI/ML Engineer based in Islamabad, Pakistan. Built with Next.js 15 (App Router), TypeScript (strict mode), Tailwind CSS driven by CSS-variable tokens, and Motion.

Positioning: _I build LLM systems that hold up in production, and measure whether they do._

---

## 🏗️ Architecture & Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19.
- **Type Safety**: TypeScript in strict mode.
- **Design System**: "Technical Editorial" concept: calm, high density, hairline structures (1px borders), and a single accent (`#D4FF3A` dark / `#3F6B00` light).
- **Typography**: Self-hosted `Instrument Serif` (display/hero), `Geist` (body/UI), and `Geist Mono` (labels/data/metrics) via `next/font`.
- **Single Source of Truth**: All copy, profile data, experiences, and project metadata are centralized in `/content`. Zero copy hardcoded in components.
- **Content Integrity Guard**: `scripts/check-todos.ts` scans for `TODO(owner):` markers. Markers render highlighted in dev mode and strictly fail production builds until resolved.
- **SEO & Social**: Dynamic OpenGraph image generation via `next/og` (`/api/og`), Schema.org `Person` JSON-LD structured data, dynamic `sitemap.xml`, and `robots.txt`.
- **Accessibility**: WCAG 2.2 AA compliant with zero contrast errors, semantic landmarks, skip link, and full keyboard operation.

---

## 📁 Directory Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                   # CI: lint, prettier, typecheck, build
├── content/                         # ⭐ SINGLE SOURCE OF TRUTH
│   ├── profile.ts                   # Identity, bio, education, experience, stack, proof metrics
│   ├── projects.ts                  # Flagship metadata, "More" compact projects
│   ├── types.ts                     # TypeScript schemas for content
│   └── writing/                     # MDX blog posts (routes hidden until posts exist)
├── public/
│   ├── resume.pdf                   # Résumé download target
│   └── images/work/                 # Project schematics and assets
├── scripts/
│   ├── check-todos.ts               # Content integrity build-guard
│   ├── verify-routes.ts             # Route and link integrity test suite
│   └── verify-a11y.ts               # Automated WCAG 2.2 AA accessibility audit
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, fonts, no-flash theme script, landmarks
│   │   ├── page.tsx                 # Home page (all 7 sections in spec order)
│   │   ├── globals.css              # Design tokens (dark/light), typography clamps
│   │   ├── not-found.tsx            # Custom 404 page
│   │   ├── robots.ts & sitemap.ts   # Dynamic SEO
│   │   ├── api/og/route.tsx         # Dynamic OpenGraph image generator
│   │   ├── resume/page.tsx          # Web résumé + printable layout
│   │   ├── work/[slug]/page.tsx     # Two-column case study template (9 sections)
│   │   └── writing/                 # Conditional writing engine + RSS feed
│   ├── components/
│   │   ├── ui/                      # Theme toggle, skip link, email obfuscation, todo marker
│   │   ├── layout/                  # Header, footer, nav
│   │   ├── diagrams/                # Hand-built inline SVG architecture diagrams
│   │   └── work/                    # Case study layouts, evaluation tables, decision cards
│   └── lib/                         # Fonts, writing loader, utilities
└── legacy/                          # Archived original static files
```

---

## 🛠️ How to Edit Content

### 1. Update Profile & Experience

Edit [`content/profile.ts`](content/profile.ts) to modify:

- Contact details, GitHub/LinkedIn URLs
- Education & graduation date
- Experience bullets (Horquva, ITSOLERA)
- Proof strip metrics
- Stack taxonomy and where each skill was used

### 2. Update Flagship Case Studies

- Metadata: [`content/projects.ts`](content/projects.ts)
- Deep-dive narratives & architectures:
  - [`src/components/work/flood-forecasting-study.tsx`](src/components/work/flood-forecasting-study.tsx)
  - [`src/components/work/finops-graphrag-study.tsx`](src/components/work/finops-graphrag-study.tsx)
  - [`src/components/work/market-intelligence-study.tsx`](src/components/work/market-intelligence-study.tsx)

### 3. Publishing Technical Articles

Add a `.md` or `.mdx` file to [`content/writing/`](content/writing/) with frontmatter:

```markdown
---
title: "Your Article Title"
date: "2026-11-01"
description: "Brief summary of the engineering findings."
---

Article markdown content here...
```

Once at least one post is added, the _"Writing"_ navigation link automatically appears in the header and `/writing/rss.xml` generates a live RSS feed.

### 4. Resolving `TODO(owner)` Markers

Search for `TODO(owner):` in `content/`. Replace each marker with verified data. Once zero markers remain, production builds will pass without error.

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
pnpm install

# Run local development server
pnpm dev

# Check for TODO(owner) markers
pnpm run prebuild

# TypeScript strict typecheck
pnpm run typecheck

# ESLint validation
pnpm run lint

# Format code with Prettier
pnpm run format

# Run automated route and link verification
npx tsx scripts/verify-routes.ts

# Run automated accessibility audit
npx tsx scripts/verify-a11y.ts

# Production build
pnpm run build

# Start production server
pnpm start
```

---

## 🌐 Deploying to Vercel

1. Push your changes to GitHub on branch `main`.
2. Connect the repository in your [Vercel Dashboard](https://vercel.com).
3. Framework preset: **Next.js** (automatically detected).
4. Build command: `pnpm run build`.
5. Install command: `pnpm install`.
6. Deploy!
