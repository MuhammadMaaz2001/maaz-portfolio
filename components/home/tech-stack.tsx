const STACK = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue 3", "SvelteKit", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Prisma"],
  },
  {
    title: "Data & Tools",
    items: ["MongoDB", "PostgreSQL", "D3.js", "Recharts", "Git", "Jira"],
  },
]

export default function TechStack() {
  return (
    <section id="stack">
      <div className="wrap">
        <span className="section-tag" data-reveal="">
          Toolbox
        </span>
        <h2 data-reveal="">Technologies I work with.</h2>
        <p className="section-sub" data-reveal="">
          The specific tools behind the capabilities above.
        </p>

        <div className="stack-grid" data-reveal="1">
          {STACK.map((col) => (
            <div className="stack-col" key={col.title}>
              <h4>{col.title}</h4>
              <div className="chip-row">
                {col.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
