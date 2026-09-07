import { Box, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { fonts } from "../../theme";
import { schedule } from "../../data/wedding";
import {
  Eyebrow,
  Reveal,
  Section,
  ScriptText,
  useToneColors,
} from "../ui";

function Entry({
  time,
  title,
  detail,
}: {
  time: string;
  title: string;
  detail: string;
}) {
  const colors = useToneColors();

  return (
    <Group
      align="baseline"
      gap="xl"
      wrap="nowrap"
      py="lg"
      style={{ borderTop: `1px solid ${colors.rule}` }}
    >
      <Text
        ff={fonts.display}
        fz={{ base: 20, sm: 24 }}
        fw={300}
        c={colors.text}
        w={100}
        style={{ flex: "none" }}
      >
        {time}
      </Text>
      <Stack gap={4}>
        <Eyebrow strong>{title}</Eyebrow>
        <Text fz={15} c={colors.muted} lh={1.6}>
          {detail}
        </Text>
      </Stack>
    </Group>
  );
}

/** The running order of the day, as a ruled timetable. */
export function Schedule() {
  return (
    <Section id="schedule">
      <Grid gap={{ base: 32, sm: 72 }}>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Reveal>
            <Stack gap={0}>
              <Title
                order={2}
                ff={fonts.display}
                fw={300}
                lts="0.06em"
                tt="uppercase"
                fz={{ base: 34, sm: 46 }}
                lh={1.05}
              >
                The Wedding Day
              </Title>
              <ScriptText fz={{ base: 44, sm: 60 }} ml={{ base: 0, sm: 40 }}>
                Schedule
              </ScriptText>
            </Stack>
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Reveal delay={100}>
            <Box>
              {schedule.map((entry) => (
                <Entry key={entry.title} {...entry} />
              ))}
            </Box>
          </Reveal>
        </Grid.Col>
      </Grid>
    </Section>
  );
}
