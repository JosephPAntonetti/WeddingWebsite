import { Text, type TextProps } from "@mantine/core";
import { useToneColors } from "./tone";

interface EyebrowProps extends TextProps {
  children: React.ReactNode;
  /** Use the strong ink colour instead of the muted grey. */
  strong?: boolean;
}

/**
 * Small, widely-tracked capitals — the label that sits above almost every
 * heading on the site.
 */
export function Eyebrow({ children, strong = false, ...props }: EyebrowProps) {
  const colors = useToneColors();

  return (
    <Text
      component="p"
      tt="uppercase"
      fz={{ base: 10, sm: 11 }}
      fw={500}
      lts="0.38em"
      c={strong ? colors.text : colors.muted}
      m={0}
      {...props}
    >
      {children}
    </Text>
  );
}
