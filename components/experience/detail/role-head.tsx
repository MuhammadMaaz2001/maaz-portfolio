export default function RoleHead({
  current,
  dateRange,
  typeTag,
  title,
  company,
  companyHref,
  companyLogo,
  lede,
}: {
  current?: boolean
  dateRange: string
  typeTag: string
  title: string
  company: string
  companyHref?: string
  companyLogo?: string
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
      <div className="flex items-center gap-3">
        {companyLogo && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={companyLogo}
            alt={`${company} logo`}
            className="h-9 w-9 flex-shrink-0 rounded-lg border border-ink-line bg-white object-contain p-1"
          />
        )}
        <div className="company">
          {companyHref ? (
            <a href={companyHref} target="_blank" rel="noopener noreferrer">
              {company} →
            </a>
          ) : (
            company
          )}
        </div>
      </div>
      <p className="lede">{lede}</p>
    </div>
  )
}
