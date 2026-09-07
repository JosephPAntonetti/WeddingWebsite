import { Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router";
import { couple, dateLabel, navLinks, venue } from "../data/wedding";
import { Monogram } from "./Monogram";
import { Eyebrow, Rule, Section } from "./ui";
import { toneColors } from "./ui/tone";

/** Closing band: monogram, the essentials, and the site's own navigation. */
export function Footer() {
  return (
    <Section tone="ink" py={{ base: 56, sm: 80 }}>
      <Stack align="center" gap="lg">
        <Monogram size={56} />
        <Rule w={120} ornament my={0} />
        <Stack align="center" gap={4}>
          <Eyebrow strong>{venue.name}</Eyebrow>
          <Eyebrow>{dateLabel.short}</Eyebrow>
        </Stack>
        <Group gap="lg" justify="center" wrap="wrap">
          {navLinks.map((link) => (
            <Text
              key={link.to}
              component={Link}
              to={link.to}
              fz={11}
              tt="uppercase"
              lts="0.24em"
              c={toneColors.ink.muted}
              td="none"
            >
              {link.label}
            </Text>
          ))}
        </Group>
        <Text fz={11} lts="0.18em" tt="uppercase" c={toneColors.ink.faint}>
          {couple.first} &amp; {couple.second} — {dateLabel.year}
        </Text>
      </Stack>
    </Section>
  );
}
