"use client"

import { useEffect, useState } from "react"

export default function CaseSidebar({
  navItems,
  stack,
}: {
  navItems: { id: string; label: string }[]
  stack: string[]
}) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll(".case-main h2[id]")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -70% 0px" },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <aside className="case-sidebar">
      <div className="side-block">
        <span className="side-label">On This Page</span>
        <nav className="side-nav">
          {navItems.map((item) => (
            <a href={`#${item.id}`} className={activeId === item.id ? "active" : undefined} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="side-block">
        <span className="side-label">Tech Stack</span>
        <div className="side-stack">
          {stack.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
      <a href="/contact" className="side-cta">
        Get In Touch
      </a>
    </aside>
  )
}
