# AGENTS.md

## Project overview
This repository contains a static Astro portfolio for Shyam Lal. The site is intentionally minimal, editorial, and static-first, built to showcase a personal brand and drive newsletter signups without introducing backend infrastructure or heavy app complexity.

The project is designed for deployment to GitHub + Cloudflare Pages and should remain compatible with a simple static hosting workflow.

## Stack
- Astro
- TypeScript
- CSS with design tokens and reusable styles
- Static content pages only
- No database, auth, CMS, or backend APIs

## Project structure
- `src/pages/` — main pages
- `src/components/` — reusable UI blocks
- `src/layouts/` — page shell and shared metadata
- `src/styles/global.css` — design tokens and global styles
- `public/favicon.svg` — simple brand icon

## Brand and design direction
The site should feel like a personal publication rather than a generic developer résumé.

Core visual principles:
- Minimal, white-heavy layout
- Strong black/white contrast
- Strategic use of a vivid red accent
- Large editorial typography
- Generous whitespace and clear hierarchy
- Clean responsive behavior across desktop, tablet, and mobile
- Very limited palette and restrained animation

## Pages
The site includes three primary pages:
1. Home (`/`)
2. About (`/about`)
3. Projects (`/projects`)

## Newsletter form
The newsletter form is intentionally frontend-only for now.

Important constraints:
- No external provider integration yet
- No API or backend submission
- No storage or database
- Submission is mock/local only

The form is implemented in `src/components/NewsletterForm.astro` and includes:
- email validation
- loading state
- success state
- error state
- a clear TODO for real provider integration later

## Content policy
Use placeholder content throughout until final personal details are available.

Do not invent:
- employment history
- employers
- awards
- metrics
- client names
- testimonials
- detailed personal achievements

## Local development
From the repo root:

```bash
npm install
npm run dev
```

## Build and verification
To verify the production build:

```bash
npm run build
```

## Future extensibility
The structure should support later additions without a major rewrite, including:
- blog/article pages
- real newsletter service integration
- case-study project pages
- résumé download
- analytics
- additional social links

## Important constraints
- Do not introduce a backend or database.
- Do not add heavy frameworks or unnecessary dependencies.
- Do not invent fake claims or polished metrics.
- Keep the site small, static, and easy to deploy.
