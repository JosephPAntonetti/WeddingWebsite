import { Grid, Stack } from "@mantine/core";
import { gallery, story } from "../../data/wedding";
import {
  BodyText,
  Eyebrow,
  PhotoFrame,
  Reveal,
  Rule,
  Section,
  SectionHeading,
} from "../ui";

/** How they met and how he asked, set beside a portrait on an ink panel. */
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
              {story.chapters.map((chapter) => (
                <Stack key={chapter.title} gap="sm">
                  <Eyebrow strong>{chapter.title}</Eyebrow>
                  <BodyText>{chapter.body}</BodyText>
                  <Rule w={60} my={0} />
                </Stack>
              ))}
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
