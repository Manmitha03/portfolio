"use client"

import { motion } from "framer-motion"

const skillCategories = [
    {
        title: "LANGUAGES & FRAMEWORKS",
        skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL"],
    },
    {
        title: "TOOLS & DEVOPS",
        skills: ["Git / GitHub", "Docker", "AWS", "Vercel", "Figma", "Jest / Cypress"],
    },
    {
        title: "CONCEPTS",
        skills: ["REST / GraphQL", "CI/CD Pipelines", "System Architecture", "Agile Methodologies"],
    },
]

import { TiltCard } from "@/components/visuals/TiltCard"

export function Skills() {
    return (
        <section id="skills" className="min-h-[50vh] py-24 px-4 md:px-12 relative">
            <div className="max-w-6xl mx-auto">
                <div className="md:hidden font-mono text-sm tracking-widest text-[#999] uppercase mb-8">
                    <span className="text-blue-500 mr-2">//</span> 02. Skills
                </div>
                {/* Section Label */}
                <div className="hidden md:block absolute left-12 top-24 font-mono text-sm tracking-widest text-[#999] uppercase">
                    <span className="text-blue-500 mr-2">//</span> 02. Skills
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 px-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <TiltCard className="h-full">
                                <h3 className="relative font-display text-lg tracking-wider text-white mb-6 uppercase border-b border-white/10 pb-4">
                                    {category.title}
                                </h3>
                                <ul className="relative space-y-4">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center text-[#b0b0b0] text-sm font-mono group-hover/card:text-white transition-colors duration-300">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-50 group-hover/card:opacity-100 transition-opacity" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>

                                {/* Floating Decor for 3D depth */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none"
                                    style={{ transform: "translateZ(30px)" }} />
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
