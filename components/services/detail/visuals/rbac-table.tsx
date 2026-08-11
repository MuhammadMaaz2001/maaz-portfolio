const ROWS: { role: string; perm: "full" | "read" | "none"; label: string }[] = [
  { role: "Super Admin", perm: "full", label: "Full Access" },
  { role: "Marketing Admin", perm: "read", label: "Read Only" },
  { role: "IT Admin", perm: "full", label: "Full Access" },
  { role: "Employee", perm: "none", label: "No Access" },
]

export default function RbacTable() {
  return (
    <>
      {ROWS.map((row) => (
        <div className="rbac-row" key={row.role}>
          <span className="role">{row.role}</span>
          <span className={`perm ${row.perm}`}>{row.label}</span>
        </div>
      ))}
    </>
  )
}
