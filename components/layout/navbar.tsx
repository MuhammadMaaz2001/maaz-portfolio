"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type DropdownItem = { href: string; label: string }

type NavItem = {
  href: string
  label: string
  dropdown?: { allLabel: string; allHref: string; items: DropdownItem[] }
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    dropdown: {
      allLabel: "All Services",
      allHref: "/services",
      items: [
        { href: "/services/full-stack-development", label: "Full Stack Development" },
        { href: "/services/dashboard-development", label: "Dashboard & Data Visualization" },
        { href: "/services/ai-integration", label: "AI Integration" },
        { href: "/services/business-automation", label: "Business Process Automation" },
        { href: "/services/internal-tools", label: "Internal Tools & Admin Systems" },
        { href: "/services/technical-consulting", label: "Technical Consulting" },
      ],
    },
  },
  {
    href: "/experience",
    label: "Experience",
    dropdown: {
      allLabel: "All Experience",
      allHref: "/experience",
      items: [
        { href: "/experience/bricketx-pk", label: "BricketX PK" },
        { href: "/experience/utf-labs", label: "UTF-Labs" },
        { href: "/experience/brb-group", label: "BRB Group" },
        { href: "/experience/neuramatics", label: "Neuramatics.Co." },
        { href: "/experience/dimensional-systems", label: "Dimensional Sys" },
        { href: "/experience/coderatory", label: "Coderatory" },
      ],
    },
  },
  {
    href: "/projects",
    label: "Projects",
    dropdown: {
      allLabel: "All Projects",
      allHref: "/projects",
      items: [
        { href: "/projects/meta-ads-campaign-dashboard", label: "Meta Ads Campaign Dashboard 🔒" },
        { href: "/projects/urdu-ibdaa", label: "Urdu Ibdaa" },
        { href: "/projects/financial-advisor-ai", label: "Financial Advisor 🔒" },
        { href: "/projects/konnect-it", label: "Konnect-It" },
        { href: "/projects/e-commerce-platform", label: "E-Commerce Platform" },
        { href: "/projects/url-shortener-nextjs", label: "URL Shortener (Next.js)" },
        { href: "/projects/reddit-comment-extractor", label: "Reddit Comment Extractor 🔒" },
        { href: "/projects/pokemon-team-builder", label: "Pokémon Team Builder" },
        { href: "/projects/file-drive-management-system", label: "Drive — File Management" },
      ],
    },
  },
]

export default function Navbar() {
  const pathname = usePathname()

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
                    <Link href={item.dropdown.allHref}>{item.dropdown.allLabel}</Link>
                    <div className="dd-sep" />
                    {item.dropdown.items.map((sub) => (
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
        <Link href="/contact" className="nav-cta">
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  )
}
