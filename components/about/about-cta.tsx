import CtaBand from "@/components/shared/cta-band"

export default function AboutCta() {
  return (
    <section className="inner-section" style={{ paddingBottom: 80 }}>
      <CtaBand
        title="Want to see the work behind this?"
        description="Explore real projects and a full role-by-role career history."
        buttons={[
          { label: "View Projects", href: "/projects", variant: "primary" },
          { label: "View Experience →", href: "/experience", variant: "outline" },
        ]}
      />
    </section>
  )
}
