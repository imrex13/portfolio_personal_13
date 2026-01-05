export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            <div className="h-px w-12 bg-gradient-to-r from-[#5eead4] to-transparent animate-in fade-in duration-1000 delay-200" />
            <span className="text-sm font-mono text-[#5eead4]">
              Backend Engineer · System Builder · Startup Founder
            </span>
          </div>

          <h1 className="text-6xl font-bold mb-6 text-balance animate-blur-in delay-300">
            Building production systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] via-[#2dd4bf] to-[#5eead4] animated-gradient">
              solve real problems
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            I design and build scalable backend systems, from AI-powered platforms to complex infrastructure. I think
            deeply about architecture, trade-offs, and what it takes to ship systems that work in production.
          </p>

          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <a
              href="#resume"
              className="px-6 py-3 bg-[#5eead4] text-[#0b0e14] font-medium rounded-lg hover:bg-[#2dd4bf] hover-glow transition-all hover:-translate-y-1 hover:scale-105"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-[#5eead4] hover:text-[#5eead4] hover-glow transition-all hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
