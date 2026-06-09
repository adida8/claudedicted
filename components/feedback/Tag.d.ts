import * as React from "react";

/** Mono category chip, optionally clickable/active or removable. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Prefix with a clay `#`. */
  hash?: boolean;
  /** Active (filled ink) state — for filter chips. */
  active?: boolean;
  /** When set, renders a remove (×) button and calls this on click. */
  onRemove?: (e: React.MouseEvent) => void;
}

export function Tag(props: TagProps): JSX.Element;
