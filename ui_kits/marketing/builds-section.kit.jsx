/* Marketing kit — "Latest builds" video grid with filter tabs. */
const CL_VIDEOS = [
  { title: "I built a CRM in a weekend (no code)", duration: "12:04", meta: "8.2K views · 3 days ago", cat: "nocode", thumb: true },
  { title: "The 5-minute automation that saved my week", duration: "5:31", meta: "14K views · 1 week ago", cat: "auto" },
  { title: "Shipping an AI app with zero backend", duration: "18:47", meta: "22K views · 2 weeks ago", cat: "ai", thumb: true },
  { title: "I let AI redesign my whole site. Here's what broke.", duration: "9:12", meta: "11K views · 3 weeks ago", cat: "ai" },
  { title: "From spreadsheet to real app in one sitting", duration: "15:20", meta: "6.9K views · 1 month ago", cat: "nocode", thumb: true },
  { title: "My exact weekend-build setup (steal it)", duration: "7:48", meta: "31K views · 1 month ago", cat: "auto" },
];

function BuildsSection() {
  const { VideoCard, Tabs, Button } = window.ClaudictedDesignSystem_62a20b;
  const [filter, setFilter] = React.useState("all");
  const shown = filter === "all" ? CL_VIDEOS : CL_VIDEOS.filter((v) => v.cat === filter);
  const count = (c) => CL_VIDEOS.filter((v) => v.cat === c).length;
  return (
    <section id="videos" style={{ background: "var(--cream-100)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 28 }}>
          <div>
            <Eyebrow style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Spark size={14} /> Watch how it's made</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em", fontSize: "clamp(30px,4vw,46px)", color: "var(--ink-900)", margin: "10px 0 0" }}>
              Latest builds
            </h2>
          </div>
          <div style={{ paddingBottom: 4 }}>
            <Tabs variant="pill" value={filter} onChange={setFilter} tabs={[
              { id: "all", label: "All", count: CL_VIDEOS.length },
              { id: "ai", label: "AI apps", count: count("ai") },
              { id: "auto", label: "Automations", count: count("auto") },
              { id: "nocode", label: "No-code", count: count("nocode") },
            ]} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px 24px" }} className="cl-video-grid">
          {shown.map((v) => (
            <VideoCard key={v.title} title={v.title} duration={v.duration} meta={v.meta}
              thumb={v.thumb ? "../../assets/mascot-placeholder.png" : undefined} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Button variant="secondary" size="lg" href="#">Browse the whole channel</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { BuildsSection });
