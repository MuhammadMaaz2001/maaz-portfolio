const EDUCATION = [
  {
    date: "Oct 2020 — 2024",
    title: "Bachelor of Science, Software Engineering",
    inst: "Sir Syed University of Engineering & Technology (SSUET)",
    desc: "GPA: 3.16/4.0 · Focus areas included software development methodologies, algorithms, and system design.",
  },
  {
    date: "Sep 2018 — Jun 2020",
    title: "Intermediate, Pre-Engineering",
    inst: "Jinnah Govt College",
    desc: "Mathematics, Physics, and Chemistry with engineering fundamentals.",
  },
  {
    date: "2018",
    title: "High School, Computer Science",
    inst: "Al Huda School",
    desc: "Introduction to programming concepts and computer science principles — where it all started.",
  },
]

export default function Education() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        Background
      </span>
      <h2 data-reveal="">Education</h2>
      <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line" data-reveal="1">
        {EDUCATION.map((edu) => (
          <div className="grid grid-cols-1 gap-2 bg-ink-bg-2 p-7 sm:grid-cols-[170px_1fr] sm:items-start sm:gap-6 sm:px-8 sm:py-7" key={edu.title}>
            <div className="text-[0.82rem] font-medium text-ink-muted">{edu.date}</div>
            <div>
              <h3 className="mb-1 font-display text-[1.05rem] font-bold">{edu.title}</h3>
              <div className="mb-2 text-[0.88rem] font-semibold text-ink-gold">{edu.inst}</div>
              <p className="max-w-[60ch] text-[0.88rem] text-ink-muted">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
