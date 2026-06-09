import * as React from "react";

/**
 * YouTube-style video card — the channel's signature content unit.
 * @startingPoint section="Content" subtitle="Video thumbnail card with play, duration & meta" viewport="700x340"
 */
export interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Thumbnail image URL. Omit for a clay halftone fallback. */
  thumb?: string;
  /** Video title. */
  title: string;
  /** Duration string, e.g. "12:04". */
  duration?: string;
  /** Meta line, e.g. "8.2K views · 3 days ago". */
  meta?: string;
  /** Show halftone dots on the fallback. Default true. */
  sparkDots?: boolean;
}

export function VideoCard(props: VideoCardProps): JSX.Element;
