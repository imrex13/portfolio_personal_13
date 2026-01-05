import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import SystemDesign from "@/components/system-design"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import GridBackground from "@/components/grid-background"
import Education from "@/components/education"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-gray-100 relative">
      <GridBackground />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <SystemDesign />
        <Education />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}
