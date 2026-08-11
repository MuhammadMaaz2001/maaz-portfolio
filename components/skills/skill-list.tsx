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
    <div className="skill-list">
      {SKILLS.map((skill) => (
        <div className="skill-card" data-reveal={skill.reveal} key={skill.title}>
          <div className="skill-head">
            <h3>{skill.title}</h3>
            <span className="skill-level">{skill.level}</span>
          </div>
          <p>{skill.desc}</p>
          <div className="chip-row">
            {skill.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          {skill.links && <div className="skill-links">{skill.links}</div>}
        </div>
      ))}
    </div>
  )
}
