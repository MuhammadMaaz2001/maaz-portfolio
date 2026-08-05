import Link from "next/link"

const FACTS = [
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Experience", value: "2 Years" },
  { label: "Core Stack", value: "MERN & Next.js" },
  { label: "Availability", value: "On-site / Hybrid / Remote" },
  { label: "Education", value: "BS Software Engineering" },
]

export default function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-grid">
        <div>
          <span className="eyebrow" data-reveal="">
            About Me
          </span>
          <h1 data-reveal="1">
            Building <span className="grad">full-stack products</span>, end to end.
          </h1>
          <div className="bio" data-reveal="2">
            <p>
              I hold a <strong>BS in Software Engineering from Sir Syed University of Engineering &amp; Technology</strong>,
              and I&apos;m currently working as a Full Stack Developer at BricketX PK. My core expertise includes the{" "}
              <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and Next.js, with additional
              experience in the <strong>FARM stack</strong> (FastAPI, React, MongoDB).
            </p>
            <p>
              I enjoy building user-centric applications where UI/UX and backend architecture work together — from
              designing responsive frontend interfaces to developing robust backend infrastructures. I&apos;m
              focused on delivering performant, maintainable solutions that create real impact, rather than code
              that just technically works.
            </p>
            <p>
              Over the past two years I&apos;ve moved through six different roles — internships, contract work, and
              now a full-time position — each one adding a different layer to how I think about software. Early on
              that meant learning backend fundamentals with Node.js and Express. Later it meant getting comfortable
              with data visualization using D3.js, and most recently it&apos;s meant taking full ownership of
              production applications from database schema through to deployed UI.
            </p>
            <p>
              What ties all of that together is a genuine interest in the craft itself — not just shipping features,
              but understanding why a particular architecture decision matters, why a component re-renders when it
              shouldn&apos;t, or why a query is slower than it should be. I&apos;d rather spend an extra hour
              understanding a problem properly than patch around it.
            </p>
            <p>
              Always eager to learn, collaborate, and contribute to innovative projects while continuously exploring
              modern technologies and best practices in software engineering. I&apos;m currently based in Karachi,
              Pakistan, and open to on-site, hybrid, or fully remote opportunities — whether that&apos;s a full-time
              role or a focused freelance engagement.
            </p>
            <p>
              What draws me to full-stack work specifically is the ability to see a feature through from an idea to
              something a real user actually touches. I like knowing why a database is structured the way it is, not
              just how to query it — and I like being the person who can debug an issue whether it&apos;s showing up
              in the UI or three layers deeper in an API response.
            </p>
          </div>
        </div>

        <div className="facts-card" data-reveal="3">
          <h4>Quick Facts</h4>
          {FACTS.map((fact) => (
            <div className="fact" key={fact.label}>
              <span>{fact.label}</span>
              <span>{fact.value}</span>
            </div>
          ))}
          <div className="cta-row">
            <Link href="/resume" className="btn btn-primary">
              View Resume
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
