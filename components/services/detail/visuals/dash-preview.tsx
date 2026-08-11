const BARS = [40, 65, 45, 85, 55, 70, 60]

export default function DashPreview() {
  return (
    <>
      <div className="dash-grid">
        <div className="dash-card">
          <div className="k">Impressions</div>
          <div className="v">128K</div>
        </div>
        <div className="dash-card">
          <div className="k">CTR</div>
          <div className="v">4.2%</div>
        </div>
      </div>
      <div className="dash-bars">
        {BARS.map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${(i + 1) * 0.1}s` }} />
        ))}
      </div>
    </>
  )
}
