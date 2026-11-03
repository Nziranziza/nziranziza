export type Theme = "light" | "dark";

/** localStorage key holding an explicit theme choice. No key means "follow the system". */
export const THEME_STORAGE_KEY = "theme";

/** `<meta name="theme-color">` per theme; mirrors `--color-bg` in global.css (#4). */
export const THEME_COLORS: Record<Theme, string> = {
  light: "#FAFAF9",
  dark: "#0E0E0D",
};
