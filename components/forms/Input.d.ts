import * as React from "react";

/**
 * Text input or textarea with label, hint/error, and optional leading icon.
 * @startingPoint section="Forms" subtitle="Labelled text field with icon, hint & error states" viewport="700x260"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text shown below when there's no error. */
  hint?: string;
  /** Error message — turns the field red and overrides the hint. */
  error?: string;
  /** Leading icon node (single-line only). */
  icon?: React.ReactNode;
  /** Render a multi-line textarea instead of an input. */
  multiline?: boolean;
  /** Show a required asterisk. */
  required?: boolean;
}

export function Input(props: InputProps): JSX.Element;
