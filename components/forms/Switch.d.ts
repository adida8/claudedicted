import * as React from "react";

/** On/off toggle switch, clay when on. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text (or pass children). */
  label?: React.ReactNode;
}

export function Switch(props: SwitchProps): JSX.Element;
