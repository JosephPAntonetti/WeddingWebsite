import type { ReactNode } from "react";
import { AppShell, Box, Burger, Group, Stack, Text } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Link } from "react-router";
import { fonts } from "../theme";
import { dateLabel, navLinks } from "../data/wedding";
import { Footer } from "./Footer";
import { Monogram } from "./Monogram";
import { Rule } from "./ui";
import { ToneProvider, toneColors } from "./ui/tone";

interface ShellProps {
  children?: ReactNode;
  /** Float the header over the content — used by the full-bleed hero. */
  headerOverlay?: boolean;
}

const HEADER_HEIGHT = 76;

/** Distance scrolled before an overlaid header settles into a solid bar. */
const SETTLE_AT = 140;

/**
 * Page chrome: a near-invisible header that sits over the hero, a full-height
 * ink drawer for navigation, and the shared footer.
 */
export function Shell({ children, headerOverlay = false }: ShellProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();

  // Over the hero the header is invisible chrome in white; once the ivory page
  // scrolls up behind it, it settles into a solid bar with ink type.
  const settled = !headerOverlay || scroll.y > SETTLE_AT;
  const headerTone = settled ? "paper" : "ink";
  const headerColor = toneColors[headerTone].text;

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT, offset: !headerOverlay }}
      navbar={{
        width: 340,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding={0}
    >
      <AppShell.Header
        withBorder={false}
        bg={settled ? toneColors.paper.background : "transparent"}
        c={headerColor}
        style={{
          // Sit above the navigation drawer so the monogram and the burger
          // stay reachable while the menu is open.
          zIndex: 201,
          borderBottom: settled ? `1px solid ${toneColors.paper.rule}` : "none",
          transition: "background-color 500ms ease, border-color 500ms ease",
        }}
      >
        <ToneProvider value={headerTone}>
          <Group
            component="nav"
            h="100%"
            px="var(--page-gutter)"
            justify="space-between"
            wrap="nowrap"
          >
            <Box
              component={Link}
              to="/"
              c="inherit"
              td="none"
              style={{ lineHeight: 0 }}
            >
              <Monogram size={38} boxed={false} />
            </Box>
            <Text
              visibleFrom="sm"
              fz={10}
              tt="uppercase"
              lts="0.34em"
              c="inherit"
              opacity={0.75}
            >
              {dateLabel.short}
            </Text>
            <Burger
              opened={opened}
              onClick={toggle}
              color={headerColor}
              size="sm"
              aria-label="Toggle menu"
            />
          </Group>
        </ToneProvider>
      </AppShell.Header>

      <AppShell.Navbar
        withBorder={false}
        bg={toneColors.ink.background}
        c={toneColors.ink.text}
        pt={HEADER_HEIGHT}
      >
        <ToneProvider value="ink">
          <Stack gap="xs" p="xl" justify="center" h="100%">
            {navLinks.map((link) => (
              <Text
                key={link.to}
                component={Link}
                to={link.to}
                onClick={close}
                ff={fonts.display}
                fz={{ base: 30, sm: 38 }}
                fw={300}
                lts="0.02em"
                c={toneColors.ink.text}
                td="none"
                lh={1.5}
              >
                {link.label}
              </Text>
            ))}
            <Rule w={120} my="xl" />
          </Stack>
        </ToneProvider>
      </AppShell.Navbar>

      <AppShell.Main bg={toneColors.paper.background}>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
