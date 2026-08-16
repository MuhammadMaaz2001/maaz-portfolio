const STATS = [
  { num: "6", label: "Roles held across full-time, contract, and internship positions" },
  { num: "2+", label: "Years of combined professional experience" },
  { num: "12+", label: "Technologies used in production across those roles" },
]

export default function MiniStats() {
  return (
    <>
      <div className="mini-stats" data-reveal="1">
        {STATS.map((stat) => (
          <div className="mini-stat" key={stat.label}>
            <div className="num">{stat.num}</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[0.85rem] text-ink-muted">
        Every role links to the specific projects built during it — where visible, you&apos;ll find the actual code
        and live demos linked from that experience page.
      </p>
    </>
  )
}
