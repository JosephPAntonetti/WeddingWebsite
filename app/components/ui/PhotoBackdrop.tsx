import type { ReactNode } from "react";
import { Box } from "@mantine/core";

type Scrim = "light" | "heavy" | "gradient";

const SCRIMS: Record<Scrim, string> = {
  light: "rgba(17, 16, 16, 0.35)",
  heavy: "rgba(17, 16, 16, 0.72)",
  gradient:
    "linear-gradient(180deg, rgba(17,16,16,0.55) 0%, rgba(17,16,16,0.28) 45%, rgba(17,16,16,0.72) 100%)",
};

interface PhotoBackdropProps {
  src: string;
  children: ReactNode;
  /** CSS `object-position`, for choosing the crop. */
  position?: string;
  /** How hard to darken the photograph so white type stays readable. */
  scrim?: Scrim;
  /** Load eagerly — the hero only. */
  priority?: boolean;
  h?: string | Record<string, string>;
  py?: number | Record<string, number>;
}

/**
 * A full-bleed photograph with a scrim over it, used as the ground for the
 * white type in the hero, the countdown and the dress code.
 */
export function PhotoBackdrop({
  src,
  children,
  position = "center",
  scrim = "heavy",
  priority = false,
  h,
  py,
}: PhotoBackdropProps) {
  return (
    <Box pos="relative" h={h} py={py} className="plate">
      <img
        src={src}
        alt=""
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: position,
        }}
      />
      <Box pos="absolute" inset={0} style={{ background: SCRIMS[scrim] }} />
      <Box pos="relative" h={h ? "100%" : undefined}>
        {children}
      </Box>
    </Box>
  );
}
