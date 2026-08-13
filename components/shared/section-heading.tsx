import type { ReactNode } from "react"

export default function SectionHeading({
  tag,
  title,
  sub,
  reveal = "",
}: {
  tag: string
  title: ReactNode
  sub?: ReactNode
  reveal?: string
}) {
  return (
    <>
      <span
        className="mb-3.5 block font-body text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-gold"
        data-reveal={reveal}
      >
        {tag}
      </span>
      <h2
        className="mb-4 max-w-[16ch] font-display text-[clamp(1.6rem,6vw,2.6rem)] font-bold tracking-[-0.015em]"
        data-reveal={reveal}
      >
        {title}
      </h2>
      {sub && (
        <p className="mb-14 max-w-[56ch] text-[1.02rem] text-ink-muted" data-reveal={reveal}>
          {sub}
        </p>
      )}
    </>
  )
}
