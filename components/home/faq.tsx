"use client"

import { useState } from "react"

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
        <span className="section-tag" data-reveal="">
          Questions
        </span>
        <h2 data-reveal="">Frequently asked.</h2>
        <p className="section-sub" data-reveal="">
          Straight answers to the questions recruiters and clients ask most before reaching out.
        </p>

        <div className="faq-list" data-reveal="">
          {FAQS.map((faq, i) => (
            <div className={`faq-item${openIndex === i ? " open" : ""}`} key={faq.q}>
              <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                {faq.q} <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
