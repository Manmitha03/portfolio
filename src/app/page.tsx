"use client"

import { Marquee } from "@/components/visuals/Marquee"
import {
  Hero,
  Expertise,
  Skills,
  Projects,
  Certifications,
  Achievements,
  Resume,
  Contact,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-[#e0e0e0]">
      <Hero />

      <Marquee />

      {/* Sections with matching IDs for Navigation */}

      <Expertise />
      <Skills />

      <Projects />

      <Certifications />
      <Achievements />
      <Resume />

      <Contact />
    </main>
  )
}
