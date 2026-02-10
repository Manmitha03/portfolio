"use client"

import { motion } from "framer-motion"

const projects = [
    {
        id: "001",
        title: "Mental Health Stimulator",
        category: "C++",
        description: "Designed a console-based Mental Health Companion using C++ with structured OOP modules and STL. Implemented mood tracking, quote generation, guided breathing, and gratitude journaling backed by file persistence.",
        tags: ["C++", "OOP", "STL"],
        link: "https://github.com/Manmitha03/-Mental-Health-Stimulator-",
    },
    {
        id: "002",
        title: "AI Currency Exchange Advisor",
        category: "Python",
        description: "Developed an AI-powered chatbot for electrical fault detection using machine learning and image processing. Implemented modules for fault classification, severity analysis, and automated troubleshooting.",
        tags: ["Python", "ML", "AI"],
        link: "https://github.com/Manmitha03/-AI-Currency-Exchange-Advisor-",
    },
    {
        id: "003",
        title: "Defenshe",
        category: "App Dev",
        description: "An women safety mobile app",
        tags: ["Flutter", "Firebase"],
        link: "https://github.com/Manmitha03/defenshe",
    },
    {
        id: "004",
        title: "AuraPlus",
        category: "Full Stack",
        description: "AI Therapist Web App",
        tags: ["Next.js", "Tailwind", "GSAP"],
        link: "https://github.com/Manmitha03/aura_plus",
    },
]

export function Projects() {
    return (
        <section id="projects" className="min-h-screen py-24 px-4 md:px-12 relative">
            <div className="md:hidden font-mono text-sm tracking-widest text-[#999] uppercase mb-8">
                <span className="text-blue-500 mr-2">//</span> 03. Selected Works
            </div>
            {/* Section Label */}
            <div className="hidden md:block absolute left-12 top-24 font-mono text-sm tracking-widest text-[#999] uppercase">
                <span className="text-blue-500 mr-2">//</span> 03. Selected Works
            </div>

            <div className="max-w-6xl mx-auto pt-16">
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative border-t border-white/10 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center cursor-none transition-colors hover:bg-white/5 px-4 md:px-8"
                            data-hover
                        >
                            <div className="flex-1">
                                <span className="font-mono text-blue-500 text-sm mb-4 block">
                                    {project.id}
                                </span>
                                <h3 className="font-display text-4xl md:text-7xl font-bold text-white mb-2 transition-transform duration-500 ease-out group-hover:translate-x-4">
                                    {project.title}
                                </h3>
                                <p className="font-body text-[#999] text-base md:text-lg max-w-lg mt-4 group-hover:text-[#ccc] transition-colors">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-6 md:mt-0 flex gap-2 flex-wrap justify-end max-w-xs md:max-w-sm">
                                {project.tags.map(tag => (
                                    <span key={tag} className="border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-[#999] group-hover:border-blue-500 group-hover:text-blue-400 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                    {/* Border for last item */}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    )
}
