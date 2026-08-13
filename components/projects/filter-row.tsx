const FILTERS = ["All", "Dashboards", "AI Tools", "Full Stack"]

export default function FilterRow() {
  return (
    <>
      <div className="flex flex-wrap gap-2.5 pb-11" data-reveal="">
        {FILTERS.map((filter, i) => (
          <span
            className={`rounded-full border px-4 py-[7px] text-[0.8rem] font-semibold ${
              i === 0 ? "border-ink-gold bg-ink-gold text-[#161208]" : "border-ink-line text-ink-muted"
            }`}
            key={filter}
          >
            {filter}
          </span>
        ))}
      </div>
      <p className="-mt-6 mb-10 text-[0.85rem] text-ink-muted">
        Filter by category, or scroll through all nine below — six public with live demos or GitHub links, three
        NDA-restricted with a written case study only.
      </p>
    </>
  )
}
