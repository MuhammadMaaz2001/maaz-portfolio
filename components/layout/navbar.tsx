"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
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
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <li key={link.href}>
                <Link href={link.href} className={isActive ? "active" : undefined}>
                  {link.label}
                </Link>
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
