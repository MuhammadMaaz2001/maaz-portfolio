import Link from "next/link"

export default function PrevNext({
  left,
  right,
}: {
  left: { href: string; label: string }
  right: { href: string; label: string }
}) {
  return (
    <div className="prev-next">
      <Link href={left.href}>{left.label}</Link>
      <Link href={right.href}>{right.label}</Link>
    </div>
  )
}
