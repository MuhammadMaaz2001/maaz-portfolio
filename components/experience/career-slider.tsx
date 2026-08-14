import StorySlider, { type StorySlide } from "@/components/shared/story-slider"

const SLIDES: StorySlide[] = [
  {
    yearBg: "2026",
    eyebrow: "Current",
    year: "Apr 2026 — Present",
    title: "Full Stack Developer (MERN | Next.js)",
    desc: "BricketX PK — building scalable, SEO-optimized web applications with full ownership from database schema through to deployed UI.",
    logo: "/images/bricketx_investments_logo.jpeg",
    link: { href: "/experience/bricketx-pk", label: "Read the full role →" },
  },
  {
    yearBg: "2025",
    eyebrow: "Oct 2025 — Apr 2026",
    year: "UTF-Labs",
    title: "Next.js & React Developer",
    desc: "Shipped full-stack features with Next.js and React, integrating REST APIs within a structured Agile sprint cycle.",
    logo: "/images/utf-labs.jpeg",
    link: { href: "/experience/utf-labs", label: "Read the full role →" },
  },
  {
    yearBg: "2024",
    eyebrow: "Aug 2024 — Oct 2025",
    year: "BRB Group",
    title: "React Development",
    desc: "Led frontend for payroll and finance dashboards, sharpening how I think about dashboard usability specifically.",
    logo: "/images/brb_developers_logo.jpeg",
    link: { href: "/experience/brb-group", label: "Read the full role →" },
  },
  {
    yearBg: "2023",
    eyebrow: "Nov 2023 — Feb 2024",
    year: "Neuramatics.Co.",
    title: "Frontend Developer",
    desc: "Delivered 5+ React.js projects end to end — where component architecture and reusable UI patterns really started to click.",
    logo: "/images/neuramatics.jpeg",
    link: { href: "/experience/neuramatics", label: "Read the full role →" },
  },
  {
    yearBg: "2023",
    eyebrow: "Aug 2023 — Nov 2023",
    year: "Dimensional Sys",
    title: "Frontend Support Developer",
    desc: "Built D3.js data visualizations and reverse-engineered legacy code — reading undocumented code taught me more than any tutorial.",
    logo: "/images/dimensional_systems_logo.jpeg",
    link: { href: "/experience/dimensional-systems", label: "Read the full role →" },
  },
  {
    yearBg: "2022",
    eyebrow: "Feb 2022 — Apr 2022",
    year: "Coderatory",
    title: "Intern",
    desc: "Learned Node.js and Express.js fundamentals — the internship that pointed my whole direction toward full-stack work.",
    logo: "/images/coderatory_logo.jpeg",
    link: { href: "/experience/coderatory", label: "Read the full role →" },
  },
]

export default function CareerSlider() {
  return (
    <>
      <span className="section-tag" data-reveal="">
        Career Highlights
      </span>
      <h2 data-reveal="" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", marginBottom: 24 }}>
        The story, one role at a time
      </h2>
      <StorySlider slides={SLIDES} />
    </>
  )
}
