# Zayam Mushtaq — Portfolio

Personal portfolio site for Zayam Mushtaq (AI Automation Specialist · n8n, Make, Zapier, GoHighLevel, Kommo · Backend & AI Agent Developer), built with React + Vite.

Live projects featured: [RAG Knowledge Base API](https://github.com/zayam47/RAG-knowledge-base-API), [MCP Resume Assistant](https://github.com/zayam47/My-CV-Assistant), and Petify (AI-driven pet marketplace, final year project).

## Stack

- React 19 + Vite
- Plain CSS (custom properties, no framework) — light/dark theme, fully responsive
- `react-icons` for iconography
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Content

All profile content (bio, skills, projects, experience, education) lives in one place: `src/data/portfolio.js`. Edit that file to update the site — no need to touch components for text changes.

Resumes are served statically from `public/resume/`.

## Deployment

Deployed to Vercel as a static Vite build. See the repository's setup notes or `vercel.json` for the SPA rewrite rule.
