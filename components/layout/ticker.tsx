const TICKER_ITEMS = [
  "Currently building at BricketX PK — Next.js & MERN",
  "15+ projects shipped across React, Next.js & FastAPI",
  "Open to full-time, freelance & remote roles",
  "6 certifications — React, Project Management, Agile & Scrum",
]

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
