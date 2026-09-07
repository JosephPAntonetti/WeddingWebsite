import { Box, Center, Stack } from "@mantine/core";
import { dressCode, gallery } from "../../data/wedding";
import {
  BodyText,
  Eyebrow,
  Panel,
  PhotoBackdrop,
  Reveal,
  Rule,
  ScriptText,
  Section,
} from "../ui";

/** An ivory card laid over a photograph, carrying the dress code. */
export function DressCode() {
  const photo = gallery[5];

  return (
    <Section id="dress-code" tone="ink" bleed>
      <PhotoBackdrop
        src={photo.src}
        position={photo.position}
        scrim="light"
        py={{ base: 64, sm: 120 }}
      >
        <Center px="var(--page-gutter)">
          <Box maw={620} w="100%">
            <Reveal>
              <Panel tone="paper" p={{ base: 36, sm: 56 }}>
                <Stack align="center" gap="md" ta="center">
                  <Eyebrow>{dressCode.eyebrow}</Eyebrow>
                  <ScriptText fz={{ base: 40, sm: 54 }}>
                    {dressCode.script}
                  </ScriptText>
                  <Rule w={100} ornament my={0} />
                  <BodyText ta="center">{dressCode.body}</BodyText>
                </Stack>
              </Panel>
            </Reveal>
          </Box>
        </Center>
      </PhotoBackdrop>
    </Section>
  );
}
