# Ashworth & Vale — Shared Project Guide

Last reviewed: 23 July 2026

## Purpose

This file is the shared source of truth for anyone working on the Ashworth & Vale demo site, including Claude Code and Codex. Read it before editing the site.

It exists to prevent design, copy, implementation, and workflow drift between separate working sessions. It summarises the established decisions; the detailed vault briefs remain the source for page-specific copy and requirements.

If this guide, a vault brief, and the current implementation disagree:

1. Do not silently choose one or redesign around the conflict.
2. Preserve approved, working behaviour.
3. Record the discrepancy in **Open questions and proposed changes** below.
4. Ask Lawrence before changing a locked brand decision or approved component.

## Project identity

- **Demo brand:** Ashworth & Vale
- **Created by:** Akari Studio
- **Business:** Residential design and build
- **Services:** Extensions, full home renovations, kitchens and bathrooms, and loft conversions
- **Area:** Surrey and South West London
- **Positioning:** Premium, local, established, trustworthy, and senior-led
- **Typical project value:** Approximately £30k–£200k+
- **Site purpose:** Demonstrate Akari Studio's ability to create a polished, credible website for a design-and-build firm
- **Technology:** Static HTML, shared CSS, and vanilla JavaScript; no framework or build step
- **Repository:** `github.com/Renzo-McG/Ashworth-and-Vale`
- **Rolling preview:** `https://renzo-mcg.github.io/Ashworth-and-Vale/`
- **Local site root:** `AkariStudios/akari-studio-site/`

The desired impression is: **what if Google or Apple approached residential design and build?** That means clean, calm, modern, precise, spacious, and quietly premium—not cold, corporate, trendy for its own sake, or visually overworked.

## Audience and message

The primary audience is a homeowner considering a meaningful renovation or extension who wants:

- Confidence that the builder is capable and trustworthy
- Clear expectations about process, timing, and budget
- Evidence of good workmanship
- A team that communicates plainly
- A home that feels good to live in, not merely impressive in photographs

The site should reduce uncertainty without becoming defensive or overloaded with reassurance.

## Voice and copy

### Voice principles

- Plain-spoken confidence
- Warm but restrained
- Specific and useful
- Craft-led and homeowner-centred
- Professional without corporate jargon
- Confident without hype

Prefer:

- “Extensions and renovations, built the way you'd actually want to live in them.”
- “We handle the whole process.”
- Direct explanations of what happens, what it costs, and what the client can expect

Avoid:

- “Bespoke solutions”
- “Transforming dreams into reality”
- “Industry-leading”
- Excessive superlatives, exclamation marks, or sales pressure
- Generic luxury language that could belong to any studio
- Inventing new claims, awards, accreditations, project facts, or testimonials

Page copy in the relevant `AkariStudios/Demo Site/*.md` brief is authoritative. Do not casually rewrite approved copy to fit a layout; adjust the layout first. Flag any copy change that materially changes meaning.

## Locked visual system

These are established brand decisions. Do not introduce alternatives without documenting the proposal and obtaining approval.

### Colour

| Token | Value | Intended use |
|---|---:|---|
| `--color-bg` | `#FFFFFF` | Main page background |
| `--color-bg-alt` | `#F4F6F9` | Alternating sections and cool card fills |
| `--color-ink` | `#14171F` | Headings and body text |
| `--color-ink-muted` | `#5B6472` | Secondary and caption text |
| `--color-accent` | `#2955A3` | Primary CTAs, links, and active states |
| `--color-accent-hover` | `#1F4380` | Accent hover and active state |
| `--color-border` | `#E2E6EC` | Dividers and card borders |
| `--color-success` | `#1D8A5F` | Verified/trust signals only |
| `--color-success-bg` | `#E9F7F0` | Verified/trust tint only |
| `--color-success-border` | `#BFE6D3` | Verified/trust border only |

Rules:

- Navy is the single brand accent and should be used sparingly.
- Green is semantic, not decorative and not a second accent.
- White and cool grey should dominate.
- Do not reintroduce the superseded warm cream, terracotta, or brown direction.
- Any additional translucent black or white used over photography must serve legibility, not become a new palette.

### Typography

