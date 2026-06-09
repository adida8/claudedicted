import * as React from "react";

/** Small status / category pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Soft tints: `clay|pine|honey|berry|neutral`; solids: `solid-clay|solid-pine|solid-ink`. */
  variant?: "clay" | "pine" | "honey" | "berry" | "neutral" | "solid-clay" | "solid-pine" | "solid-ink";
  /** Mono uppercase style for meta labels. */
  mono?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
