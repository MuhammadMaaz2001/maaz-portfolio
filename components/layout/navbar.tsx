"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type DropdownItem = { href: string; label: string }

type NavItem = {
  href: string
  label: string
  dropdown?: DropdownItem[]
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/full-stack-development", label: "Full Stack Development" },
      { href: "/services/dashboard-development", label: "Dashboard & Data Visualization" },
      { href: "/services/ai-integration", label: "AI Integration" },
      { href: "/services/business-automation", label: "Business Process Automation" },
      { href: "/services/internal-tools", label: "Internal Tools & Admin Systems" },
      { href: "/services/technical-consulting", label: "Technical Consulting" },
    ],
  },
  {
    href: "/experience",
    label: "Experience",
    dropdown: [
      { href: "/experience/bricketx-pk", label: "BricketX PK" },
      { href: "/experience/utf-labs", label: "UTF-Labs" },
      { href: "/experience/brb-group", label: "BRB Group" },
      { href: "/experience/neuramatics", label: "Neuramatics.Co." },
      { href: "/experience/dimensional-systems", label: "Dimensional Sys" },
      { href: "/experience/coderatory", label: "Coderatory" },
    ],
  },
  { href: "/projects", label: "Projects" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  useEffect(() => {
    setMenuOpen(false)
    setOpenAccordion(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo">
          Maaz<span>.</span>
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <li key={item.href} className={item.dropdown ? "has-dropdown" : undefined}>
                <Link href={item.href} className={isActive ? "active" : undefined}>
                  {item.label}
                  {item.dropdown && <span className="caret">▾</span>}
                </Link>
                {item.dropdown && (
                  <div className="dropdown">
                    {item.dropdown.map((sub) => (
                      <Link href={sub.href} key={sub.href}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <Link href="/contact" className="nav-cta desktop-only">
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            const isAccordionOpen = openAccordion === item.href
            return (
              <li key={item.href} className={item.dropdown ? "has-accordion" : undefined}>
                <div className="mobile-nav-row">
                  <Link href={item.href} className={isActive ? "active" : undefined}>
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      className={`accordion-toggle${isAccordionOpen ? " open" : ""}`}
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isAccordionOpen}
                      onClick={() => setOpenAccordion(isAccordionOpen ? null : item.href)}
                    >
                      ▾
                    </button>
                  )}
                </div>
                {item.dropdown && (
                  <div className={`mobile-accordion${isAccordionOpen ? " open" : ""}`}>
                    {item.dropdown.map((sub) => (
                      <Link href={sub.href} key={sub.href}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
        <Link href="/contact" className="nav-cta mobile-cta">
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  )
}
