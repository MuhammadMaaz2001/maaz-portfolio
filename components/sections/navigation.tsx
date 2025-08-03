"use client"

import { Moon, Sun, Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  isDark: boolean
  toggleTheme: () => void
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  activeSection: string
  scrollToSection: (section: string) => void
}

export default function Navigation({
  isDark,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 nav-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover-glow">
            Muhammad Maaz
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 nav-link ${
                  activeSection === section ? "text-blue-600 dark:text-blue-400 scale-110" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover-bounce glow-hover"
                onClick={() => window.open("https://github.com/MuhammadMaaz2001", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
            <Button
  variant="ghost"
  size="icon"
  className="rounded-full hover-bounce glow-hover"
  onClick={() =>
    window.open("https://www.linkedin.com/in/muhammad-maaz-3a1838208/", "_blank", "noopener,noreferrer")
  }
>

                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover-spin glow-hover">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-bounce"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mobile-menu-slide">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block px-3 py-2 text-base font-medium capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
              >
                {section}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div className="flex space-x-4 px-3 py-2">
              <Button
                variant="ghost"
                size="sm"
                className="hover-bounce"
                onClick={() => window.open("https://github.com/MuhammadMaaz2001", "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
  variant="ghost"
  size="sm"
  className="hover-bounce"
  onClick={() =>
    window.open("https://www.linkedin.com/in/muhammad-maaz-3a1838208/", "_blank", "noopener,noreferrer")
  }
>
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
