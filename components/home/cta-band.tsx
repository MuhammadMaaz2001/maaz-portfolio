import CtaBand from "@/components/shared/cta-band"

export default function HomeCtaBand() {
  return (
    <section id="contact">
      <div className="wrap">
        <CtaBand
          title="Have a project in mind? Let's build it."
          description="Open to full-time roles, freelance work, and collaboration."
          buttons={[
            { label: "Email Me", href: "mailto:maazm6387@gmail.com", variant: "primary", external: true },
            {
              label: "LinkedIn →",
              href: "https://www.linkedin.com/in/muhammad-maaz-3a1838208/",
              variant: "outline",
              external: true,
            },
          ]}
        />
      </div>
    </section>
  )
}
