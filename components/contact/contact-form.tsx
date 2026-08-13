"use client"

const inputClass =
  "w-full rounded-[10px] border border-ink-line bg-ink-bg-3 px-3.5 py-[13px] font-body text-[0.92rem] text-ink-text focus:border-ink-gold focus:outline-none"
const labelClass = "mb-2 block text-[0.8rem] font-medium text-ink-muted"

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-ink-line bg-ink-bg-2 p-9" data-reveal="1">
      <h2 className="mb-2">Send a message</h2>
      <p className="mb-7 text-[0.9rem] text-ink-muted">
        Tell me a bit about the project or role — timeline and budget if you have them, so I can give a useful reply
        instead of a generic one.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert("This is a visual prototype — connect this form to a real backend endpoint before launch.")
        }}
      >
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fname" className={labelClass}>
              First Name
            </label>
            <input type="text" id="fname" name="fname" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lname" className={labelClass}>
              Last Name
            </label>
            <input type="text" id="lname" name="lname" className={inputClass} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input type="email" id="email" name="email" className={inputClass} />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input type="text" id="subject" name="subject" className={inputClass} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea id="message" name="message" className={`${inputClass} min-h-[140px] resize-y`} />
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-full border-none bg-ink-gold px-7 py-3.5 font-body text-[0.92rem] font-semibold text-[#161208] transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-[#dac079]"
        >
          Send Message
        </button>
        <p className="mt-3.5 text-[0.8rem] text-ink-muted">
          This form is a visual prototype — wire it to a real endpoint (e.g. an API route + email service) before
          going live.
        </p>
      </form>
    </div>
  )
}
