"use client"

import { useRef, useState } from "react"
import Link from "next/link"

const SLIDES = [
  {
    year: "2020",
    eyebrow: "Where it started",
    title: "Started my degree",
    desc: "Began a BS in Software Engineering at SSUET, building the foundation for everything that followed. The first two years were mostly fundamentals — data structures, algorithms, and the theory that quietly underpins every practical decision later on.",
  },
  {
    year: "2022",
    eyebrow: "First internship",
    title: "Joined Coderatory",
    desc: "Learned Node.js and Express.js fundamentals and shipped my first full-stack app with MongoDB. This was the point where backend work stopped being a textbook topic and became something I could actually build, break, and fix.",
    link: { href: "/experience/coderatory", label: "Read more about this role →" },
  },
  {
    year: "2023",
    eyebrow: "Frontend deepens",
    title: "Dimensional Sys & Neuramatics",
    desc: "Worked with D3.js data visualizations at Dimensional Sys, then moved to Neuramatics.Co. as a Frontend Developer, shipping 5+ React.js projects and getting genuinely comfortable with component architecture and state management.",
    link: { href: "/experience/dimensional-systems", label: "Read more about this role →" },
  },
  {
    year: "2024",
    eyebrow: "Frontend, React",
    title: "BRB Group",
    desc: "A year-long React Development role, leading frontend for payroll and finance dashboard interfaces. This is where dashboard usability specifically became something I got genuinely good at.",
    link: { href: "/experience/brb-group", label: "Read more about this role →" },
  },
  {
    year: "2025",
    eyebrow: "Next.js + backend begins",
    title: "UTF-Labs",
    desc: "Moved to UTF-Labs as a Next.js & React Developer — the point where I started working with Next.js seriously and began taking on backend and API integration work alongside frontend, not just frontend alone.",
    link: { href: "/experience/utf-labs", label: "Read more about this role →" },
  },
  {
    year: "2026 — Now",
    eyebrow: "Full stack, full-time",
    title: "BricketX PK",
    desc: "Now building full-stack products at BricketX PK across the MERN stack and Next.js — where frontend and backend experience finally merged into one continuous practice, owning a feature end to end.",
    link: { href: "/experience/bricketx-pk", label: "Read more about this role →" },
  },
]

export default function StorySlider() {
  const [index, setIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)
  const total = SLIDES.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  return (
    <div
      className="story-slider"
      data-reveal="2"
      tabIndex={0}
      ref={sliderRef}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next()
        if (e.key === "ArrowLeft") prev()
      }}
      onTouchStart={(e) => {
        startXRef.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        const diff = e.changedTouches[0].clientX - startXRef.current
        if (diff > 50) prev()
        else if (diff < -50) next()
      }}
    >
      <div className="story-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((slide) => (
          <div className="story-slide" key={slide.year}>
            <div className="story-year-bg">{slide.year.slice(0, 4)}</div>
            <span className="story-eyebrow">{slide.eyebrow}</span>
            <div className="story-year">{slide.year}</div>
            <h3 className="story-title">{slide.title}</h3>
            <p className="story-desc">{slide.desc}</p>
            {slide.link && (
              <Link href={slide.link.href} className="story-link">
                {slide.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="story-nav">
        <span className="story-progress">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button className="story-arrow" aria-label="Previous" onClick={prev}>
          ←
        </button>
        <button className="story-arrow" aria-label="Next" onClick={next}>
          →
        </button>
      </div>
    </div>
  )
}
