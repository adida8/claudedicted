import * as React from "react";

/** Checkbox with label and a springy clay check. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text (or pass children). */
  label?: React.ReactNode;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
