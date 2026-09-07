import { Grid, Stack } from "@mantine/core";
import { gallery, story } from "../../data/wedding";
import {
  BodyText,
  PhotoFrame,
  Reveal,
  Rule,
  Section,
  SectionHeading,
} from "../ui";

/** How he asked, set beside a portrait on an ink panel. */
export function Story() {
  const photo = gallery[2];

  return (
    <Section id="story" tone="ink">
      <Grid gap={{ base: 40, sm: 72 }} align="center">
        <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
          <Reveal>
            <Stack gap="xl">
              <SectionHeading
                align="start"
                eyebrow={story.eyebrow}
                script={story.script}
              />
              <Stack gap="md">
                {story.body.map((line) => (
                  <BodyText key={line}>{line}</BodyText>
                ))}
              </Stack>
              <Rule w={60} my={0} />
            </Stack>
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 1, sm: 2 }}>
          <Reveal delay={120}>
            <PhotoFrame
              src={photo.src}
              alt={photo.alt}
              position={photo.position}
              ratio={4 / 5}
              framed
            />
          </Reveal>
        </Grid.Col>
      </Grid>
    </Section>
  );
}
