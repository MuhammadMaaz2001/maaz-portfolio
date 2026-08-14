"use client"

import { useRef, useState } from "react"
import Link from "next/link"

export type StorySlide = {
  yearBg: string
  eyebrow: string
  year: string
  title: string
  desc: string
  logo?: string
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
      className={`relative overflow-hidden rounded-[20px] border border-ink-line bg-ink-bg-2 sm:h-[440px]${className ? ` ${className}` : ""}`}
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
      <div
        className="flex h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            className="relative flex h-full min-w-full flex-col justify-center overflow-hidden p-10 pb-[90px] pr-6 sm:p-14 sm:pb-14 sm:pr-[90px]"
            key={i}
          >
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[6rem] font-extrabold leading-none text-ink-gold opacity-[0.07] sm:text-[11rem]">
              {slide.yearBg}
            </div>
            <div className="relative z-[1] mb-[18px] flex items-center gap-3">
              {slide.logo && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={slide.logo} alt="" className="h-9 w-9 flex-shrink-0 rounded-lg object-contain" />
              )}
              <span className="inline-block w-fit rounded-full bg-ink-gold-soft px-[13px] py-[5px] text-[0.72rem] font-bold text-ink-gold">
                {slide.eyebrow}
              </span>
            </div>
            <div className="relative z-[1] mb-2 font-display text-[2.2rem] font-extrabold text-ink-gold">{slide.year}</div>
            <h3 className="relative z-[1] mb-3.5 font-display text-[1.3rem] font-bold">{slide.title}</h3>
            <p className="relative z-[1] mb-[18px] max-w-[52ch] text-[0.96rem] text-ink-muted">{slide.desc}</p>
            {slide.link && (
              <Link href={slide.link.href} className="relative z-[1] text-[0.88rem] font-semibold text-ink-gold">
                {slide.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-[22px] right-6 z-[3] flex items-center gap-3">
        <span className="font-body text-[0.8rem] text-ink-muted">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-bg font-body text-base text-ink-text transition-colors hover:border-ink-gold hover:text-ink-gold"
          aria-label="Previous"
          onClick={prev}
        >
          ←
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-bg font-body text-base text-ink-text transition-colors hover:border-ink-gold hover:text-ink-gold"
          aria-label="Next"
          onClick={next}
        >
          →
        </button>
      </div>
    </div>
  )
}
