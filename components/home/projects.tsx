import Link from "next/link"

const PROJECTS = [
  {
    slug: "meta-ads-campaign-dashboard",
    title: "Meta Ads Campaign Dashboard",
    desc: "Real-time dashboard tracking Meta ad campaign performance.",
    tech: ["React", "D3.js", "Recharts"],
    nda: true,
    reveal: "",
  },
  {
    slug: "urdu-ibdaa",
    title: "Urdu Ibdaa",
    desc: "My Final Year Project — an Urdu paraphrasing tool, backed by published mT5 model research I trained myself.",
    tech: ["Svelte", "FastAPI"],
    image: "/images/ibdaa.png",
    alt: "Urdu Ibdaa paraphrasing tool interface",
    reveal: "1",
  },
  {
    slug: "konnect-it",
    title: "Konnect-It",
    desc: "Real-time chat application built on the FARM stack.",
    tech: ["FastAPI", "Socket.io"],
    image: "/images/konnectit.png",
    alt: "Konnect-It real-time chat application interface",
    reveal: "2",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with cart and order management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/E-commerce.jpg",
    alt: "E-Commerce Platform interface",
    reveal: "",
  },
  {
    slug: "url-shortener-nextjs",
    title: "URL Shortener (Next.js)",
    desc: "Modern URL shortener built with the Next.js App Router and Prisma.",
    tech: ["Next.js", "Prisma"],
    image: "/images/url-short.png",
    alt: "URL Shortener interface",
    reveal: "1",
  },
  {
    slug: "file-drive-management-system",
    title: "Drive — File Management System",
    desc: "Secure backend for a file storage app with auth and activity logs.",
    tech: ["Node.js", "Cloudinary"],
    image: "/images/filemanagement.png",
    alt: "Drive file management system interface",
    reveal: "2",
  },
]

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6" data-reveal="">
          <div>
            <span className="mb-3.5 block font-body text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-gold">
              Selected Work
            </span>
            <h2 className="max-w-[16ch] font-display text-[clamp(1.6rem,6vw,2.6rem)] font-bold tracking-[-0.015em]">
              Projects built to solve real problems.
            </h2>
          </div>
          <Link href="/projects" className="whitespace-nowrap pb-2 text-[0.9rem] font-semibold text-ink-gold hover:opacity-75">
            See all 9 projects →
          </Link>
        </div>
        <p className="mb-14 max-w-[56ch] text-[1.02rem] text-ink-muted" data-reveal="">
          A mix of client work, freelance builds, and personal projects — spanning dashboards, AI-powered tools,
          real-time systems, and e-commerce. Three of the nine are frontend-only contributions under client NDA,
          marked accordingly.
        </p>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              className="overflow-hidden rounded-2xl border border-ink-line bg-ink-bg-2"
              data-reveal={project.reveal}
              key={project.slug}
            >
              {project.nda ? (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-ink-bg-2 to-ink-bg-3 after:text-3xl after:opacity-35 after:content-['🔒']" />
              ) : (
                <div className="group relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  />
                </div>
              )}
              <div className="p-[22px]">
                {project.nda && (
                  <div className="mb-2 inline-block text-[0.7rem] font-semibold text-ink-muted">
                    🔒 NDA — Frontend Only
                  </div>
                )}
                <h3 className="mb-2 font-display text-[1.05rem] font-bold">{project.title}</h3>
                <p className="mb-3.5 text-[0.86rem] text-ink-muted">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      className="rounded-full border border-ink-line px-2.5 py-1 text-[0.7rem] text-ink-muted"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
