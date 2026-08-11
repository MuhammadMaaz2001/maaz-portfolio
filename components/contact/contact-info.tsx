export default function ContactInfo() {
  return (
    <div data-reveal="">
      <div className="badge-avail">
        <span className="dot" /> Available for new projects
      </div>

      <div className="info-bento">
        <div className="info-card">
          <div className="icon">✉</div>
          <div className="label">Email</div>
          <div className="value">
            <a href="mailto:maazm6387@gmail.com">maazm6387@gmail.com</a>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">☎</div>
          <div className="label">Phone</div>
          <div className="value">
            <a href="tel:+923102400211">+92 310 2400211</a>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">📍</div>
          <div className="label">Location</div>
          <div className="value">Karachi, Pakistan</div>
        </div>
        <div className="info-card wide">
          <div className="label" style={{ marginBottom: 12 }}>
            Elsewhere
          </div>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/muhammad-maaz-3a1838208/" className="social-btn" target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
            <a href="#" className="social-btn">
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
