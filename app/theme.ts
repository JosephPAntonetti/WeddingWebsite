import { createTheme, type MantineColorsTuple } from "@mantine/core";

// Dark green brand color (#14532d) sits at the darkest shade so `accent.9`
// renders the exact brand green while lighter shades support hover/borders.
const accent: MantineColorsTuple = [
  "#ecf6ef",
  "#d6e9dc",
  "#aed2ba",
  "#82ba95",
  "#5fa676",
  "#489a64",
  "#3b945b",
  "#2c7f49",
  "#1f6f3d",
  "#14532d",
];

// Cream page background (#faf4e6) at the lightest shade.
const background: MantineColorsTuple = [
  "#faf4e6",
  "#f2ead2",
  "#e6d9b0",
  "#dbc78b",
  "#d2b76d",
  "#cdad59",
  "#caa84d",
  "#b3933f",
  "#9f8235",
  "#8a6f28",
];

export const theme = createTheme({
  fontFamily:
    'Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  headings: {
    fontFamily: '"Montenegrin Gothic One", sans-serif',
  },
  primaryColor: "accent",
  primaryShade: 9,
  colors: {
    accent,
    background,
  },
});
