# CLAUDE.md

## Project

- Personal portfolio for Daniel Nziranziza at https://nziranziza.dev.
- Astro 7 + Tailwind v4 + MDX, fully static, deployed to Cloudflare Workers (static assets).
- The plan is GitHub milestone "v2 — Astro redesign" (issues #1–#18). Read the issue before implementing it.
- The old Gatsby site lives at tag `v1-gatsby` (and branch `legacy/gatsby`). Never modify it.
- Node ≥ 22.23.4 (see `.nvmrc`).

## Commands

- `npm run dev`: start the dev server
- `npm run build`: build the static site to `dist/`
- `npm run preview`: serve the built site
- `npm run check`: `astro check` (types + diagnostics)
- `npm run format`: format everything with Prettier (Astro + Tailwind class sorting)
- `npm run format:check`: verify formatting (what CI runs)
- Run `format:check`, `check` and `build` before every commit. CI (`.github/workflows/ci.yml`)
  runs the same three on every PR to `main`.

## Structure

- `src/pages/`: routes (`.astro`, `.md`, `.mdx`, endpoints such as RSS)
- `src/layouts/`: page shells (base layout, prose layout)
- `src/components/`: `.astro` components
- `src/content/` + `src/content.config.ts`: content collections (experience, projects, notes)
- `src/data/site.ts`: site-wide data (name, now, socials, education)
- `src/lib/`: content helpers (sorting, dates, queries) and the Markdown heading-anchor plugin
  (`heading-anchors.ts`, wired into `satteri()` in `astro.config.mjs`)
- `src/lib/seo.ts` + `src/lib/og.ts`: JSON-LD builders, and the build-time OG image renderer
  (satori + resvg) behind `src/pages/og/[...slug].png.ts`. Every indexable page gets
  `/og/<path>.png` by default, so a new page needs an entry in that endpoint.
- `src/scripts/`: client-side TS modules imported by component `<script>`s (hover preview)
- `src/styles/global.css`: design tokens, base styles, prose
- `src/icons/`: inline SVGs copied from Lucide
- `src/assets/`: images processed by `astro:assets`
- `public/`: files served as-is (resume, favicons, robots.txt)
- URLs have no trailing slash (`trailingSlash: "never"`, `build.format: "file"`).

## Design rules

Source of truth: issue #4, "Quiet Editorial". If a value is missing, add it to #4 first.

- Use only the tokens in `global.css`. No ad-hoc hex values, font sizes or spacing.
  Tailwind's default colors, type sizes, weights, radii, shadows and easings are removed, so
  only spec tokens produce utilities (`bg-surface`, `text-muted`, `text-display`, `max-w-column`,
  `rounded-md`, `ease-out duration-(--dur-fast)`).
- Use the `label` utility for section labels and `meta` for dates, years, stack and the clock
  (they include the mono font, uppercase and `tabular-nums`).
- Every page `<head>` includes `ThemeScript` (no-flash theme + `theme-color`) and `FontPreload`.
  Theme colors for JS live in `src/lib/theme.ts`.
- Icons: import from `src/icons/*.svg` as components (`<Sun />`), 16px by default.
- Weights 400/500 only. One serif italic accent per page, in the display H1 only.
- Accent green only for the now-dot, link hover underline, focus ring and selection.
- No box-shadows (except the hover preview), gradients, cards or icon libraries. Lists over cards.
- Everything must work in light and dark themes and respect `prefers-reduced-motion`.

## Code rules

- `.astro` components + small vanilla TS `<script>`s. No React or other UI framework.
- Don't add dependencies without asking.
- TypeScript strict; no `any`.
- Images go through `astro:assets` `<Image>`, always with `alt`.
- Semantic HTML, keyboard accessible, WCAG AA.

## Content rules

- Schemas live in `src/content.config.ts` (#6) and are edited only there.
- Copy style: first person, short, no company marketing language.
- Experience bullets: ≤ 20 words, starting with a past-tense verb.
- Use `draft: true` for unfinished entries.

## Git guidelines

- **Branches:** one per issue, `issue-<n>-<slug>`, branched off `main`.
- **One commit per PR.** Each PR branch contains exactly one commit. Fold follow-ups and review
  fixes into it with `git commit --amend` (or a squash) and update the PR with
  `git push --force-with-lease`. Never plain `--force`.
- **Message format:** `type(scope): subject`, e.g. `feat(home): add hover image preview`
  - Types: `feat`, `fix`, `style` (visual/CSS only), `refactor`, `content` (Markdown/MDX copy),
    `docs`, `chore` (deps, config), `ci`, `perf`
  - Scopes: `home`, `about`, `projects`, `notes`, `layout`, `design`, `content`, `seo`, `deploy`.
    Optional for repo-wide changes.
  - Subject: imperative mood, lowercase, no trailing period, ≤ 72 chars
  - Body (optional): explain _why_, not what, wrapped at 72 chars
  - Footer: `Closes #<n>`
- **No `Co-Authored-By` trailers** and no AI attribution lines ("Generated with Claude Code", etc.)
  in commits or PR descriptions. `.claude/settings.json` turns attribution off.
- **PR:** title equals the commit subject, description includes `Closes #<n>`, squash-merged into
  `main`. There is no long-lived integration branch (the old `redesign` branch is retired).
- No WIP commits. Don't mix formatting with behavior changes.
- Never commit `dist/`, `.astro/` or `.wrangler/`.
- Run `npm run format:check`, `npm run check` and `npm run build` before committing.
- No commitlint/husky; these rules are followed by convention.

## Maintenance

- Update this file in the same PR whenever a convention changes.
