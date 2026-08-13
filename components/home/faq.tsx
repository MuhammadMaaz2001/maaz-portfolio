"use client"

import { useState } from "react"
import SectionHeading from "@/components/shared/section-heading"

const FAQS = [
  {
    q: "What tech stack do you specialize in?",
    a: "Primarily the MERN stack and Next.js — React, Node.js, MongoDB, and TypeScript — with additional experience in FastAPI, PostgreSQL, and Vue/Svelte for specific projects.",
  },
  {
    q: "Are you available for freelance or remote work?",
    a: "Yes — open to full-time, freelance, and contract work, on-site in Karachi, hybrid, or fully remote.",
  },
  {
    q: "Do you handle both frontend and backend?",
    a: "Yes — full ownership from database design and API development through to deployed, production-ready UI.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Depends on scope, but most freelance builds run 2–6 weeks from discovery to launch. Happy to scope your project on a quick call.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq">
      <div className="wrap">
        <SectionHeading
          tag="Questions"
          title="Frequently asked."
          sub="Straight answers to the questions recruiters and clients ask most before reaching out."
        />

        <div className="max-w-[800px]" data-reveal="">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div className="border-b border-ink-line" key={faq.q}>
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-none py-6 text-left font-display text-[1.05rem] font-semibold text-ink-text"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {faq.q}
                  <span
                    className={`flex-shrink-0 text-[1.4rem] text-ink-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-[350ms] ease-in-out ${isOpen ? "max-h-[200px]" : "max-h-0"}`}>
                  <p className="max-w-[65ch] pb-6 text-[0.95rem] text-ink-muted">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
