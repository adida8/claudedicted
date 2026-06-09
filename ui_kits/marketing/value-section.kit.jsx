/* Marketing kit — "What you get" three-up sticker cards. */
const CL_VALUES = [
  {
    spark: true,
    title: "One build, every Sunday",
    body: "A real project taken from blank screen to working thing — with the messy middle left in.",
  },
  {
    spark: true,
    title: "The exact steps",
    body: "Copy the setup, the prompts, and the gotchas. No \"draw the rest of the owl.\"",
  },
  {
    spark: true,
    title: "Zero gatekeeping",
    body: "Total beginner or daily shipper — it's written so anyone can follow along and actually finish.",
  },
];

function ValueSection() {
  const { Card } = window.ClaudictedDesignSystem_62a20b;
  return (
    <section style={{ background: "var(--cream-200)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Eyebrow>What you get</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em", fontSize: "clamp(30px,4vw,46px)", color: "var(--ink-900)", margin: "10px 0 0" }}>
            A finished thing, not just inspiration.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="cl-value-grid">
          {CL_VALUES.map((v, i) => (
            <Card key={i} variant="sticker" hover>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--clay-100)", marginBottom: 16 }}>
                <Spark size={26} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--ink-900)", margin: "0 0 8px" }}>{v.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{v.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ValueSection });
