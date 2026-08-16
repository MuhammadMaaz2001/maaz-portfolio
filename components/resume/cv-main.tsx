import Link from "next/link"

const EXPERIENCE = [
  {
    title: "Full Stack Developer (MERN | Next.js)",
    dates: "Apr 2026 — Present",
    co: "BricketX PK",
    coHref: "https://bricketx.com",
    logo: "/images/bricketx_investments_logo.jpeg",
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
    logo: "/images/utf-labs.jpeg",
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
    logo: "/images/brb_developers_logo.jpeg",
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
    logo: "/images/neuramatics.jpeg",
    bullets: ["Built responsive React landing pages and dashboard interfaces with charts and graphs at an early-stage startup."],
    href: "/experience/neuramatics",
  },
  {
    title: "Frontend Support Developer",
    dates: "Aug 2023 — Nov 2023",
    co: "Dimensional Sys, Inc.",
    logo: "/images/dimensional_systems_logo.jpeg",
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
    logo: "/images/coderatory_logo.jpeg",
    bullets: ["First internship — learned JavaScript fundamentals, built first CRUD APIs with MongoDB, and got early exposure to HTML/CSS/React."],
    href: "/experience/coderatory",
  },
]

export default function CvMain() {
  return (
    <div data-reveal="2">
      <div className="mb-10">
        <h2 className="mb-4 flex items-center gap-2.5 text-[1.15rem] after:h-px after:flex-1 after:bg-ink-line after:content-['']">
          Summary
        </h2>
        <p className="max-w-[75ch] text-[0.95rem] text-ink-muted">
          Full Stack Developer with 2 years of experience across the MERN stack, Next.js, and FastAPI. My work has
          consistently extended past typical development — into product structuring, business process automation,
          and AI-powered interfaces. Currently at BricketX PK, where I&apos;ve taken ownership of database
          infrastructure, automation workflows, and cross-functional project planning for an investment platform
          built from zero initial requirements. Backed by published NLP research (Urdu paraphrasing via mT5) from my
          Final Year Project, and hands-on experience across React, Vue, Node.js, and Python backends. Karachi-based,
          open to full-time, hybrid, or remote roles.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-4 flex items-center gap-2.5 text-[1.15rem] after:h-px after:flex-1 after:bg-ink-line after:content-['']">
          Experience
        </h2>
        {EXPERIENCE.map((exp) => (
          <div className="mb-[26px] border-b border-ink-line pb-[26px] last:mb-0 last:border-b-0 last:pb-0" key={exp.title + exp.dates}>
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-[1.02rem] font-bold">{exp.title}</h3>
              <span className="whitespace-nowrap font-mono text-[0.76rem] text-ink-muted">{exp.dates}</span>
            </div>
            <div className="mb-2.5 flex items-center gap-2">
              {exp.logo && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={exp.logo} alt={`${exp.co} logo`} className="h-6 w-6 flex-shrink-0 rounded object-contain" />
              )}
              <span className="text-[0.86rem] font-semibold text-ink-gold">
                {exp.coHref ? (
                  <a href={exp.coHref} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                    {exp.co}
                  </a>
                ) : (
                  exp.co
                )}
              </span>
            </div>
            <ul className="mb-0">
              {exp.bullets.map((bullet) => (
                <li className="relative mb-1.5 max-w-[70ch] pl-4 text-[0.87rem] text-ink-muted before:absolute before:left-0 before:text-ink-gold before:content-['—']" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link href={exp.href} className="mt-1.5 inline-block text-[0.8rem] font-semibold text-ink-gold">
              Full details →
            </Link>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <h2 className="mb-4 flex items-center gap-2.5 text-[1.15rem] after:h-px after:flex-1 after:bg-ink-line after:content-['']">
          Publications
        </h2>
        <div className="rounded-xl border border-ink-line bg-ink-bg-2 p-[20px_22px]">
          <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-ink-gold">
            FigShare · Final Year Project
          </div>
          <h3 className="mb-2 font-display text-[0.98rem] font-bold">
            Training a Large Corpus Urdu Dataset for Paraphrasing on mT5 Conditional Generation
          </h3>
          <p className="mb-2.5 text-[0.86rem] text-ink-muted">
            Published July 2024. Frontend built in Svelte, backend in FastAPI, with an mT5 model trained in Python —
            later became the Urdu Ibdaa project.
          </p>
          <a
            href="https://figshare.com/articles/preprint/Training_a_Large_Corpus_Urdu_Dataset_For_Paraphrasing_on_MT5_Conditional_Generation/26318086"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.84rem] font-semibold text-ink-gold"
          >
            Read the publication →
          </a>
        </div>
      </div>
    </div>
  )
}
