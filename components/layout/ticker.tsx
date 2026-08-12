const TICKER_ITEMS = [
  "Currently building at BricketX PK — Next.js & MERN",
  "15+ projects shipped across React, Next.js & FastAPI",
  "Open to full-time, freelance & remote roles",
  "6 certifications — React, Project Management, Agile & Scrum",
]

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="overflow-hidden whitespace-nowrap bg-ink-gold py-[9px] font-body text-[0.72rem] font-semibold text-[#161208] sm:text-[0.8rem] motion-reduce:overflow-visible">
      <div className="inline-flex animate-marquee motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 px-4 after:ml-4 after:text-[#161208]/50 after:content-['•'] sm:px-[22px] sm:after:ml-[22px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
