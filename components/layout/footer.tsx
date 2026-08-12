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

const linkClass = "text-[0.9rem] text-ink-muted hover:text-ink-text"

export default function Footer() {
  return (
    <footer className="border-t border-ink-line px-[18px] py-14 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 md:mb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
          <div>
            <Link href="/" className="mb-3.5 inline-block font-display text-[1.15rem] font-bold">
              Maaz<span className="text-ink-gold">.</span>
            </Link>
            <p className="max-w-[32ch] text-[0.9rem] text-ink-muted">
              Full Stack Developer building scalable web applications with React, Next.js, and Node.js.
            </p>
          </div>
          <div>
            <h4 className="mb-[18px] font-display text-[0.82rem] uppercase tracking-[0.08em] text-ink-gold">Site</h4>
            <ul className="space-y-2.5">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-[18px] font-display text-[0.82rem] uppercase tracking-[0.08em] text-ink-gold">More</h4>
            <ul className="space-y-2.5">
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-[18px] font-display text-[0.82rem] uppercase tracking-[0.08em] text-ink-gold">
              Get In Touch
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resume" className={linkClass}>
                  Resume
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-maaz-3a1838208/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:maazm6387@gmail.com" className={linkClass}>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-start gap-2 border-t border-ink-line pt-6 text-[0.82rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Muhammad Maaz. All rights reserved.</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
