import Link from "next/link"

export default function ServiceCta({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="plain-cta-band" data-reveal="">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="cta-row">
        <Link href="/contact" className="btn btn-primary">
          Get In Touch
        </Link>
        <Link href="/services" className="btn btn-outline">
          All Services →
        </Link>
      </div>
    </div>
  )
}
