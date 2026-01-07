"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Education() {
  const educationRef = useScrollAnimation()

  const education = [
    {
      degree: "Bachelor of Science (Computer Science)",
      field: "Artificial Intelligence & Data Science",
      institution: "Gobi Arts & Science College",
      period: "2023 - 2026",
     achievements: [
  "Currently pursuing 3rd year with a percentage of 83 ",
  "Built multiple full-stack and backend-heavy projects as part of project-based learning",
  "Worked extensively with REST APIs, databases, authentication, and system design fundamentals",
  "Collaborated in team projects, handling backend architecture and API design responsibilities",
],
    },
    {
      degree: "Higher Secondary Education",
      field: "Arts (Commerce, Economics, Business Mathematics)",
      institution: "Bishop Ubgaraswamy Higher Secondary School",
      period: "2021 - 2023",
      achievements: ["Scored 89%+ in board examinations"],
    },
  ]

  return (
    <section id="education" className="relative py-32 px-6 bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700" ref={educationRef}>
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-400 text-lg">Academic foundation and continuous learning</p>
        </div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5eead4]/20 via-[#5eead4]/40 to-[#5eead4]/20" />

          <div className="space-y-16">
            {education.map((edu, index) => (
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

                {/* Education card */}
                <div className="bg-[#151921]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#5eead4]/40 hover:bg-[#151921] transition-all duration-500 hover:shadow-xl hover:shadow-[#5eead4]/5 hover:translate-x-2">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-2xl font-semibold text-gray-100">{edu.degree}</h3>
                      <span className="font-mono text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#5eead4] font-medium text-lg">{edu.institution}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{edu.field}</p>
                  </div>

                  <div>
                    <p className="text-sm font-mono text-[#5eead4] mb-3">// Key Achievements</p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                        >
                          <span className="text-[#5eead4] mt-1 text-xs">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
