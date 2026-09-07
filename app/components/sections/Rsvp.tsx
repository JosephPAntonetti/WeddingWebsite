import { Grid, Stack, Text } from "@mantine/core";
import { useFetcher } from "react-router";
import { ATTENDANCE, type RsvpResult } from "../../lib/rsvp";
import { rsvp } from "../../data/wedding";
import {
  ActionButton,
  BodyText,
  Eyebrow,
  Field,
  Panel,
  Reveal,
  Rule,
  ScriptText,
  Section,
  SectionHeading,
  toneColors,
} from "../ui";

/** The reply card. Posts to the home route's action. */
export function Rsvp() {
  const fetcher = useFetcher<RsvpResult>();
  const result = fetcher.data;
  const submitting = fetcher.state !== "idle";

  return (
    <Section id="rsvp" size="lg">
      <Grid gap={{ base: 40, sm: 64 }} align="center">
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Reveal>
            <Stack gap="md" align="flex-start">
              <SectionHeading align="start" eyebrow="Reply" title="R.S.V.P." />
              <Rule w={80} my={0} />
              <BodyText>
                {rsvp.note} {rsvp.deadline}. Every name on your invitation needs
                its own line, so send one card per guest.
              </BodyText>
            </Stack>
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Reveal delay={120}>
            <Panel tone="ink">
              {result?.ok ? (
                <Stack align="center" gap="md" ta="center" py="xl">
                  <Eyebrow>Received</Eyebrow>
                  <ScriptText>Thank you</ScriptText>
                  <BodyText ta="center">
                    Your reply is in, {result.reply?.name}. We will be in touch
                    closer to the day.
                  </BodyText>
                </Stack>
              ) : (
                <fetcher.Form method="post" action="/?index">
                  <Stack gap="xl">
                    <Eyebrow>You're Invited</Eyebrow>
                    <Grid gap="xl">
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Field name="name" label="Full Name" required />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Field
                          name="email"
                          label="Email"
                          type="email"
                          required
                        />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Field
                          name="attendance"
                          label="Will You Attend"
                          type="select"
                          data={ATTENDANCE}
                        />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Field name="guests" label="Guests In Your Party" />
                      </Grid.Col>
                      <Grid.Col span={12}>
                        <Field
                          name="notes"
                          label="Anything We Should Know"
                          type="textarea"
                          rows={3}
                        />
                      </Grid.Col>
                    </Grid>
                    {result?.errors && (
                      <Stack gap={4}>
                        {Object.entries(result.errors).map(([field, message]) => (
                          <Text key={field} fz={13} c={toneColors.ink.muted}>
                            {message}
                          </Text>
                        ))}
                      </Stack>
                    )}
                    <ActionButton type="submit" variant="solid" loading={submitting}>
                      Send Reply
                    </ActionButton>
                  </Stack>
                </fetcher.Form>
              )}
            </Panel>
          </Reveal>
        </Grid.Col>
      </Grid>
    </Section>
  );
}
