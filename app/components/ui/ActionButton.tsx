import type { ReactNode } from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router";
import { useToneColors } from "./tone";

interface ActionButtonProps {
  children: ReactNode;
  /** Internal route. Takes precedence over `href`. */
  to?: string;
  /** External or hash link. */
  href?: string;
  type?: "button" | "submit";
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
  type = "button",
}: ActionButtonProps) {
  const colors = useToneColors();

  const shared = {
    className: "action",
    variant: "default" as const,
    radius: 0,
    h: 46,
    px: 34,
    fz: 11,
    fw: 500,
    tt: "uppercase" as const,
    lts: "0.28em",
    style: {
      "--action-fg": colors.text,
      "--action-bg": "transparent",
      "--action-border": colors.rule,
      "--action-hover-fg": colors.inverse,
      "--action-hover-bg": colors.text,
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
