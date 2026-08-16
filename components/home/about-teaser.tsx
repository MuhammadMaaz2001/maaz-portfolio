import Link from "next/link"

const FACTS = [
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Experience", value: "2+ Years" },
  { label: "Education", value: "BS Software Engineering" },
  { label: "Availability", value: "On-site / Hybrid / Remote" },
]

export default function AboutTeaser() {
  return (
    <section id="about-teaser">
      <div className="wrap">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-14">
          <div data-reveal="">
            <span className="mb-3.5 block font-body text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-gold">
              Who I Am
            </span>
            <h2 className="mb-4 max-w-[16ch] font-display text-[clamp(1.6rem,6vw,2.6rem)] font-bold tracking-[-0.015em]">
              A developer who ships, not just prototypes.
            </h2>
            <p className="mb-6 max-w-[56ch] text-[1.02rem] text-ink-muted">
              I hold a BS in Software Engineering from Sir Syed University of Engineering &amp; Technology and I&apos;m
              currently a Full Stack Developer at BricketX PK. My core expertise spans the MERN stack and Next.js,
              with additional experience in the FARM stack (FastAPI, React, MongoDB).
            </p>
            <p className="max-w-[56ch] text-[1.02rem] text-ink-muted">
              I care about building user-centric applications where thoughtful UI/UX meets solid backend
              architecture — and I&apos;m always exploring new tools rather than sitting still on one comfortable
              stack.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-line bg-ink-bg-2 p-6" data-reveal="1">
            {FACTS.map((fact) => (
              <div
                className="flex justify-between border-b border-ink-line py-3 text-[0.88rem] last:border-b-0"
                key={fact.label}
              >
                <span className="text-ink-muted">{fact.label}</span>
                <span className="text-right font-semibold">{fact.value}</span>
              </div>
            ))}
            <Link
              href="/about"
              className="mt-5 inline-block text-[0.9rem] font-semibold text-ink-gold hover:opacity-75"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
