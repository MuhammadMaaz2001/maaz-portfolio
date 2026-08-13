const CERTS = [
  {
    issuer: "HackerRank",
    title: "Frontend Developer (React)",
    desc: "Issued 2025 · Skill certificate covering React.js proficiency",
    reveal: "1",
  },
  {
    issuer: "Meta",
    title: "React JS",
    desc: "Issued 2023 · Official Meta certification in React fundamentals",
    reveal: "2",
  },
  {
    issuer: "University of Michigan",
    title: "Python Basics & Python DSA",
    desc: "Issued 2023 · Python fundamentals and data structures & algorithms",
    reveal: "3",
  },
  {
    issuer: "The Hong Kong University of Science & Technology",
    title: "Front-End Web UI Frameworks & Tools: Bootstrap 4",
    desc: "Issued 2023 · Responsive front-end frameworks and UI tooling",
    reveal: "4",
  },
  {
    issuer: "10 Pearls University",
    title: "Agile & Scrum",
    desc: "Issued 2024 · Agile methodology and Scrum framework fundamentals",
    reveal: "5",
  },
  {
    issuer: "10 Pearls University",
    title: "Managing Agile Scrum Projects with JIRA",
    desc: "Issued 2024 · Applied Agile project management using JIRA",
    reveal: "6",
  },
  {
    issuer: "Great Learning",
    title: "Project Management",
    desc: "Issued June 2024 · Project planning and management fundamentals",
    reveal: "7",
  },
]

export default function Certifications() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        Credentials
      </span>
      <h2 data-reveal="">Certifications</h2>
      <p className="section-sub" data-reveal="1">
        Alongside hands-on project work, I&apos;ve picked up formal certifications where they&apos;ve filled a real
        gap — technical skill validation and, deliberately, project management, since shipping software well is as
        much about process as it is about code.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((cert) => (
          <div
            className="rounded-2xl border border-ink-line bg-ink-bg-2 p-[26px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
            data-reveal={cert.reveal}
            key={cert.title}
          >
            <div className="mb-3 font-display text-[0.72rem] uppercase tracking-[0.06em] text-ink-gold">
              {cert.issuer}
            </div>
            <h3 className="mb-2 font-display text-[1rem] font-bold">{cert.title}</h3>
            <p className="text-[0.85rem] text-ink-muted">{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