- **Typeface:** Inter throughout, with system sans-serif fallbacks
- **Body:** 17px, weight 400, line-height 1.6
- **H1:** 34px mobile / 60px desktop, weight 700
- **H2:** 24px mobile / 32px desktop, weight 700
- **H3:** 20px mobile / 22px desktop, weight 600
- **Labels/captions:** 14px, weight 500
- **Buttons:** 16px, weight 500
- **Inner-page banner titles:** 40px mobile / 56px desktop

Rules:

- Maintain a single sans-serif family; do not add a serif pairing.
- Use strong hierarchy, short line lengths, and generous whitespace.
- Avoid decorative type treatments and gratuitous all-caps.
- Load only the Inter weights the site uses.
- Use the dedicated 40px/56px scale for Services and Projects intro banners and the Project Detail header. Do not use the Homepage hero H1 scale for these shorter inner-page bands; the larger treatment was tested and found unsuitable there.

### Spacing and layout

- Base spacing unit: 8px
- Established spacing tokens: 8, 16, 24, 32, and 48px
- Section padding: 64px mobile / 120px desktop unless a deliberately compact section has an approved exception
- Standard content maximum width: 1200px
- Standard container side padding: 24px
- Mobile-first CSS
- Main type/layout breakpoint: 768px
- Desktop navigation and larger layout breakpoint: 900px
- Wider card grids: approximately 1000px
- Small stacked CTA treatment: below 540px

Prefer the existing tokens and breakpoints. Do not add arbitrary spacing values or new breakpoints when an established one works.

### Shape, borders, and depth

- Primary buttons: 4px radius
- Cards and contained media: generally 12px radius
- Project cards: existing 8px treatment where already established
- Pills/badges/filter controls: fully rounded
- Borders: subtle, using `--color-border`
- Shadows: quiet and shallow at rest; slightly stronger on hover

The visual character should feel precise and architectural. Avoid excessive rounding, glassmorphism, heavy shadows, gradients used as decoration, and “floating everything” UI.

## Component language

Reuse the established components and class patterns in `assets/css/styles.css`. Extend them with modifiers where necessary instead of creating visually similar one-off components.

### Shared site chrome

- Sticky header
- Typographic Ashworth & Vale wordmark with the ampersand in accent navy
- Six navigation links plus primary CTA on desktop
- Full-screen mobile navigation sheet below 900px
- Four-column footer on larger screens, stacked on mobile
- Footer credit must include: `Built by Akari Studio`
- Dark, full-bleed CTA band with restrained inverted styling

Because the site is static HTML without templating, shared header, footer, and CTA markup is duplicated between pages. When changing shared markup, update every completed page and verify consistency.

### Cards and icons

- Use cool neutral fills, subtle borders, and restrained hover lift
- Prefer hairline dividers over boxed cards for small repeated stats and list items, such as stat rows, metadata, and compact trust signals
- Reserve full card treatment—fill, border, and shadow—for substantial content units such as service blocks, project tiles, process steps, and testimonials
- Existing circular navy icon treatment is the default icon language
- Use simple inline SVG icons that share stroke weight and visual scale
- Do not add an unrelated icon library or illustrative style
- Reuse established service, project, process, testimonial, and FAQ patterns

### Photography

- Natural light
- Believable, lived-in homes
- Minimal styling props
- Premium but not showroom-perfect
- Maintain visual continuity within a fictional project
- Use the prepared, compressed images in `assets/images/`
- The current image inventory is limited to `hero.jpg`, `bathroom.jpg`, `kitchen-before.jpg`, `kitchen-after.jpg`, `kitchen-detail.jpg`, `loft.jpg`, and `services-intro.jpg`
- Check the existing project-to-image mappings before assigning imagery to a new page; reuse images deliberately and avoid showing the same photo twice within one grid
- Do not mix unrelated visual styles within the same project story
- Do not stretch, distort, or ship the original oversized staging PNGs

### Motion and interaction

Use the existing motion tokens:

- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--duration-fast: 0.15s`
- `--duration-base: 0.25s`
- `--duration-slow: 0.6s`

Approved and committed behaviours include:

- Subtle colour transitions
- Card hover lift
- Image scale on appropriate project-card hover
- Small arrow movement
- Scroll reveal for below-the-fold content
- Subtle desktop-only hero parallax
- Count-up statistics
- Restrained magnetic button response for fine pointers
- Services-page scrollspy and accordion

Implemented but pending review and approval:

- Projects filtering
- Accessible before/after comparison control

Rules:

- Motion should communicate state, hierarchy, or tactility.
- Never apply scroll reveal to any above-the-fold content on any page. This includes Homepage hero content, inner-page intro banners, and content directly beneath them that is visible without scrolling.
- Avoid springy, bouncy, or attention-seeking movement.
- Never make essential information available only on hover.
- Respect `prefers-reduced-motion`.
- Keep touch interactions free of hover assumptions.

## Responsive and accessibility requirements

Every change must work at minimum at:

- 375px mobile
- 414px mobile
- 768px tablet
- 1280px desktop

Also check the layout immediately around major breakpoints, not only at those three widths.

Required practices:

- Semantic HTML and logical heading order
- Meaningful image alt text; empty alt text for genuinely decorative images
- Keyboard-operable navigation and interactive controls
- Visible focus states
- Correct button/link semantics
- Accurate ARIA state such as `aria-expanded`, `aria-pressed`, and slider values
- Sufficient colour contrast
- No horizontal overflow
- Touch targets large enough to use comfortably
- Form labels must remain visible; placeholders are not labels
- Reduced-motion support
- JavaScript enhancement should not make core content inaccessible

## Technical guardrails

- Static HTML/CSS/vanilla JavaScript only
- No build tooling or framework unless Lawrence explicitly changes the scope
- One shared stylesheet: `assets/css/styles.css`
- One shared behaviour file: `assets/js/main.js`
- Prefer progressive enhancement and feature detection
- Avoid external dependencies for small behaviours that vanilla JavaScript already handles
- Keep CSS organised by component/page section with clear comments
- Prefer reusable base classes plus explicit modifiers
- Do not rename established classes or restructure approved shared markup without a concrete reason
- Optimise images for web and provide width/height or stable aspect ratios to reduce layout shift
- Lazy-load below-the-fold imagery where appropriate
- Target a Largest Contentful Paint below 2.5 seconds on a typical mobile connection
- Maintain the SEO baseline: unique page titles and descriptions, one clear H1, semantic landmarks, sensible internal links, and natural location/service language
- Keep console output clean
- Preserve sensible page titles, descriptions, landmarks, and link destinations

Local preview:

```text
Run a static server from AkariStudios/akari-studio-site/
Preferred port: 3403
```

Do not assess the site solely by opening HTML directly from disk; use the local server.

## Page map and implementation status

| Page | Target file | Current status as of 23 July 2026 |
|---|---|---|
| Home | `index.html` | Approved and committed |
| Services | `services.html` | Approved and committed |
| Projects | `projects.html` | Approved, committed, pushed, and deployed |
| Project detail | `project-detail.html` | Approved, committed, pushed, and deployed |
| Process | `process.html` | Not yet present |
| FAQ | `faq.html` | Not yet present |
| Contact | `contact.html` | Not yet present |

Supporting preview/test pages:

- `components-preview.html`
- `test.html`

Current build milestone: `76a9ecd` — Stages 4–5 plus the imagery overhaul.

Rolling-preview deployment: `8fda8d6`. GitHub Pages deploys production HTML and assets from `main` through `.github/workflows/deploy-pages.yml`. Internal test pages and Markdown are excluded. Process, FAQ, and Contact remain unbuilt and currently return 404 in the preview; start with Stage 6 — Process Page.

## Sources of truth

### Shared direction

- This guide: `AkariStudios/akari-studio-site/PROJECT-GUIDE.md`
- Brand and locked tokens: `AkariStudios/Demo Site/Demo Brand.md`
- Build stages and approval history: `AkariStudios/Demo Site/Build Workstream.md`
- Design system: `AkariStudios/Framework/03 Design Direction.md`
- Component patterns: `AkariStudios/Framework/04 Component Library.md`
- Build constraints: `AkariStudios/Framework/06 Build Spec.md`
- QA requirements: `AkariStudios/Framework/07 QA Checklist.md`

### Page-specific content

- `AkariStudios/Demo Site/Homepage.md`
- `AkariStudios/Demo Site/Services Page.md`
- `AkariStudios/Demo Site/Projects Page.md`
- `AkariStudios/Demo Site/Project Detail Page.md`
- `AkariStudios/Demo Site/Process Page.md`
- `AkariStudios/Demo Site/FAQ Page.md`
- `AkariStudios/Demo Site/Contact Page.md`
- `AkariStudios/Demo Site/Image Plan.md`

The existing implementation is also evidence of approved visual decisions. Inspect it before designing a new page.

## Multi-assistant working agreement

Claude Code and Codex do not share conversation history. They coordinate through the repository, this guide, the build tracker, and Git.

Before editing:

1. Read this guide and the relevant page brief.
2. Inspect `git status` and the current diff.
3. Identify which files are already being edited.
4. Confirm the page or component boundary you own.
5. Review existing components before adding a new pattern.

While editing:

1. Do not overwrite, discard, or “clean up” unexplained uncommitted work.
2. Avoid simultaneous edits to `assets/css/styles.css` and `assets/js/main.js`.
3. Keep changes inside the assigned page/component unless a shared change is necessary.
4. When a shared change is necessary, describe its effect on every existing page.
5. Do not make opportunistic redesigns outside the assigned task.
6. Add meaningful comments for non-obvious shared behaviour, not for self-evident code.

At handoff:

1. List every changed or created file.
2. Summarise the user-visible result.
3. State what was tested and at which viewport widths.
4. Report console errors, broken links, accessibility concerns, or unresolved issues.
5. Identify any shared component that now needs copying to other pages.
6. Update the build tracker only when the stage status is genuinely known.
7. Leave a clear working tree; commit only when Lawrence has approved the milestone or explicitly requests a commit.

Preferred division of labour:

- One assistant implements a defined page or component.
- The other reviews visually, tests responsiveness/accessibility, checks copy against the brief, prepares assets, or works on a non-overlapping page.
- If both must touch shared CSS or JavaScript, work sequentially with an explicit handoff.

## Definition of done for a page

A page is not done merely because all sections exist. It is done when:

- Copy matches the relevant approved brief
- Shared navigation, CTA, and footer are consistent
- It follows the locked palette, type, spacing, and component language
- It works at mobile, tablet, desktop, and around major breakpoints
- Page metadata, heading structure, and internal links satisfy the SEO baseline
- Keyboard interaction and focus behaviour are correct
- Reduced-motion behaviour is correct
- Images are optimised, correctly cropped, and have appropriate alt text
- Below-the-fold images use appropriate lazy loading and the page remains visually stable while loading
- Links and controls work
- There is no unexpected overflow or layout shift
- The browser console is clean
- The result has been visually reviewed
- Any intentional deviation is documented and approved
- The build tracker accurately reflects its state

## Open questions and proposed changes

Use this section to prevent decisions from being buried in an assistant conversation. A proposal is not approved merely because it appears here.

| Date | Raised by | Proposal or discrepancy | Status / decision |
|---|---|---|---|
| 23 Jul 2026 | Codex | Build Workstream says Stages 4–5 are not started, while `projects.html`, `project-detail.html`, shared CSS, and shared JS contain uncommitted work. | Resolved: both stages approved and committed in `76a9ecd` |
| 23 Jul 2026 | Codex | Review this guide against Claude's current implementation context and suggest corrections, omissions, or rules that are too restrictive. | Resolved: Claude agreed to the guide; five documentation improvements approved by Lawrence and incorporated |
| 23 Jul 2026 | Claude | Project Detail banner title used 34px/48px rather than the agreed inner-page 40px/56px scale. | Resolved in Stage 5 review |
| 23 Jul 2026 | Claude | Existing approved pages did not lazy-load below-the-fold images. | Resolved during imagery overhaul; explicit dimensions and lazy loading added sitewide where appropriate |
| 23 Jul 2026 | Codex | Repository initially displayed work-account commit attribution. | Resolved: history corrected to `Renzo-McG`; repository-local and Renzo-Space path-specific personal Git identity configured |
| 23 Jul 2026 | Codex | Rolling preview requested before Stages 6–8 exist. | Accepted: preview is live; missing future pages intentionally return 404 until built |

## Change control for this guide

- Small factual updates and status corrections may be made directly.
- Changes to locked brand tokens, typography, component language, technical architecture, or approved behaviour require Lawrence's approval.
- Proposed changes should first be added to **Open questions and proposed changes** with the reasoning and affected files.
- After approval, update this guide, the relevant detailed vault source, and the implementation together so they do not drift.
