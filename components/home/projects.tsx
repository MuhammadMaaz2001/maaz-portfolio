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
        <div className="section-head" data-reveal="">
          <div>
            <span className="section-tag">Selected Work</span>
            <h2>Projects built to solve real problems.</h2>
          </div>
          <Link href="/projects" className="see-all">
            See all 9 projects →
          </Link>
        </div>
        <p className="section-sub" data-reveal="">
          A mix of client work, freelance builds, and personal projects — spanning dashboards, AI-powered tools,
          real-time systems, and e-commerce. Three of the nine are frontend-only contributions under client NDA,
          marked accordingly.
        </p>

        <div className="project-grid">
          {PROJECTS.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} data-reveal={project.reveal} key={project.slug}>
              {project.nda ? (
                <div className="no-media" />
              ) : (
                <div className="project-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.alt} />
                  <div className="project-overlay">
                    <span>View Case Study →</span>
                  </div>
                </div>
              )}
              <div className="project-info">
                {project.nda && <div className="badge-nda">🔒 NDA — Frontend Only</div>}
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="chip-row">
                  {project.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
