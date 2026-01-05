"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function SystemDesign() {
  const designRef = useScrollAnimation()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const designs = [
    {
      title: "Scalable Video Processing Pipeline",
      problem:
        "Process real-time video streams for fire detection with sub-second latency while handling multiple concurrent streams",
      architecture: [
        "Message queue (Redis) for stream ingestion and load distribution",
        "Worker pool with auto-scaling based on queue depth",
        "Optimized ML inference using ONNX runtime and GPU acceleration",
        "WebSocket server for real-time alert delivery",
        "PostgreSQL for alert storage with time-series optimization",
      ],
      decisions: [
        "Redis over Kafka: Lower latency for real-time processing, simpler ops",
        "ONNX runtime: 3x faster inference than PyTorch for production",
        "Worker auto-scaling: Maintain <100ms latency during traffic spikes",
      ],
      tradeoffs: [
        "Memory vs Latency: Keep 3 video frames in memory for temporal analysis",
        "Accuracy vs Speed: Optimized model to 95% accuracy for 10x throughput",
        "Cost vs Reliability: Redundant workers increase cost but prevent alert drops",
      ],
      scalability:
        "Horizontal scaling of workers handles 100+ concurrent streams. Queue prevents backpressure. Redis Cluster for HA.",
    },
    {
      title: "Multi-Tenant SaaS Architecture",
      problem:
        "Build college management system supporting 50+ institutions with data isolation, custom configurations, and shared infrastructure",
      architecture: [
        "Shared database with tenant_id partitioning for cost efficiency",
        "Row-level security (RLS) policies for data isolation",
        "Redis for per-tenant configuration caching",
        "API gateway with tenant routing and rate limiting",
        "Background workers for async operations (email, reports)",
      ],
      decisions: [
        "Shared DB over database-per-tenant: 10x cost savings, acceptable security with RLS",
        "PostgreSQL partitioning: Query performance scales linearly with tenant count",
        "Redis caching: Reduced DB load by 70% for config-heavy operations",
      ],
      tradeoffs: [
        "Isolation vs Cost: Shared DB reduces cost but requires strict RLS policies",
        "Flexibility vs Complexity: Custom per-tenant configs increase system complexity",
        "Performance vs Consistency: Eventual consistency for non-critical updates",
      ],
      scalability:
        "Partitioned tables scale to 1000+ tenants. Read replicas for analytics. Sharding strategy planned for 10k+ tenants.",
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="system-design" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700" ref={designRef}>
          <h2 className="text-4xl font-bold mb-4 font-mono">{"// System Design"}</h2>
          <p className="text-gray-400 text-lg">Deep dives into architecture decisions</p>
        </div>

        <div className="space-y-6">
          {designs.map((design, index) => (
            <div
              key={index}
              className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden hover:border-[#5eead4]/30 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms`, animationDuration: "600ms" }}
            >
              <div
                className="p-6 cursor-pointer hover:bg-[#151921]/50 transition-colors duration-300 ease-out"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-[#5eead4] font-mono">{design.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{design.problem}</p>
                  </div>
                  <div className="ml-4">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-[#5eead4] transition-transform duration-300 ease-out" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300 ease-out" />
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 space-y-6">
                  <div className="h-px bg-gray-800" />

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-300 font-mono">{">> Architecture"}</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      {design.architecture.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-[#5eead4]">{i + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-px bg-gray-800" />

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-300 font-mono">{">> Key Decisions"}</h4>
                    <ul className="space-y-2">
                      {design.decisions.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-[#5eead4]">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-px bg-gray-800" />

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-300 font-mono">{">> Trade-offs"}</h4>
                    <ul className="space-y-2">
                      {design.tradeoffs.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-yellow-500">⚠</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-px bg-gray-800" />

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-300 font-mono">{">> Scalability"}</h4>
                    <p className="text-gray-400">{design.scalability}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
