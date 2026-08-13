import Link from "next/link"
import MiniVisual, { type MiniVisualKind } from "./mini-visual"

type Service = {
  num: string
  href: string
  visual: MiniVisualKind
  title: string
  desc: string
  chips: string[]
  reveal: string
}

const CORE_SERVICES: Service[] = [
  {
    num: "01",
    href: "/services/full-stack-development",
    visual: "stack",
    title: "Full Stack Development",
    desc: "End-to-end apps — database schema, API design, and a deployed, production-ready frontend.",
    chips: ["React", "Next.js", "Node.js"],
    reveal: "",
  },
  {
    num: "02",
    href: "/services/dashboard-development",
    visual: "dash",
    title: "Dashboard & Data Visualization",
    desc: "Custom dashboards for the metrics that actually matter, built with D3.js and Recharts.",
    chips: ["D3.js", "Recharts"],
    reveal: "1",
  },
  {
    num: "03",
    href: "/services/ai-integration",
    visual: "chat",
    title: "AI Integration & AI-Powered Interfaces",
    desc: "Chat/agent frontends and reliable interfaces for AI-generated output.",
    chips: ["AI Agents", "WebSockets"],
    reveal: "2",
  },
]

const AUTOMATION_SERVICES: Service[] = [
  {
    num: "04",
    href: "/services/business-automation",
    visual: "flow",
    title: "Business Process Automation",
    desc: "Zapier & n8n workflows that connect systems and close data-visibility gaps.",
    chips: ["Zapier", "n8n"],
    reveal: "",
  },
  {
    num: "05",
    href: "/services/internal-tools",
    visual: "table",
    title: "Internal Business Tools & Admin Systems",
    desc: "HR, IT management, and file platforms with role-based access control.",
    chips: ["RBAC", "Admin Panels"],
    reveal: "1",
  },
  {
    num: "06",
    href: "/services/technical-consulting",
    visual: "check",
    title: "Technical Consulting",
    desc: "Code review, architecture feedback, and project scoping — a second set of eyes.",
    chips: ["Code Review", "Architecture"],
    reveal: "2",
  },
]

function ServiceGroup({ label, services }: { label: string; services: Service[] }) {
  return (
    <div className="pb-14">
      <div className="mb-6 flex items-baseline gap-3.5" data-reveal="">
        <span className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-ink-gold">{label}</span>
        <span className="h-px flex-1 bg-ink-line" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[18px] border border-ink-line bg-ink-bg-2 p-7 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
            href={s.href}
            data-reveal={s.reveal}
            key={s.href}
          >
            <div className="pointer-events-none absolute -top-1.5 right-2.5 font-display text-[5.5rem] font-extrabold leading-none text-ink-gold opacity-[0.06]">
              {s.num}
            </div>
            <MiniVisual kind={s.visual} />
            <h3 className="relative z-[1] mb-2.5 font-display text-[1.1rem] font-bold">{s.title}</h3>
            <p className="relative z-[1] mb-4 flex-grow text-[0.87rem] text-ink-muted">{s.desc}</p>
            <div className="relative z-[1] mb-3.5 flex flex-wrap gap-1.5">
              {s.chips.map((chip) => (
                <span className="rounded-[5px] border border-ink-line px-2.5 py-1 font-mono text-[0.68rem] text-ink-muted" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <span className="relative z-[1] text-[0.84rem] font-semibold text-ink-gold">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function BentoGrid() {
  return (
    <>
      <ServiceGroup label="Core Development" services={CORE_SERVICES} />
      <ServiceGroup label="Automation & Internal Systems" services={AUTOMATION_SERVICES} />
    </>
  )
}
