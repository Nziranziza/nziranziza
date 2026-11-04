import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { site } from "../data/site";
import { getNotes } from "../lib/content";

export const GET: APIRoute = async (context) => {
  const notes = await getNotes();
  return rss({
    title: `${site.name} · Notes`,
    description: "Short writing on engineering, tools and things I'm learning.",
    site: context.site ?? "https://nziranziza.dev",
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      link: `/notes/${note.id}`,
      pubDate: note.data.published,
    })),
    customData: "<language>en</language>",
  });
};
