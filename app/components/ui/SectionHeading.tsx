import type { ReactNode } from "react";
import { Stack, Title } from "@mantine/core";
import { fonts } from "../../theme";
import { Eyebrow } from "./Eyebrow";
import { Rule } from "./Rule";
import { ScriptText } from "./ScriptText";
import { useToneColors } from "./tone";

interface SectionHeadingProps {
  /** Tracked capitals above the title. */
  eyebrow?: string;
  title?: string;
  /** Calligraphic line, set beneath the title. */
  script?: string;
  align?: "center" | "start";
  /** Break the heading with a small diamond rule. */
  ornament?: boolean;
  order?: 1 | 2 | 3;
  children?: ReactNode;
}

/**
 * Eyebrow, title, script flourish and rule — the stacked heading that opens
 * every section.
 */
export function SectionHeading({
  eyebrow,
  title,
  script,
  align = "center",
  ornament = false,
  order = 2,
  children,
}: SectionHeadingProps) {
  const colors = useToneColors();

  return (
    <Stack
      align={align === "center" ? "center" : "flex-start"}
      gap="sm"
      ta={align === "center" ? "center" : "left"}
      w="100%"
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <Title
          order={order}
          ff={fonts.display}
          fw={300}
          lts="0.02em"
          c={colors.text}
        >
          {title}
        </Title>
      )}
      {script && <ScriptText>{script}</ScriptText>}
      {ornament && <Rule w={140} ornament my="xs" />}
      {children}
    </Stack>
  );
}
