import SectionHeading from "@/components/shared/section-heading"

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
        <SectionHeading
          tag="What I Do"
          title="End-to-end capability, across the whole stack."
          sub="From interface to infrastructure — every layer built to work together."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => (
            <div
              className="rounded-2xl border border-ink-line bg-ink-bg-2 p-8 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
              data-reveal={cap.reveal}
              key={cap.num}
            >
              <span className="mb-5 block font-display text-[0.85rem] font-bold text-ink-gold">{cap.num}</span>
              <h3 className="mb-2.5 font-display text-[1.15rem] font-bold">{cap.title}</h3>
              <p className="text-[0.92rem] text-ink-muted">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
