import { Stack, Text } from "@mantine/core";
import { fonts } from "../theme";
import { couple } from "../data/wedding";
import { useToneColors } from "./ui/tone";

const NAME_SIZE = "clamp(4rem, 16vw, 9rem)";
const AMPERSAND_SIZE = "2.25rem";

/**
 * The "Lauren & Joe" wordmark: two calligraphic names stacked around a small
 * upright ampersand. It is set in live text rather than an SVG so it stays
 * selectable, searchable and crisp at any size.
 */
export function Logo() {
  const colors = useToneColors();

  return (
    <Stack
      component="span"
      align="center"
      gap={0}
      c={colors.text}
      aria-label={`${couple.first} and ${couple.second}`}
      role="img"
    >
      <Text
        component="span"
        ff={fonts.script}
        fz={NAME_SIZE}
        lh={0.9}
        aria-hidden
      >
        {couple.first}
      </Text>
      <Text
        component="span"
        ff={fonts.display}
        fz={AMPERSAND_SIZE}
        lts="0.1em"
        my={4}
        aria-hidden
      >
        &amp;
      </Text>
      <Text
        component="span"
        ff={fonts.script}
        fz={NAME_SIZE}
        lh={0.9}
        aria-hidden
      >
        {couple.second}
      </Text>
    </Stack>
  );
}
