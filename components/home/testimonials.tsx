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
        <span className="mb-3.5 block font-body text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-gold" data-reveal="">
          Recommendations
        </span>
        <h2 className="mb-4 max-w-[16ch] font-display text-[clamp(1.6rem,6vw,2.6rem)] font-bold tracking-[-0.015em]" data-reveal="">
          What people say.
        </h2>
        <p className="mb-14 max-w-[56ch] text-[1.02rem] text-ink-muted" data-reveal="">
          From colleagues and clients I&apos;ve worked with directly.{" "}
          <Link href="/testimonials" className="text-ink-gold">
            See all 5 →
          </Link>
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              className="rounded-2xl border border-ink-line bg-ink-bg-2 p-[30px] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
              data-reveal={t.reveal}
              key={t.name}
            >
              <p className="mb-5 font-display text-[1.02rem] font-semibold leading-[1.5]">&quot;{t.quote}&quot;</p>
              <div className="text-[0.85rem]">
                {t.name} <span className="text-ink-muted">· {t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
