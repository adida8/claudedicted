import * as React from "react";

/**
 * Email capture — the brand's primary conversion unit.
 * @startingPoint section="Content" subtitle="Newsletter email-capture block" viewport="700x320"
 */
export interface NewsletterSignupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono eyebrow label. */
  eyebrow?: string;
  /** Headline. */
  title?: string;
  /** Supporting line. */
  subtitle?: string;
  /** Email input placeholder. */
  placeholder?: string;
  /** Button label. */
  cta?: string;
  /** Fine-print note under the form. */
  note?: string;
  /** Background it sits on — adapts text colors. `card` (default), `clay`, `ink`. */
  surface?: "card" | "clay" | "ink";
  /** Submit handler (preventDefault is already called). */
  onSubmit?: (e: React.FormEvent) => void;
}

export function NewsletterSignup(props: NewsletterSignupProps): JSX.Element;
