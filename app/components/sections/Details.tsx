import { Grid, Group, Stack, Title } from "@mantine/core";
import { fonts } from "../../theme";
import { details } from "../../data/wedding";
import {
  ActionButton,
  BodyText,
  Eyebrow,
  Panel,
  Reveal,
  Rule,
  ScriptText,
  Section,
} from "../ui";

/** Lodging, travel and registry, gathered onto one dark plate. */
export function Details() {
  return (
    <Section id="details" size="lg">
      <Reveal>
        <Panel tone="ink">
          <Stack align="center" gap="xl">
            <Stack align="center" gap={0}>
              <Title
                order={2}
                ff={fonts.display}
                fw={300}
                tt="uppercase"
                lts="0.08em"
                fz={{ base: 28, sm: 42 }}
                ta="center"
              >
                The Finer Details
              </Title>
              <ScriptText fz={{ base: 32, sm: 42 }}>everything else</ScriptText>
            </Stack>
            <Rule w={140} ornament my={0} />
            <Grid gap={{ base: 40, sm: 48 }} w="100%">
              {details.map((item) => (
                <Grid.Col key={item.title} span={{ base: 12, sm: 4 }}>
                  <Stack gap="md" align="center" ta="center" h="100%">
                    <Eyebrow strong>{item.title}</Eyebrow>
                    <BodyText ta="center" maw={320}>
                      {item.body}
                    </BodyText>
                    <Group gap="sm" justify="center" mt="auto">
                      {item.actions.map((action) => (
                        <ActionButton
                          key={action.label}
                          href={action.href}
                          size="sm"
                        >
                          {action.label}
                        </ActionButton>
                      ))}
                    </Group>
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Panel>
      </Reveal>
    </Section>
  );
}
