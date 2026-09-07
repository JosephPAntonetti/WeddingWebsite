import { createContext, useContext } from "react";

/**
 * Sections alternate between ivory ("paper") and near-black ("ink") panels.
 * Rather than every primitive taking a colour prop, the enclosing `Section`
 * publishes its tone and the primitives read the matching palette from here.
 */
export type Tone = "paper" | "ink";

export const toneColors = {
  paper: {
    background: "var(--mantine-color-paper-1)",
    surface: "var(--mantine-color-paper-0)",
    text: "var(--mantine-color-ink-9)",
    muted: "var(--mantine-color-ink-6)",
    faint: "var(--mantine-color-ink-4)",
    rule: "var(--mantine-color-ink-2)",
    inverse: "var(--mantine-color-paper-0)",
  },
  ink: {
    background: "var(--mantine-color-ink-9)",
    surface: "var(--mantine-color-ink-8)",
    text: "var(--mantine-color-paper-0)",
    muted: "var(--mantine-color-paper-3)",
    faint: "var(--mantine-color-ink-4)",
    rule: "rgba(251, 249, 246, 0.28)",
    inverse: "var(--mantine-color-ink-9)",
  },
} satisfies Record<Tone, Record<string, string>>;

export type ToneColors = (typeof toneColors)[Tone];

const ToneContext = createContext<Tone>("paper");

export const ToneProvider = ToneContext.Provider;

export function useTone(): Tone {
  return useContext(ToneContext);
}

export function useToneColors(): ToneColors {
  return toneColors[useTone()];
}
