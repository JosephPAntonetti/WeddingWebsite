import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import {
  Button,
  Card,
  Container,
  Image,
  Stack,
  Text,
  Transition,
} from "@mantine/core";
import { Shell } from "../components/Shell";
import { Logo } from "../components/Logo";
import mainContent from "../../assets/maincontent.jpg";

const calendarUrl = new URL(
  "https://calendar.google.com/calendar/render",
);
calendarUrl.search = new URLSearchParams({
  action: "TEMPLATE",
  text: "Lauren & Joe's Wedding",
  dates: "20270619/20270620",
  location: "The University Club of New York",
}).toString();

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home" },
  ];
}

export default function HomeRoute() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Shell>
      <Container size="sm" pt={0} pb={80}>
        <Transition
          mounted={mounted}
          transition="fade-up"
          duration={800}
          timingFunction="ease"
        >
          {(styles) => (
            <Card shadow="sm" padding="xl" radius="md" withBorder style={styles}>
              <Card.Section>
                <Image
                  src={mainContent}
                  alt="Lauren & Joe"
                  h={{ base: 300, sm: 400 }}
                  fit="cover"
                />
              </Card.Section>
              <Stack align="center" gap="md" mt="xl">
                <h1 style={{ margin: 0 }}>
                  <Logo />
                </h1>
                <Stack align="center" gap={2}>
                  <Text fz={16} ta="center" c="secondary.8">
                    June 19th, 2027
                  </Text>
                  <Text fz={16} ta="center" c="secondary.8">
                    The University Club of New York
                  </Text>
                  <Button
                    component="a"
                    href={calendarUrl.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                    mt="xs"
                    leftSection={<CalendarIcon />}
                  >
                    Add to Calendar
                  </Button>
                </Stack>
              </Stack>
            </Card>
          )}
        </Transition>
      </Container>
    </Shell>
  );
}
