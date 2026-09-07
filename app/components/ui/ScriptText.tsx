import { Text, type TextProps } from "@mantine/core";
import { fonts } from "../../theme";
import { useToneColors } from "./tone";

interface ScriptTextProps extends TextProps {
  children: React.ReactNode;
}

/** Calligraphic accent line, used sparingly beneath or beside headings. */
export function ScriptText({ children, ...props }: ScriptTextProps) {
  const colors = useToneColors();

  return (
    <Text
      component="span"
      ff={fonts.script}
      fz={{ base: 34, sm: 44 }}
      lh={1.1}
      c={colors.text}
      m={0}
      {...props}
    >
      {children}
    </Text>
  );
}
