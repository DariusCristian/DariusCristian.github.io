# Darius Cristian Horătău · Portfolio

My personal portfolio: a fast, static site showcasing my software projects.

**Live site:** https://dariuscristian.github.io

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-plain-1572B6?logo=css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/deployed-GitHub_Pages-222222?logo=github)

---

## Features

- **Content-driven gallery.** Each project is one Markdown file. The home page card, the project page and its URL are generated from it automatically.
- **Validated content.** A typed schema checks every project file at build time, so a missing field or a malformed link stops the build instead of reaching the live site.
- **One page per project** at `/projects/<id>`, generated with a dynamic route and static site generation.
- **Optimized images.** Screenshots and the portrait are resized and converted to WebP at build time, with 1x and 2x versions and fixed dimensions to prevent layout shift.
- **Responsive layout.** A CSS Grid gallery that adapts from three columns to one without media queries.
- **Accessible by design.** Semantic HTML, one `h1` per page, visible keyboard focus, screen-reader text for links that open in a new tab, and reduced motion for users who request it.
- **No runtime JavaScript and no CSS framework.** Pages ship as plain HTML and CSS, styled with design tokens (CSS custom properties).
- **Continuous deployment.** Every push to `main` builds and deploys the site with GitHub Actions.

## Tech stack

| Area | Technology |
|---|---|
| Framework | Astro 7 (static output) |
| Language | TypeScript (strict) |
| Styling | Plain CSS with design tokens and scoped component styles |
| Content | Astro content collections with a Zod schema |
| Images | `astro:assets` (`<Image>` and the `image()` schema helper) |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## Project structure

```text
src/
├── assets/              # images processed at build time (portrait, project screenshots)
├── components/          # Header, Intro, Monogram, ProjectCard, StackTags
├── content/projects/    # one Markdown file per project
├── layouts/             # BaseLayout: shared <head>, header and page shell
├── pages/
│   ├── index.astro          # home page: intro and project gallery
│   └── projects/[id].astro  # one generated page per project
├── styles/global.css    # design tokens, base styles and utilities
└── content.config.ts    # projects collection and its schema
public/                  # files served as-is (favicon, CV)
.github/workflows/       # build and deploy to GitHub Pages
```

## Adding a project

Create a Markdown file in `src/content/projects/`:

```markdown
---
title: "Project name"
summary: "One sentence shown on the gallery card."
stack: ["Java", "Spring Boot", "PostgreSQL"]
repo: "https://github.com/DariusCristian/project-name"
demo: "https://example.com"                      # optional
image: "../../assets/projects/project-name.png"  # optional, 16:9
order: 5
---

## What it does

The longer description shown on the project page.
```

The card, the project page and its route appear automatically. `order` controls the position in the gallery.

## Running locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # development server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site with the official Astro action and publishes it to GitHub Pages. The workflow only has permission to read the code and deploy to Pages.

## Contact

[GitHub](https://github.com/DariusCristian) · [LinkedIn](https://www.linkedin.com/in/darius-cristian-horatau/) · [Email](mailto:horataudariuscristian@gmail.com)