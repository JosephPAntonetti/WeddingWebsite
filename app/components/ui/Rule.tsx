import { Box, Group } from "@mantine/core";
import { useToneColors } from "./tone";

interface RuleProps {
  /** Width of the hairline. Defaults to a short centred rule. */
  w?: number | string;
  /** Draw a small open diamond in the middle of the rule. */
  ornament?: boolean;
  my?: number | string;
}

/** A hairline divider, optionally broken by a small diamond. */
export function Rule({ w = 72, ornament = false, my = "md" }: RuleProps) {
  const colors = useToneColors();
  const line = (
    <Box style={{ flex: 1, height: 1, background: colors.rule, minWidth: 24 }} />
  );

  return (
    <Group gap="sm" justify="center" w={w} my={my} wrap="nowrap" aria-hidden>
      {line}
      {ornament && (
        <Box
          w={6}
          h={6}
          style={{
            border: `1px solid ${colors.rule}`,
            transform: "rotate(45deg)",
            flex: "none",
          }}
        />
      )}
      {ornament && line}
    </Group>
  );
}
