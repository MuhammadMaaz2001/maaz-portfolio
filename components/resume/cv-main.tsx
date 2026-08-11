import Link from "next/link"

const EXPERIENCE = [
  {
    title: "Full Stack Developer (MERN | Next.js)",
    dates: "Apr 2026 — Present",
    co: "BricketX PK",
    coHref: "https://bricketx.com",
    bullets: [
      "Implemented Supabase as core database infrastructure after joining a project with no BRD or data model.",
      "Owned full project implementation end to end — system design, architecture, workflow planning, and development, functioning as both lead developer and project manager.",
      "Built a Zapier-based automation closing a transaction-visibility gap, including RFID/QR generation and a new investor + admin portal.",
      "Automated lead data delivery to the marketing team via webhook integration.",
    ],
    href: "/experience/bricketx-pk",
  },
  {
    title: "Next.js & React Developer",
    dates: "Oct 2025 — Apr 2026",
    co: "UTF-Labs",
    coHref: "https://www.utf-labs.com/",
    bullets: [
      "Professionally learned backend development — built Node.js/Express APIs with MongoDB and PostgreSQL.",
      "Built MQTT-based pub/sub APIs integrating with an embedded systems team.",
      "Owned full-stack on a Next.js project; managed servers with PM2 and implemented MediaMTX live streaming.",
      "Migrated projects across Next.js and Prisma versions; used Redis for caching.",
    ],
    href: "/experience/utf-labs",
  },
  {
    title: "React Development",
    dates: "Aug 2024 — Oct 2025",
    co: "BRB Group",
    bullets: [
      "Led frontend for payroll, document, and finance interfaces, plus HR automation (JD builder, leave-approval flow, attendance tracking).",
      "Built an IT & inventory management system with ticketing, IP tracking, live device tracking, and two AI bots (IT Assistant + Agent).",
      "Built AI-powered marketing automation (blog generation, social posting) and a company-wide file management system with RBAC.",
    ],
    href: "/experience/brb-group",
  },
  {
    title: "Frontend Developer",
    dates: "Nov 2023 — Feb 2024",
    co: "Neuramatics.Co.",
    bullets: ["Built responsive React landing pages and dashboard interfaces with charts and graphs at an early-stage startup."],
    href: "/experience/neuramatics",
  },
  {
    title: "Frontend Support Developer",
    dates: "Aug 2023 — Nov 2023",
    co: "Dimensional Sys, Inc.",
    bullets: [
      "Learned React and Vue on real fintech dashboard projects centered on stock-market data.",
      "Migrated a legacy PHP project to Vue and upgraded an existing Vue project to a newer version.",
    ],
    href: "/experience/dimensional-systems",
  },
  {
    title: "Intern",
    dates: "Feb 2022 — Apr 2022",
    co: "Coderatory",
    bullets: ["First internship — learned JavaScript fundamentals, built first CRUD APIs with MongoDB, and got early exposure to HTML/CSS/React."],
    href: "/experience/coderatory",
  },
]

export default function CvMain() {
  return (
    <div className="cv-main" data-reveal="2">
      <section className="summary">
        <h2>Summary</h2>
        <p>
          Full Stack Developer with 2 years of experience across the MERN stack, Next.js, and FastAPI. My work has
          consistently extended past typical development — into product structuring, business process automation,
          and AI-powered interfaces. Currently at BricketX PK, where I&apos;ve taken ownership of database
          infrastructure, automation workflows, and cross-functional project planning for an investment platform
          built from zero initial requirements. Backed by published NLP research (Urdu paraphrasing via mT5) from my
          Final Year Project, and hands-on experience across React, Vue, Node.js, and Python backends. Karachi-based,
          open to full-time, hybrid, or remote roles.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        {EXPERIENCE.map((exp) => (
          <div className="exp-entry" key={exp.title + exp.dates}>
            <div className="exp-top">
              <h3>{exp.title}</h3>
              <span className="dates">{exp.dates}</span>
            </div>
            <div className="co">
              {exp.coHref ? (
                <a href={exp.coHref} target="_blank" rel="noopener noreferrer">
                  {exp.co}
                </a>
              ) : (
                exp.co
              )}
            </div>
            <ul>
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <Link href={exp.href} className="exp-more">
              Full details →
            </Link>
          </div>
        ))}
      </section>

      <section>
        <h2>Publications</h2>
        <div className="pub-card">
          <div className="issuer">FigShare · Final Year Project</div>
          <h3>Training a Large Corpus Urdu Dataset for Paraphrasing on mT5 Conditional Generation</h3>
          <p>
            Published July 2024. Frontend built in Svelte, backend in FastAPI, with an mT5 model trained in Python —
            later became the Urdu Ibdaa project.
          </p>
          <a
            href="https://figshare.com/articles/preprint/Training_a_Large_Corpus_Urdu_Dataset_For_Paraphrasing_on_MT5_Conditional_Generation/26318086"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the publication →
          </a>
        </div>
      </section>
    </div>
  )
}
