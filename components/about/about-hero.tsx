import Link from "next/link"

const FACTS = [
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Experience", value: "2+ Years" },
  { label: "Core Stack", value: "MERN & Next.js" },
  { label: "Availability", value: "On-site / Hybrid / Remote" },
  { label: "Education", value: "BS Software Engineering" },
]

export default function AboutHero() {
  return (
    <div className="pb-20 pt-6">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-[60px]">
        <div>
          <span className="eyebrow" data-reveal="">
            About Me
          </span>
          <h1 data-reveal="1">
            Building <span className="grad">full-stack products</span>, end to end.
          </h1>
          <div className="mt-0" data-reveal="2">
            <p className="mb-[18px] max-w-[60ch] text-[1rem] text-ink-muted">
              I hold a{" "}
              <strong className="text-ink-text">
                BS in Software Engineering from Sir Syed University of Engineering &amp; Technology
              </strong>
              , and I&apos;m currently working as a Full Stack Developer at BricketX PK. My core expertise includes
              the <strong className="text-ink-text">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and
              Next.js, with additional experience in the{" "}
              <strong className="text-ink-text">FARM stack</strong> (FastAPI, React, MongoDB).
            </p>
            <p className="mb-[18px] max-w-[60ch] text-[1rem] text-ink-muted">
              I enjoy building user-centric applications where UI/UX and backend architecture work together — from
              designing responsive frontend interfaces to developing robust backend infrastructures. I&apos;m
              focused on delivering performant, maintainable solutions that create real impact, rather than code
              that just technically works.
            </p>
            <p className="mb-[18px] max-w-[60ch] text-[1rem] text-ink-muted">
              Over the past two-plus years I&apos;ve moved through six different roles — internships, contract work, and
              now a full-time position — each one adding a different layer to how I think about software. Early on
              that meant learning backend fundamentals with Node.js and Express. Later it meant getting comfortable
              with data visualization using D3.js, and most recently it&apos;s meant taking full ownership of
              production applications from database schema through to deployed UI.
            </p>
            <p className="mb-[18px] max-w-[60ch] text-[1rem] text-ink-muted">
              What ties all of that together is a genuine interest in the craft itself — not just shipping features,
              but understanding why a particular architecture decision matters, why a component re-renders when it
              shouldn&apos;t, or why a query is slower than it should be. I&apos;d rather spend an extra hour
              understanding a problem properly than patch around it.
            </p>
            <p className="mb-[18px] max-w-[60ch] text-[1rem] text-ink-muted">
              Always eager to learn, collaborate, and contribute to innovative projects while continuously exploring
              modern technologies and best practices in software engineering. I&apos;m currently based in Karachi,
              Pakistan, and open to on-site, hybrid, or fully remote opportunities — whether that&apos;s a full-time
              role or a focused freelance engagement.
            </p>
            <p className="mb-[18px] max-w-[60ch] text-[1rem] text-ink-muted">
              What draws me to full-stack work specifically is the ability to see a feature through from an idea to
              something a real user actually touches. I like knowing why a database is structured the way it is, not
              just how to query it — and I like being the person who can debug an issue whether it&apos;s showing up
              in the UI or three layers deeper in an API response.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-ink-line bg-ink-bg-2 p-7" data-reveal="3">
          <h4 className="mb-5 font-display text-[0.78rem] uppercase tracking-[0.08em] text-ink-gold">Quick Facts</h4>
          {FACTS.map((fact) => (
            <div className="flex justify-between border-b border-ink-line py-[13px] text-[0.92rem] last:border-b-0" key={fact.label}>
              <span className="text-ink-muted">{fact.label}</span>
              <span className="text-right font-semibold">{fact.value}</span>
            </div>
          ))}
          <div className="mb-0 mt-6 flex flex-wrap gap-3.5">
            <Link href="/resume" className="btn btn-primary text-[0.88rem]">
              View Resume
            </Link>
            <Link href="/contact" className="btn btn-outline text-[0.88rem]">
              Contact →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
