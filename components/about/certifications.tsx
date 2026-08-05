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
      <div className="cert-grid">
        {CERTS.map((cert) => (
          <div className="cert-card" data-reveal={cert.reveal} key={cert.title}>
            <div className="cert-issuer">{cert.issuer}</div>
            <h3>{cert.title}</h3>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
