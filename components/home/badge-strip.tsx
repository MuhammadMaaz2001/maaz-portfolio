const BADGES = [
  "Clean Code",
  "SEO-Optimized",
  "Type-Safe",
  "Agile Delivery",
  "Responsive Design",
  "Production-Ready",
]

export default function BadgeStrip() {
  const items = [...BADGES, ...BADGES]

  return (
    <div className="badge-strip">
      <div className="badge-track">
        {items.map((item, i) => (
          <span key={i}>
            {item} <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
