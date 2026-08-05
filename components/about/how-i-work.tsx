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
      <div className="value-grid">
        {VALUES.map((value) => (
          <div className="value-card" data-reveal={value.reveal} key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
