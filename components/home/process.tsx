const STEPS = [
  { num: "01", title: "Discover", desc: "Understand the requirements, users, and technical constraints.", reveal: "" },
  {
    num: "02",
    title: "Design & Architect",
    desc: "Plan data models, API structure, and component architecture.",
    reveal: "1",
  },
  { num: "03", title: "Build", desc: "Implement with clean, type-safe, tested code.", reveal: "2" },
  { num: "04", title: "Ship & Support", desc: "Deploy, monitor performance, and iterate post-launch.", reveal: "3" },
]

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <span className="section-tag" data-reveal="">
          How I Work
        </span>
        <h2 data-reveal="">From brief to production, in four steps.</h2>
        <p className="section-sub" data-reveal="">
          A predictable process — so you always know what&apos;s next.
        </p>

        <div className="process-grid">
          {STEPS.map((step) => (
            <div className="step" data-reveal={step.reveal} key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
