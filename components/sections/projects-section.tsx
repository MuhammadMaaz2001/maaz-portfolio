"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Extended projects array with more projects and different link scenarios
  const allProjects = [
    {
      title: "Urdu Ibdaa",
      description:
        "Urdu Ibdaa - Urdu Paraphrasing Tool Urdu Ibdaa is a web-based tool that paraphrases Urdu text into alternative expressions. Built using Svelte JS and styled with Tailwind CSS, it offers a fast, responsive, and user-friendly interface for Urdu text paraphrasing.",
      tech: ["Svelte", "FastAPi", "Tailwindcss",],
      github: "https://github.com/MuhammadMaaz2001/Urdu-Ibdaa",
      image: "images/ibdaa.png",
      featured: true,
    },
    {
      title: "Meta Ads Campaing Dashboard",
      description:
        "Meta Ads Campaign Dashboard is a dynamic web app to manage and track Meta ad campaigns. It organizes data by ad accounts and displays campaigns with real-time performance insights. Users can view metrics like impressions, reach, and clicks. The dashboard features smooth animations, progress bars, and a clean, responsive UI for a seamless experience.",
      tech: ["React", "Tailwindcss", "D3.js", "ReCharts"],
      github: "https://github.com/MuhammadMaaz2001/DashBoard-Meta/",
      demo: "https://dash-board-meta.vercel.app/",
      image: "images/thumbnail.png",
      featured: true,
    },
    {
      title: "Financial Advisor",
      description:
        "An AI-powered application designed to analyze user inputs and offer personalized financial advice, helping users make informed financial decisions.",
      tech: ["React", "OpenAI API", "FastAPi", "TailwindCss"],
      demo: "https://financial-guide-ai.vercel.app/",
      image: "images/financial.png",
      featured: true,
    },
    {
      title: "Reddit Comment Extractor",
      description:
        "Reddit Comment Extractor is a web app built with Next.js and Tailwind CSS that allows users to fetch all comments from any Reddit post by simply entering the post URL. It displays nested replies, usernames, and full comment threads in a clean, organized format. Useful for data analysis, content review, or research.",
      tech: ["Nextjs", "Shadcn", "Tailwindcss", ],
      github: "https://github.com/Farhan5217/comment-extractor-frontend",
      image: "/images/reddit.png",
      featured: false,
    },
    {
      title: "URL Shortener",
      description:
        "This is a web-based URL shortener application that allows users to input a long URL and generate a shortened version for easy sharing and access. Users can use the shortened URL to quickly redirect to the original longer URL. The Stack for this app is FARM stack.",
      tech: ["React", "FastAPi", "MongoDB", "Tailwindcss"],
      github: "https://github.com/MuhammadMaaz2001/URL-Shortener-FARM-Stack-",
      image: "/images/url-thubmnail.png",
      featured: false,
    },
     {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution...",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com/MuhammadMaaz2001/backend-ecommerce",
    image: "/images/E-commerce.jpg", // Make sure this path is correct
    featured: true,
  },
     {
    title: "Konnect-It",
    description: "A Real time chat Application on FARM Stack.",
    tech: ["React", "FastAPi", "MongoDB", "Socket"],
    github: "https://github.com/MuhammadMaaz2001/konnect-it", // Unique URL
    image: "/images/konnectit.png", // Unique image
    featured: true,
  },
    {
      title: "File Upload",
      description:
        "This is a web-based platform that allows users to upload files. Upon upload, a unique URL is generated for each file, which can then be shared with others. Users can access the URL to download the file. The platform is built using the FARM stack, which includes: FastAPI for the backend API, React for the frontend, MongoDB as the database.",
      tech: ["React", "FastAPI", "MongoDB", "Shadcn"],
      github: "https://github.com/MuhammadMaaz2001/file-sharing",
      image: "/images/file-upload-thumbnail.png",
      featured: false,
    },
    {
      title: "Drive ( File Management System)",
      description:
        "A secure and scalable backend system for a file drive/storage app built with Node.js, Express, MongoDB, and Cloudinary. It supports features like user authentication, file uploads, activity logs, and admin-level monitoring.",
      tech: ["React", "Node.js", "MongoDB", "Cloudnary"],
      github: "https://github.com/MuhammadMaaz2001/drive_backend",
      image: "/images/filemanagement.png",
      featured: false,
    },
    // {
    //   title: "Learning Management System",
    //   description:
    //     "A comprehensive LMS platform with course creation, student progress tracking, and interactive learning modules.",
    //   tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    //   privateRepo: true,
    //   demo: "https://example.com/demo7",
    //   image: "/lms.jpg",
    //   featured: false,
    // },
    // {
    //   title: "Restaurant Booking System",
    //   description:
    //     "A modern restaurant reservation system with table management, customer notifications, and analytics dashboard.",
    //   tech: ["Vue.js", "Express", "MySQL", "Stripe"],
    //   github: "https://github.com/maaz/restaurant-booking",
    //   demo: "https://example.com/demo8",
    //   image: "/restaurant.jpg",
    //   featured: false,
    // },
  ]

  const featuredProjects = allProjects.filter((project) => project.featured)
  const otherProjects = allProjects.filter((project) => !project.featured)

  const openDemoModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeDemoModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">🌟 Featured Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={`featured-${index}`}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg project-card animate-on-scroll relative overflow-hidden bg-white dark:bg-gray-800"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </div>

                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full hover:scale-110 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* <div className="flex gap-3">
                      {project.github && !project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 bg-transparent hover:scale-105"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      {project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Private Repo
                        </Button>
                      )}
                      {project.demo ? (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo Not Available
                        </Button>
                      )}
                    </div> */}
                  <div className="flex gap-3">
  {/* GitHub Button */}
  {project.github ? (
    project.privateRepo ? (
      <Button
        variant="outline"
        size="sm"
        className="flex-1 cursor-not-allowed opacity-70"
        disabled
      >
        <Github className="h-4 w-4 mr-2" />
        Private Repo
      </Button>
    ) : (
      <Button
        variant="outline"
        size="sm"
        className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 bg-transparent hover:scale-105"
        onClick={() => window.open(project.github, "_blank")}
      >
        <Github className="h-4 w-4 mr-2" />
        GitHub
      </Button>
    )
  ) : null}

  {/* Demo Button */}
  {project.demo ? (
    <Button
      size="sm"
      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
      onClick={() => window.open(project.demo, "_blank")}
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      Live Demo
    </Button>
  ) : (
    <Button
      size="sm"
      className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70"
      disabled
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      {project.github ? 'Demo Not Available' : 'No Links Available'}
    </Button>
  )}
