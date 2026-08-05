import Link from "next/link"

const EXPERIENCE = [
  {
    slug: "bricketx-pk",
    date: "Apr 2026 — Present",
    title: "Full Stack Developer (MERN | Next.js)",
    company: "BricketX PK",
    tags: ["Next.js", "Supabase"],
    reveal: "",
  },
  {
    slug: "utf-labs",
    date: "Oct 2025 — Apr 2026",
    title: "Next.js & React Developer",
    company: "UTF-Labs",
    tags: ["Next.js", "React"],
    reveal: "1",
  },
  {
    slug: "brb-group",
    date: "Aug 2024 — Oct 2025",
    title: "React Development",
    company: "BRB Group",
    tags: ["React", "Dashboards"],
    reveal: "2",
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head" data-reveal="">
          <div>
            <span className="section-tag">Career</span>
            <h2>Experience</h2>
          </div>
          <Link href="/experience" className="see-all">
            Full history →
          </Link>
        </div>
        <p className="section-sub" data-reveal="">
          Six roles across full-time, contract, and internship positions — each one adding a different layer of
          full-stack capability, from early backend fundamentals to end-to-end ownership of production applications.
        </p>

        <div className="exp-list">
          {EXPERIENCE.map((exp) => (
            <Link className="exp-row" href={`/experience/${exp.slug}`} data-reveal={exp.reveal} key={exp.slug}>
              <div className="exp-date">{exp.date}</div>
              <div className="exp-role">
                <h3>{exp.title}</h3>
                <div className="co">{exp.company}</div>
              </div>
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
