import Link from "next/link"

const FAQS: { q: string; a: React.ReactNode; open?: boolean }[] = [
  {
    q: "What's your core tech stack?",
    open: true,
    a: (
      <>
        Primarily the MERN stack (MongoDB, Express, React, Node.js) and Next.js, with FastAPI for Python-based
        backends when a project needs it — usually because it&apos;s talking to a machine learning model, as with
        the mT5 paraphrasing service behind Urdu Ibdaa.
      </>
    ),
  },
  {
    q: "Are you open to freelance or contract work?",
    a: (
      <>
        Yes — alongside full-time work at BricketX PK, I take on select freelance and contract projects, particularly
        dashboards and full-stack builds. See{" "}
        <Link href="/services" style={{ color: "var(--accent)" }}>
          Services
        </Link>{" "}
        for what I actually offer.
      </>
    ),
  },
  {
    q: "Where are you based, and do you work remote?",
    a: <>I&apos;m based in Karachi, Pakistan, and open to on-site, hybrid, or fully remote arrangements depending on the role or project.</>,
  },
  {
    q: "Can I see your code?",
    a: (
      <>
        Most projects link to a public GitHub repo on their case study page under{" "}
        <Link href="/projects" style={{ color: "var(--accent)" }}>
          Projects
        </Link>
        . A few are frontend-only contributions under client NDA, clearly marked, with no code or live demo available
        for those specifically.
      </>
    ),
  },
  {
    q: "What's your availability like?",
    a: (
      <>
        I currently work full-time, so freelance projects run alongside that — typically evenings and weekends, or
        full focus if an engagement is short and well-scoped. Timeline is agreed upfront, not overpromised.
      </>
    ),
  },
  {
    q: "Do you work with a fixed price or hourly rate?",
    a: (
      <>
        Depends on the project. Well-defined builds (a dashboard, a specific feature) usually work better as a fixed
        price agreed after scoping. Open-ended consulting is typically hourly.
      </>
    ),
  },
  {
    q: "Can you work within an existing codebase?",
    a: (
      <>
        Yes — a meaningful part of my experience has been picking up other people&apos;s codebases and building
        within existing patterns rather than rewriting from scratch. I&apos;ll flag when something&apos;s genuinely
        worth restructuring, but I won&apos;t push a rewrite just to use my preferred stack.
      </>
    ),
  },
  {
    q: "Do you have any published research?",
    a: (
      <>
        Yes — my Final Year Project became a published paper on training an mT5 model for Urdu paraphrasing, which
        later became the{" "}
        <Link href="/projects/urdu-ibdaa" style={{ color: "var(--accent)" }}>
          Urdu Ibdaa
        </Link>{" "}
        project. Details on the{" "}
        <Link href="/about" style={{ color: "var(--accent)" }}>
          About
        </Link>{" "}
        page.
      </>
    ),
  },
]

export default function FaqList() {
  return (
    <div data-reveal="">
      {FAQS.map((faq) => (
        <details className="faq-item" open={faq.open} key={faq.q}>
          <summary>
            {faq.q} <span className="plus">+</span>
          </summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  )
}
