import Link from "next/link"

export default function BuiltOnExperience({ links }: { links: { href: string; label: string }[] }) {
  return (
    <section>
      <h2>Built On Real Experience</h2>
      <div className="related-box">
        <span className="label">See it in practice</span>
        <div className="related-row">
          {links.map((link) => (
            <Link href={link.href} className="related-link" key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