</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">💼 More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={`other-${index}`}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg project-card animate-on-scroll bg-white dark:bg-gray-800"
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-48 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-green-600 transition-colors duration-300 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full hover:scale-110 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && !project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:border-green-600 group-hover:text-green-600 transition-all duration-300 bg-transparent hover:scale-105"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      {project.privateRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Private Repo
                        </Button>
                      )}
                      {project.demo ? (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo Not Available
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeDemoModal}
                className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <div className="rounded-lg mb-6 overflow-hidden">
                {/* <img
                  src={selectedProject.image || `/placeholder.svg?height=400&width=800&text=${encodeURIComponent(selectedProject.title)}`}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-auto max-h-96 object-contain"
                /> */}
                <img
  src={project.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
  alt={`${project.title} screenshot`}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  onError={(e) => {
    e.target.src = `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`;
  }}
/>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.github && !selectedProject.privateRepo ? (
                      <Button
                        variant="outline"
                        onClick={() => window.open(selectedProject.github, "_blank")}
                        className="flex-1"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    ) : selectedProject.privateRepo ? (
                      <Button variant="outline" className="flex-1 cursor-not-allowed opacity-70" disabled>
                        <Github className="h-4 w-4 mr-2" />
                        Private Repo
                      </Button>
                    ) : null}
                    {selectedProject.demo ? (
                      <Button
                        onClick={() => window.open(selectedProject.demo, "_blank")}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    ) : (
                      <Button className="flex-1 bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-70" disabled>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo Not Available
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}