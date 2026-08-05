const CAPABILITIES = [
  {
    num: "01",
    title: "Frontend Engineering",
    desc: "Responsive, accessible interfaces with React, Next.js, Vue 3, and SvelteKit.",
    reveal: "",
  },
  {
    num: "02",
    title: "Backend & APIs",
    desc: "Scalable services and REST APIs built with Node.js, Express, and FastAPI.",
    reveal: "1",
  },
  {
    num: "03",
    title: "Database Design",
    desc: "Efficient schema design across MongoDB and PostgreSQL, with Prisma ORM.",
    reveal: "2",
  },
  {
    num: "04",
    title: "Full-Stack Integration",
    desc: "End-to-end ownership — from database to deployed, production UI.",
    reveal: "",
  },
  {
    num: "05",
    title: "Performance & SEO",
    desc: "SSR/SSG with Next.js, optimized Core Web Vitals and page speed.",
    reveal: "1",
  },
  {
    num: "06",
    title: "Agile Delivery",
    desc: "Jira-run sprints, cross-functional collaboration, on-time shipping.",
    reveal: "2",
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <span className="section-tag" data-reveal="">
          What I Do
        </span>
        <h2 data-reveal="">End-to-end capability, across the whole stack.</h2>
        <p className="section-sub" data-reveal="">
          From interface to infrastructure — every layer built to work together.
        </p>

        <div className="cap-grid">
          {CAPABILITIES.map((cap) => (
            <div className="cap-card" data-reveal={cap.reveal} key={cap.num}>
              <span className="cap-num">{cap.num}</span>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
