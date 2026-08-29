# Abdullah Elsman Portfolio

Backend-focused software engineering portfolio built to present production experience, technical strengths, and detailed project case studies.

## Overview

This portfolio positions Abdullah Elsman as a backend-focused software engineer with Laravel and PHP as primary strengths and Node.js as a secondary backend technology. It highlights practical work across APIs, databases, application maintenance, production troubleshooting, deployment, and server environments.

## Featured Projects

- **Share-k** — ITI graduation project connecting GitHub project owners with contributors through backend integrations and AI-assisted skill evaluation.
- **Gateway** — Production Laravel work covering backend improvements, database normalization, APIs, application fixes, deployment, and server troubleshooting.
- **Smart Book** — University graduation project for PDF-based learning, quizzes, and backend integration with an external AI service.
- **Zoal Online** — Production recovery work involving PHP compatibility, Composer dependencies, server troubleshooting, and application restoration.

## Tech Stack

The portfolio application itself uses:

- Next.js
- React
- TypeScript
- Tailwind CSS

Technologies described inside the case studies belong to their respective projects and are not the implementation stack of this portfolio.

## Local Development

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:3000` by default.

## Project Structure

```text
src/
  app/                 Next.js routes and site metadata
  components/
    home/              Homepage sections
    layout/            Shared header, footer, and container
    projects/          Case-study components and technical diagrams
    ui/                Shared UI primitives
  data/                Verified portfolio, project, and site configuration
public/
  images/portfolio/    Local portfolio visuals
  documents/           Final CV location when the approved PDF is added
```

## Validation / Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The application is also reviewed for responsive behavior, accessible navigation, valid internal routes, and local asset loading.

## Deployment

No production deployment or live portfolio URL is claimed yet. When a domain is selected, set `SITE_URL` to its absolute HTTPS origin so canonical metadata, robots, and sitemap output use the confirmed domain.

Before deployment, add the final CV at `/public/documents/abdullah-elsman-cv.pdf` and configure a confirmed contact email in `src/data/personal.ts`.
