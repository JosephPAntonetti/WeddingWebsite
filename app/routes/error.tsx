import { Code, Stack, Text, Title } from "@mantine/core";
import { isRouteErrorResponse } from "react-router";
import { fonts } from "../theme";
import { ActionButton, Eyebrow, Rule, Section } from "../components/ui";

export function ErrorBoundary({ error }: { error: unknown }) {
  let code = "Oh dear";
  let message = "Something went wrong";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    message =
      error.status === 404 ? "You found a quiet corner" : "Something broke";
    details =
      error.status === 404
        ? "There is no page here — only a 404. The invitation is back at the beginning."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Section tone="ink" py={{ base: 120, sm: 180 }}>
      <Stack align="center" gap="lg" ta="center">
        <Title
          order={1}
          ff={fonts.display}
          fw={200}
          fz={{ base: 96, sm: 180 }}
          lh={1}
          lts="0.04em"
          opacity={0.55}
        >
          {code}
        </Title>
        <Rule w={140} ornament my={0} />
        <Eyebrow strong>{message}</Eyebrow>
        <Text fz={16} lh={1.85} c="var(--mantine-color-paper-3)" maw={520}>
          {details}
        </Text>
        <ActionButton to="/">Back To The Beginning</ActionButton>
        {stack && (
          <Code block mt="xl" w="100%" ta="left">
            {stack}
          </Code>
        )}
      </Stack>
    </Section>
  );
}
