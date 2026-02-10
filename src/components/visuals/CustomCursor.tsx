"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorDotRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) return

        let animationFrameId: number
        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
            setDotPosition({ x: mouseX, y: mouseY })
        }

        const animateCursor = () => {
            const dx = mouseX - cursorX
            const dy = mouseY - cursorY
            cursorX += dx * 0.15
            cursorY += dy * 0.15
            setPosition({ x: cursorX, y: cursorY })
            animationFrameId = requestAnimationFrame(animateCursor)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if target or parent is a link or button or has data-hover
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.hasAttribute('data-hover')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseover", handleMouseOver)
        animateCursor()

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseover", handleMouseOver)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) return null

    return (
        <>
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1 h-1 bg-[#3b82f6] rounded-full pointer-events-none z-[10000] transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `translate(${dotPosition.x}px, ${dotPosition.y}px) translate(-50%, -50%)` }}
            />
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 border border-white/80 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${isHovering ? "w-[60px] h-[60px] bg-white/90 border-transparent" : "w-[20px] h-[20px]"
                    }`}
                style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
            />
        </>
    )
}
