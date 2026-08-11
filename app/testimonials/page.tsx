import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import TestimonialList from "@/components/testimonials/testimonial-list"

export const metadata: Metadata = {
  title: "Client & Colleague Testimonials | Muhammad Maaz",
  description:
    "What colleagues and collaborators say about working with Muhammad Maaz — Full Stack Developer specializing in React, Next.js, and Node.js.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    type: "website",
    title: "Testimonials | Muhammad Maaz",
    description: "What colleagues and collaborators say about working with Muhammad Maaz.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/testimonials",
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
      name: "Testimonials",
      item: "https://muhammadmaazportfolio-pied.vercel.app/testimonials",
    },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Maaz",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Abbas Raza" },
      reviewBody:
        "Talented frontend developer, fast and reliable across modern technologies including React, Next.js, and Vue.js.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Yousha Shakeel" },
      reviewBody: "Strong understanding of both frontend and backend technologies, great team player.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mohammad Abdullah Nizami" },
      reviewBody: "Deep knowledge of his tech stack, great work ethic, always delivers high-quality work.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sameer K." },
      reviewBody:
        "Professional, technically strong full-stack developer with clear communication and excellent code quality.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Farhan W." },
      reviewBody: "Excellent frontend skills in React.js and Next.js, proactive and responsive throughout the project.",
    },
  ],
}

export default function TestimonialsPage() {
  return (
    <div className="testimonials-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Testimonials" }]} />

        <div className="page-head">
          <span className="eyebrow">Social Proof</span>
          <h1 data-reveal="">
            What people <span className="grad">actually say.</span>
          </h1>
          <p className="page-sub" data-reveal="1">
            Five testimonials from people I&apos;ve directly worked with — three LinkedIn recommendations from
            colleagues, and two verified client reviews from freelance projects. Not curated marketing copy.
          </p>
        </div>

        <section className="inner-section">
          <TestimonialList />
        </section>

        <section className="inner-section" style={{ paddingBottom: 80 }}>
          <CtaBand
            title="Want to work together?"
            description="Open to full-time roles, freelance work, and collaboration."
            buttons={[
              { label: "Get In Touch", href: "/contact", variant: "primary" },
              {
                label: "View on LinkedIn →",
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
