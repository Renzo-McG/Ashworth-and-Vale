# Ashworth & Vale

A polished, responsive website for a fictional residential design-and-build company serving Surrey and South West London.

> **Portfolio demonstration:** Ashworth & Vale is not a real operating company. It was created as an Akari Studio demonstration project. All company details, projects, testimonials, accreditations, statistics, contact information, and service claims are illustrative.

## Live preview

[View the rolling GitHub Pages preview](https://renzo-mcg.github.io/Ashworth-and-Vale/)

The preview is published during development. Home, Services, Projects, and Project Detail are currently available. Process, FAQ, and Contact are still being built, so links to those pages may temporarily return 404.

## About the project

The site demonstrates how a modern digital presence for a residential design-and-build firm can combine:

- Clear service and budget information
- Credible project storytelling
- A calm, premium visual system
- Mobile-first responsive layouts
- Accessible interaction patterns
- Restrained motion and micro-interactions
- Optimised, art-directed project imagery

The design direction is intentionally clean, spacious, and quietly confident—closer to a modern product company than a conventional trade website, while remaining appropriate for British residential architecture.

## Current status

| Stage | Status |
|---|---|
| Foundations and design system | Complete |
| Shared navigation, footer, and CTA | Complete |
| Homepage | Complete |
| Services | Complete |
| Projects | Complete |
| Project Detail | Complete |
| Process | Planned |
| FAQ | Planned |
| Contact | Planned |
| Final cross-page QA | Planned |
| Rolling preview deployment | Live |

## Features

- Responsive navigation with an animated full-screen mobile menu
- Full-bleed photographic hero treatments
- Service and project card systems
- Filterable project portfolio
- Interactive before-and-after comparison slider
- Swipeable finished-project gallery
- Services-page scrollspy navigation
- Accessible FAQ accordion pattern
- Scroll-reveal and count-up effects
- Reduced-motion support
- Keyboard-accessible interactive controls
- Responsive, compressed imagery with explicit dimensions and lazy loading where appropriate

## Technology

- Semantic HTML
- CSS custom properties and responsive layouts
- Vanilla JavaScript
- GitHub Actions
- GitHub Pages

There is no framework, package manager, build tool, or runtime dependency.

## Run locally

From the repository root, start any static file server. For example:

```bash
python3 -m http.server 3403
```

Then open:

```text
http://localhost:3403/
```

Opening the files through a local server is recommended so behaviour matches the deployed environment.

## Repository structure

```text
.
├── index.html
├── services.html
├── projects.html
├── project-detail.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   └── js/
│       └── main.js
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

Additional production pages will be added at the repository root as the build progresses.

## Design system

The interface uses:

- Inter throughout
- Bright white and cool-grey surfaces
- Cool near-black typography
- A restrained navy accent
- An 8px spacing foundation
- Consistent motion durations and easing
- Reusable card, icon, button, navigation, and CTA patterns

The internal implementation contract and detailed design decisions are maintained in `PROJECT-GUIDE.md`.

## Imagery

Project imagery was generated for this fictional demonstration and then reviewed, resized, and compressed for web delivery. Images are assigned to specific fictional projects to maintain continuity and avoid presenting one property as several different projects.

Some generated source images may contain a small Gemini provenance mark. The imagery must not be represented as photography of real Ashworth & Vale projects.

## Deployment

Pushes to `main` trigger the GitHub Pages workflow.

The workflow creates a curated public artifact containing production HTML pages and `assets/`. Development-only pages and internal Markdown documents are excluded from the deployed website.

## Disclaimer

This repository and its live preview are a design and development demonstration. They should not be used to contact, commission, verify, or assess a real contractor. Names, addresses, phone numbers, email addresses, prices, timelines, testimonials, project descriptions, review scores, statistics, and accreditations shown in the demonstration are fictional or illustrative.

## Created by

Designed and built as an [Akari Studio](https://github.com/Renzo-McG) portfolio demonstration.

