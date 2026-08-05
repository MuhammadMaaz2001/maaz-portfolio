"use client"

import { useEffect, useRef } from "react"

export default function StatCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const duration = 1200
          const start = performance.now()

          function tick(now: number) {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            if (el) el.textContent = Math.round(eased * target) + suffix
            if (p < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          io.unobserve(el)
        })
      },
      { threshold: 0.5 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target, suffix])

  return (
    <div className="num" ref={ref}>
      0
    </div>
  )
}
