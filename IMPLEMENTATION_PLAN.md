# System Redesign Implementation Plan: Swiss Systems (Option 2)

**Redesign Architecture:** Swiss Systems Modernism (Space Grotesk + Signal Cobalt + Architectural Telemetry)
**Execution Frameworks:** GSD + Ralph Loop (Iterative verification & task updating) + Hallmark Floor + CodeRabbit

---

## Progress Overview

- [x] **Phase 0: GSD & Ralph Loop Initialization**
  - [x] Create `IMPLEMENTATION_PLAN.md` with complete phase breakdown
  - [x] Establish Ralph Loop iterative boundary and execution checkpoints

- [x] **Phase 1: Design Tokens & Typography (Hallmark Floor)**
  - [x] Update `src/lib/fonts.ts`:
    - [x] Replace `Instrument_Serif` with `Space_Grotesk` (weights: 500, 600, 700) with CSS variable `--font-space-grotesk`
    - [x] Retain `Geist` and `Geist_Mono` with tabular figures enabled
  - [x] Update `src/app/globals.css`:
    - [x] Declare Swiss Systems tokens (`--bg: #0A0D14`, `--surface: #101522`, `--surface-2: #171F30`, `--border: rgba(255,255,255,0.08)`, `--text: #F1F4F9`, `--text-muted: #8F9CAE`, `--accent: #1A56DB`, `--accent-ink: #FFFFFF`, Telemetry Cyan `--chart-2: #00D2B4`)
    - [x] Enforce `overflow-x: clip` on `html` and `body` (Hallmark floor rule 4)
    - [x] Eliminate `transition: all`, enforce specific transition properties (Hallmark floor rule 2)
    - [x] Ensure `:focus-visible` on all interactive elements (Hallmark floor rule 6)
    - [x] Add utility classes: `.font-hero`, `.border-hairline`, `.grid-swiss`
  - [x] Update `tailwind.config.ts`:
    - [x] Map font families (`sans`, `mono`, `display`/`headline` to `var(--font-space-grotesk)`)
    - [x] Map Swiss Systems colors and tokens

- [x] **Phase 2: Hero & Swiss Modernist Grid**
  - [x] Purge AI tropes from `src/app/page.tsx` and Hero section (remove green pulsating dots, remove tracked mono eyebrow badges)
  - [x] Implement 12-column Swiss grid layout:
    - [x] Left column (7 cols): Bold architectural `Space_Grotesk` headline, crisp positioning statement, structured dual CTAs (Primary Cobalt solid, Secondary outlined hairline)
    - [x] Right column (5 cols): High-density architectural systems telemetry card (p99 latency readout, GraphRAG pipeline topology, active GPU cluster readouts) replacing generic diagram
  - [x] Proof strip refactoring: architectural metric slabs with clean typographic hierarchy

- [x] **Phase 3: Section Refactoring & Diagrams**
  - [x] Header & Footer:
    - [x] Wordmark in Space Grotesk, clean 1px hairline dividers, minimalist monospace coordinates, remove glowing status dot
  - [x] Selected Work (`src/components/work/selected-work.tsx`):
    - [x] Refactor case study cards into architectural dossiers with structured impact metrics
    - [x] Refactor compact project table with Swiss grid alignment
  - [x] Experience & Stack Sections:
    - [x] Refactor into clean tabular lists with structural dividers instead of floating bubble cards
  - [x] About & Contact Sections:
    - [x] Clean architectural layout, obfuscated email, structural dividers
  - [x] Diagrams (`src/components/diagrams/*`):
    - [x] Re-skin nodes and data pipelines to Signal Cobalt (`#1A56DB`), Cyan (`#00D2B4`), and Slate edges (`#1E2638`)
    - [x] Apply to `hero-agent-diagram.tsx`, `flood-pipeline-diagram.tsx`, `graphrag-diagram.tsx`, and `market-intelligence-diagram.tsx`
  - [x] Case Study Layout (`src/components/work/case-study-layout.tsx` & sub-studies):
    - [x] Align typography and layout with Space Grotesk and Swiss tokens
  - [x] Content Preservation:
    - [x] Preserve all case study data, numbers, resume download links, and article slugs without loss

- [x] **Phase 4: CodeRabbit Review & Build Verification**
  - [x] Run `pnpm run typecheck` (0 errors)
  - [x] Run `pnpm run lint` (0 warnings or errors)
  - [x] Run `pnpm run format` (100% compliant)
  - [x] Production compilation build (`next build`): 12/12 routes generated, First Load JS ~113 kB (well under the 150 kB threshold)
  - [x] Automated route integrity suite (`verify-routes.ts`): 12/12 checks passed
  - [x] Automated WCAG 2.2 AA accessibility audit (`verify-a11y.ts`): passed with 0 defects
  - [x] Code review audit: verified Hallmark floor rules (zero `transition: all`, no tracking on labels, instant `:focus-visible`, no decorative glow dots)
  - [x] Live preview server verified responding on `http://localhost:3000`
