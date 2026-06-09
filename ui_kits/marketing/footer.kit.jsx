/* Marketing kit — footer. */
function Footer() {
  const cols = [
    { h: "Claudicted", links: ["The weekly build", "Build logs", "Start here"] },
    { h: "Watch", links: ["YouTube", "AI apps", "Automations", "No-code"] },
    { h: "Say hi", links: ["Twitter / X", "Email", "RSS"] },
  ];
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--cream-300)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }} className="cl-footer-grid">
          <div>
            <Wordmark size={26} color="var(--cream-50)" onLight={false} />
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--cream-300)", maxWidth: "30ch", margin: "14px 0 0" }}>
              One real build, every Sunday. Anyone can build this — including you.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--clay-300)", margin: "0 0 14px" }}>{c.h}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 9 }}>
                {c.links.map((l) => (
                  <li key={l}><a href="#" style={{ color: "var(--cream-300)", textDecoration: "none", fontSize: 15 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clay-300)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-300)")}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1.5px solid var(--ink-700)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 13.5, color: "var(--ink-400)" }}>
          <span>© 2026 Claudicted. Made on a weekend.</span>
          <span style={{ display: "inline-flex", gap: 18 }}>
            <a href="#" style={{ color: "var(--ink-400)", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ color: "var(--ink-400)", textDecoration: "none" }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
