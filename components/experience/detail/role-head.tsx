export default function RoleHead({
  dateRange,
  typeTag,
  title,
  company,
  lede,
}: {
  dateRange: string
  typeTag: string
  title: string
  company: string
  lede: string
}) {
  return (
    <div className="role-head" data-reveal="">
      <div className="meta-row">
        <span className="tag">{dateRange}</span>
        <span className="tag">{typeTag}</span>
      </div>
      <h1>{title}</h1>
      <div className="company">{company}</div>
      <p className="lede">{lede}</p>
    </div>
  )
}
