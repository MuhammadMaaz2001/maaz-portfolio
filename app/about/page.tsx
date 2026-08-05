import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import AboutHero from "@/components/about/about-hero"
import Education from "@/components/about/education"
import Journey from "@/components/about/journey"
import Certifications from "@/components/about/certifications"
import Research from "@/components/about/research"
import Tools from "@/components/about/tools"
import BeyondCode from "@/components/about/beyond-code"
import HowIWork from "@/components/about/how-i-work"
import AboutCta from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Muhammad Maaz | Full Stack Developer & Software Engineer",
  description:
    "Learn about Muhammad Maaz's background in software engineering, technical skills across MERN, Next.js, and FastAPI, and his path into full-stack development.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    title: "About Muhammad Maaz | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB — background, education, and journey.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/about",
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
    { "@type": "ListItem", position: 2, name: "About", item: "https://muhammadmaazportfolio-pied.vercel.app/about" },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Maaz",
  url: "https://muhammadmaazportfolio-pied.vercel.app/",
  jobTitle: "Full Stack Developer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Sir Syed University of Engineering & Technology" },
  knowsAbout: ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript", "FastAPI", "MERN Stack"],
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "About" }]} />
        <AboutHero />
        <Education />
        <Journey />
        <Certifications />
        <Research />
        <Tools />
        <BeyondCode />
        <HowIWork />
        <AboutCta />
      </div>
    </div>
  )
}
