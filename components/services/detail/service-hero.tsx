import type { ReactNode } from "react"

export default function ServiceHero({
  serviceNum,
  title,
  lede,
  chips,
  fileLabel,
  visual,
}: {
  serviceNum: string
  title: ReactNode
  lede: string
  chips: string[]
  fileLabel: string
  visual: ReactNode
}) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div data-reveal="">
          <span className="eyebrow">Service {serviceNum}</span>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
          <div className="chip-row">
            {chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="visual-panel" data-reveal="1">
          <div className="vp-head">
            <span style={{ background: "#ff5f56" }}></span>
            <span style={{ background: "#ffbd2e" }}></span>
            <span style={{ background: "#27c93f" }}></span>
            <span className="lbl">{fileLabel}</span>
          </div>
          <div className="vp-body">{visual}</div>
        </div>
      </div>
    </section>
  )
}
