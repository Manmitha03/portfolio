"use client"

import { useEffect, useRef } from "react"
import { Trophy, Star, TrendingUp, Code2, Globe } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const achievements = [
    {
        icon: Trophy,
        title: "Earned the AWS Academy Graduate",
        description: "Cloud Architecting Training Badge, completing 60 hours of hands-on cloud architecture training and demonstrating strong foundation in designing scalable AWS solutions.",
    },
    {
        icon: TrendingUp,
        title: "Awarded the AWS Cloud Foundations Badge,",
        description: "Achieved a top 5% ranking on LeetCode with 500+ problems solved.",
    }
]

export function Achievements() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const pin = triggerRef.current
        const section = sectionRef.current

        if (!pin || !section) return

        let ctx = gsap.context(() => {
            const scrollWidth = section.scrollWidth
            const amountToScroll = scrollWidth - window.innerWidth

            gsap.to(section, {
                x: -amountToScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: pin,
                    start: "top top",
                    end: `+=${amountToScroll}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            })
        }, pin)

        return () => ctx.revert()
    }, [])

    return (
        <section id="achievements" ref={triggerRef} className="relative overflow-hidden bg-black">
            <div className="absolute top-8 left-8 md:top-24 md:left-12 z-20 font-mono text-sm tracking-widest text-[#999] uppercase mix-blend-difference">
                <span className="text-blue-500 mr-2">//</span> 05. Achievements
            </div>

            <div
                ref={sectionRef}
                className="h-screen flex flex-row items-center px-[10vw] gap-[5vw] w-fit"
            >
                <div className="min-w-[40vw] md:min-w-[25vw] flex flex-col justify-center">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                        Notable <br /> <span className="text-blue-500">Milestones.</span>
                    </h2>
                </div>

                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="achievement-card min-w-[300px] md:min-w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-colors duration-300 group"
                    >
                        <item.icon className="w-12 h-12 text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="font-display text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="font-mono text-sm text-[#999] leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}

                <div className="min-w-[5vw]" />
            </div>
        </section>
    )
}
