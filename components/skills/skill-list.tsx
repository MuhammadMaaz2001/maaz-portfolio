import Link from "next/link"

const SKILLS: {
  title: string
  level: string
  desc: string
  chips: string[]
  links?: React.ReactNode
  reveal: string
}[] = [
  {
    title: "Frontend Engineering",
    level: "Primary",
    desc: "The layer I spend the most time in. React and Next.js are my default choice for anything production-facing, with TypeScript for anything beyond a quick prototype. Vue 3 and Svelte come up when a project — or a client — already has a preference for them.",
    chips: ["React.js", "Next.js", "Vue 3", "Svelte.js", "TypeScript", "Tailwind CSS"],
    links: (
      <>
        Used across nearly every project — see <Link href="/projects">Projects</Link>
      </>
    ),
    reveal: "",
  },
  {
    title: "Backend & API Engineering",
    level: "Primary",
    desc: "Node.js and Express for most REST APIs; FastAPI when a project needs Python specifically — usually because it's talking to a machine learning model, as with the mT5 paraphrasing service behind Urdu Ibdaa.",
    chips: ["Node.js", "Express.js", "FastAPI", "Python"],
    links: (
      <>
        See <Link href="/projects/urdu-ibdaa">Urdu Ibdaa</Link> and <Link href="/projects/konnect-it">Konnect-It</Link>
      </>
    ),
    reveal: "1",
  },
  {
    title: "Database & Data Modeling",
    level: "Strong",
    desc: "MongoDB with Mongoose for most MERN work; PostgreSQL via Prisma when a project needs relational data and stronger type safety at the query layer. Supabase as a backend-as-a-service layer for faster setup on newer projects, as with the current work at BricketX PK.",
    chips: ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Mongoose"],
    links: (
      <>
        See <Link href="/experience/bricketx-pk">BricketX PK</Link>
      </>
    ),
    reveal: "2",
  },
  {
    title: "Data Visualization",
    level: "Strong",
    desc: "D3.js for fully custom charts where off-the-shelf libraries fall short, Recharts when a faster, well-tested solution is the better call. This is the skill set behind every dashboard project I've built.",
    chips: ["D3.js", "Recharts"],
    links: (
      <>
        See <Link href="/projects/meta-ads-campaign-dashboard">Meta Ads Campaign Dashboard</Link>
      </>
    ),
    reveal: "3",
  },
  {
    title: "Automation & Integrations",
    level: "Working",
    desc: "Workflow automation with n8n and Zapier — connecting APIs, triggering actions across tools, and cutting out repetitive manual steps without needing a full custom backend for every integration.",
    chips: ["n8n", "Zapier", "API Integrations"],
    reveal: "4",
  },
  {
    title: "Tools, Process & Research",
    level: "Working",
    desc: "Git for version control on every project without exception; JIRA and Agile/Scrum for how I actually work day to day across teams. Research & Development and reverse engineering come from time spent both on my FYP research and untangling legacy codebases at Dimensional Sys.",
    chips: ["Git / GitHub", "JIRA", "Agile & Scrum", "Research & Development", "Reverse Engineering"],
    links: (
      <>
        See <Link href="/about">Published Research</Link> and <Link href="/experience/dimensional-systems">Dimensional Sys</Link>
      </>
    ),
    reveal: "5",
  },
]

export default function SkillList() {
  return (
    <div className="flex flex-col gap-5">
      {SKILLS.map((skill) => (
        <div
          className="rounded-2xl border border-ink-line bg-ink-bg-2 p-9 transition-colors duration-200 hover:border-ink-gold"
          data-reveal={skill.reveal}
          key={skill.title}
        >
          <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-[1.2rem] font-bold">{skill.title}</h3>
            <span className="font-body text-[0.78rem] font-semibold text-ink-gold">{skill.level}</span>
          </div>
          <p className="mb-[18px] max-w-[75ch] text-[0.94rem] text-ink-muted">{skill.desc}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {skill.chips.map((chip) => (
              <span className="rounded-full border border-ink-line bg-ink-bg-3 px-3.5 py-1.5 text-[0.78rem] text-ink-text" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          {skill.links && (
            <div className="text-[0.85rem] text-ink-muted [&_a]:font-semibold [&_a]:text-ink-gold [&_a:hover]:opacity-80">
              {skill.links}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
