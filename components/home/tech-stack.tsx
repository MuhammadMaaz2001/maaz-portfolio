import SectionHeading from "@/components/shared/section-heading"

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
        <SectionHeading tag="Toolbox" title="Technologies I work with." sub="The specific tools behind the capabilities above." />

        <div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-3"
          data-reveal="1"
        >
          {STACK.map((col) => (
            <div className="bg-ink-bg-2 p-7" key={col.title}>
              <h4 className="mb-4 font-display text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink-gold">
                {col.title}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {col.items.map((item) => (
                  <span
                    className="rounded-full border border-ink-line px-2.5 py-1 text-[0.7rem] text-ink-muted"
                    key={item}
                  >
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
