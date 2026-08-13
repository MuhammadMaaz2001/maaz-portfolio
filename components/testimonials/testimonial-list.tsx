const TESTIMONIALS = [
  {
    quote:
      "Maaz is a highly talented frontend developer who works with modern technologies including React, Next.js, and Vue.js. Fast, reliable, and consistently high-quality work — I'd happily recommend him.",
    name: "Abbas Raza",
    role: "Full Stack colleague",
    source: "LinkedIn Recommendation",
    verified: false,
    reveal: "",
  },
  {
    quote:
      "I had the opportunity to work with Maaz during coordination sessions and was impressed by his understanding of both frontend and backend technologies. He's a great team player.",
    name: "Yousha Shakeel",
    role: "Full Stack Developer (MERN)",
    source: "LinkedIn Recommendation",
    verified: false,
    reveal: "1",
  },
  {
    quote:
      "What stood out immediately was his deep knowledge of his tech stack. Maaz has a great work ethic — he takes responsibility, goes above and beyond, and always delivers high-quality work. Pleasant and easygoing to collaborate with.",
    name: "Mohammad Abdullah Nizami",
    role: "Software Engineer, Python | FastAPI | Django",
    source: "LinkedIn Recommendation",
    verified: false,
    reveal: "2",
  },
  {
    quote:
      "I had the pleasure of working with Muhammad M. on a full-stack web application built using the MERN stack. From the beginning, their professionalism, technical expertise, and clear communication stood out. He handled both frontend and backend development with great attention to detail, delivering a responsive, high-performing web app — and even suggested improvements that enhanced overall functionality. Delivered on time, with excellent code quality.",
    name: "Sameer K.",
    role: "Client, Full-Stack Web Application",
    source: "✓ Verified · May 2025",
    verified: true,
    reveal: "3",
  },
  {
    quote:
      "Maaz worked with me on building a frontend dashboard for Meta Ads data. He demonstrated excellent technical skills in React.js and Next.js, quickly understanding the project requirements and delivering high-quality, efficient code. Proactive in suggesting improvements and always responsive to feedback.",
    name: "Farhan W.",
    role: "Client, Meta Ads Dashboard",
    source: "✓ Verified · Apr 2025",
    verified: true,
    reveal: "4",
  },
]

export default function TestimonialList() {
  return (
    <div className="flex flex-col gap-5">
      {TESTIMONIALS.map((t) => (
        <div
          className="rounded-2xl border border-ink-line bg-ink-bg-2 p-9 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
          data-reveal={t.reveal}
          key={t.name}
        >
          <p className="mb-[22px] font-display text-[1.15rem] font-semibold leading-[1.55]">&quot;{t.quote}&quot;</p>
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="text-[0.9rem]">
              <span className="font-semibold text-ink-gold">{t.name}</span>{" "}
              <span className="text-ink-muted">· {t.role}</span>
            </div>
            <span
              className={`rounded-full border px-3 py-[5px] text-[0.78rem] ${
                t.verified
                  ? "inline-flex items-center gap-1.5 border-ink-gold-soft bg-ink-gold-soft text-ink-gold"
                  : "border-ink-line text-ink-muted"
              }`}
            >
              {t.source}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
