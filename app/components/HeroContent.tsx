import { Container, Stack, Text, Title } from "@mantine/core";

interface HeroContentProps {
  title: string;
  description: string[];
}

export function HeroContent({ title, description }: HeroContentProps) {
  return (
    <Container size="md" py={80}>
      <Stack align="center" gap="md">
        <Title order={1} fz={{ base: 48, sm: 72 }} ta="center">
          {title}
        </Title>
        <Stack align="center" gap={4}>
          {description.map((line) => (
            <Text key={line} size="xl" c="dimmed" ta="center">
              {line}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
