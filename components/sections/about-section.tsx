"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award, BookOpen, Trophy, Sparkles, Calendar, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Initialize Particles.js
    const initParticles = () => {
      if (typeof window !== "undefined" && particlesRef.current) {
        // Create particles.js script
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        script.onload = () => {
          if (window.particlesJS) {
            window.particlesJS("particles-js", {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#3b82f6",
                },
                shape: {
                  type: "polygon",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 6,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#3b82f6",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            })
          }
        }
        document.head.appendChild(script)
      }
    }

    initParticles()

    // Intersection Observer for scroll animations
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

  const education = [
    {
      degree: "B.S. (Software Engineering)",
      institution: "SSUET",
      year: "2024",
      type: "Bachelor's Degree",
      description: "Focused on software development methodologies, algorithms, and system design.",
      gpa: "3.16/4.0",
      icon: "/images/ssuet-removebg-preview.png",
    },
    {
      degree: "Senior Secondary (Pre-Engineering)",
      institution: "Jinnah Govt. College",
      year: "2020",
      type: "Higher Secondary",
      description: "Mathematics, Physics, and Chemistry with engineering fundamentals.",
      gpa: "C Grade",
      icon: "/images/Sample_User_Icon.png",
    },
    {
      degree: "High School (Computer Science)",
      institution: "Al Huda School",
      year: "2018",
      type: "Secondary School",
      description: "Introduction to programming concepts and computer science principles.",
      gpa: "A Grade",
      icon: "/images/alhuda.png",
    },
  ]

  const certifications = [
    {
      title: "Project Management",
      provider: "Great Learning",
      year: "2024",
      icon: "/images/great_learning_logo.jpeg",
      // color: "bg-blue-500",
    },
    {
      title: "Managing Agile Scrum Project with JIRA",
      provider: "10 Pearls University",
      year: "2024",
      icon: "/images/10pearls_university_logo.jpeg",
      // color: "bg-green-500",
    },
    {
      title: "Agile & Scrum",
      provider: "10 Pearls University",
      year: "2024",
      icon: "/images/10pearls_university_logo.jpeg",
      // color: "bg-orange-500",
    },
    {
      title: "Front-End Web UI Frameworks & Tools: Bootstrap 4",
      provider: "Coursera",
      year: "2023",
      icon: "/images/coursera_logo.jpeg",
      // color: "bg-purple-500",
    },
    
    {
      title: "React Js",
      provider: "Coursera",
      year: "2023",
      icon: "/images/coursera_logo.jpeg",
      // color: "bg-cyan-500",
    },
    {
      title: "Python Basic & Python DSA",
      provider: "Coursera",
      year: "2023",
      icon: "/images/coursera_logo.jpeg",
      // color: "bg-yellow-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Particles.js Background */}
      <div id="particles-js" ref={particlesRef} className="absolute inset-0 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a dedicated software engineer with a passion for creating efficient, scalable, and user-friendly
            applications.
          </p>
        </div>

        {/* Skills Section with Tree Structure - Using YOUR skills */}
        <div className="mb-16 animate-on-scroll" ref={skillsRef}>
          <div className="skills-tree-container">
            {/* Main Header */}
            <div className="flex justify-center mb-12">
              <div className="skills-header bg-gray-900 dark:bg-gray-800 text-white px-8 py-4 rounded-lg border-2 border-blue-500 relative">
                <h3 className="text-2xl font-bold text-center">MY SKILLS</h3>
                {/* Connecting lines */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-blue-500"></div>
                <div className="absolute -bottom-8 left-1/4 right-1/4 h-px bg-blue-500 top-full"></div>
                <div className="absolute -bottom-8 left-1/4 w-px h-8 bg-blue-500"></div>
                <div className="absolute -bottom-8 right-1/4 w-px h-8 bg-blue-500"></div>
              </div>
            </div>

            {/* Skills Grid - YOUR ACTUAL SKILLS */}
            <div className="skills-grid space-y-6">        
            
              {/* Frontend Skills */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-badge">React.Js</span>
                <span className="skill-badge">Vue3.Js</span>
                <span className="skill-badge">Next.js</span>
                <span className="skill-badge">Svelte.Js</span>
              </div>

              {/* Backend Skills */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Express.js</span>
                <span className="skill-badge">FastAPI (Python)</span>
              </div>

              {/* Database & Tools */}
              <div className="flex flex-wrap justify-center gap-4">
                
                <span className="skill-badge">MongoDB</span>
                    <span className="skill-badge">Python</span>
                <span className="skill-badge">TypeScript</span>
                <span className="skill-badge">GitHub</span>
              </div>

              {/* Specialized Skills */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-badge">Data Visualization</span>
                <span className="skill-badge">D3</span>
                <span className="skill-badge">Recharts</span>
                <span className="skill-badge">Project Management</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <span className="skill-badge">Jira/SDLC</span>
                <span className="skill-badge">Research & Development</span>
                <span className="skill-badge">Reverse Engineering</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {/* Enhanced Education Section */}
        <div className="animate-on-scroll space-y-6" ref={educationRef}>
          {/* Section Header */}
          <div className="relative mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Education
                </h3>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Academic Journey</span>
                </div>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] overflow-hidden"
              >
                {/* Gradient Top Border */}
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                
                <CardContent className="p-6 sm:p-8 relative">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/20 rounded-bl-[100px] opacity-50"></div>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                    {/* Enhanced Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <div className="relative bg-white dark:bg-slate-700 p-4 rounded-3xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-slate-200 dark:border-slate-600">
                        <img
                          src={edu.icon}
                          alt={edu.institution}
                          className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-contain"
                        />
                      </div>
                      {/* Floating Sparkle */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:animate-bounce">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full">
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {edu.degree}
                          </h4>
                        </div>
                        <span className="inline-flex items-center text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                          {edu.type}
                        </span>
                      </div>

                      {/* Institution */}
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-lg sm:text-xl mb-3">
                        <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="break-words">{edu.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
                        {edu.description}
                      </p>

                      {/* Bottom Row */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="font-semibold">{edu.year}</span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                          <span className="font-black text-green-700 dark:text-green-400 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-4 py-2 rounded-full text-sm shadow-md">
                            {edu.gpa}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm"></div>
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-sm"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

          {/* Enhanced Certifications Section */}
         <div className="animate-on-scroll space-y-6">
          {/* Section Header */}
          <div className="relative mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                  Certifications
                </h3>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Professional Recognition</span>
                </div>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Certification Cards */}
          <div className="space-y-5">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-600 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden"
              >
                {/* Gradient Top Border */}
                <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
                
                <CardContent className="p-5 sm:p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
                  
                  <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                    {/* Enhanced Certificate Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400 border border-purple-200 dark:border-purple-700">
                        <img
                          src={cert.icon}
                          alt={cert.title}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain"
                        />
                      </div>
                      
                      {/* Achievement Badge */}
                      <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                            {cert.title}
                          </h4>
                          <p className="text-purple-600 dark:text-purple-400 font-bold text-base sm:text-lg mt-1">
                            {cert.provider}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-400 bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-700 dark:to-slate-700 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-600 whitespace-nowrap">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                 </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
