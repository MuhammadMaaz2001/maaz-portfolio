import Link from "next/link"

const SITE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
]

const MORE_LINKS = [
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: 14, display: "inline-block" }}>
              Maaz<span>.</span>
            </Link>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", maxWidth: "32ch" }}>
              Full Stack Developer building scalable web applications with React, Next.js, and Node.js.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammad-maaz-3a1838208/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:maazm6387@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Muhammad Maaz. All rights reserved.</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
