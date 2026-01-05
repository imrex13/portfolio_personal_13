"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    challenges: [
      "Optimizing 3D rendering for mobile devices with limited GPU",
      "Implementing efficient pathfinding for complex multi-floor layouts",
      "Handling real-time location updates with WebSocket connections",
    ],
    metrics: [
      "Reduced navigation time by 40% compared to traditional maps",
      "Handles 500+ concurrent users with <50ms response time",
      "98% user satisfaction rating in campus surveys",
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
    challenges: [
      "Achieving sub-100ms latency for real-time video processing",
      "Reducing false positives in various lighting conditions",
      "Scaling worker pool to handle multiple concurrent streams",
    ],
    metrics: [
      "95.3% detection accuracy with <2% false positive rate",
      "Average detection latency of 87ms",
      "Successfully deployed in 5+ locations monitoring 24/7",
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
    challenges: [
      "Training adaptive algorithm to match individual learning styles",
      "Managing API costs while maintaining question quality",
      "Building reliable real-time analytics for 10k+ users",
    ],
    metrics: [
      "30% improvement in learning retention vs traditional quizzes",
      "Serving 10,000+ concurrent users with 99.9% uptime",
      "Funded by Department of Science and Technology",
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
    challenges: [
      "Implementing row-level security for multi-tenant data isolation",
      "Optimizing database queries for 50+ concurrent departments",
      "Building robust permission system with 20+ role types",
    ],
    metrics: [
      "Reduced administrative workload by 60%",
      "Supporting 5,000+ active users across 50+ departments",
      "99.95% uptime over 12 months of production use",
    ],
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const project = projects.find((p) => p.id === Number.parseInt(params.id as string))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b0e14] text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const handleBackClick = () => {
    router.push("/#projects")
    setTimeout(() => {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#0b0e14] text-gray-100">
      {/* Hero Section */}
      <div className="relative border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5eead4]/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-8 relative">
          <Button
            onClick={handleBackClick}
            variant="ghost"
            size="sm"
            className="mb-8 hover:text-[#5eead4] hover:bg-[#5eead4]/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 border border-[#5eead4]/40 text-[#5eead4] text-xs rounded font-medium font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">{project.name}</h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-3xl">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div>
              <div className="bg-[#151921] border border-gray-800 rounded-lg p-6">
                <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>

            {/* Key Features Section */}
            <div>
              <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Key Features</h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#151921] border border-gray-800 rounded-lg p-4 hover:border-[#5eead4]/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[#5eead4] mt-0.5 text-lg">▹</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges Section */}
            <div>
              <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Technical Challenges</h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-[#151921] border border-gray-800 rounded-lg p-4 hover:border-yellow-500/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-0.5">⚠</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{challenge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & Metrics Section */}
            <div>
              <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Impact & Metrics</h2>
              <div className="grid grid-cols-1 gap-3">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#5eead4]/5 to-transparent border border-[#5eead4]/20 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[#5eead4] mt-0.5">●</span>
                      <span className="text-gray-300 text-sm leading-relaxed font-medium">{metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Tech Stack Card */}
              <div>
                <div className="bg-[#151921] border border-gray-800 rounded-lg p-6">
                  <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#0b0e14] border border-gray-800 text-gray-300 rounded text-xs font-mono hover:border-[#5eead4]/50 hover:text-[#5eead4] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links Card */}
              <div>
                <div className="bg-[#151921] border border-gray-800 rounded-lg p-6">
                  <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Project Links</h2>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between px-4 py-2.5 bg-[#0b0e14] border border-gray-800 rounded hover:border-[#5eead4]/50 hover:text-[#5eead4] transition-all duration-300 text-sm">
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View Source
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-full flex items-center justify-between px-4 py-2.5 bg-[#0b0e14] border border-gray-800 rounded hover:border-[#5eead4]/50 hover:text-[#5eead4] transition-all duration-300 text-sm">
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div>
                <div className="bg-[#151921] border border-gray-800 rounded-lg p-6">
                  <h2 className="text-sm font-mono text-[#5eead4] mb-4 uppercase tracking-wider">Stats</h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#5eead4]/50 pl-3">
                      <div className="text-2xl font-bold text-gray-100">{project.tech.length}</div>
                      <div className="text-xs text-gray-500 font-mono">Technologies</div>
                    </div>
                    <div className="border-l-2 border-[#5eead4]/50 pl-3">
                      <div className="text-2xl font-bold text-gray-100">{project.features.length}</div>
                      <div className="text-xs text-gray-500 font-mono">Key Features</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
