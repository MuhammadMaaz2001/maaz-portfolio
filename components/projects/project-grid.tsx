type Project = {
  slug: string
  title: string
  desc: string
  chips: string[]
  image?: string
  alt?: string
  badge?: "featured" | "nda"
  reveal: string
  links?: { label: string; href: string }[]
}

const PROJECTS: Project[] = [
  {
    slug: "meta-ads-campaign-dashboard",
    title: "Meta Ads Campaign Dashboard",
    desc: "Real-time dashboard for Meta ad campaigns, organized by ad account with live impressions, reach, and click tracking. Built the frontend UI and data visualizations.",
    chips: ["React", "D3.js", "Recharts"],
    image: "/images/thumbnail.png",
    alt: "Meta Ads Campaign Dashboard interface",
    reveal: "",
    links: [
      { label: "GitHub", href: "https://github.com/MuhammadMaaz2001/DashBoard-Meta/" },
      { label: "Live Demo", href: "https://dash-board-meta.vercel.app/" },
    ],
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
    links: [{ label: "GitHub", href: "https://github.com/MuhammadMaaz2001/Urdu-Ibdaa" }],
  },
  {
    slug: "financial-advisor-ai",
    title: "Financial Advisor",
    desc: "AI-powered app offering personalized financial advice based on user input, with a chat-based strategy assistant.",
    chips: ["React", "Tailwind CSS"],
    image: "/images/financial.png",
    alt: "Financial Advisor AI interface",
    reveal: "2",
    links: [{ label: "Live Demo", href: "https://financial-guide-ai.vercel.app/" }],
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
    links: [
      { label: "Frontend", href: "https://github.com/SunitoBoliro/konnectit-frontend" },
      { label: "Backend", href: "https://github.com/SunitoBoliro/konnectit-backend" },
    ],
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with a product catalog, shopping cart, and order management flow, built end to end on the MERN stack.",
    chips: ["React", "Node.js", "MongoDB"],
    image: "/images/E-commerce.jpg",
    alt: "E-Commerce Platform interface",
    reveal: "4",
    links: [
      { label: "Frontend", href: "https://github.com/MuhammadMaaz2001/frontend-ecommerce" },
      { label: "Backend", href: "https://github.com/MuhammadMaaz2001/backend-ecommerce" },
    ],
  },
  {
    slug: "reddit-comment-extractor",
    title: "Reddit Comment Extractor",
    desc: "Fetches and displays nested comment threads from a Reddit post URL for research and content review.",
    chips: ["Next.js", "Tailwind"],
    image: "/images/reddit.png",
    alt: "Reddit Comment Extractor interface",
    reveal: "5",
    links: [{ label: "GitHub", href: "https://github.com/Farhan5217/comment-extractor-frontend" }],
  },
  {
    slug: "url-shortener-nextjs",
    title: "URL Shortener (Next.js)",
    desc: "Modern URL shortener built with the Next.js App Router, Tailwind CSS, and Prisma, with click tracking and a clean redirect flow.",
    chips: ["Next.js", "Prisma"],
    image: "/images/url-short.png",
    alt: "URL Shortener interface",
    reveal: "6",
    links: [{ label: "GitHub", href: "https://github.com/MuhammadMaaz2001/url-shortener-nextjs" }],
  },
  {
    slug: "pokemon-team-builder",
    title: "Pokémon Team Builder",
    desc: "Search Pokémon via the PokéAPI and build custom teams with a responsive, type-safe UI built in React and TypeScript.",
    chips: ["React", "TypeScript"],
    image: "/placeholder.jpg",
    alt: "Pokemon Team Builder interface",
    reveal: "7",
    links: [
      { label: "GitHub", href: "https://github.com/MuhammadMaaz2001/assignment-pokemon" },
      { label: "Live Demo", href: "https://assignment-pokemon-three.vercel.app/" },
    ],
  },
  {
    slug: "file-drive-management-system",
    title: "Drive — File Management System",
    desc: "Secure, scalable backend for a file drive/storage app with authentication, file uploads, activity logs, and admin monitoring built in.",
    chips: ["Node.js", "MongoDB", "Cloudinary"],
    image: "/images/filemanagement.png",
    alt: "Drive file management system interface",
    reveal: "8",
    links: [{ label: "GitHub", href: "https://github.com/MuhammadMaaz2001/drive_backend" }],
  },
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-[22px] pb-[100px] sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <div
          className="overflow-hidden rounded-2xl border border-ink-line bg-ink-bg-2 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-ink-gold"
          data-reveal={project.reveal}
          key={project.slug}
        >
          {project.image ? (
            <div className="group relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-ink-bg-2 to-ink-bg-3 after:text-3xl after:opacity-35 after:content-['🔒']" />
          )}
          <div className="p-[22px]">
            {project.badge && (
              <div className="mb-2.5">
                {project.badge === "nda" ? (
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-ink-muted">
                    🔒 NDA — Frontend Only
                  </span>
                ) : ( 
                  <span className="font-display text-[0.7rem] font-bold text-ink-gold">★ Featured</span>
                )}
              </div>
            )}
            <h3 className="mb-2 font-display text-[1.05rem] font-bold">{project.title}</h3>
            <p className="mb-3.5 text-[0.86rem] text-ink-muted">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.chips.map((chip) => (
                <span className="rounded-full border border-ink-line px-2.5 py-1 text-[0.7rem] text-ink-muted" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 && (
              <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-ink-line pt-3.5">
                {project.links.map((link) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] font-semibold text-ink-gold hover:opacity-75"
                    key={link.href}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
