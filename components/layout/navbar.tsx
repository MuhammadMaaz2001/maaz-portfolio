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
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink-bg/[0.82] backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-[18px] sm:px-7">
        <Link href="/" className="font-display text-[1.15rem] font-bold">
          Maaz<span className="text-ink-gold">.</span>
        </Link>

        <ul className="hidden gap-[34px] text-[0.9rem] font-medium text-ink-muted min-[861px]:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`${isActive ? "text-ink-gold" : ""} hover:text-ink-text`}
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="ml-0.5 inline-block text-[0.65rem] opacity-70 transition-transform duration-200 group-hover:rotate-180">
                      ▾
                    </span>
                  )}
                </Link>
                {item.dropdown && (
                  <div className="invisible absolute left-1/2 top-[calc(100%+14px)] z-[60] flex min-w-[240px] -translate-x-1/2 translate-y-1.5 flex-col gap-0.5 rounded-2xl border border-ink-line bg-ink-bg-2 p-2.5 opacity-0 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.dropdown.map((sub) => (
                      <Link
                        href={sub.href}
                        key={sub.href}
                        className="block whitespace-nowrap rounded-lg px-3 py-2.5 text-[0.85rem] text-ink-muted hover:bg-ink-gold-soft hover:text-ink-gold"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 min-[861px]:flex">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-gold px-[18px] py-2.5 text-[0.85rem] font-semibold text-[#161208] transition-transform hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            Resume
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink-gold px-[18px] py-2.5 text-[0.85rem] font-semibold text-ink-gold transition-colors hover:bg-ink-gold hover:text-[#161208]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center gap-[5px] min-[861px]:hidden"
        >
          <span
            className={`block h-0.5 w-[22px] rounded-sm bg-ink-text transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-[22px] rounded-sm bg-ink-text transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-[22px] rounded-sm bg-ink-text transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-ink-line bg-ink-bg/[0.98] backdrop-blur-md transition-[max-height] duration-300 ease-in-out min-[861px]:hidden ${
          menuOpen ? "max-h-[calc(100vh-76px)] overflow-y-auto" : "max-h-0"
        }`}
      >
        <ul className="px-5 pb-5 pt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            const isAccordionOpen = openAccordion === item.href
            return (
              <li key={item.href} className="border-b border-ink-line">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex min-h-11 flex-1 items-center py-4 text-base font-medium ${isActive ? "text-ink-gold" : "text-ink-muted"}`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isAccordionOpen}
                      onClick={() => setOpenAccordion(isAccordionOpen ? null : item.href)}
                      className={`h-11 w-11 text-[1.1rem] transition-transform duration-200 ${
                        isAccordionOpen ? "rotate-180 text-ink-gold" : "text-ink-muted"
                      }`}
                    >
                      ▾
                    </button>
                  )}
                </div>
                {item.dropdown && (
                  <div
                    className={`flex flex-col overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      isAccordionOpen ? "max-h-[600px] pb-2.5" : "max-h-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        href={sub.href}
                        key={sub.href}
                        className="flex min-h-11 items-center py-3 pl-[18px] text-[0.92rem] text-ink-muted hover:text-ink-gold"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
        <div className="mx-5 mb-6 mt-5 flex flex-col gap-3">
          <Link
            href="/resume"
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-ink-gold py-3.5 text-center font-semibold text-[#161208]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            Resume
          </Link>
          <Link
            href="/contact"
            className="block min-h-11 rounded-full border border-ink-gold py-3.5 text-center font-semibold text-ink-gold"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  )
}
