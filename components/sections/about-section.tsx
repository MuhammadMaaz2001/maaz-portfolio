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
      title: "Frontend Developer (React)",
      provider: "Hacker Rank",
      year: "2025",
      icon: "/images/hackerrank_logo.jpg",
      // color: "bg-blue-500",
    },
    
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
      provider: "The Honkong University of Science & Technology",
      year: "2023",
      icon: "/images/hkust_logo.jpg",
      // color: "bg-purple-500",
    },
    
    {
      title: "React Js",
      provider: "Meta",
      year: "2023",
      icon: "/images/meta_logo.jpg",
      // color: "bg-cyan-500",
    },
    {
      title: "Python Basic & Python DSA",
      provider: "University of Michigan",
      year: "2023",
      icon: "/images/michigan_logo.jpg",
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

       
        {/* Enhanced Education Section */}
        <div className="animate-on-scroll space-y-6" ref={educationRef}>
          {/* Section Header */}
          {/* <div className="relative mb-10">
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
          </div> */}

          {/* Education Cards */}
          {/* Education Section - Timeline Style */}
<div className="relative mb-20">
  {/* Section Header */}
  <div className="text-center mb-12">
    <div className="inline-flex items-center gap-4 mb-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-xl opacity-60"></div>
        <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-full shadow-2xl">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
        Educational Journey
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Academic milestones that shaped my technical foundation
    </p>
  </div>

  {/* Timeline Container */}
  <div className="relative max-w-6xl mx-auto">
    {/* Central Timeline Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500 hidden lg:block"></div>
    
    {education.map((edu, index) => (
      <div
        key={index}
        className={`relative flex items-center mb-16 lg:mb-20 ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } flex-col lg:gap-16`}
      >
        {/* Timeline Node */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 shadow-xl"></div>
            <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping opacity-30"></div>
          </div>
        </div>

        {/* Year Badge */}
        <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} mb-6 lg:mb-0`}>
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-700">
            <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
            <span className="font-black text-2xl text-emerald-700 dark:text-emerald-400">{edu.year}</span>
          </div>
        </div>

        {/* Education Card */}
        <div className="lg:w-1/2 w-full">
          <Card className="group bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 shadow-2xl hover:shadow-3xl border-0 transform hover:-translate-y-4 hover:rotate-1 transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative">
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full animate-bounce">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Icon and Content */}
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-emerald-200 dark:bg-emerald-800 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative bg-white dark:bg-slate-600 p-4 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-500">
                    <img
                      src={edu.icon}
                      alt={edu.institution}
                      className="w-16 h-16 rounded-xl object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {edu.type}
                    </span>
                  </div>
                  
                  <h4 className="font-black text-xl text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                    {edu.degree}
                  </h4>
                  
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{edu.institution}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="font-bold text-amber-600 dark:text-amber-400">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>

          {/* Enhanced Certifications Section */}
         <div className="animate-on-scroll space-y-6">
          {/* Section Header */}
          <div className="relative mb-10 text-center">
  <div className="flex flex-col items-center gap-4 mb-6">
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
      <div className="flex justify-center items-center mt-2 text-gray-600 dark:text-gray-400">
        <Trophy className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Professional Recognition</span>
      </div>
    </div>
  </div>
  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
</div>


          {/* Certification Cards */}
          {/* Certification Cards */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {certifications.map((cert, index) => (
    <Card
  key={index}
  className="group relative bg-white/90 dark:bg-slate-900/80 
             backdrop-blur-xl rounded-2xl border border-gray-200/40 
             dark:border-gray-700/40 shadow-md hover:shadow-xl 
             transition-all duration-400 hover:-translate-y-2"
>
  {/* Subtle Top Accent Line */}
  <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl opacity-70"></div>

  <CardContent className="p-6">
    <div className="flex items-center gap-5">
      {/* Icon with Gradient Accent */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-gray-50 dark:bg-slate-800 p-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-600">
          <img
            src={cert.icon}
            alt={cert.title}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </div>
      </div>

      {/* Certification Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
          {cert.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">
          {cert.provider}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            {cert.year}
          </span>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

  ))}
</div>

          </div>
        
      </div>
    </section>
  )
}
