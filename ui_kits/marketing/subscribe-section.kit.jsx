/* Marketing kit — clay subscribe band. */
function SubscribeSection() {
  const { NewsletterSignup } = window.ClaudictedDesignSystem_62a20b;
  return (
    <section id="subscribe" style={{ background: "var(--clay-500)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "url('../../assets/halftone-cream.png')", backgroundSize: "120px", opacity: 0.2 }} />
      <div style={{
        position: "relative", zIndex: 1, maxWidth: 980, margin: "0 auto", padding: "80px 24px",
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center",
      }} className="cl-sub-grid">
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream-100)", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Spark size={14} /> Join the build
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.025em", fontSize: "clamp(32px,4.4vw,52px)", lineHeight: 1.02, color: "var(--cream-50)", margin: "14px 0 0", textWrap: "balance" }}>
            Go break something.<br />Then ship it.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--clay-50)", maxWidth: "38ch", margin: "16px 0 0" }}>
            The weekly build lands every Sunday. See you next drop.
          </p>
        </div>
        <div style={{
          background: "var(--cream-50)", borderRadius: "var(--radius-xl)", padding: 26,
          border: "2.5px solid var(--ink-900)", boxShadow: "var(--shadow-ink-lg)",
        }}>
          <NewsletterSignup
            surface="card"
            eyebrow={null}
            title="One build. Every Sunday."
            subtitle="No spam, ever. Unsubscribe in one click."
            cta="Get the weekly build"
            note="Free forever."
          />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { SubscribeSection });
