/* Marketing kit — top navigation bar. */
function Nav() {
  const { Button } = window.ClaudictedDesignSystem_62a20b;
  const [open, setOpen] = React.useState(false);
  const links = ["Build logs", "Videos", "About"];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "color-mix(in srgb, var(--cream-100) 88%, transparent)",
      backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1.5px solid var(--cream-300)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px",
        height: 72, display: "flex", alignItems: "center", gap: 24,
      }}>
        <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Wordmark size={26} />
        </a>
        <nav style={{ display: "flex", gap: 4, marginLeft: 12 }} className="cl-nav-links">
          {links.map((l) => (
            <a key={l} href="#" style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
              color: "var(--text-body)", textDecoration: "none", whiteSpace: "nowrap",
              padding: "8px 12px", borderRadius: "var(--radius-md)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream-200)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >{l}</a>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <Button variant="primary" size="sm" href="#subscribe">Subscribe</Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Nav });
