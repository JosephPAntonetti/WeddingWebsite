import { createTheme, type MantineColorsTuple } from "@mantine/core";

/**
 * The palette is deliberately monochrome: a warm ivory "paper" and a soft
 * black "ink", with the greys in between doing all of the work. Anything that
 * needs to feel like a photograph is desaturated in CSS (see `global.css`)
 * rather than tinted here, so the whole site reads as a single black and
 * white plate.
 */
const ink: MantineColorsTuple = [
  "#f4f3f1",
  "#e2e0dc",
  "#c8c5bf",
  "#aca8a0",
  "#918c83",
  "#736e65",
  "#57534b",
  "#3b3833",
  "#232120",
  "#111010",
];

// Warm off-white used for page and card surfaces.
const paper: MantineColorsTuple = [
  "#fbf9f6",
  "#f5f2ec",
  "#ece7de",
  "#e0dace",
  "#d2cabb",
  "#bfb5a3",
  "#a79b86",
  "#8a7e69",
  "#6b6152",
  "#4a4339",
];

export const fonts = {
  /** High-contrast serif used for display type and headings. */
  display: '"Cormorant Garamond", "Times New Roman", Times, serif',
  /** Slightly sturdier serif used for running copy. */
  body: '"EB Garamond", "Cormorant Garamond", Georgia, serif',
  /** Calligraphic accent, reserved for names and one-word flourishes. */
  script: '"Monsieur La Doulaise", "Snell Roundhand", cursive',
};

export const theme = createTheme({
  fontFamily: fonts.body,
  fontFamilyMonospace: 'ui-monospace, "SFMono-Regular", Menlo, monospace',
  headings: {
    fontFamily: fonts.display,
    fontWeight: "300",
    sizes: {
      h1: { fontSize: "clamp(2.75rem, 8vw, 5.5rem)", lineHeight: "1.05" },
      h2: { fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.15" },
      h3: { fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: "1.2" },
      h4: { fontSize: "1.25rem", lineHeight: "1.3" },
    },
  },
  primaryColor: "ink",
  primaryShade: 9,
  defaultRadius: 0,
  colors: { ink, paper },
  black: "#111010",
  white: "#fbf9f6",
});
