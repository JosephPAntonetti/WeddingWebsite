import type { ReactNode } from "react";
import { Box } from "@mantine/core";
import { ToneProvider, toneColors, type Tone } from "./tone";

interface PanelProps {
  children: ReactNode;
  /** The panel's own tone, independent of the section around it. */
  tone?: Tone;
  /** Draw an inset hairline just inside the edge, as on a printed card. */
  framed?: boolean;
  p?: number | string | Record<string, number | string>;
}

/**
 * A card that sets its own tone — used for the dark plates that float on the
 * ivory page (and the ivory plates that float on photographs).
 */
export function Panel({
  children,
  tone = "ink",
  framed = true,
  p = { base: 32, sm: 64 },
}: PanelProps) {
  const colors = toneColors[tone];

  return (
    <ToneProvider value={tone}>
      <Box pos="relative" bg={colors.background} c={colors.text} p={p}>
        {framed && (
          <Box
            pos="absolute"
            inset={12}
            style={{ border: `1px solid ${colors.rule}`, pointerEvents: "none" }}
            aria-hidden
          />
        )}
        <Box pos="relative">{children}</Box>
      </Box>
    </ToneProvider>
  );
}
