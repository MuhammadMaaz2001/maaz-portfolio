const VALUES = [
  {
    title: "End-to-End Ownership",
    desc: "From database schema to deployed UI — I take full-stack projects from concept through to production.",
    reveal: "",
  },
  {
    title: "Clean, Maintainable Code",
    desc: "Type-safe, well-structured code that's easy for the next developer — often future me — to pick up.",
    reveal: "1",
  },
  {
    title: "Continuous Learning",
    desc: "Actively exploring new tools and best practices rather than sticking to one comfortable stack.",
    reveal: "2",
  },
]

export default function HowIWork() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        Approach
      </span>
      <h2 data-reveal="">How I work</h2>
      <p className="section-sub" data-reveal="1">
        A few principles that guide how I approach every project, regardless of stack or scope.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((value) => (
          <div
            className="rounded-2xl border border-ink-line bg-ink-bg-2 p-[30px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
            data-reveal={value.reveal}
            key={value.title}
          >
            <h3 className="mb-2.5 font-display text-[1.05rem] font-bold">{value.title}</h3>
            <p className="text-[0.88rem] text-ink-muted">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
