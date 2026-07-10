import type { ReactNode } from "react";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavigationDrawer } from "./navigation/navigation-drawer";

interface PageProps {
  children?: ReactNode;
}

export function Page({ children }: PageProps) {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="border-transparent bg-transparent">
        <nav className="flex w-full items-center px-8 py-2 text-black">
          <Burger opened={opened} onClick={toggle} aria-label="Toggle menu" />
        </nav>
      </AppShell.Header>
      <AppShell.Navbar className="bg-background-color">
        <NavigationDrawer onClose={close} />
      </AppShell.Navbar>
      <AppShell.Main className="bg-background-color">{children}</AppShell.Main>
    </AppShell>
  );
}
