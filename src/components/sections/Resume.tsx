"use client"

import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"

export function Resume() {
    return (
        <section id="resume" className="py-32 px-4 md:px-12 relative flex justify-center">
            <div className="md:hidden font-mono text-sm tracking-widest text-[#999] uppercase mb-8 absolute top-8 left-4">
                <span className="text-blue-500 mr-2">//</span> 06. Resume
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-blue-600 rounded-3xl p-12 md:p-24 text-center max-w-5xl w-full relative overflow-hidden group"
                data-hover
            >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">
                    Ready to collaborate?
                </h2>
                <p className="font-mono text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                    Check out my resume for a detailed look at my experience and skills.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                    <a
                        href="public\resume.pdf"
                        download="Manmitha_Resume.pdf"
                        className="flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white/90 transition-colors"
                    >
                        <Download className="w-5 h-5" />
                        Download PDF
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white/10 transition-colors"
                    >
                        View Online
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
