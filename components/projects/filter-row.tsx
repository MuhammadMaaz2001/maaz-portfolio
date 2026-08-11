const FILTERS = ["All", "Dashboards", "AI Tools", "Full Stack"]

export default function FilterRow() {
  return (
    <>
      <div className="filter-row" data-reveal="">
        {FILTERS.map((filter, i) => (
          <span className={`filter-pill${i === 0 ? " active" : ""}`} key={filter}>
            {filter}
          </span>
        ))}
      </div>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: "-24px 0 40px" }}>
        Filter by category, or scroll through all nine below — six public with live demos or GitHub links, three
        NDA-restricted with a written case study only.
      </p>
    </>
  )
}
