/* Claudicted marketing kit — shared brand bits. Attaches to window. */
const SPARK = "../../assets/spark.svg";

/** The wordmark with the spark as the i-dot. `size` is the font-size in px. */
function Wordmark({ size = 30, color = "var(--ink-900)", onLight = true }) {
  return (
    <span style={{
      fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.03em",
      color, lineHeight: 1, display: "inline-flex", alignItems: "baseline",
      fontSize: size, userSelect: "none", whiteSpace: "nowrap",
    }}>
      Claud<span style={{ position: "relative", display: "inline-block" }}>
        &#x131;
        <img src={SPARK} alt="" style={{
          position: "absolute", left: "50%", top: "-0.32em",
          width: "0.30em", height: "0.30em",
          transform: "translateX(-50%) rotate(-8deg)",
          filter: onLight ? "none" : "none",
        }} />
      </span>cted
    </span>
  );
}

/** Mono eyebrow label. */
function Eyebrow({ children, style }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 12,
      letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--brand-press)",
      ...style,
    }}>{children}</span>
  );
}

/** A standalone spark image. */
function Spark({ size = 18, style }) {
  return <img src={SPARK} alt="" style={{ width: size, height: size, ...style }} />;
}

Object.assign(window, { Wordmark, Eyebrow, Spark, CL_SPARK: SPARK });
