import type { Metadata } from "next"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import FaqList from "@/components/faq/faq-list"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Muhammad Maaz, Full Stack Developer",
  description:
    "Answers to common questions about Muhammad Maaz's tech stack, availability for freelance work, location, and development process.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    title: "FAQ | Muhammad Maaz",
    description: "Answers to common questions about tech stack, availability, and process.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/faq",
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
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://muhammadmaazportfolio-pied.vercel.app/faq" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's your core tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primarily the MERN stack (MongoDB, Express, React, Node.js) and Next.js, with FastAPI for Python-based backends when a project needs it — usually because it's talking to a machine learning model.",
      },
    },
    {
      "@type": "Question",
      name: "Are you open to freelance or contract work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — alongside full-time work, I take on select freelance and contract projects, particularly dashboards and full-stack builds.",
      },
    },
    {
      "@type": "Question",
      name: "Where are you based, and do you work remote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I'm based in Karachi, Pakistan, and open to on-site, hybrid, or fully remote arrangements.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see your code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects link to a public GitHub repo on their case study page. A few are frontend-only contributions under client NDA, marked clearly, with no code or live demo available.",
      },
    },
    {
      "@type": "Question",
      name: "What's your availability like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I currently work full-time at BricketX PK, so freelance projects run alongside that. Timeline is agreed upfront before any project starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with a fixed price or hourly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on the project — well-defined builds are usually fixed price after scoping, open-ended consulting is typically hourly.",
      },
    },
  ],
}

export default function FaqPage() {
  return (
    <div className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "FAQ" }]} />

        <div className="page-head">
          <span className="eyebrow">Good To Know</span>
          <h1 data-reveal="">
            Frequently Asked <span className="grad">Questions.</span>
          </h1>
          <p className="page-sub" data-reveal="">
            Straight answers to what recruiters and clients ask most before reaching out.
          </p>
        </div>

        <section className="inner-section">
          <FaqList />
        </section>

        <section className="inner-section" style={{ paddingBottom: 80 }}>
          <CtaBand
            title="Still have a question?"
            description="Happy to answer anything not covered here."
            buttons={[
              { label: "Get In Touch", href: "/contact", variant: "primary" },
              { label: "View Services →", href: "/services", variant: "outline" },
            ]}
          />
        </section>
      </div>
    </div>
  )
}
