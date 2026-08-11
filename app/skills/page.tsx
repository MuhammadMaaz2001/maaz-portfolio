import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import SkillList from "@/components/skills/skill-list"

export const metadata: Metadata = {
  title: "Technical Skills | Muhammad Maaz — MERN, Next.js, FastAPI",
  description:
    "Full breakdown of Muhammad Maaz's technical skill set: React, Next.js, Node.js, MongoDB, TypeScript, FastAPI, D3.js, and more.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    type: "website",
    title: "Technical Skills | Muhammad Maaz",
    description: "React, Next.js, Node.js, MongoDB, TypeScript, FastAPI, D3.js, and more.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/skills",
  },
  twitter: {
    card: "summary_large_image",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadmaazportfolio-pied.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Skills", item: "https://muhammadmaazportfolio-pied.vercel.app/skills" },
  ],
}

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammad Maaz",
    knowsAbout: [
      "React.js",
      "Vue 3",
      "Next.js",
      "Svelte.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "D3.js",
      "Recharts",
      "n8n",
      "Zapier",
      "Git",
      "JIRA",
      "Agile",
      "Scrum",
    ],
  },
}

export default function SkillsPage() {
  return (
    <div className="skills-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Skills" }]} />

        <div className="page-head">
          <span className="eyebrow">Toolbox</span>
          <h1 data-reveal="">
            Technical <span className="grad">skills.</span>
          </h1>
          <p className="page-sub" data-reveal="1">
            Grouped by where each one actually gets used — not just a tag cloud. Every category below links back to
            the real projects and roles that put it into practice.
          </p>
        </div>

        <section className="inner-section">
          <SkillList />
        </section>

        <section className="inner-section" style={{ paddingBottom: 80 }}>
          <CtaBand
            title="Want to see these applied?"
            description="Every skill above links to real, shipped work — not just a claim."
            buttons={[
              { label: "View Projects", href: "/projects", variant: "primary" },
              { label: "Get In Touch →", href: "/contact", variant: "outline" },
            ]}
          />
        </section>
      </div>
    </div>
  )
}
