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
      <div className="edu-list" data-reveal="1">
        {EDUCATION.map((edu) => (
          <div className="edu-row" key={edu.title}>
            <div className="edu-date">{edu.date}</div>
            <div>
              <h3>{edu.title}</h3>
              <div className="inst">{edu.inst}</div>
              <p>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
