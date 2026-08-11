export default function RoleHead({
  current,
  dateRange,
  typeTag,
  title,
  company,
  companyHref,
  lede,
}: {
  current?: boolean
  dateRange: string
  typeTag: string
  title: string
  company: string
  companyHref?: string
  lede: string
}) {
  return (
    <div className="role-head" data-reveal="">
      <div className="meta-row">
        {current && <span className="tag current">Current Role</span>}
        <span className="tag">{dateRange}</span>
        <span className="tag">{typeTag}</span>
      </div>
      <h1>{title}</h1>
      <div className="company">
        {companyHref ? (
          <a href={companyHref} target="_blank" rel="noopener noreferrer">
            {company} →
          </a>
        ) : (
          company
        )}
      </div>
      <p className="lede">{lede}</p>
    </div>
  )
}
