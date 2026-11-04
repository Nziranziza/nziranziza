/**
 * Sätteri hast plugin: appends a `#` link to each h2–h4 (`.heading-anchor` in
 * global.css shows it on hover). It reads the ids set by Astro's
 * `satteriHeadingIdsPlugin`, which runs first (see astro.config.mjs) so ids are
 * unique across every heading level. Astro's own heading-ids pass runs again
 * after user plugins and keeps existing ids. The `#` is CSS generated content,
 * so heading text (and Astro's `headings` metadata) stays clean.
 */
import type { satteri } from "@astrojs/markdown-satteri";

type HastPluginEntry = NonNullable<
  NonNullable<Parameters<typeof satteri>[0]>["hastPlugins"]
>[number];

export const headingAnchors: HastPluginEntry = {
  name: "heading-anchors",
  element: {
    filter: ["h2", "h3", "h4"],
    visit(node, ctx) {
      if (node.type !== "element") return;
      const id = node.properties?.id;
      if (typeof id !== "string") return;

      ctx.appendChild(node, {
        type: "element",
        tagName: "a",
        properties: {
          href: `#${id}`,
          className: ["heading-anchor"],
          ariaLabel: `Link to section: ${ctx.textContent(node)}`,
        },
        children: [],
      });
    },
  },
};
