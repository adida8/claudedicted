import * as React from "react";

/**
 * Generic surface card. `sticker` is the signature ink-outline + offset look.
 * @startingPoint section="Core" subtitle="Surface card — plain, sticker, clay, or ink" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `plain` (default), `sticker` (ink outline + offset), `clay`, `ink`. */
  variant?: "plain" | "sticker" | "clay" | "ink";
  /** Apply default internal padding. Default true. */
  padded?: boolean;
  /** Lift on hover. */
  hover?: boolean;
}

export function Card(props: CardProps): JSX.Element;
