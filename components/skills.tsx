"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Skills() {
  const skillsRef = useScrollAnimation()

  const skillCategories = [
    {
      category: "Backend",
      skills: ["Python", "Node.js", "FastAPI", "Django", "Express", "GraphQL", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "SQLite"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "CI/CD", "Nginx", "Linux", "Git"],
    },
    {
      category: "AI / ML",
      skills: ["PyTorch", "OpenCV", "ONNX", "OpenAI API", "Hugging Face"],
    },
  ]

  return (
    <section id="skills" className="relative py-32 px-6 bg-[#0d1117] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700" ref={skillsRef}>
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-gray-800 animate-in fade-in slide-in-from-bottom-4 hover:border-[#5eead4]/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: "600ms" }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#5eead4] transition-transform hover:scale-125" />

              <div className="pb-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-100 font-mono">
                  <span className="text-[#5eead4]">//</span> {category.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group relative animate-in fade-in"
                      style={{ animationDelay: `${index * 100 + skillIndex * 50}ms`, animationDuration: "400ms" }}
                    >
                      <div className="px-4 py-2 bg-[#151921] border border-gray-800 text-gray-300 rounded hover:border-[#5eead4]/50 hover:text-[#5eead4] transition-all duration-200 hover:-translate-y-0.5 font-mono text-sm">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
