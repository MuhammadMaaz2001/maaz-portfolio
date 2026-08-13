import SectionHeading from "@/components/shared/section-heading"

const STEPS = [
  { num: "01", title: "Discover", desc: "Understand the requirements, users, and technical constraints.", reveal: "" },
  {
    num: "02",
    title: "Design & Architect",
    desc: "Plan data models, API structure, and component architecture.",
    reveal: "1",
  },
  { num: "03", title: "Build", desc: "Implement with clean, type-safe, tested code.", reveal: "2" },
  { num: "04", title: "Ship & Support", desc: "Deploy, monitor performance, and iterate post-launch.", reveal: "3" },
]

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <SectionHeading tag="How I Work" title="From brief to production, in four steps." sub="A predictable process — so you always know what's next." />

        <div className="relative grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-[26px] lg:before:h-px lg:before:bg-ink-line lg:before:content-['']">
          {STEPS.map((step) => (
            <div className="relative lg:pr-5" data-reveal={step.reveal} key={step.num}>
              <div className="relative z-10 mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-ink-gold bg-ink-bg-2 font-display font-bold text-ink-gold">
                {step.num}
              </div>
              <h3 className="mb-2.5 font-display text-[1.05rem] font-bold">{step.title}</h3>
              <p className="text-[0.88rem] text-ink-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
