import StorySlider, { type StorySlide } from "@/components/shared/story-slider"

const SLIDES: StorySlide[] = [
  {
    yearBg: "2020",
    eyebrow: "Where it started",
    year: "2020",
    title: "Started my degree",
    desc: "Began a BS in Software Engineering at SSUET, building the foundation for everything that followed. The first two years were mostly fundamentals — data structures, algorithms, and the theory that quietly underpins every practical decision later on.",
  },
  {
    yearBg: "2022",
    eyebrow: "First internship",
    year: "2022",
    title: "Joined Coderatory",
    desc: "Learned Node.js and Express.js fundamentals and shipped my first full-stack app with MongoDB. This was the point where backend work stopped being a textbook topic and became something I could actually build, break, and fix.",
    link: { href: "/experience/coderatory", label: "Read more about this role →" },
  },
  {
    yearBg: "2023",
    eyebrow: "Frontend deepens",
    year: "2023",
    title: "Dimensional Sys & Neuramatics",
    desc: "Worked with D3.js data visualizations at Dimensional Sys, then moved to Neuramatics.Co. as a Frontend Developer, shipping 5+ React.js projects and getting genuinely comfortable with component architecture and state management.",
    link: { href: "/experience/dimensional-systems", label: "Read more about this role →" },
  },
  {
    yearBg: "2024",
    eyebrow: "Frontend, React",
    year: "2024",
    title: "BRB Group",
    desc: "A year-long React Development role, leading frontend for payroll and finance dashboard interfaces. This is where dashboard usability specifically became something I got genuinely good at.",
    link: { href: "/experience/brb-group", label: "Read more about this role →" },
  },
  {
    yearBg: "2025",
    eyebrow: "Next.js + backend begins",
    year: "2025",
    title: "UTF-Labs",
    desc: "Moved to UTF-Labs as a Next.js & React Developer — the point where I started working with Next.js seriously and began taking on backend and API integration work alongside frontend, not just frontend alone.",
    link: { href: "/experience/utf-labs", label: "Read more about this role →" },
  },
  {
    yearBg: "2026",
    eyebrow: "Full stack, full-time",
    year: "2026 — Now",
    title: "BricketX PK",
    desc: "Now building full-stack products at BricketX PK across the MERN stack and Next.js — where frontend and backend experience finally merged into one continuous practice, owning a feature end to end.",
    link: { href: "/experience/bricketx-pk", label: "Read more about this role →" },
  },
]

export default function Journey() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        My Path
      </span>
      <h2 data-reveal="">The journey so far</h2>
      <p className="section-sub" data-reveal="1">
        Not a straight line, but every stop taught me something that shows up in how I build today.
      </p>
      <StorySlider slides={SLIDES} />
    </section>
  )
}
