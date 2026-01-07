"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Experience() {
  const experienceRef = useScrollAnimation()

  const experiences = [
    
  {
  role: "Backend and Machine Learning Intern",
  company: "Beaver Health AI",
  period: "Sep 2025 - Dec 2025",
  problem: "Building backend systems for an AI-driven medical triage platform",
  systems: [
    "Developed backend APIs for patient and doctor workflows, including authentication, report submission, and triage history retrieval",
    "Integrated a pre-trained AI inference service via REST APIs to process patient inputs and generate medical triage reports",
    "Designed role-based access control for patients and doctors to securely view reports and medical data",
    "Worked with MongoDB schemas and API validation to ensure reliable data flow across the system"
  ],
  impact: "Enabled a functional end-to-end medical triage workflow used for internal product validation"
}
,
 {
  role: "Founder & Backend Engineer",
  company: "RexinTech",
  period: "Jan 2025 - June 2025",
  problem: "Building scalable backend systems for campus-scale navigation and AI-driven applications",
  systems: [
    "Designed and implemented backend services for a 3D campus navigation platform using GeoJSON-based map data",
    "Built REST APIs for route computation, location data access, and system configuration",
    "Handled database design, API architecture, and deployment on cloud infrastructure",
    "Led technical decision-making and documentation for system design and backend workflows"
  ],
  impact: "Successfully developed a working prototype and tested in real environments"
},

    {
  role: "Machine Learning Intern",
  company: "Avatar Robotix",
  period: "July 2024 - Jan 2025",
  problem: "Applying computer vision models for real-time robotic perception",
  systems: [
    "Developed computer vision pipelines for object detection and facial landmark tracking",
    "Worked with real-time video streams to preprocess input data and optimize inference speed",
    "Collaborated with the engineering team to integrate ML models into robotic control workflows",
    "Improved model reliability through experimentation, tuning, and validation"
  ],
  impact: "Contributed to improved perception accuracy and smoother real-time robotic navigation"
},

  ]

  return (
    <section id="experience" className="relative py-32 px-6 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700" ref={experienceRef}>
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">Building production systems that scale</p>
        </div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5eead4]/20 via-[#5eead4]/40 to-[#5eead4]/20" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms`, animationDuration: "600ms" }}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute -left-[11px] top-6 w-6 h-6 rounded-full bg-[#0d1117] border-2 border-[#5eead4] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-[#5eead4]/50">
                  <div className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse" />
                </div>

                {/* Connecting line to card */}
                <div className="absolute left-[13px] top-6 w-10 h-[2px] bg-gradient-to-r from-[#5eead4]/40 to-transparent" />

                {/* Experience card */}
                <div className="bg-[#151921]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#5eead4]/40 hover:bg-[#151921] transition-all duration-500 hover:shadow-xl hover:shadow-[#5eead4]/5 hover:translate-x-2">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-2xl font-semibold text-gray-100">{exp.role}</h3>
                      <span className="font-mono text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#5eead4] font-medium text-lg">{exp.company}</span>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-mono text-[#5eead4] mb-2">// Problem Statement</p>
                      <p className="text-gray-300 leading-relaxed">{exp.problem}</p>
                    </div>

                    <div>
                      <p className="text-sm font-mono text-[#5eead4] mb-3">// Technical Contributions</p>
                      <ul className="space-y-2">
                        {exp.systems.map((system, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                          >
                            <span className="text-[#5eead4] mt-1 text-xs">▹</span>
                            <span className="leading-relaxed">{system}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-[#5eead4]/5 to-transparent border-l-2 border-[#5eead4] pl-4 py-3">
                      <p className="text-sm text-gray-300">
                        <span className="font-mono text-[#5eead4] text-xs">// Impact: </span>
                        <span className="text-gray-300">{exp.impact}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
