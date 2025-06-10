import { ThemeProvider } from "./components/context/ThemeContext"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import FunSection from "./components/FunSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <FunSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
