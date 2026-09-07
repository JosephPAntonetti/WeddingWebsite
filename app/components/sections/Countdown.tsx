import { useEffect, useState } from "react";
import { Flex, Stack, Text } from "@mantine/core";
import { fonts } from "../../theme";
import { calendarUrl, weddingDate } from "../../data/wedding";
import {
  ActionButton,
  Eyebrow,
  Reveal,
  Section,
  useToneColors,
} from "../ui";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

interface Unit {
  label: string;
  value: number;
}

function split(remaining: number): Unit[] {
  const clamped = Math.max(remaining, 0);
  return [
    { label: "Days", value: Math.floor(clamped / DAY) },
    { label: "Hours", value: Math.floor((clamped % DAY) / HOUR) },
    { label: "Minutes", value: Math.floor((clamped % HOUR) / MINUTE) },
    { label: "Seconds", value: Math.floor((clamped % MINUTE) / SECOND) },
  ];
}

/**
 * Ticks once a second, but only after mount — the server has no idea what
 * "now" is on the visitor's clock, so the first paint shows placeholders and
 * hydration stays quiet.
 */
function useRemaining(target: Date): number | null {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(target.getTime() - Date.now());
    tick();
    const id = setInterval(tick, SECOND);
    return () => clearInterval(id);
  }, [target]);

  return remaining;
}

/**
 * The numerals themselves. Split out so the tone the `Section` publishes is
 * in scope — the component itself sits outside it.
 */
function Numerals({ remaining }: { remaining: number | null }) {
  const colors = useToneColors();
  const units = split(remaining ?? 0);
  const digit = {
    ff: fonts.display,
    fz: { base: 40, sm: 76 },
    fw: 300,
    lh: 1,
  } as const;

  return (
    <Flex
      gap={{ base: 6, sm: 24 }}
      justify="center"
      align="flex-start"
      wrap="nowrap"
    >
      {units.map((unit, index) => (
        <Flex key={unit.label} gap={{ base: 6, sm: 24 }} wrap="nowrap">
          <Stack gap={6} align="center">
            <Text {...digit} lts="0.02em" c={colors.text}>
              {remaining === null ? "––" : String(unit.value).padStart(2, "0")}
            </Text>
            <Eyebrow>{unit.label}</Eyebrow>
          </Stack>
          {index < units.length - 1 && (
            <Text {...digit} c={colors.faint} aria-hidden>
              .
            </Text>
          )}
        </Flex>
      ))}
    </Flex>
  );
}

/**
 * Large numerals counting down to the ceremony on the ivory page, with the
 * calendar link beneath them.
 */
export function Countdown() {
  const remaining = useRemaining(weddingDate);

  return (
    <Section py={{ base: 72, sm: 110 }}>
      <Reveal>
        <Stack align="center" gap="lg">
          <Eyebrow>Counting Down</Eyebrow>
          <Numerals remaining={remaining} />
          <ActionButton href={calendarUrl}>Add To Calendar</ActionButton>
        </Stack>
      </Reveal>
    </Section>
  );
}
