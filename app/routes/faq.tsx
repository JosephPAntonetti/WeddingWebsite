import { Grid, Stack } from "@mantine/core";
import type { Route } from "./+types/faq";
import { Shell } from "../components/Shell";
import { FaqList } from "../components/FaqList";
import { couple, gallery } from "../data/wedding";
import {
  ActionButton,
  BodyText,
  PhotoFrame,
  Reveal,
  Section,
  SectionHeading,
} from "../components/ui";

export function meta(_: Route.MetaArgs) {
  return [
    { title: `Questions — ${couple.first} & ${couple.second}` },
    {
      name: "description",
      content: "Answers to the questions guests ask most often.",
    },
  ];
}

export default function FaqRoute() {
  const photo = gallery[3];

  return (
    <Shell>
      <Section id="faq" size="lg" py={{ base: 96, sm: 140 }}>
        <Grid gap={{ base: 40, sm: 72 }}>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Reveal>
              <Stack gap="xl">
                <SectionHeading
                  align="start"
                  eyebrow="Good To Know"
                  title="Frequently Asked Questions"
                />
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  position={photo.position}
                  ratio={4 / 5}
                />
                <Stack gap="md" align="flex-start">
                  <BodyText>
                    Anything we have not covered? Write to either of us — we
                    read every one.
                  </BodyText>
                  <ActionButton to="/">Back To The Invitation</ActionButton>
                </Stack>
              </Stack>
            </Reveal>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <Reveal delay={120}>
              <FaqList />
            </Reveal>
          </Grid.Col>
        </Grid>
      </Section>
    </Shell>
  );
}
