"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "./context/ThemeContext"
import Button from "./ui/Button"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Portfolio</div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("fun")} className="hover:text-primary transition-colors">
              Fun Stuff
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="block hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="block hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("fun")} className="block hover:text-primary transition-colors">
              Fun Stuff
            </button>
            <button onClick={() => scrollToSection("contact")} className="block hover:text-primary transition-colors">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
