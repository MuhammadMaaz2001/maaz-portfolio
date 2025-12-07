"use client"

import { useEffect, useRef } from "react"
import { Briefcase, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  const experienceRef = useRef(null)

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

  const experiences = [
    {
      title: "Nextjs & React Develoer",
      company: "UTF-Labs",
      period: "Oct 2025 - Present",
      type: "Full-time",
      icon: "/images/utf-labs.jpeg",
      // color: "from-blue-600 to-blue-800",
      description:
        "Worked as a full-stack Next.js & React Developer building scalable, high-performance, and SEO-optimized web applications using Next.js, React, TypeScript, PostgreSQL, and the MERN stack. Developed responsive UIs with Tailwind CSS, built and integrated RESTful APIs, managed databases (PostgreSQL & MongoDB), and collaborated closely with cross-functional teams to deliver efficient, user-focused solutions.",
      achievements: [
  "Built SEO-optimized and high-performance web applications using Next.js and React, improving page load speed by 30%.",
  "Developed responsive and visually appealing UIs with Tailwind CSS, enhancing user engagement across devices.",
  "Designed and integrated scalable backend APIs with MongoDB, ORM Prisma & ODM Mongoose ensuring smooth full-stack functionality."
]

    },
    {
      title: "React Development",
      company: "BRB Group",
      period: "Aug 2024 – Oct 2025",
      type: "Contract",
      icon: "/images/brb_developers_logo.jpeg",
      // color: "from-green-600 to-green-800",
      description:
        "I led the frontend development of intuitive payroll, document, and finance management interfaces, streamlining workflows and enhancing data accuracy. I crafted a unified IT and inventory dashboard featuring ticketing, device monitoring, asset allocation, and automated hosting reminders. I also engineered the frontend for an AI-driven content automation tool that generates SEO-focused blog posts and schedules social media campaigns.",
      achievements: [
        "Improved workflow efficiency by 40%",
        "Led frontend development efforts while collaborating cross-functionally with design and backend teams to deliver high-quality user interfaces.",
        "Implemented AI-driven automation tools",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Neuramatics.Co.",
      period: "Nov 2023 - Feb 2024",
      type: "Contract",
      icon: "/images/neuramatics.jpeg",
      // color: "from-purple-600 to-purple-800",
      description:
        "Frontend Developer at Neuramatics.Co. as a frontend developer, where I gained hands-on experience with React.js Library in JavaScript. My responsibilities included development in front-end tasks, debugging code, and collaborating with the project team to enhance user interface functionality and improvement of overall UI/UX Experience.",
      achievements: ["Delivered 5+ React.js projects", "Reduced bug reports by 30%", "Enhanced UI/UX design patterns"],
    },
    {
      title: "Frontend Support Developer",
      company: "Dimensional Sys, Inc.",
      period: "Aug 2023 - Nov 2023",
      type: "Internship",
      icon: "/images/dimensional_systems_logo.jpeg",
      // color: "from-orange-600 to-orange-800",
      description:
        "Frontend Support Intern at Dimensional Sys, Inc. – Gained hands-on experience with React.js and Vue 3, assisting in development, debugging, and UI enhancements. Developed interactive data visualizations and charting components using D3.js. Where I learned reverse engineering of legacy front-end code to troubleshoot defects, document architecture, and drive performance improvements.",
      achievements: [
        "Mastered D3.js data visualizations",
        "Reverse engineered legacy systems",
        "Improved system performance by 25%",
      ],
    },
    {
      title: "Intern",
      company: "Coderatory",
      period: "Feb 2022 - Apr 2022",
      type: "Internship",
      icon: "/images/coderatory_logo.jpeg",
      // color: "from-teal-600 to-teal-800",
      description:
        "At Coderatory internship, I learned web development tech, including Node.js for fast apps and Express.js for easy web dev. Gained hands-on MongoDB experience for structured data storage. Improved web app creation and data management skills.",
      achievements: [
        "Built first full-stack application",
        "Learned MongoDB fundamentals",
        "Completed 3 web development projects",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Experience Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="experience-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`exp-particle exp-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mr-4 shadow-lg">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development across various companies and projects.
          </p>
        </div>

        <div className="space-y-12" ref={experienceRef}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="experience-card-premium hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group animate-on-scroll"
            >
              <CardContent className="p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                    <div
                      className={`bg-gradient-to-r ${exp.color} p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                    >
                      {/* <span className="text-3xl text-white filter drop-shadow-lg">{exp.icon}</span> */}
                                   <img
  src={exp.icon}
  
  className="w-14 h-14 rounded-md object-contain"
/>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{exp.period}</span>
                    <span
                      className={`text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 font-medium shadow-md ${
                        exp.type === "Full-time"
                          ? "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-800 dark:text-green-300"
                          : exp.type === "Contract"
                            ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-800 dark:text-blue-300"
                            : "bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-800 dark:text-orange-300"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">{exp.description}</p>

                {/* Achievements */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full mr-3">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
