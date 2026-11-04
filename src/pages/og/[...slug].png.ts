import type { APIRoute, GetStaticPaths } from "astro";
import { formatDate, getNotes, getProjects } from "../../lib/content";
import { renderOgImage, type OgImage } from "../../lib/og";

/** One image per page, at the page's path: `/og/notes/<slug>.png` for `/notes/<slug>`. */
export const getStaticPaths = (async () => {
  const [projects, notes] = await Promise.all([getProjects(), getNotes()]);

  const pages: (OgImage & { slug: string })[] = [
    { slug: "index", title: "Muraho, I'm Daniel. Software engineer in Kigali.", path: "/" },
    { slug: "about", title: "About", path: "/about" },
    { slug: "projects", title: "Work", path: "/projects" },
    { slug: "notes", title: "Notes", path: "/notes" },
    ...projects.map((project) => ({
      slug: `projects/${project.id}`,
      title: project.data.title,
      path: "/projects",
      meta: String(project.data.year),
    })),
    ...notes.map((note) => ({
      slug: `notes/${note.id}`,
      title: note.data.title,
      path: "/notes",
      meta: formatDate(note.data.published),
    })),
  ];

  return pages.map(({ slug, ...image }) => ({ params: { slug }, props: image }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<OgImage> = async ({ props }) =>
  new Response(await renderOgImage(props), { headers: { "Content-Type": "image/png" } });
