import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import ResumeHead from "@/components/resume/resume-head"
import CvSidebar from "@/components/resume/cv-sidebar"
import CvMain from "@/components/resume/cv-main"

export const metadata: Metadata = {
  title: "Resume | Muhammad Maaz — Full Stack Developer",
  description:
    "View or download Muhammad Maaz's resume — experience, education, certifications, and technical skills in MERN, Next.js, and full-stack development.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "website",
    title: "Resume | Muhammad Maaz",
    description: "Full Stack Developer — experience, education, certifications, and skills.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/resume",
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
    { "@type": "ListItem", position: 2, name: "Resume", item: "https://muhammadmaazportfolio-pied.vercel.app/resume" },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Maaz",
  jobTitle: "Full Stack Developer",
  email: "maazm6387@gmail.com",
  telephone: "+92-310-2400211",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "Sir Syed University of Engineering & Technology" }],
  knowsAbout: ["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "FastAPI", "Vue.js", "TypeScript"],
}

export default function ResumePage() {
  return (
    <div className="resume-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Resume" }]} />
        <ResumeHead />
        <div className="cv-grid">
          <CvSidebar />
          <CvMain />
        </div>
      </div>
    </div>
  )
}
