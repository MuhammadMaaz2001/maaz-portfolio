"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
