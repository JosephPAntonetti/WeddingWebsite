import { Container, Stack, Text, Title } from "@mantine/core";
import type { Route } from "./+types/faq";
import { Shell } from "../components/Shell";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ" },
    { name: "description", content: "Frequently asked questions" },
  ];
}

export default function FaqRoute() {
  return (
    <Shell>
      <Container size="md" py={80}>
        <Stack gap="xl" align="center">
          <Title order={1} fz={{ base: 48, sm: 72 }} ta="center">
            Frequently Asked Questions
          </Title>
          <Text size="xl" c="dimmed" ta="center">
            Coming Soon
          </Text>
        </Stack>
      </Container>
    </Shell>
  );
}
