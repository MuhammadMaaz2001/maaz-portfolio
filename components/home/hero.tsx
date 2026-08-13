import StatCounter from "./stat-counter"

const STATS = [
  { target: 2, suffix: "", label: "Years Experience" },
  { target: 15, suffix: "+", label: "Projects Shipped" },
  { target: 6, suffix: "", label: "Certifications" },
  { target: 12, suffix: "+", label: "Technologies" },
]

export default function Hero() {
  return (
    <section className="pb-[70px] pt-16 sm:pt-[100px]">
      <div className="wrap">
        <span
          className="mb-[22px] inline-block font-body text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-ink-gold"
          data-reveal=""
        >
          Full Stack Developer · Karachi
        </span>
        <h1
          className="mb-[26px] max-w-[15ch] font-display text-[clamp(2.2rem,8vw,4.1rem)] font-extrabold leading-[1.06] tracking-[-0.02em]"
          data-reveal="1"
        >
          Full-stack products, <span className="grad">engineered to ship.</span>
        </h1>
        <p className="mb-[38px] max-w-[52ch] text-[1.05rem] text-ink-muted sm:text-[1.12rem]" data-reveal="2">
          I build production web applications end-to-end — React &amp; Next.js interfaces on top of Node.js and
          FastAPI services, backed by MongoDB and PostgreSQL.
        </p>
        <div className="mb-16 flex flex-wrap gap-4" data-reveal="3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink-gold px-7 py-[15px] font-body text-[0.92rem] font-semibold text-[#161208] transition-[transform,background] hover:-translate-y-0.5 hover:bg-[#DAC079]"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink-line px-7 py-[15px] font-body text-[0.92rem] font-semibold text-ink-text transition-colors hover:border-ink-gold hover:text-ink-gold"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-4"
          data-reveal="4"
        >
          {STATS.map((stat) => (
            <div className="bg-ink-bg-2 px-5 py-[26px] text-center" key={stat.label}>
              <StatCounter target={stat.target} suffix={stat.suffix} />
              <div className="mt-1 text-[0.78rem] text-ink-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
