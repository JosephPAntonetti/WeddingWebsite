import type { ReactNode } from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router";
import { useToneColors } from "./tone";

type Variant = "outline" | "solid";

interface ActionButtonProps {
  children: ReactNode;
  /** Internal route. Takes precedence over `href`. */
  to?: string;
  /** External or hash link. */
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  size?: "sm" | "md";
}

/**
 * The single button on the site: square corners, tracked capitals, and a fill
 * that inverts on hover. It reads the surrounding tone so the same call looks
 * right on ivory and on ink.
 */
export function ActionButton({
  children,
  to,
  href,
  variant = "outline",
  type = "button",
  size = "md",
}: ActionButtonProps) {
  const colors = useToneColors();
  const solid = variant === "solid";

  const shared = {
    className: "action",
    variant: "default" as const,
    radius: 0,
    h: size === "md" ? 46 : 38,
    px: size === "md" ? 34 : 24,
    fz: size === "md" ? 11 : 10,
    fw: 500,
    tt: "uppercase" as const,
    lts: "0.28em",
    style: {
      "--action-fg": solid ? colors.inverse : colors.text,
      "--action-bg": solid ? colors.text : "transparent",
      "--action-border": solid ? colors.text : colors.rule,
      "--action-hover-fg": solid ? colors.text : colors.inverse,
      "--action-hover-bg": solid ? "transparent" : colors.text,
    } as React.CSSProperties,
  };

  if (to) {
    return (
      <Button component={Link} to={to} {...shared}>
        {children}
      </Button>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <Button
        component="a"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...shared}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button type={type} {...shared}>
      {children}
    </Button>
  );
}
