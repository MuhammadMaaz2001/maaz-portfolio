"use client"

import { useEffect, useState } from "react"

export default function CaseSidebar({
  navItems,
  stack,
  company,
}: {
  navItems: { id: string; label: string }[]
  stack: string[]
  company?: { name: string; url: string; domain: string; logo?: string }
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
      {company && (
        <div className="side-block">
          <span className="side-label">Company</span>
          <a className="side-company flex items-center gap-2.5" href={company.url} target="_blank" rel="noopener noreferrer">
            {company.logo && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-8 flex-shrink-0 rounded-md border border-ink-line bg-white object-contain p-1"
              />
            )}
            <span>
              <b className="block">{company.name}</b>
              {company.domain} →
            </span>
          </a>
        </div>
      )}
      <a href="/contact" className="side-cta">
        Get In Touch
      </a>
    </aside>
  )
}
