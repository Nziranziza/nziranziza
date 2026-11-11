// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { satteri, satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { headingAnchors } from "./src/lib/heading-anchors.ts";

export default defineConfig({
  site: "https://nziranziza.dev",
  // Canonical URLs have no trailing slash (#12). `file` builds `/notes.html` rather than
  // `/notes/index.html`, so Cloudflare serves `/notes` without redirecting to `/notes/`.
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => new URL(page).pathname !== "/404",
    }),
  ],
  markdown: {
    // Ids first (unique across all levels), then the `#` links that point at them.
    processor: satteri({ hastPlugins: [satteriHeadingIdsPlugin(), headingAnchors] }),
    // Dual themes as CSS variables only; global.css picks one per data-theme (#11).
    shikiConfig: {
      themes: { light: "vitesse-light", dark: "vitesse-dark" },
      defaultColor: false,
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
