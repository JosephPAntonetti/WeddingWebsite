import { useEffect, useState } from "react";
import { Box, Flex, Stack, Text } from "@mantine/core";
import { fonts } from "../../theme";
import { gallery, weddingDate } from "../../data/wedding";
import { Eyebrow, PhotoBackdrop, Reveal, Section } from "../ui";

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

/** Large numerals counting down to the ceremony, set over a darkened plate. */
export function Countdown() {
  const remaining = useRemaining(weddingDate);
  const units = split(remaining ?? 0);
  const photo = gallery[4];

  return (
    <Section tone="ink" bleed>
      <PhotoBackdrop
        src={photo.src}
        position={photo.position}
        scrim="heavy"
        py={{ base: 72, sm: 110 }}
      >
        <Box px="var(--page-gutter)">
          <Reveal>
            <Stack align="center" gap="lg" c="var(--mantine-color-paper-0)">
              <Eyebrow>Counting Down</Eyebrow>
              <Flex
                gap={{ base: 6, sm: 24 }}
                justify="center"
                align="flex-start"
                wrap="nowrap"
              >
                {units.map((unit, index) => (
                  <Flex key={unit.label} gap={{ base: 6, sm: 24 }} wrap="nowrap">
                    <Stack gap={6} align="center">
                      <Text
                        ff={fonts.display}
                        fz={{ base: 40, sm: 76 }}
                        fw={300}
                        lh={1}
                        lts="0.02em"
                      >
                        {remaining === null
                          ? "––"
                          : String(unit.value).padStart(2, "0")}
                      </Text>
                      <Eyebrow>{unit.label}</Eyebrow>
                    </Stack>
                    {index < units.length - 1 && (
                      <Text
                        ff={fonts.display}
                        fz={{ base: 40, sm: 76 }}
                        fw={300}
                        lh={1}
                        opacity={0.4}
                        aria-hidden
                      >
                        .
                      </Text>
                    )}
                  </Flex>
                ))}
              </Flex>
            </Stack>
          </Reveal>
        </Box>
      </PhotoBackdrop>
    </Section>
  );
}
