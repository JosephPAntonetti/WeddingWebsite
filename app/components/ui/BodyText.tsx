import { Text, type TextProps } from "@mantine/core";
import { useToneColors } from "./tone";

interface BodyTextProps extends TextProps {
  children: React.ReactNode;
  /** Render at the larger "lede" size used directly under headings. */
  lede?: boolean;
}

/** Running copy: a serif paragraph with generous leading and a measure cap. */
export function BodyText({ children, lede = false, ...props }: BodyTextProps) {
  const colors = useToneColors();

  return (
    <Text
      fz={lede ? { base: 17, sm: 19 } : { base: 15, sm: 16 }}
      lh={1.85}
      c={colors.muted}
      maw={lede ? 620 : 560}
      m={0}
      {...props}
    >
      {children}
    </Text>
  );
}
