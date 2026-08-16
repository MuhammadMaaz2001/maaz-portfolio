"use client"

import { useState } from "react"
import { toast } from "sonner"

const inputClass =
  "w-full rounded-[10px] border border-ink-line bg-ink-bg-3 px-3.5 py-[13px] font-body text-[0.92rem] text-ink-text focus:border-ink-gold focus:outline-none"
const labelClass = "mb-2 block text-[0.8rem] font-medium text-ink-muted"

type Status = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)
    const fname = formData.get("fname")
    const lname = formData.get("lname")

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      name: `${fname} ${lname}`.trim(),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message") || "(No message provided)",
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (result.success) {
        setStatus("success")
        form.reset()
        toast.success("Message sent", {
          description: "Thanks for reaching out — I'll reply within 24–48 hours.",
        })
      } else {
        setStatus("error")
        toast.error("Couldn't send your message", {
          description: "Please try again, or email me directly instead.",
        })
      }
    } catch {
      setStatus("error")
      toast.error("Couldn't send your message", {
        description: "Please try again, or email me directly instead.",
      })
    }
  }

  return (
    <div className="rounded-2xl border border-ink-line bg-ink-bg-2 p-9" data-reveal="1">
      <h2 className="mb-2">Send a message</h2>
      <p className="mb-7 text-[0.9rem] text-ink-muted">
        Tell me a bit about the project or role — timeline and budget if you have them, so I can give a useful reply
        instead of a generic one.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fname" className={labelClass}>
              First Name
            </label>
            <input type="text" id="fname" name="fname" className={inputClass} required />
          </div>
          <div>
            <label htmlFor="lname" className={labelClass}>
              Last Name
            </label>
            <input type="text" id="lname" name="lname" className={inputClass} required />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input type="email" id="email" name="email" className={inputClass} required />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input type="text" id="subject" name="subject" className={inputClass} required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-ink-muted/70">(optional)</span>
          </label>
          <textarea id="message" name="message" className={`${inputClass} min-h-[140px] resize-y`} />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="cursor-pointer rounded-full border-none bg-ink-gold px-7 py-3.5 font-body text-[0.92rem] font-semibold text-[#161208] transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-[#dac079] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  )
}
