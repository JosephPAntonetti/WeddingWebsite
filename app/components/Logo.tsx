import { Stack, Text } from "@mantine/core";
import { fonts } from "../theme";
import { couple } from "../data/wedding";
import { useToneColors } from "./ui/tone";

const NAME_SIZE = "clamp(4rem, 16vw, 9rem)";
const AMPERSAND_SIZE = "2.25rem";

/**
 * Monsieur La Doulaise draws 1.048em above the baseline and 0.513em below it,
 * so at a line-height of 0.9 the swash on the L climbs about 0.28em past the
 * top of its line box and the tail of the J drops about 0.23em below. Reserve
 * that as padding — without it the names collide with the eyebrow above the
 * wordmark and the rule beneath it.
 */
const SWASH_CLEARANCE = "0.3em";

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
      // The clearance above is em-based, so the wordmark carries its own
      // type size and the padding scales with the clamp at every width.
      fz={NAME_SIZE}
      py={SWASH_CLEARANCE}
      c={colors.text}
      aria-label={`${couple.first} and ${couple.second}`}
      role="img"
    >
      <Text component="span" ff={fonts.script} fz="1em" lh={0.9} aria-hidden>
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
      <Text component="span" ff={fonts.script} fz="1em" lh={0.9} aria-hidden>
        {couple.second}
      </Text>
    </Stack>
  );
}
