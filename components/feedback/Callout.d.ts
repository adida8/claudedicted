import * as React from "react";

/** Inline note box for tips, notes, and warnings. */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `tip` (clay, default), `note` (pine), `warning` (honey). */
  variant?: "tip" | "note" | "warning";
  /** Optional bold title line. */
  title?: string;
  /** Override the default icon node. */
  icon?: React.ReactNode;
}

export function Callout(props: CalloutProps): JSX.Element;
