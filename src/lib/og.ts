/**
 * Build-time Open Graph images (#12): 1200×630, always the light theme.
 * Rendered with satori (layout → SVG) and resvg (SVG → PNG).
 */
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { site } from "../data/site";
import { OG_HEIGHT, OG_WIDTH } from "./seo";

/** Light-theme tokens from global.css (#4). OG images never follow the reader's theme. */
const COLORS = {
  bg: "#FAFAF9",
  border: "#E4E2DD",
  text: "#1C1B19",
  muted: "#65625C",
  accent: "#1E7A52",
} as const;

/** satori needs TTF/OTF/WOFF, so the static files from the `geist` package, not the woff2 fontsource ones. */
const FONTS_DIR = resolve(process.cwd(), "node_modules/geist/dist/fonts");

let fonts: Promise<Parameters<typeof satori>[1]["fonts"]> | undefined;

const loadFonts = () =>
  (fonts ??= Promise.all([
    readFile(resolve(FONTS_DIR, "geist-sans/Geist-Medium.ttf")),
    readFile(resolve(FONTS_DIR, "geist-mono/GeistMono-Regular.ttf")),
  ]).then(([sans, mono]) => [
    { name: "Geist", data: sans, weight: 500, style: "normal" },
    { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
  ]));

/** A satori element: the shape React elements take, without React. */
interface Node {
  type: string;
  props: { style?: Record<string, string | number>; children?: (Node | string)[] | Node | string };
}

const h = (style: Node["props"]["style"], children?: Node["props"]["children"]): Node => ({
  type: "div",
  props: { style, children },
});

export interface OgImage {
  title: string;
  /** Shown bottom left, e.g. `/notes`. */
  path: string;
  /** Shown bottom right, e.g. a note's publish date. */
  meta?: string;
}

export async function renderOgImage({
  title,
  path,
  meta,
}: OgImage): Promise<Uint8Array<ArrayBuffer>> {
  const host = new URL(site.url).host;
  const mono = { fontFamily: "Geist Mono", fontSize: 28, color: COLORS.muted };

  const tree = h(
    {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
      width: OG_WIDTH,
      height: OG_HEIGHT,
      padding: 72,
      backgroundColor: COLORS.bg,
      fontFamily: "Geist",
    },
    [
      h({
        position: "absolute",
        top: 24,
        right: 24,
        bottom: 24,
        left: 24,
        border: `1px solid ${COLORS.border}`,
      }),
      h({ display: "flex", alignItems: "center", gap: 16, ...mono }, [
        h({ width: 14, height: 14, borderRadius: 7, backgroundColor: COLORS.accent }),
        site.name,
      ]),
      h(
        {
          display: "block",
          fontSize: 72,
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: COLORS.text,
          lineClamp: 3,
        },
        title,
      ),
      h({ display: "flex", justifyContent: "space-between", ...mono }, [
        // Separate elements: satori merges sibling strings into one text run.
        h({}, `${host}${path === "/" ? "" : path}`),
        h({}, meta ?? ""),
      ]),
    ],
  );

  const svg = await satori(tree, { width: OG_WIDTH, height: OG_HEIGHT, fonts: await loadFonts() });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: OG_WIDTH } }).render().asPng();
  // Copy out of the Node Buffer into a plain ArrayBuffer, which `Response` accepts.
  return new Uint8Array(png);
}
