"use client"

export default function ContactForm() {
  return (
    <div className="form-card" data-reveal="1">
      <h2 style={{ marginBottom: 8 }}>Send a message</h2>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 28 }}>
        Tell me a bit about the project or role — timeline and budget if you have them, so I can give a useful reply
        instead of a generic one.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert("This is a visual prototype — connect this form to a real backend endpoint before launch.")
        }}
      >
        <div className="form-row">
          <div className="field">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="field">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
        <p className="form-note">
          This form is a visual prototype — wire it to a real endpoint (e.g. an API route + email service) before
          going live.
        </p>
      </form>
    </div>
  )
}
