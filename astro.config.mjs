// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nziranziza.dev",
  integrations: [
    mdx(),
    // /styleguide is temporary (#4) and removed at launch (#17).
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith("/styleguide") }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
