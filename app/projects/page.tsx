import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import ProjectGrid from "@/components/projects/project-grid"

export const metadata: Metadata = {
  title: "Projects | Muhammad Maaz — React, Next.js & MERN Stack Portfolio",
  description:
    "Explore full-stack projects by Muhammad Maaz including dashboards, AI tools, and e-commerce platforms built with React, Next.js, Node.js, and MongoDB.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    title: "Projects | Muhammad Maaz",
    description: "Full-stack projects built with React, Next.js, Node.js, MongoDB, and FastAPI.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/projects",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://muhammadmaazportfolio-pied.vercel.app/projects",
    },
  ],
}

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects by Muhammad Maaz",
  url: "https://muhammadmaazportfolio-pied.vercel.app/projects",
  about: { "@type": "Person", name: "Muhammad Maaz" },
}

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Projects" }]} />

        <div className="page-head">
          <span className="eyebrow">Selected Work</span>
          <h1 data-reveal="">Projects built to solve real problems.</h1>
          <p className="page-sub" data-reveal="1">
            Full-stack builds across React, Next.js, Node.js, FastAPI, and MongoDB — dashboards, AI tools, and
            real-time applications. Three are frontend-only contributions under client NDA, marked below.
          </p>
          <p className="page-sub" data-reveal="2">
            Each of these started as a real problem rather than a tutorial exercise — a client needing visibility
            into ad spend, a team needing a faster way to review Reddit threads, or simply my own curiosity about how
            a particular system works under the hood. Where I had full ownership, the case study covers the whole
            build: problem, architecture, and outcome. Where I contributed frontend only under an NDA, that&apos;s
            stated plainly rather than implied otherwise. Every case study links back to the role it was built
            during, so you can see the full context — not just the finished screenshot.
          </p>
        </div>

        <ProjectGrid />

        <div className="page-head" style={{ paddingTop: 0 }}>
          <span className="eyebrow">Process</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", marginBottom: 16 }}>How I approach every build</h2>
          <p className="page-sub">
            Whatever the scope, the process stays consistent: understand the actual problem before touching code,
            plan the data model and API shape early so the frontend isn&apos;t fighting the backend later, build with
            type safety and clean structure from the start rather than retrofitting it, and test against real usage
            rather than just the happy path. It&apos;s a small set of habits, but they&apos;re the difference between
            a project that&apos;s easy to extend six months later and one that quietly becomes unmaintainable.
          </p>
        </div>

        <CtaBand
          title="Have a project in mind? Let's build it."
          description="Open to full-time roles, freelance work, and collaboration."
          buttons={[
            { label: "Email Me", href: "mailto:maazm6387@gmail.com", variant: "primary", external: true },
            {
              label: "LinkedIn →",
              href: "https://www.linkedin.com/in/muhammad-maaz-3a1838208/",
              variant: "outline",
              external: true,
            },
          ]}
        />
      </div>
    </div>
  )
}
