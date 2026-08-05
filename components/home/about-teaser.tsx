import Link from "next/link"

const FACTS = [
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Experience", value: "2 Years" },
  { label: "Education", value: "BS Software Engineering" },
  { label: "Availability", value: "On-site / Hybrid / Remote" },
]

export default function AboutTeaser() {
  return (
    <section id="about-teaser">
      <div className="wrap">
        <div className="about-teaser-grid">
          <div data-reveal="">
            <span className="section-tag">Who I Am</span>
            <h2>A developer who ships, not just prototypes.</h2>
            <p className="section-sub" style={{ marginBottom: 24 }}>
              I hold a BS in Software Engineering from Sir Syed University of Engineering &amp; Technology and I&apos;m
              currently a Full Stack Developer at BricketX PK. My core expertise spans the MERN stack and Next.js,
              with additional experience in the FARM stack (FastAPI, React, MongoDB).
            </p>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              I care about building user-centric applications where thoughtful UI/UX meets solid backend
              architecture — and I&apos;m always exploring new tools rather than sitting still on one comfortable
              stack.
            </p>
          </div>
          <div className="about-teaser-facts" data-reveal="1">
            {FACTS.map((fact) => (
              <div className="fact" key={fact.label}>
                <span>{fact.label}</span>
                <span>{fact.value}</span>
              </div>
            ))}
            <Link href="/about" className="see-all" style={{ display: "inline-block", marginTop: 20 }}>
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
