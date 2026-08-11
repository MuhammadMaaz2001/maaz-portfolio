const SKILL_GROUPS = [
  { title: "Frontend", chips: ["React", "Next.js", "Vue 3", "Svelte", "TypeScript"] },
  { title: "Backend", chips: ["Node.js", "Express", "FastAPI", "Python"] },
  { title: "Database", chips: ["MongoDB", "PostgreSQL", "Supabase", "Prisma"] },
  { title: "Data Viz", chips: ["D3.js", "Recharts"] },
  { title: "Automation", chips: ["Zapier", "n8n", "Webhooks"] },
  { title: "Tools", chips: ["Git", "JIRA", "Agile"] },
]

const EDUCATION = [
  { title: "B.S. Software Engineering", inst: "SSUET", meta: "2020 – 2024 · GPA 3.16/4.0" },
  { title: "Pre-Engineering", inst: "Jinnah Govt. College", meta: "2018 – 2020" },
  { title: "High School (Computer Science)", inst: "Al Huda School", meta: "2018" },
]

const CERTS = [
  { title: "Frontend Developer (React)", issuer: "HackerRank", meta: "2025" },
  { title: "React JS", issuer: "Meta", meta: "2023" },
  { title: "Python Basics & DSA", issuer: "University of Michigan", meta: "2023" },
  { title: "Bootstrap 4", issuer: "HKUST", meta: "2023" },
  { title: "Agile & Scrum", issuer: "10 Pearls University", meta: "2024" },
  { title: "Agile Scrum with JIRA", issuer: "10 Pearls University", meta: "2024" },
  { title: "Project Management", issuer: "Great Learning", meta: "2024" },
]

export default function CvSidebar() {
  return (
    <aside className="cv-side" data-reveal="1">
      <div className="block">
        <span className="block-title">Skills</span>
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="chip-row">
              {group.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="block">
        <span className="block-title">Education</span>
        {EDUCATION.map((edu) => (
          <div className="edu-item" key={edu.title}>
            <h4>{edu.title}</h4>
            <div className="inst">{edu.inst}</div>
            <div className="meta">{edu.meta}</div>
          </div>
        ))}
      </div>

      <div className="block">
        <span className="block-title">Certifications</span>
        {CERTS.map((cert) => (
          <div className="cert-item" key={cert.title}>
            <h4>{cert.title}</h4>
            <div className="issuer">{cert.issuer}</div>
            <div className="meta">{cert.meta}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}
