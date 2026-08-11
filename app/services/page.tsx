import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import BentoGrid from "@/components/services/bento-grid"
import MoreCaps from "@/components/services/more-caps"

export const metadata: Metadata = {
  title: "Full Stack Development Services | Muhammad Maaz",
  description:
    "Hire Muhammad Maaz for full-stack web development, dashboard engineering, AI integration, business automation, and internal tooling — freelance and contract projects welcome.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    title: "Services | Muhammad Maaz",
    description: "Full-stack development, dashboards, AI integration, automation, and internal tools.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/services",
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
      name: "Services",
      item: "https://muhammadmaazportfolio-pied.vercel.app/services",
    },
  ],
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Full Stack Web Development, Dashboard Engineering, AI Integration, Business Automation, Internal Tools, Technical Consulting",
  provider: { "@type": "Person", name: "Muhammad Maaz" },
  areaServed: "Remote",
  description:
    "Full-stack web development, dashboard engineering, AI-powered interfaces, business process automation, internal business tools, and technical consulting.",
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Services" }]} />

        <div className="page-head">
          <span className="eyebrow">Work With Me</span>
          <h1 data-reveal="">
            Full-stack work, <span className="grad">scoped and shipped.</span>
          </h1>
          <p className="page-sub" data-reveal="1">
            I take on select freelance and contract projects alongside full-time work — full-stack builds,
            dashboards, AI-powered interfaces, business automation, and internal tools. Below is what I actually
            offer, based on real work I&apos;ve shipped.
          </p>
        </div>

        <BentoGrid />
        <MoreCaps />

        <CtaBand
          title="Have a project in mind? Let's talk scope."
          description="Most freelance builds run 2–6 weeks from discovery to launch."
          buttons={[
            { label: "Email Me", href: "mailto:maazm6387@gmail.com", variant: "primary", external: true },
            { label: "See Past Work →", href: "/projects", variant: "outline" },
          ]}
        />
      </div>
    </div>
  )
}
