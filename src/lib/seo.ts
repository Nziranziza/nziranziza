/**
 * SEO helpers (#12): OG image paths and schema.org JSON-LD for the home page (Person)
 * and notes (BlogPosting). Kept free of the satori/resvg imports in `og.ts`.
 */
import { site } from "../data/site";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/**
 * The page's public path: `/notes/foo`, `/`. With `build.format: "file"` the build sees
 * `/notes/foo.html` and `/index.html`.
 */
export function pagePath(pathname: string): string {
  return pathname
    .replace(/\.html$/, "")
    .replace(/(^|\/)index$/, "/")
    .replace(/(.)\/$/, "$1");
}

/** `/` → `/og/index.png`, `/notes/foo` → `/og/notes/foo.png`. */
export function ogImagePath(pathname: string): string {
  const slug = pathname.replace(/^\/|\/$/g, "") || "index";
  return `/og/${slug}.png`;
}

type JsonLd = Record<string, unknown>;

const person = {
  "@type": "Person",
  name: site.name,
  url: site.url,
} as const;

/** `image` is the absolute avatar URL. No `worksFor` while between roles. */
export function personSchema({ image }: { image: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    ...person,
    jobTitle: site.role,
    image,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: site.location.country,
    },
    alumniOf: ["University of Kigali", "University of Rwanda"].map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
    sameAs: site.socials.map(({ url }) => url),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  published: Date;
  updated?: Date;
  url: string;
  image: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published.toISOString(),
    dateModified: (post.updated ?? post.published).toISOString(),
    url: post.url,
    mainEntityOfPage: post.url,
    image: post.image,
    author: person,
  };
}

/** `JSON.stringify` for a `<script>` body: `<` can't close the tag early. */
export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
