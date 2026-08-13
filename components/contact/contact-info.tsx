export default function ContactInfo() {
  return (
    <div data-reveal="">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-line px-4 py-2 font-body text-[0.82rem] text-ink-muted">
        <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-[#3fd97f] motion-reduce:animate-none" />
        Available for new projects
      </div>

      <div className="grid grid-cols-1 gap-3.5 min-[501px]:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-bg-2 p-[22px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold">
          <div className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-ink-gold bg-ink-gold-soft text-base">
            ✉
          </div>
          <div className="mb-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-gold">Email</div>
          <div className="break-words font-display text-[1rem] font-bold leading-[1.35]">
            <a href="mailto:maazm6387@gmail.com" className="hover:text-ink-gold">
              maazm6387@gmail.com
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-bg-2 p-[22px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold">
          <div className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-ink-gold bg-ink-gold-soft text-base">
            ☎
          </div>
          <div className="mb-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-gold">Phone</div>
          <div className="break-words font-display text-[1rem] font-bold leading-[1.35]">
            <a href="tel:+923102400211" className="hover:text-ink-gold">
              +92 310 2400211
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-bg-2 p-[22px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold">
          <div className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-ink-gold bg-ink-gold-soft text-base">
            📍
          </div>
          <div className="mb-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-gold">Location</div>
          <div className="break-words font-display text-[1rem] font-bold leading-[1.35]">Karachi, Pakistan</div>
        </div>
        <div className="relative col-span-2 overflow-hidden rounded-2xl border border-ink-line bg-ink-bg-2 p-[22px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold max-[500px]:col-span-1">
          <div className="mb-3 font-body text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-gold">Elsewhere</div>
          <div className="mt-1 flex gap-2.5">
            <a
              href="https://www.linkedin.com/in/muhammad-maaz-3a1838208/"
              className="rounded-full border border-ink-line px-4 py-[9px] text-[0.82rem] font-semibold hover:border-ink-gold hover:text-ink-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </a>
            <a href="#" className="rounded-full border border-ink-line px-4 py-[9px] text-[0.82rem] font-semibold hover:border-ink-gold hover:text-ink-gold">
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
