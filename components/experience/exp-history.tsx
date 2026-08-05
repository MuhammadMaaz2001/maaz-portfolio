import Link from "next/link"

const ROLES = [
  {
    slug: "bricketx-pk",
    current: true,
    date: "Apr 2026 — Present",
    title: "Full Stack Developer (MERN | Next.js)",
    company: "BricketX PK",
    desc: "Building scalable, SEO-optimized web applications using Next.js, React, TypeScript, PostgreSQL, and Supabase — with full ownership from database schema through to deployed, production-ready UI. This is where frontend and backend experience from earlier roles finally came together into one continuous practice.",
    tags: ["Next.js", "Supabase", "Prisma"],
    reveal: "",
  },
  {
    slug: "utf-labs",
    date: "Oct 2025 — Apr 2026",
    title: "Next.js & React Developer",
    company: "UTF-Labs",
    desc: "Shipped full-stack features with Next.js and React, integrating REST APIs and collaborating cross-functionally with backend and design in an Agile sprint cycle. My first role working within a structured sprint process end to end.",
    tags: ["Next.js", "React", "TypeScript"],
    reveal: "1",
  },
  {
    slug: "brb-group",
    date: "Aug 2024 — Oct 2025",
    title: "React Development",
    company: "BRB Group",
    desc: "Led frontend development for payroll, finance, and internal IT dashboard interfaces, improving day-to-day workflow efficiency by roughly 40% through better UI and data organization. A year-long engagement that sharpened how I think about dashboard usability specifically.",
    tags: ["React", "Dashboards"],
    reveal: "2",
  },
  {
    slug: "neuramatics",
    date: "Nov 2023 — Feb 2024",
    title: "Frontend Developer",
    company: "Neuramatics.Co.",
    desc: "Delivered 5+ React.js projects end to end and reduced bug reports by roughly 30% through more careful component testing and code review. This role is where component architecture and reusable UI patterns really started to click.",
    tags: ["React.js"],
    reveal: "3",
  },
  {
    slug: "dimensional-systems",
    date: "Aug 2023 — Nov 2023",
    title: "Frontend Support Developer",
    company: "Dimensional Sys, Inc.",
    desc: "Built interactive data visualizations with D3.js and reverse-engineered legacy front-end code to troubleshoot and resolve long-standing defects. Reading someone else's undocumented code taught me more about writing clear code than any tutorial had.",
    tags: ["React.js", "D3.js"],
    reveal: "4",
  },
  {
    slug: "coderatory",
    date: "Feb 2022 — Apr 2022",
    title: "Intern",
    company: "Coderatory",
    desc: "Learned Node.js and Express.js fundamentals from the ground up and built my first full-stack application backed by MongoDB — the starting point for everything since. A short internship, but the one that pointed my whole direction toward full-stack work.",
    tags: ["Node.js", "MongoDB"],
    reveal: "5",
  },
]

export default function ExpHistory() {
  return (
    <>
      <span className="section-tag" data-reveal="">
        Full History
      </span>
      <h2 data-reveal="" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", marginBottom: 24 }}>
        Every role, in detail
      </h2>

      <div className="exp-list">
        {ROLES.map((role) => (
          <Link className="exp-row" href={`/experience/${role.slug}`} data-reveal={role.reveal} key={role.slug}>
            <div className="exp-date">
              {role.current && <span className="current">Current</span>}
              {role.current && <br />}
              {role.date}
            </div>
            <div className="exp-role">
              <h3>{role.title}</h3>
              <div className="co">{role.company}</div>
              <p>{role.desc}</p>
            </div>
            <div className="exp-tags">
              {role.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
