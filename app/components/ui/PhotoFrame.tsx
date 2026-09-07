import { AspectRatio, Box } from "@mantine/core";
import { useToneColors } from "./tone";

interface PhotoFrameProps {
  src: string;
  alt: string;
  /** Width divided by height. Defaults to a portrait plate. */
  ratio?: number;
  /** CSS `object-position`, for choosing the crop. */
  position?: string;
}

/** A photograph, developed to black and white and cropped to a fixed ratio. */
export function PhotoFrame({
  src,
  alt,
  ratio = 3 / 4,
  position = "center",
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
    </Box>
  );

  return (
    <Box bg={colors.surface} style={{ overflow: "hidden" }}>
      <AspectRatio ratio={ratio}>{image}</AspectRatio>
    </Box>
  );
}
