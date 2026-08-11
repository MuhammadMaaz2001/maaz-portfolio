import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import { SERVICES } from "@/components/services/detail/services-data"
import ServiceHero from "@/components/services/detail/service-hero"
import WhatsIncluded from "@/components/services/detail/whats-included"
import BuiltOnExperience from "@/components/services/detail/built-on-experience"
import ServiceCta from "@/components/services/detail/service-cta"

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES[slug]
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://muhammadmaazportfolio-pied.vercel.app/services/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES[slug]
  if (!service) notFound()

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadmaazportfolio-pied.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://muhammadmaazportfolio-pied.vercel.app/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: service.breadcrumbLabel,
        item: `https://muhammadmaazportfolio-pied.vercel.app/services/${service.slug}`,
      },
    ],
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.serviceType,
    provider: { "@type": "Person", name: "Muhammad Maaz" },
    areaServed: "Remote",
    description: service.metaDescription,
  }

  return (
    <div className="service-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.breadcrumbLabel }]} />

        <ServiceHero
          serviceNum={service.serviceNum}
          title={service.title}
          lede={service.lede}
          chips={service.chips}
          fileLabel={service.fileLabel}
          visual={service.visual}
        />

        <WhatsIncluded points={service.points} />

        {service.related && <BuiltOnExperience links={service.related} />}

        <ServiceCta title={service.ctaTitle} desc={service.ctaDesc} />
      </div>
    </div>
  )
}
