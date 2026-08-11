import type { Metadata } from "next"
import { Fragment } from "react"
import { notFound } from "next/navigation"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import { EXPERIENCES } from "@/components/experience/detail/experience-data"
import RoleHead from "@/components/experience/detail/role-head"
import CaseSidebar from "@/components/experience/detail/case-sidebar"
import PrevNext from "@/components/experience/detail/prev-next"

export function generateStaticParams() {
  return Object.keys(EXPERIENCES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const exp = EXPERIENCES[slug]
  if (!exp) return {}

  return {
    title: exp.metaTitle,
    description: exp.metaDescription,
    alternates: {
      canonical: `/experience/${exp.slug}`,
    },
    openGraph: {
      type: "article",
      title: exp.metaTitle,
      description: exp.ogDescription,
      url: `https://muhammadmaazportfolio-pied.vercel.app/experience/${exp.slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exp = EXPERIENCES[slug]
  if (!exp) notFound()

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadmaazportfolio-pied.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Experience", item: "https://muhammadmaazportfolio-pied.vercel.app/experience" },
      {
        "@type": "ListItem",
        position: 3,
        name: exp.orgName,
        item: `https://muhammadmaazportfolio-pied.vercel.app/experience/${exp.slug}`,
      },
    ],
  }

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: exp.orgName,
    ...(exp.companyHref ? { url: exp.companyHref } : {}),
    employee: { "@type": "Person", name: "Muhammad Maaz", jobTitle: exp.jobTitle },
  }

  return (
    <div className="experience-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Experience", href: "/experience" }, { label: exp.orgName }]} />

        <RoleHead
          current={exp.current}
          dateRange={exp.dateRange}
          typeTag={exp.typeTag}
          title={exp.title}
          company={exp.company}
          companyHref={exp.companyHref}
          lede={exp.lede}
        />

        <div className="case-shell">
          <CaseSidebar
            navItems={exp.sections.map((s) => ({ id: s.id, label: String(s.title) }))}
            stack={exp.stack}
            company={
              exp.companyHref && exp.companyDomain
                ? { name: exp.company, url: exp.companyHref, domain: exp.companyDomain }
                : undefined
            }
          />

          <article className="case-main">
            {exp.sections.map((section) => (
              <Fragment key={section.id}>
                <h2 id={section.id}>
                  <span className="num">{section.num}</span>
                  {section.title}
                </h2>
                {section.content}
              </Fragment>
            ))}

            <PrevNext left={exp.prev} right={exp.next} />
          </article>
        </div>
      </div>
    </div>
  )
}
