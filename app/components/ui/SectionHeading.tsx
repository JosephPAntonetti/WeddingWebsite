import { Stack, Title } from "@mantine/core";
import { fonts } from "../../theme";
import { Eyebrow } from "./Eyebrow";
import { useToneColors } from "./tone";

interface SectionHeadingProps {
  /** Tracked capitals above the title. */
  eyebrow?: string;
  title?: string;
  align?: "center" | "start";
  /** Heading level. The page's own title should pass 1. */
  order?: 1 | 2 | 3;
}

/**
 * Eyebrow and title — the stacked heading that opens a section.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  order = 2,
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
    </Stack>
  );
}
