import type { ReactNode } from "react";
import { AppShell, Burger, Group, NavLink, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router";

interface ShellProps {
  children?: ReactNode;
  /** Render the header transparently over the content instead of above it. */
  headerOverlay?: boolean;
}

const links = [
  { label: "Home", to: "/" },
  { label: "FAQ", to: "/faq" },
];

export function Shell({ children, headerOverlay = false }: ShellProps) {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 80, offset: !headerOverlay }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding={headerOverlay ? 0 : "md"}
    >
      <AppShell.Header withBorder={false} bg="transparent">
        <Group component="nav" h="100%" px="xl">
          <Burger opened={opened} onClick={toggle} aria-label="Toggle menu" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar bg="background.0">
        <Stack gap="md" p="md">
          {links.map((link) => (
            <NavLink
              key={link.to}
              component={Link}
              to={link.to}
              label={link.label}
              onClick={close}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main bg="background.0">{children}</AppShell.Main>
    </AppShell>
  );
}
