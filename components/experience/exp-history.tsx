import Link from "next/link"

const ROLES = [
  {
    slug: "bricketx-pk",
    current: true,
    date: "Apr 2026 — Present",
    title: "Full Stack Developer (MERN | Next.js)",
    company: "BricketX PK",
    logo: "/images/bricketx_investments_logo.jpeg",
    desc: "Building scalable, SEO-optimized web applications using Next.js, React, TypeScript, PostgreSQL, and Supabase — with full ownership from database schema through to deployed, production-ready UI. This is where frontend and backend experience from earlier roles finally came together into one continuous practice.",
    tags: ["Next.js", "Supabase", "Prisma"],
    reveal: "",
  },
  {
    slug: "utf-labs",
    date: "Oct 2025 — Apr 2026",
    title: "Next.js & React Developer",
    company: "UTF-Labs",
    logo: "/images/utf-labs.jpeg",
    desc: "Shipped full-stack features with Next.js and React, integrating REST APIs and collaborating cross-functionally with backend and design in an Agile sprint cycle. My first role working within a structured sprint process end to end.",
    tags: ["Next.js", "React", "TypeScript"],
    reveal: "1",
  },
  {
    slug: "brb-group",
    date: "Aug 2024 — Oct 2025",
    title: "React Development",
    company: "BRB Group",
    logo: "/images/brb_developers_logo.jpeg",
    desc: "Led frontend development for payroll, finance, and internal IT dashboard interfaces, improving day-to-day workflow efficiency by roughly 40% through better UI and data organization. A year-long engagement that sharpened how I think about dashboard usability specifically.",
    tags: ["React", "Dashboards"],
    reveal: "2",
  },
  {
    slug: "neuramatics",
    date: "Nov 2023 — Feb 2024",
    title: "Frontend Developer",
    company: "Neuramatics.Co.",
    logo: "/images/neuramatics.jpeg",
    desc: "Delivered 5+ React.js projects end to end and reduced bug reports by roughly 30% through more careful component testing and code review. This role is where component architecture and reusable UI patterns really started to click.",
    tags: ["React.js"],
    reveal: "3",
  },
  {
    slug: "dimensional-systems",
    date: "Aug 2023 — Nov 2023",
    title: "Frontend Support Developer",
    company: "Dimensional Sys, Inc.",
    logo: "/images/dimensional_systems_logo.jpeg",
    desc: "Built interactive data visualizations with D3.js and reverse-engineered legacy front-end code to troubleshoot and resolve long-standing defects. Reading someone else's undocumented code taught me more about writing clear code than any tutorial had.",
    tags: ["React.js", "D3.js"],
    reveal: "4",
  },
  {
    slug: "coderatory",
    date: "Feb 2022 — Apr 2022",
    title: "Intern",
    company: "Coderatory",
    logo: "/images/coderatory_logo.jpeg",
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
      <h2 data-reveal="" className="mb-6 text-[clamp(1.4rem,2.6vw,1.9rem)]">
        Every role, in detail
      </h2>

      <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line">
        {ROLES.map((role) => (
          <Link
            className="grid grid-cols-1 gap-2.5 bg-ink-bg-2 p-7 transition-colors hover:bg-ink-bg-3 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-6"
            href={`/experience/${role.slug}`}
            data-reveal={role.reveal}
            key={role.slug}
          >
            <div className="text-[0.82rem] font-medium text-ink-muted">
              {role.current && (
                <span className="mb-1.5 inline-block rounded-full bg-ink-gold-soft px-2.5 py-1 font-display text-[0.68rem] font-bold text-ink-gold">
                  Current
                </span>
              )}
              {role.current && <br />}
              {role.date}
            </div>
            <div className="flex gap-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={role.logo}
                alt={`${role.company} logo`}
                className="h-10 w-10 flex-shrink-0 rounded-lg border border-ink-line bg-white object-contain p-1"
              />
              <div>
                <h3 className="mb-1 font-display text-[1.08rem] font-bold">{role.title}</h3>
                <div className="text-[0.88rem] font-semibold text-ink-gold">{role.company}</div>
                <p className="mt-2 max-w-[60ch] text-[0.86rem] text-ink-muted">{role.desc}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-end gap-1.5">
              {role.tags.map((tag) => (
                <span className="rounded-full border border-ink-line px-2.5 py-1 text-[0.7rem] text-ink-muted" key={tag}>
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
