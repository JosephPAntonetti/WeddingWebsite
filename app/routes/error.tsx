import {
  Button,
  Code,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { isRouteErrorResponse, Link } from "react-router";

export function ErrorBoundary({ error }: { error: unknown }) {
  let code = "Oops!";
  let message = "Something went wrong";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    message =
      error.status === 404 ? "You found a secret place." : "Something broke.";
    details =
      error.status === 404
        ? "Unfortunately, this is only a 404 page. The page you are looking for does not exist."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Container size="md" py={80}>
      <Stack align="center" gap="md">
        <Title
          order={1}
          fw={900}
          fz={{ base: 120, sm: 220 }}
          lh={1}
          c="background.4"
          ta="center"
        >
          {code}
        </Title>
        <Title order={2} fz={{ base: 32, sm: 48 }} ta="center">
          {message}
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={500}>
          {details}
        </Text>
        <Group justify="center" mt="md">
          <Button component={Link} to="/" size="md">
            Take me back home
          </Button>
        </Group>
        {stack && (
          <Code block mt="md" w="100%">
            {stack}
          </Code>
        )}
      </Stack>
    </Container>
  );
}
