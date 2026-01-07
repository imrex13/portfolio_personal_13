"use client"

import { Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Resume() {
  const resumeRef = useScrollAnimation()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/RaghuwordResume_v3_one_page.pdf'
    link.download = 'RaghuwordResume_v3_one_page.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-[#151921] border border-gray-800 rounded-lg p-12 text-center hover:border-[#5eead4]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#5eead4]/10 animate-in fade-in slide-in-from-bottom-4 duration-700"
          ref={resumeRef}
        >
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Detailed overview of my experience, projects, technical skills, and achievements in backend engineering and
            system design
          </p>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5eead4] text-[#0b0e14] font-semibold rounded-lg hover:bg-[#2dd4bf] hover:shadow-lg hover:shadow-[#5eead4]/20 transition-all hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}
