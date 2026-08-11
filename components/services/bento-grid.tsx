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
    <div className="group">
      <div className="group-head" data-reveal="">
        <span className="group-label">{label}</span>
        <span className="group-line" />
      </div>
      <div className="bento-grid">
        {services.map((s) => (
          <Link className="bento-card" href={s.href} data-reveal={s.reveal} key={s.href}>
            <div className="bento-ghost">{s.num}</div>
            <MiniVisual kind={s.visual} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="chip-row">
              {s.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <span className="card-link">Learn more →</span>
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
