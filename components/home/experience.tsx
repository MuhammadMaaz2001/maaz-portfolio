import Link from "next/link"

const EXPERIENCE = [
  {
    slug: "bricketx-pk",
    date: "Apr 2026 — Present",
    title: "Full Stack Developer (MERN | Next.js)",
    company: "BricketX PK",
    tags: ["Next.js", "Supabase"],
    reveal: "",
  },
  {
    slug: "utf-labs",
    date: "Oct 2025 — Apr 2026",
    title: "Next.js & React Developer",
    company: "UTF-Labs",
    tags: ["Next.js", "React"],
    reveal: "1",
  },
  {
    slug: "brb-group",
    date: "Aug 2024 — Oct 2025",
    title: "React Development",
    company: "BRB Group",
    tags: ["React", "Dashboards"],
    reveal: "2",
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6" data-reveal="">
          <div>
            <span className="mb-3.5 block font-body text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-gold">
              Career
            </span>
            <h2 className="max-w-[16ch] font-display text-[clamp(1.6rem,6vw,2.6rem)] font-bold tracking-[-0.015em]">
              Experience
            </h2>
          </div>
          <Link href="/experience" className="whitespace-nowrap pb-2 text-[0.9rem] font-semibold text-ink-gold hover:opacity-75">
            Full history →
          </Link>
        </div>
        <p className="mb-14 max-w-[56ch] text-[1.02rem] text-ink-muted" data-reveal="">
          Six roles across full-time, contract, and internship positions — each one adding a different layer of
          full-stack capability, from early backend fundamentals to end-to-end ownership of production applications.
        </p>

        <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line">
          {EXPERIENCE.map((exp) => (
            <Link
              className="grid grid-cols-1 gap-2.5 bg-ink-bg-2 p-7 transition-colors hover:bg-ink-bg-3 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-6"
              href={`/experience/${exp.slug}`}
              data-reveal={exp.reveal}
              key={exp.slug}
            >
              <div className="text-[0.82rem] font-medium text-ink-muted">{exp.date}</div>
              <div>
                <h3 className="mb-1 font-display text-[1.08rem] font-bold">{exp.title}</h3>
                <div className="text-[0.88rem] font-semibold text-ink-gold">{exp.company}</div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {exp.tags.map((tag) => (
                  <span
                    className="rounded-full border border-ink-line px-2.5 py-1 text-[0.7rem] text-ink-muted"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
