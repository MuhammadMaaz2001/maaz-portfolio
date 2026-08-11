import Link from "next/link"

const TESTIMONIALS = [
  {
    quote:
      "Maaz is a highly talented frontend developer who works with modern technologies including React, Next.js, and Vue.js. Fast, reliable, and consistently high-quality work.",
    name: "Abbas Raza",
    role: "Full Stack colleague",
    reveal: "",
  },
  {
    quote:
      "I had the opportunity to work with Maaz during coordination sessions and was impressed by his understanding of both frontend and backend technologies. Great team player.",
    name: "Yousha Shakeel",
    role: "Full Stack Developer (MERN)",
    reveal: "1",
  },
  {
    quote:
      "What stood out immediately was his deep knowledge of his tech stack. Maaz has a great work ethic, takes responsibility, and always delivers high-quality work.",
    name: "Mohammad Abdullah Nizami",
    role: "Software Engineer",
    reveal: "2",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <span className="section-tag" data-reveal="">
          Recommendations
        </span>
        <h2 data-reveal="">What people say.</h2>
        <p className="section-sub" data-reveal="">
          From colleagues and clients I&apos;ve worked with directly.{" "}
          <Link href="/testimonials" style={{ color: "var(--accent)" }}>
            See all 5 →
          </Link>
        </p>

        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" data-reveal={t.reveal} key={t.name}>
              <p className="testi-quote">&quot;{t.quote}&quot;</p>
              <div className="testi-who">
                {t.name} <span>· {t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
