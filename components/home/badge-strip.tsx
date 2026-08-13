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
    <div className="overflow-hidden whitespace-nowrap border-y border-ink-line py-[26px]">
      <div className="inline-flex animate-marquee-slow motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 px-7 font-display text-base font-semibold text-ink-muted"
          >
            {item} <span className="text-ink-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
