const STACK = [
  { title: "Frontend", items: ["React.js", "Next.js", "Vue 3", "SvelteKit", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Prisma"] },
  { title: "Data & Tools", items: ["MongoDB", "PostgreSQL", "D3.js", "Git", "Jira", "n8n", "MQTT", "Zapier"] },
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
      <div
        className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-3"
        data-reveal="2"
      >
        {STACK.map((col) => (
          <div className="bg-ink-bg-2 p-7" key={col.title}>
            <h4 className="mb-4 font-display text-[0.78rem] uppercase tracking-[0.08em] text-ink-gold">
              {col.title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {col.items.map((item) => (
                <span className="rounded-full border border-ink-line px-2.5 py-1 text-[0.7rem] text-ink-muted" key={item}>
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
