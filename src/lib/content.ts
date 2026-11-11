import { getCollection, type CollectionEntry } from "astro:content";
import { site } from "../data/site";

export type Experience = CollectionEntry<"experience">;
export type Project = CollectionEntry<"projects">;
export type Note = CollectionEntry<"notes">;

/**
 * Drafts show in `astro dev` and in Cloudflare preview builds (CF_PAGES_BRANCH set to a
 * branch other than main). Production, local `npm run build` and CI leave them out.
 */
const showDrafts = !import.meta.env.PROD || (process.env.CF_PAGES_BRANCH ?? "main") !== "main";

const isPublished = ({ data }: { data: { draft: boolean } }): boolean => showDrafts || !data.draft;

/** Current roles (no `end`) first, then by `end` desc, then by `start` desc. */
export async function getExperience({ limit }: { limit?: number } = {}): Promise<Experience[]> {
  const entries = await getCollection("experience");
  const end = (e: Experience): number => e.data.end?.getTime() ?? Infinity;
  const sorted = entries.sort(
    (a, b) => end(b) - end(a) || b.data.start.getTime() - a.data.start.getTime(),
  );
  return sorted.slice(0, limit);
}

/**
 * `featured: true`: featured projects sorted by `order`.
 * `featured: false`: the rest, sorted by `year` desc.
 * Omitted: all projects, sorted by `year` desc.
 */
export async function getProjects({ featured }: { featured?: boolean } = {}): Promise<Project[]> {
  const entries = await getCollection(
    "projects",
    (entry) => isPublished(entry) && (featured === undefined || entry.data.featured === featured),
  );
  return entries.sort((a, b) =>
    featured
      ? a.data.order - b.data.order || b.data.year - a.data.year
      : b.data.year - a.data.year || a.data.order - b.data.order,
  );
}

/** Newest first by `published`. */
export async function getNotes({ limit }: { limit?: number } = {}): Promise<Note[]> {
  const entries = await getCollection("notes", isPublished);
  const sorted = entries.sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
  return sorted.slice(0, limit);
}

const yearFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  timeZone: site.location.timeZone,
});

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: site.location.timeZone,
});

const shortDateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: site.location.timeZone,
});

/** `"2026"`, in Kigali time. */
export function formatYear(date: Date): string {
  return yearFormat.format(date);
}

/** `"Nov 2"`, in Kigali time. For lists already grouped by year. */
export function formatShortDate(date: Date): string {
  return shortDateFormat.format(date);
}

/** `"2022 — Present"`, `"2019 — 2020"`, or `"2019"` when both ends share a year. */
export function formatRange(start: Date, end?: Date): string {
  const from = yearFormat.format(start);
  const to = end ? yearFormat.format(end) : "Present";
  return from === to ? from : `${from} — ${to}`;
}

/** `"Nov 2, 2026"`, in Kigali time. */
export function formatDate(date: Date): string {
  return dateFormat.format(date);
}

const WORDS_PER_MINUTE = 220;

/** `"4 min read"` at 220 wpm, rounded up, at least 1 minute. */
export function readingTime(body: string | undefined): string {
  const words = body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
