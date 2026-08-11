type Project = {
  slug: string
  title: string
  desc: string
  chips: string[]
  image?: string
  alt?: string
  badge?: "featured" | "nda"
  reveal: string
}

const PROJECTS: Project[] = [
  {
    slug: "meta-ads-campaign-dashboard",
    title: "Meta Ads Campaign Dashboard",
    desc: "Real-time dashboard for Meta ad campaigns, organized by ad account with live impressions, reach, and click tracking. I built the frontend UI and data visualizations; backend confidential under client NDA.",
    chips: ["React", "D3.js", "Recharts"],
    badge: "nda",
    reveal: "",
  },
  {
    slug: "urdu-ibdaa",
    title: "Urdu Ibdaa",
    desc: "My Final Year Project — a web tool that paraphrases Urdu text, backed by published research on training an mT5 model for a low-resource language.",
    chips: ["Svelte", "FastAPI"],
    image: "/images/ibdaa.png",
    alt: "Urdu Ibdaa paraphrasing tool interface",
    badge: "featured",
    reveal: "1",
  },
  {
    slug: "financial-advisor-ai",
    title: "Financial Advisor",
    desc: "AI-powered app offering personalized financial advice based on user input. I built the frontend UI; backend and AI logic confidential under client NDA.",
    chips: ["React", "Tailwind CSS"],
    badge: "nda",
    reveal: "2",
  },
  {
    slug: "konnect-it",
    title: "Konnect-It",
    desc: "Real-time chat application built on the FARM stack with live WebSocket messaging, supporting instant message delivery between connected users.",
    chips: ["FastAPI", "Socket.io"],
    image: "/images/konnectit.png",
    alt: "Konnect-It real-time chat application interface",
    badge: "featured",
    reveal: "3",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with a product catalog, shopping cart, and order management flow, built end to end on the MERN stack.",
    chips: ["React", "Node.js", "MongoDB"],
    image: "/images/E-commerce.jpg",
    alt: "E-Commerce Platform interface",
    reveal: "4",
  },
  {
    slug: "reddit-comment-extractor",
    title: "Reddit Comment Extractor",
    desc: "Fetches and displays nested comment threads from a Reddit post URL for research and content review. I built the frontend; extraction logic confidential under client NDA.",
    chips: ["Next.js", "Tailwind"],
    badge: "nda",
    reveal: "5",
  },
  {
    slug: "url-shortener-nextjs",
    title: "URL Shortener (Next.js)",
    desc: "Modern URL shortener built with the Next.js App Router, Tailwind CSS, and Prisma, with click tracking and a clean redirect flow.",
    chips: ["Next.js", "Prisma"],
    image: "/images/url-short.png",
    alt: "URL Shortener interface",
    reveal: "6",
  },
  {
    slug: "pokemon-team-builder",
    title: "Pokémon Team Builder",
    desc: "Search Pokémon via the PokéAPI and build custom teams with a responsive, type-safe UI built in React and TypeScript.",
    chips: ["React", "TypeScript"],
    image: "/placeholder.jpg",
    alt: "Pokemon Team Builder interface",
    reveal: "7",
  },
  {
    slug: "file-drive-management-system",
    title: "Drive — File Management System",
    desc: "Secure, scalable backend for a file drive/storage app with authentication, file uploads, activity logs, and admin monitoring built in.",
    chips: ["Node.js", "MongoDB", "Cloudinary"],
    image: "/images/filemanagement.png",
    alt: "Drive file management system interface",
    reveal: "8",
  },
]

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {PROJECTS.map((project) => (
        <div className="project-card" data-reveal={project.reveal} key={project.slug}>
          {project.image ? (
            <div className="project-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.alt} />
            </div>
          ) : (
            <div className="no-media" />
          )}
          <div className="project-info">
            {project.badge && (
              <div className="badge-row">
                {project.badge === "nda" ? (
                  <span className="badge-nda">🔒 NDA — Frontend Only</span>
                ) : (
                  <span className="badge-featured">★ Featured</span>
                )}
              </div>
            )}
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="chip-row">
              {project.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
