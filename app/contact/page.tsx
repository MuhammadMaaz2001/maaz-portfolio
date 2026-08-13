import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/home/scroll-reveal"
import Breadcrumb from "@/components/shared/breadcrumb"
import CtaBand from "@/components/shared/cta-band"
import ContactInfo from "@/components/contact/contact-info"
import ContactForm from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Muhammad Maaz | Full Stack Developer",
  description:
    "Get in touch with Muhammad Maaz for full-time roles, freelance projects, or collaboration — Karachi-based Full Stack Developer available on-site, hybrid, or remote.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Muhammad Maaz | Full Stack Developer",
    description: "Get in touch for full-time roles, freelance projects, or collaboration.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/contact",
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
      name: "Contact",
      item: "https://muhammadmaazportfolio-pied.vercel.app/contact",
    },
  ],
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  about: {
    "@type": "Person",
    name: "Muhammad Maaz",
    email: "maazm6387@gmail.com",
    telephone: "+92-310-2400211",
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  },
}

const STEPS = [
  { num: "01", title: "A reply within 24–48h", desc: "Every message gets a real, personal reply — not an autoresponder." },
  { num: "02", title: "A short call", desc: "If it's a good fit, we talk through scope, timeline, and what success looks like." },
  { num: "03", title: "Next steps", desc: "For roles, that's usually an interview. For projects, a written scope and estimate." },
]

export default function ContactPage() {
  return (
    <div className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <ScrollReveal />
      <div className="wrap">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="page-head">
          <span className="eyebrow">Get In Touch</span>
          <h1 data-reveal="">
            Let&apos;s build <span className="grad">something together.</span>
          </h1>
          <p className="page-sub" data-reveal="1">
            Whether it&apos;s a full-time role, a freelance project, or just a technical question — I read every
            message myself and reply within 24–48 hours.
          </p>
        </div>

        <section className="inner-section">
          <div className="mb-[90px] grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>

        <section className="inner-section">
          <span className="section-tag" data-reveal="">
            What Happens Next
          </span>
          <h2 data-reveal="">After you hit send</h2>
          <div className="process-grid">
            {STEPS.map((step, i) => (
              <div className="step" data-reveal={i === 0 ? "" : String(i)} key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="inner-section">
          <div
            className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] border border-ink-line bg-gradient-to-br from-ink-bg-2 to-ink-bg-3 p-10"
            data-reveal=""
          >
            <div>
              <h2 className="mb-2">Have a quick question first?</h2>
              <p className="max-w-[50ch] text-ink-muted">
                Availability, rates, tech stack, remote work — most common questions are already answered.
              </p>
            </div>
            <Link href="/faq" className="btn-outline inline-flex flex-shrink-0 rounded-full px-[22px] py-3 text-[0.88rem] font-semibold">
              View FAQ →
            </Link>
          </div>
        </section>

        <section className="inner-section" style={{ paddingBottom: 80 }}>
          <CtaBand
            title="Still deciding? Just send a note."
            description="No pitch needed — even a one-line email is enough to start the conversation."
            buttons={[{ label: "Email Me Directly", href: "mailto:maazm6387@gmail.com", variant: "primary", external: true }]}
          />
        </section>
      </div>
    </div>
  )
}
