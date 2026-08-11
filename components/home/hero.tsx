import StatCounter from "./stat-counter"

const STATS = [
  { target: 2, suffix: "", label: "Years Experience" },
  { target: 15, suffix: "+", label: "Projects Shipped" },
  { target: 6, suffix: "", label: "Certifications" },
  { target: 12, suffix: "+", label: "Technologies" },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow" data-reveal="">
          Full Stack Developer · Karachi
        </span>
        <h1 data-reveal="1">
          Full-stack products, <span className="grad">engineered to ship.</span>
        </h1>
        <p className="hero-sub" data-reveal="2">
          I build production web applications end-to-end — React &amp; Next.js interfaces on top of Node.js and
          FastAPI services, backed by MongoDB and PostgreSQL.
        </p>
        <div className="cta-row" data-reveal="3">
          <a href="#work" className="btn btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="stat-row" data-reveal="4">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <StatCounter target={stat.target} suffix={stat.suffix} />
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
