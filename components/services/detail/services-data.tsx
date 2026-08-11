import type { ReactNode } from "react"
import FlowVis from "./visuals/flow-vis"
import ReviewList from "./visuals/review-list"
import RbacTable from "./visuals/rbac-table"
import ChatLog from "./visuals/chat-log"
import DashPreview from "./visuals/dash-preview"

export type ServiceDetail = {
  slug: string
  serviceNum: string
  breadcrumbLabel: string
  title: ReactNode
  titlePlain: string
  metaTitle: string
  metaDescription: string
  serviceType: string
  lede: string
  chips: string[]
  fileLabel: string
  visual: ReactNode
  points: { strong: string; rest: ReactNode }[]
  related?: { href: string; label: string }[]
  ctaTitle: string
  ctaDesc: string
}

export const SERVICES: Record<string, ServiceDetail> = {
  "dashboard-development": {
    slug: "dashboard-development",
    serviceNum: "02",
    breadcrumbLabel: "Dashboard & Data Visualization",
    title: (
      <>
        Dashboard &amp; Data Visualization
      </>
    ),
    titlePlain: "Dashboard & Data Visualization",
    metaTitle: "Dashboard Development Services | React, D3.js & Recharts — Muhammad Maaz",
    metaDescription:
      "Custom data dashboards built with React, D3.js, and Recharts — real-time metrics, clean UI, and fast performance.",
    serviceType: "Dashboard & Data Visualization",
    lede: "Custom dashboards for tracking whatever metrics actually matter to your business — built to stay readable and fast even as the underlying data grows.",
    chips: ["D3.js", "Recharts", "React", "Real-Time"],
    fileLabel: "campaign-dashboard.tsx",
    visual: <DashPreview />,
    points: [
      { strong: "Custom chart components", rest: "with D3.js for anything off-the-shelf libraries can't handle well." },
      { strong: "Faster builds", rest: "with Recharts when a well-tested, standard solution is the better call." },
      { strong: "Live/real-time data handling", rest: "where the dashboard needs to update without a page refresh." },
      { strong: "Clean, readable UI", rest: "— the goal is always insight at a glance." },
    ],
    related: [
      { href: "/projects/meta-ads-campaign-dashboard", label: "Meta Ads Campaign Dashboard" },
      { href: "/experience/dimensional-systems", label: "Fintech Dashboards — Dimensional Sys" },
    ],
    ctaTitle: "Need a dashboard built?",
    ctaDesc: "Tell me what data you're trying to make sense of.",
  },
  "ai-integration": {
    slug: "ai-integration",
    serviceNum: "03",
    breadcrumbLabel: "AI Integration & AI-Powered Interfaces",
    title: <>AI Integration &amp; AI-Powered Interfaces</>,
    titlePlain: "AI Integration & AI-Powered Interfaces",
    metaTitle: "AI Integration Services | Chat Agents & AI-Powered Frontends — Muhammad Maaz",
    metaDescription:
      "Frontend development for AI-driven tools — chat/agent interfaces, rendering AI responses reliably, and analysis views built on AI output.",
    serviceType: "AI Integration & AI-Powered Interfaces",
    lede: "Building the frontend layer for AI-driven tools is different from a standard CRUD interface — the UI has to handle conversational, less predictable input and still feel reliable.",
    chips: ["AI Agents", "Chat UI", "WebSockets"],
    fileLabel: "agent-chat.tsx",
    visual: <ChatLog />,
    points: [
      { strong: "Chat / agent interfaces", rest: "— frontends for bots that hold conversation history and respond in real time." },
      { strong: "Rendering AI-generated output", rest: "reliably — handling partial responses, loading states, and inconsistent formatting." },
      { strong: "Analysis views built on AI output", rest: "— turning generated text or data into charts and visual summaries." },
      { strong: "Real-time delivery", rest: "via WebSockets where the agent's output needs to stream in live." },
    ],
    related: [
      { href: "/experience/brb-group", label: "AI Bots & Agent Interfaces — BRB Group" },
      { href: "/projects/urdu-ibdaa", label: "Urdu Ibdaa — AI Paraphrasing" },
    ],
    ctaTitle: "Building something AI-powered?",
    ctaDesc: "Let's talk about the frontend for your AI feature.",
  },
  "business-automation": {
    slug: "business-automation",
    serviceNum: "04",
    breadcrumbLabel: "Business Process Automation",
    title: <>Business Process Automation</>,
    titlePlain: "Business Process Automation",
    metaTitle: "Business Process Automation Services | Zapier & n8n — Muhammad Maaz",
    metaDescription:
      "Automating manual business workflows with Zapier and n8n — connecting systems, closing data-visibility gaps, and cutting out repetitive manual work.",
    serviceType: "Business Process Automation",
    lede: "A lot of manual, repetitive work in a growing business comes down to disconnected systems. I build the automation layer that connects them.",
    chips: ["Zapier", "n8n", "Webhooks"],
    fileLabel: "workflow.json",
    visual: <FlowVis />,
    points: [
      { strong: "Workflow automation", rest: "— triggering actions across tools automatically instead of manual data entry." },
      {
        strong: "Lead capture & follow-up automation",
        rest: "— new leads synced live to the team the moment they come in, instead of sitting unseen in an inbox.",
      },
      { strong: "Closing data-visibility gaps", rest: "— pushing data from a third-party platform into your own database via webhooks." },
      { strong: "Notification systems", rest: "— automated emails triggered by real events (approvals, new leads, expiring resources)." },
      { strong: "Lightweight integrations", rest: "that don't require a full backend service for a single automation." },
    ],
    related: [
      { href: "/experience/bricketx-pk", label: "Transaction & Lead Automation — BricketX PK" },
      { href: "/experience/utf-labs", label: "n8n Workflows — UTF-Labs" },
    ],
    ctaTitle: "Got a manual process worth automating?",
    ctaDesc: "If it's repetitive and disconnected, it's probably automatable.",
  },
  "internal-tools": {
    slug: "internal-tools",
    serviceNum: "05",
    breadcrumbLabel: "Internal Business Tools & Admin Systems",
    title: <>Internal Business Tools &amp; Admin Systems</>,
    titlePlain: "Internal Business Tools & Admin Systems",
    metaTitle: "Internal Tools & Admin Systems Development | Muhammad Maaz",
    metaDescription:
      "HR systems, IT management tools, and file/document platforms with role-based access control — the operational software a growing team needs.",
    serviceType: "Internal Business Tools & Admin Systems",
    lede: "The unglamorous software that actually runs a business day to day — HR platforms, IT management, file storage with proper permissions.",
    chips: ["RBAC", "Admin Panels", "React"],
    fileLabel: "access-control.tsx",
    visual: <RbacTable />,
    points: [
      { strong: "Role-based access control (RBAC)", rest: "— different permission levels across different user roles." },
      { strong: "Admin and user panels", rest: "for the same system, tailored to what each audience needs." },
      { strong: "Process automation within the tool itself", rest: "— approval flows, notifications, and status tracking." },
      { strong: "File and document management", rest: "with secure, permission-based storage." },
    ],
    related: [{ href: "/experience/brb-group", label: "HR, ITMS & File Management Systems — BRB Group" }],
    ctaTitle: "Need internal tooling built?",
    ctaDesc: "If your team is running on spreadsheets and email, let's fix that.",
  },
  "technical-consulting": {
    slug: "technical-consulting",
    serviceNum: "06",
    breadcrumbLabel: "Technical Consulting",
    title: <>Technical Consulting</>,
    titlePlain: "Technical Consulting",
    metaTitle: "Technical Consulting Services | Code Review & Architecture — Muhammad Maaz",
    metaDescription:
      "Code review, architecture feedback, and project scoping — lighter-weight technical consulting for teams that need a second set of eyes.",
    serviceType: "Technical Consulting",
    lede: "Lighter-weight engagements for teams that need a second set of eyes rather than a full build — scoped honestly to what I can actually add value on.",
    chips: ["Code Review", "Architecture", "Scoping"],
    fileLabel: "review-notes.md",
    visual: <ReviewList />,
    points: [
      { strong: "Code review", rest: "— a focused pass on a specific feature or codebase, not a vague \"looks good.\"" },
      { strong: "Architecture feedback", rest: "— sanity-checking a data model, API structure, or system design decision before it's built." },
      { strong: "Project scoping", rest: "— helping break down a vague idea into a realistic technical plan and timeline." },
    ],
    ctaTitle: "Need a second opinion?",
    ctaDesc: "A short conversation is often enough to know if it's a fit.",
  },
}
