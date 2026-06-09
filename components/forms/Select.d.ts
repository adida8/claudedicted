import * as React from "react";

/** Styled native select with chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label above the control. */
  label?: string;
  /** Options as strings or {label,value}. Alternatively pass <option> children. */
  options?: Array<string | { label: string; value: string }>;
}

export function Select(props: SelectProps): JSX.Element;
