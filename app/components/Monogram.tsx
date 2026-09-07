import { Box, Text } from "@mantine/core";
import { fonts } from "../theme";
import { couple } from "../data/wedding";
import { useToneColors } from "./ui/tone";

interface MonogramProps {
  size?: number;
  /** Draw the thin rectangle around the initials. */
  boxed?: boolean;
}

/** The couple's initials, optionally set inside a hairline box. */
export function Monogram({ size = 64, boxed = true }: MonogramProps) {
  const colors = useToneColors();

  return (
    <Box
      w={boxed ? size : undefined}
      h={boxed ? size : undefined}
      style={
        boxed
          ? {
              border: `1px solid ${colors.rule}`,
              display: "grid",
              placeItems: "center",
            }
          : undefined
      }
    >
      <Text
        component="span"
        ff={fonts.display}
        fz={size * 0.34}
        fw={300}
        lts="0.1em"
        c={colors.text}
      >
        {couple.monogram}
      </Text>
    </Box>
  );
}
