import * as React from "react";

/**
 * Claudicted Button — the primary call-to-action primitive.
 *
 * @startingPoint section="Core" subtitle="Pill button with the signature ink-sticker secondary" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label / contents. */
  children?: React.ReactNode;
  /**
   * Visual style.
   * - `primary`   clay fill (default)
   * - `secondary` ink-outline sticker with hard offset shadow (signature)
   * - `pine`      pine-green accent — reserve for watch/subscribe moments
   * - `ghost`     quiet text button
   */
  variant?: "primary" | "secondary" | "pine" | "ghost";
  /** Size. Default `md`. */
  size?: "sm" | "md" | "lg";
  /** Optional leading icon node (e.g. a Lucide SVG). */
  icon?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  /** Full-width. */
  block?: boolean;
  /** Disabled. */
  disabled?: boolean;
  /** Render as an anchor when set. */
  href?: string;
}

export function Button(props: ButtonProps): JSX.Element;
