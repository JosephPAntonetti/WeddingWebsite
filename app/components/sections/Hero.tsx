import { Box, Stack } from "@mantine/core";
import { dateLabel, photos, venue } from "../../data/wedding";
import { Logo } from "../Logo";
import { Eyebrow, PhotoBackdrop, Reveal, Rule, Section } from "../ui";

/**
 * Full-bleed opening plate: the photograph, a scrim dark enough to carry white
 * type, and the wordmark set inside a hairline frame.
 */
export function Hero() {
  return (
    <Section tone="ink" bleed>
      <PhotoBackdrop
        src={photos.hero.src}
        position={photos.hero.position}
        priority
        h={{ base: "88vh", sm: "100vh" }}
      >
        <Box
          h="100%"
          p={{ base: "var(--page-gutter)", sm: 48 }}
          style={{ display: "grid", placeItems: "center" }}
        >
          <Box
            w="100%"
            h="100%"
            p={{ base: "lg", sm: 48 }}
            style={{
              border: "1px solid rgba(251, 249, 246, 0.4)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Reveal>
              <Stack align="center" gap="md" c="var(--mantine-color-paper-0)">
                <Eyebrow strong>The Wedding Of</Eyebrow>
                <Box component="h1" m={0}>
                  <Logo />
                </Box>
                <Rule w={160} ornament my="xs" />
                <Stack align="center" gap={6}>
                  <Eyebrow strong>{dateLabel.short}</Eyebrow>
                  <Eyebrow>{venue.name}</Eyebrow>
                </Stack>
              </Stack>
            </Reveal>
          </Box>
        </Box>
      </PhotoBackdrop>
    </Section>
  );
}
