import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Work history. Body: 2–3 bullet points. `end` undefined means "Present". */
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    url: z.url().optional(),
    location: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
  }),
});

/** Case studies. Body: the case study. Cover is 1600×1000 (16:10), see #8. */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(90),
      year: z.number(),
      role: z.string(),
      stack: z.array(z.string()).max(6),
      cover: image(),
      status: z.string().max(24).optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      draft: z.boolean().default(false),
    }),
});

/** Writing. No tags in v2. */
const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, projects, notes };
