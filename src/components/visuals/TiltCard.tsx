"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
    children: React.ReactNode
    className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseXVal = e.clientX - rect.left
        const mouseYVal = e.clientY - rect.top

        const xPct = mouseXVal / width - 0.5
        const yPct = mouseYVal / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group/card perspective-1000 ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full transition-all duration-200 group-hover/card:shadow-2xl"
            >
                {/* Glass Background & Border */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]" />

                {/* Thick Glass Edge Effect (simulated with multiple borders/shadows) */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 ring-inset" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset offset-1" />

                {/* Specular Highlight Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-2xl pointer-events-none" />

                {/* Content Container */}
                <div className="relative p-8 h-full">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}
