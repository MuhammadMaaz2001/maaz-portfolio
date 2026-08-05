"use client"

import { useRef, useState } from "react"
import Link from "next/link"

export type StorySlide = {
  yearBg: string
  eyebrow: string
  year: string
  title: string
  desc: string
  link?: { href: string; label: string }
}

export default function StorySlider({ slides, className }: { slides: StorySlide[]; className?: string }) {
  const [index, setIndex] = useState(0)
  const startXRef = useRef(0)
  const total = slides.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  return (
    <div
      className={`story-slider${className ? ` ${className}` : ""}`}
      data-reveal="2"
      tabIndex={0}
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
        {slides.map((slide, i) => (
          <div className="story-slide" key={i}>
            <div className="story-year-bg">{slide.yearBg}</div>
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
