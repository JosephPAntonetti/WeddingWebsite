import { Grid, Stack } from "@mantine/core";
import {
  calendarUrl,
  dateLabel,
  photos,
  invitation,
  venue,
} from "../../data/wedding";
import {
  ActionButton,
  BodyText,
  Eyebrow,
  PhotoFrame,
  Reveal,
  Rule,
  Section,
  SectionHeading,
} from "../ui";

/** Photograph beside the invitation proper, with the calendar link. */
export function Invitation() {
  const photo = photos.invitation;

  return (
    <Section id="invitation">
      <Grid gap={{ base: 40, sm: 72 }} align="center">
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Reveal>
            <PhotoFrame
              src={photo.src}
              alt={photo.alt}
              position={photo.position}
              ratio={4 / 5}
            />
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Reveal delay={120}>
            <Stack align="flex-start" gap="lg">
              <SectionHeading
                align="start"
                eyebrow={invitation.eyebrow}
                script={invitation.script}
              />
              <Stack gap="xs">
                {invitation.body.map((line) => (
                  <BodyText key={line} lede>
                    {line}
                  </BodyText>
                ))}
              </Stack>
              <Rule w={90} my={0} />
              <Stack gap={6}>
                <Eyebrow strong>{dateLabel.long}</Eyebrow>
                <Eyebrow>{venue.name}</Eyebrow>
                <Eyebrow>
                  {venue.street}, {venue.city}
                </Eyebrow>
              </Stack>
              <ActionButton href={calendarUrl}>Add To Calendar</ActionButton>
            </Stack>
          </Reveal>
        </Grid.Col>
      </Grid>
    </Section>
  );
}
