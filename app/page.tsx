import ScrollReveal from "@/components/home/scroll-reveal"
import Hero from "@/components/home/hero"
import BadgeStrip from "@/components/home/badge-strip"
import AboutTeaser from "@/components/home/about-teaser"
import Capabilities from "@/components/home/capabilities"
import Why from "@/components/home/why"
import TechStack from "@/components/home/tech-stack"
import Projects from "@/components/home/projects"
import Testimonials from "@/components/home/testimonials"
import Process from "@/components/home/process"
import Experience from "@/components/home/experience"
import Faq from "@/components/home/faq"
import CtaBand from "@/components/home/cta-band"

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <BadgeStrip />
      <AboutTeaser />
      <Capabilities />
      <Why />
      <TechStack />
      <Projects />
      <Testimonials />
      <Process />
      <Experience />
      <Faq />
      <CtaBand />
    </>
  )
}
