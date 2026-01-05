"use client"

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "grid-fade 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(94, 234, 212, 0.15) 0%, transparent 50%)",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      />
    </div>
  )
}
