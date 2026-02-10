"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Hero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    }

    return (
        <section id="about" ref={ref} className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 pt-32 pb-20 overflow-hidden relative">

            {/* Background Elements for Depth */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
            >
                {/* Profile Image */}
                <motion.div variants={itemVariant} className="relative mb-8 group">
                    <div className="relative w-40 h-40 md:w-56 md:h-56">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm overflow-hidden border border-white/10">
                            <div className="w-full h-full rounded-full overflow-hidden bg-black/50">
                                <img
                                    src="/profile.jpg"
                                    alt="Manmitha"
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>

                        {/* Decorative orbits */}
                        <div className="absolute inset-[-10px] rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-[-20px] rounded-full border border-white/5 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.div variants={itemVariant} className="mb-4 relative">
                    <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
                        Manmitha Chowdary A<span className="text-blue-500">.</span>
                    </h2>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 blur-xl opacity-50" />
                </motion.div>

                {/* Role Label */}
                <motion.div variants={itemVariant} className="mb-8">
                    <span className="font-mono text-blue-400 text-sm md:text-base tracking-[0.2em] uppercase py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20">
                        Cloud Engineer
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 variants={itemVariant} className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/90 mb-8 leading-[1.1]">
                    Building <span className="text-gray-400 italic font-serif">Digital Experiences</span> <br className="hidden md:block" />
                    that matter.
                </motion.h1>

                {/* Description */}
                <motion.p variants={itemVariant} className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-10 font-light">
                    I am a Cloud Engineer with a passion for building scalable and reliable cloud-based solutions.
                    I specialize in designing, deploying, and managing applications on cloud platforms like AWS.
                    My focus is on creating seamless user experiences by bridging the gap between complex backend logic and fluid frontend interactions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 group"
                    >
                        View Work
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

