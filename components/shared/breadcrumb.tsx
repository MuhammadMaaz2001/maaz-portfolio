import Link from "next/link"

export type Crumb = { label: string; href?: string }

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label}>
          <span className="sep">/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </div>
  )
}
