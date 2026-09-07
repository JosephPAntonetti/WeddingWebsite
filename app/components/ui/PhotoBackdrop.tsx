import type { ReactNode } from "react";
import { Box } from "@mantine/core";

/** Darkens the photograph enough to carry white type at any exposure. */
const SCRIM =
  "linear-gradient(180deg, rgba(17,16,16,0.55) 0%, rgba(17,16,16,0.28) 45%, rgba(17,16,16,0.72) 100%)";

interface PhotoBackdropProps {
  src: string;
  children: ReactNode;
  /** CSS `object-position`, for choosing the crop. */
  position?: string;
  /** Load eagerly — the hero only. */
  priority?: boolean;
  h?: string | Record<string, string>;
}

/**
 * A full-bleed photograph with a scrim over it — the ground for the white
 * type in the hero.
 */
export function PhotoBackdrop({
  src,
  children,
  position = "center",
  priority = false,
  h,
}: PhotoBackdropProps) {
  return (
    <Box pos="relative" h={h} className="plate">
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
      <Box pos="absolute" inset={0} style={{ background: SCRIM }} />
      <Box pos="relative" h={h ? "100%" : undefined}>
        {children}
      </Box>
    </Box>
  );
}
