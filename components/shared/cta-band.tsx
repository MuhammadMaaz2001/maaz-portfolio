import Link from "next/link"
import GlitchCanvas from "./glitch-canvas"

type CtaButton = {
  label: string
  href: string
  variant: "primary" | "outline"
  external?: boolean
}

export default function CtaBand({
  title,
  description,
  buttons,
}: {
  title: string
  description: string
  buttons: CtaButton[]
}) {
  return (
    <div className="cta-band" data-reveal="">
      <div className="cta-glitch">
        <GlitchCanvas />
        <div className="cta-glitch-vignette" />
      </div>
      <h2 style={{ margin: "0 auto 16px" }}>{title}</h2>
      <p>{description}</p>
      <div className="cta-row">
        {buttons.map((btn) =>
          btn.external ? (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-${btn.variant}`}
            >
              {btn.label}
            </a>
          ) : (
            <Link key={btn.label} href={btn.href} className={`btn btn-${btn.variant}`}>
              {btn.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
