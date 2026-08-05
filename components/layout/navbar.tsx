import Link from "next/link"

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
]

export default function Navbar() {
  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo">
          Maaz<span>.</span>
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta">
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  )
}
