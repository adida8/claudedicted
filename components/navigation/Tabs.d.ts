import * as React from "react";

type TabItem = string | { id: string; label: React.ReactNode; count?: number };

/** Tab strip — underline (default) or pill. Controlled or uncontrolled. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Tabs as strings or {id,label,count}. */
  tabs: TabItem[];
  /** Controlled active id. */
  value?: string;
  /** Initial active id (uncontrolled). */
  defaultValue?: string;
  /** Fires with the selected id. */
  onChange?: (id: string) => void;
  /** `underline` (default) or `pill`. */
  variant?: "underline" | "pill";
}

export function Tabs(props: TabsProps): JSX.Element;
