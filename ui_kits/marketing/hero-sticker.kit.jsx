/* Hero direction A — "Sticker": warm split layout, mascot in an ink frame. */
function HeroSticker() {
  const { Button, Badge, Avatar } = window.ClaudictedDesignSystem_62a20b;
  return (
    <section style={{ background: "var(--cream-100)", position: "relative", overflow: "hidden" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 24px 84px",
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center",
      }} className="cl-hero-grid">
        {/* Copy */}
        <div>
          <Eyebrow style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Spark size={14} /> Build log #14 is live
          </Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.03em",
            fontSize: "clamp(40px, 5.4vw, 68px)", lineHeight: 1.02, color: "var(--ink-900)",
            margin: "16px 0 18px", textWrap: "balance",
          }}>
            You don't need permission to build.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "44ch", margin: "0 0 28px" }}>
            Just a weekend and a spark. <strong style={{ color: "var(--text-strong)" }}>Claudicted</strong> is
            one real project, built start to finish, every Sunday — plus the videos that show you exactly how.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <Button variant="primary" size="lg" href="#subscribe">Get the weekly build</Button>
            <Button variant="secondary" size="lg" href="#videos"
              iconRight={<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>}>
              Watch the channel
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {["Ada Lovelace","Sam Lee","Jo Park","Max R"].map((n, i) => (
                <span key={n} style={{ marginLeft: i ? -10 : 0, boxShadow: "0 0 0 2.5px var(--cream-100)", borderRadius: "50%" }}>
                  <Avatar name={n} size="sm" />
                </span>
              ))}
            </div>
            <span style={{ fontSize: 14.5, color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-strong)" }}>9,400+</strong> builders get it every week
            </span>
          </div>
        </div>

        {/* Mascot sticker */}
        <div style={{ position: "relative", justifySelf: "center" }}>
          <div style={{
            position: "absolute", inset: "-18px", borderRadius: "var(--radius-2xl)",
            background: "url('../../assets/halftone-clay.png')", backgroundSize: "110px",
            opacity: 0.5, zIndex: 0,
          }} />
          <div style={{
            position: "relative", zIndex: 1, width: "min(420px, 78vw)", aspectRatio: "1/1",
            borderRadius: "var(--radius-2xl)", overflow: "hidden",
            border: "3px solid var(--ink-900)", boxShadow: "var(--shadow-ink-lg)",
            background: "var(--cream-50)",
          }}>
            <img src="../../assets/mascot-placeholder.png" alt="Claudicted mascot — character art goes here"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          {/* floating sticker badge */}
          <div style={{
            position: "absolute", zIndex: 2, bottom: -14, left: -22, transform: "rotate(-5deg)",
            background: "var(--cream-50)", border: "2.5px solid var(--ink-900)",
            boxShadow: "var(--shadow-ink)", borderRadius: "var(--radius-lg)", padding: "10px 14px",
            display: "flex", alignItems: "center", gap: 9,
          }}>
            <Spark size={20} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--ink-900)" }}>
              Anyone can build this
            </span>
          </div>
          <div style={{ position: "absolute", zIndex: 2, top: -16, right: -10, transform: "rotate(7deg)" }}>
            <Badge variant="solid-clay" style={{ border: "2px solid var(--ink-900)", boxShadow: "var(--shadow-ink-sm)" }}>New episode</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { HeroSticker });
