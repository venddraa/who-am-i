# who-am-i

Personal portfolio website of **Muhammad Vendra Hastagiyan** — Informatics student focused on Data Science, Machine Learning, Time Series Forecasting, and Applied AI.

Minimalist black-and-white editorial design: large typography, strong whitespace, slide-like sections, and a subtle asterisk motif.

## Tech stack

- [Next.js](https://nextjs.org) App Router — fully static output (SSG)
- TypeScript
- Tailwind CSS v4
- No backend, no databases, minimal dependencies

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site content lives in typed data files under `src/content/` — no component changes needed to update copy:

| File | Contents |
| --- | --- |
| `site.ts` | Profile, statement, navigation, social links, site URL |
| `projects.ts` | Projects with case study sections (drives `/projects` and `/projects/[slug]`) |
| `skills.ts` | Skill groups |
| `experience.ts` | Experience, education, awards, certificates |

Case study sections whose body starts with `TODO:` are kept as reminders in the data but are **not rendered** on the site.

## Deploy to Vercel

1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new) — no configuration needed.
2. After the first deploy, update `siteUrl` in `src/content/site.ts` to the production URL (used for sitemap, robots, and Open Graph metadata).

## Pending content (TODOs)

- [ ] Public GitHub/demo links for projects (`links` in `src/content/projects.ts`)
- [ ] Years for projects currently marked `"TODO"`
- [ ] Result/outcome sections for case studies (marked `TODO:` in data)
- [ ] Public CV link (`cvUrl` in `src/content/site.ts`) — only after explicit approval to publish
- [ ] Update `siteUrl` after Vercel deploy

## Quality checks

```bash
npm run lint    # ESLint
npx tsc --noEmit  # TypeScript
npm run build   # Production build (static)
```
