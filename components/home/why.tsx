export default function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <span className="section-tag" data-reveal="">
          Why Work With Me
        </span>
        <h2 data-reveal="">Someone who owns the whole build, not just their part of it.</h2>
        <p className="section-sub" data-reveal="1">
          A lot of developers are comfortable in one layer of the stack and hand the rest off. I&apos;d rather
          understand the whole picture — how a database decision affects API design, how API design affects what the
          frontend can actually do smoothly, and how all of that affects what a real user experiences. That&apos;s
          what &quot;full stack&quot; means to me in practice, not just a line on a resume.
        </p>
        <p className="section-sub" data-reveal="2" style={{ marginBottom: 0 }}>
          I also communicate clearly about tradeoffs instead of disappearing into a build and surfacing weeks later.
          Whether it&apos;s a full-time role or a freelance project, you&apos;ll know what&apos;s happening and why —
          and the code you get back will be something the next developer can actually read.
        </p>
      </div>
    </section>
  )
}
