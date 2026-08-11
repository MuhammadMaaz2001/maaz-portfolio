import type { ReactNode } from "react"

export default function WhatsIncluded({ points }: { points: { strong: string; rest: ReactNode }[] }) {
  return (
    <section>
      <h2>What&apos;s Included</h2>
      <ul className="points">
        {points.map((point) => (
          <li key={point.strong}>
            <strong>{point.strong}</strong> {point.rest}
          </li>
        ))}
      </ul>
    </section>
  )
}
