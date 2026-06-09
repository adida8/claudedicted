import * as React from "react";

/** Icon-only button. Always supply an `aria-label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (e.g. a Lucide SVG). */
  children?: React.ReactNode;
  /** `ghost` (default), `soft` (clay tint), `sticker` (ink outline). */
  variant?: "ghost" | "soft" | "sticker";
  /** Size. Default `md`. */
  size?: "sm" | "md" | "lg";
  /** Accessible label — required since there's no text. */
  "aria-label": string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
