import { AspectRatio, Box } from "@mantine/core";
import { useToneColors } from "./tone";

interface PhotoFrameProps {
  src: string;
  alt: string;
  /** Width divided by height. Defaults to a portrait plate. */
  ratio?: number;
  /** CSS `object-position`, for choosing the crop. */
  position?: string;
  /** Inset hairline drawn over the photograph, as on a printed plate. */
  framed?: boolean;
}

/** A photograph, developed to black and white and optionally hairline-framed. */
export function PhotoFrame({
  src,
  alt,
  ratio = 3 / 4,
  position = "center",
  framed = false,
}: PhotoFrameProps) {
  const colors = useToneColors();

  const image = (
    <Box className="plate" pos="relative" w="100%" h="100%">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: position,
          display: "block",
        }}
      />
      {framed && (
        <Box
          pos="absolute"
          inset={14}
          style={{ border: "1px solid rgba(251, 249, 246, 0.55)" }}
          aria-hidden
        />
      )}
    </Box>
  );

  return (
    <Box bg={colors.surface} style={{ overflow: "hidden" }}>
      <AspectRatio ratio={ratio}>{image}</AspectRatio>
    </Box>
  );
}
