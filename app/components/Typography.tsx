import type { CSSProperties, ReactNode } from "react";

type TypographyStyle = "header";

const styles: Record<TypographyStyle, CSSProperties> = {
  header: {
    fontFamily: "cursive",
    fontSize: "48px",
  },
};

interface TypographyProps {
  style: TypographyStyle;
  children: ReactNode;
}

export function Typography({ style, children }: TypographyProps) {
  return <span style={styles[style]}>{children}</span>;
}
