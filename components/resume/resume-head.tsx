export default function ResumeHead() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-5 py-7 pb-10" data-reveal="">
      <div>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-gold to-ink-gold-light font-display text-[1.4rem] font-extrabold text-[#161208]">
          MM
        </div>
        <h1 className="mb-1.5 text-[clamp(1.9rem,3.6vw,2.5rem)]">Muhammad Maaz</h1>
        <div className="mb-3.5 font-mono text-[0.92rem] text-ink-gold">Full Stack Developer — MERN | Next.js</div>
        <div className="flex flex-wrap gap-4 text-[0.86rem] text-ink-muted">
          <a href="mailto:maazm6387@gmail.com" className="hover:text-ink-gold">
            maazm6387@gmail.com
          </a>
          <a href="tel:+923102400211" className="hover:text-ink-gold">
            +92 310 2400211
          </a>
          <span>Karachi, Pakistan</span>
          <a
            href="https://www.linkedin.com/in/muhammad-maaz-3a1838208/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-gold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
