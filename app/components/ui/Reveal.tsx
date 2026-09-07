import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box } from "@mantine/core";

interface RevealProps {
  children: ReactNode;
  /** Stagger, in milliseconds, before this element fades in. */
  delay?: number;
  w?: string | number;
}

/**
 * Fades and lifts its children the first time they scroll into view. The
 * animation itself lives in `global.css` so it can be disabled wholesale for
 * visitors who prefer reduced motion.
 */
export function Reveal({ children, delay = 0, w = "100%" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      className="reveal"
      data-visible={visible}
      w={w}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Box>
  );
}
