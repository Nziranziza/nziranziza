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
- `npm run format`: Prettier (added in #3)
- Run `check` and `build` before every commit.

## Structure

- `src/pages/`: routes (`.astro`, `.md`, `.mdx`, endpoints such as RSS)
- `src/layouts/`: page shells (base layout, prose layout)
- `src/components/`: `.astro` components
- `src/content/` + `src/content.config.ts`: content collections (experience, projects, notes)
- `src/data/site.ts`: site-wide data (name, now, socials, education)
- `src/lib/`: content helpers (sorting, dates, queries)
- `src/styles/global.css`: design tokens, base styles, prose
- `src/icons/`: inline SVGs copied from Lucide
- `src/assets/`: images processed by `astro:assets`
- `public/`: files served as-is (resume, favicons)

## Design rules

Source of truth: issue #4, "Quiet Editorial". If a value is missing, add it to #4 first.

- Use only the tokens in `global.css`. No ad-hoc hex values, font sizes or spacing.
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

- **Branches:** one per issue, `issue-<n>-<slug>`, branched off `redesign`.
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
  `redesign`. The final `redesign` → `main` merge at launch (#17) is a regular merge commit, so
  each issue's commit is kept.
- No WIP commits. Don't mix formatting with behavior changes.
- Never commit `dist/`, `.astro/` or `.wrangler/`.
- Run `npm run check` and `npm run build` before committing.
- No commitlint/husky; these rules are followed by convention.

## Maintenance

- Update this file in the same PR whenever a convention changes.
