import type { ReactNode } from "react";
import { Box, Container } from "@mantine/core";
import { ToneProvider, toneColors, type Tone } from "./tone";

interface SectionProps {
  children: ReactNode;
  /** Anchor target for the navigation. */
  id?: string;
  /** Ivory panel (default) or near-black panel. */
  tone?: Tone;
  /** Skip the container and let children run to the page edges. */
  bleed?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  py?: number | string | Record<string, number | string>;
}

/**
 * A full-width band of the page. It paints the panel, publishes its tone to
 * every primitive inside it, and centres the content in a container.
 */
export function Section({
  children,
  id,
  tone = "paper",
  bleed = false,
  size = "md",
  py = { base: 72, sm: 120 },
}: SectionProps) {
  const colors = toneColors[tone];

  return (
    <ToneProvider value={tone}>
      <Box
        component="section"
        id={id}
        bg={colors.background}
        c={colors.text}
        py={bleed ? 0 : py}
        style={{ scrollMarginTop: 80 }}
      >
        {bleed ? children : <Container size={size}>{children}</Container>}
      </Box>
    </ToneProvider>
  );
}
