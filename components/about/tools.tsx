const STACK = [
  { title: "Frontend", items: ["React.js", "Next.js", "Vue 3", "SvelteKit", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Prisma"] },
  { title: "Data & Tools", items: ["MongoDB", "PostgreSQL", "D3.js", "Git", "Jira"] },
]

export default function Tools() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        Toolbox
      </span>
      <h2 data-reveal="">Tools &amp; technologies</h2>
      <p className="section-sub" data-reveal="1">
        This is the actual stack I reach for day to day, not an exhaustive list of everything I&apos;ve ever touched
        — every technology below has shipped in a real project, not just a tutorial.
      </p>
      <div className="stack-grid" data-reveal="2">
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
    </section>
  )
}
