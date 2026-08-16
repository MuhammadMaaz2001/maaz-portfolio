const SKILL_GROUPS = [
  { title: "Frontend", chips: ["React", "Next.js", "Vue 3", "Svelte", "TypeScript"] },
  { title: "Backend", chips: ["Node.js", "Express", "FastAPI", "Python"] },
  { title: "Database", chips: ["MongoDB", "PostgreSQL", "Supabase", "Prisma"] },
  { title: "Data Viz", chips: ["D3.js", "Recharts"] },
  { title: "Automation", chips: ["Zapier", "n8n", "Webhooks"] },
  { title: "Tools", chips: ["Git", "JIRA", "Agile", "MQTT"] },
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

const blockClass = "mb-4 rounded-[14px] border border-ink-line bg-ink-bg-2 p-[22px]"
const blockTitleClass = "mb-3.5 block font-mono text-[0.72rem] uppercase tracking-[0.07em] text-ink-gold"

export default function CvSidebar() {
  return (
    <aside data-reveal="1">
      <div className={blockClass}>
        <span className={blockTitleClass}>Skills</span>
        {SKILL_GROUPS.map((group) => (
          <div className="mb-3.5 last:mb-0" key={group.title}>
            <h4 className="mb-2 text-[0.78rem] font-semibold">{group.title}</h4>
            <div className="flex flex-wrap gap-1.5">
              {group.chips.map((chip) => (
                <span
                  className="rounded border border-ink-line px-2 py-[3px] font-mono text-[0.66rem] text-ink-muted"
                  key={chip}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={blockClass}>
        <span className={blockTitleClass}>Education</span>
        {EDUCATION.map((edu) => (
          <div className="mb-3.5 last:mb-0" key={edu.title}>
            <h4 className="mb-0.5 text-[0.86rem] font-bold">{edu.title}</h4>
            <div className="mb-0.5 text-[0.78rem] text-ink-gold">{edu.inst}</div>
            <div className="text-[0.74rem] text-ink-muted">{edu.meta}</div>
          </div>
        ))}
      </div>

      <div className={blockClass}>
        <span className={blockTitleClass}>Certifications</span>
        {CERTS.map((cert) => (
          <div className="mb-3.5 last:mb-0" key={cert.title}>
            <h4 className="mb-0.5 text-[0.86rem] font-bold">{cert.title}</h4>
            <div className="mb-0.5 text-[0.78rem] text-ink-gold">{cert.issuer}</div>
            <div className="text-[0.74rem] text-ink-muted">{cert.meta}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}
