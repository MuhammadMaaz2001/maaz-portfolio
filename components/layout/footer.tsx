import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 14 }}>
              Maaz<span>.</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", maxWidth: "32ch" }}>
              Full Stack Developer building scalable web applications with React, Next.js, and Node.js.
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
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
          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ color: "var(--muted)" }}>Karachi, Pakistan</li>
              <li style={{ color: "var(--muted)" }}>+92 310 2400211</li>
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
