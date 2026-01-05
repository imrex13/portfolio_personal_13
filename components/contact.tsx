"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Contact() {
  const contactRef = useScrollAnimation()

  const contacts = [
    { icon: Mail, label: "Email", value: "rex@rexintech.com", href: "mailto:rex@rexintech.com" },
    { icon: Github, label: "GitHub", value: "github.com/rex", href: "https://github.com/rex" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rex", href: "https://linkedin.com/in/rex" },
  ]

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700" ref={contactRef}>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">
            Open to discussing backend systems, architecture, and new opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#151921] border border-gray-800 rounded-lg p-6 hover:border-[#5eead4] hover:shadow-lg hover:shadow-[#5eead4]/10 transition-all duration-300 hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: "600ms" }}
            >
              <contact.icon className="w-8 h-8 text-[#5eead4] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
              <p className="text-gray-200 font-medium group-hover:text-[#5eead4] transition-colors duration-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-24 text-center animate-in fade-in duration-700 delay-700">
          <div className="h-px bg-gray-800 mb-8" />
          <p className="text-gray-500 text-sm font-mono">Built with Next.js · Designed for engineers</p>
        </div>
      </div>
    </section>
  )
}
