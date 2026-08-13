import Link from "next/link"

export type Crumb = { label: string; href?: string }

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="pt-7 text-[0.85rem] text-ink-muted">
      <Link href="/" className="hover:text-ink-gold">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label}>
          <span className="mx-2 opacity-40">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-ink-gold">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  )
}
