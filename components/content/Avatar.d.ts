import * as React from "react";

/** Round avatar — image or auto-generated initials, with optional ring/spark. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Omit to render initials from `name`. */
  src?: string;
  /** Full name — used for initials and the title tooltip. */
  name?: string;
  /** Size. Default `md`. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Optional outer ring: `clay` or `ink`. */
  ring?: "clay" | "ink";
  /** Show a small spark badge top-right. */
  spark?: boolean;
  /** Path to the spark SVG (default `assets/spark.svg`). */
  sparkSrc?: string;
}

export function Avatar(props: AvatarProps): JSX.Element;
