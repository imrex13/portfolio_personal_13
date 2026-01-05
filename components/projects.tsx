"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { X, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useRouter } from "next/navigation"

const projects = [
  {
    id: 1,
    name: "Camp View",
    tagline: "3D campus navigation with real-time pathfinding",
    description:
      "An interactive 3D map system for campus navigation with optimized pathfinding algorithms and real-time location tracking. Built to handle complex spatial data and provide intuitive navigation for students and visitors.",
    tech: ["Three.js", "Python", "FastAPI", "PostgreSQL", "A* Algorithm"],
    tags: ["Production", "3D Graphics", "Pathfinding"],
    features: [
      "Real-time 3D campus rendering with optimized performance",
      "Custom pathfinding algorithm for multi-floor navigation",
      "Location-based search and recommendations",
      "Mobile-responsive design with touch controls",
    ],
  },
  {
    id: 2,
    name: "FireVision",
    tagline: "Real-time fire detection using computer vision",
    description:
      "AI-powered fire detection system using computer vision to identify and alert authorities about potential fire hazards in real-time. Processes video streams with low latency for immediate threat detection.",
    tech: ["PyTorch", "OpenCV", "FastAPI", "Redis", "WebSockets"],
    tags: ["AI", "Computer Vision", "Real-time"],
    features: [
      "YOLOv8-based fire detection with 95%+ accuracy",
      "Real-time video stream processing (<100ms latency)",
      "Automated alert system with severity classification",
      "Dashboard for monitoring and historical analysis",
    ],
  },
  {
    id: 3,
    name: "Tectovia Quiz",
    tagline: "AI-powered adaptive quiz generation platform",
    description:
      "Intelligent quiz platform that generates personalized questions based on user performance and learning patterns. Uses machine learning to adapt difficulty and optimize learning outcomes.",
    tech: ["Node.js", "PostgreSQL", "OpenAI API", "Redis", "Next.js"],
    tags: ["DST Funded", "AI", "Production"],
    features: [
      "AI-generated questions with context awareness",
      "Adaptive difficulty based on performance metrics",
      "Real-time analytics and progress tracking",
      "Scalable architecture handling 10k+ concurrent users",
    ],
  },
  {
    id: 4,
    name: "GASC Sync",
    tagline: "Unified college management platform",
    description:
      "Comprehensive college management system integrating attendance, grades, schedules, and communication. Designed for scalability and real-world institutional needs.",
    tech: ["Django", "PostgreSQL", "Celery", "Redis", "AWS"],
    tags: ["Production", "Enterprise", "Scalable"],
    features: [
      "Multi-tenant architecture supporting 50+ departments",
      "Automated attendance tracking with facial recognition",
      "Real-time grade calculation and transcript generation",
      "Role-based access control with granular permissions",
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const projectsRef = useScrollAnimation()
  const router = useRouter()

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 opacity-0 translate-y-4 transition-all duration-700" ref={projectsRef}>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Production systems solving real-world problems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-[#151921] border-gray-800 p-6 hover:border-[#5eead4]/50 transition-all duration-500 ease-out cursor-pointer group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5eead4]/20 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: "600ms" }}
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5eead4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-[#5eead4] transition-colors duration-500 ease-out">
                    {project.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#5eead4] group-hover:translate-x-1 transition-all duration-500 ease-out" />
                </div>
                <p className="text-gray-400 mb-4">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#1e293b]/50 text-gray-300 text-sm rounded-md font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border border-[#5eead4]/30 text-[#5eead4] text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#151921] border border-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.name}</h3>
                <p className="text-gray-400 text-lg">{selectedProject.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#5eead4]">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#5eead4] mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#5eead4]">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#1e293b]/50 text-gray-300 text-sm rounded-md font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#5eead4]/30 text-[#5eead4] text-sm rounded font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
