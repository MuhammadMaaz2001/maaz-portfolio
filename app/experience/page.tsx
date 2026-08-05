import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import PageIntro from "@/components/experience/page-intro"
import MiniStats from "@/components/experience/mini-stats"
import CareerSlider from "@/components/experience/career-slider"
import ExpHistory from "@/components/experience/exp-history"
import Reflection from "@/components/experience/reflection"

export const metadata: Metadata = {
  title: "Work Experience | Muhammad Maaz — Full Stack Developer",
  description:
    "A timeline of Muhammad Maaz's professional experience across BricketX, UTF-Labs, BRB Group, and more — building scalable React, Next.js, and Node.js applications.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    type: "website",
    title: "Work Experience | Muhammad Maaz",
    description: "Professional experience as a Full Stack Developer across BricketX, UTF-Labs, BRB Group, and more.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/experience",
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
      name: "Experience",
      item: "https://muhammadmaazportfolio-pied.vercel.app/experience",
    },
  ],
}

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammad Maaz",
    hasOccupation: [
      {
        "@type": "Role",
        roleName: "Full Stack Developer (MERN | Next.js)",
        startDate: "2026-04",
        worksFor: { "@type": "Organization", name: "BricketX PK" },
      },
      {
        "@type": "Role",
        roleName: "Next.js & React Developer",
        startDate: "2025-10",
        endDate: "2026-04",
        worksFor: { "@type": "Organization", name: "UTF-Labs" },
      },
      {
        "@type": "Role",
        roleName: "React Development",
        startDate: "2024-08",
        endDate: "2025-10",
        worksFor: { "@type": "Organization", name: "BRB Group" },
      },
    ],
  },
}

export default function ExperiencePage() {
  return (
    <div className="experience-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Experience" }]} />
        <PageIntro />
        <MiniStats />
        <CareerSlider />
        <ExpHistory />
        <Reflection />
        <section className="inner-section" style={{ paddingBottom: 0 }}>
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
        </section>
      </div>
    </div>
  )
}
