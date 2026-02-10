"use client"

import React, { useState, useEffect } from "react"
import styles from "./Carousel.module.css"
import { ExternalLink } from "lucide-react"

interface Certification {
    id: number
    title: string
    issuer: string
    date: string
    description: string
    tag: string
    link?: string
}

const certifications: Certification[] = [
    {
        id: 1,
        title: "Computational Theory: Infosys Springboard",
        issuer: "Infosys",
        date: "Aug 2025",
        description: "Designing distributed systems on AWS. Expertise in computing, networking, storage, and database services.",
        tag: "Theory of Computation",
        link: "https://drive.google.com/file/d/1ayy4F_5kDS6Z9Axk-OuSrfFxtf6btl-6/view?usp=sharing"
    },
    {
        id: 2,
        title: "AWS Cloud Foundations - AWS",
        issuer: "AWS",
        date: "May 2025",
        description: "Advanced React, accessible UIs, and responsive web design mastery from Meta's engineering team.",
        tag: "Cloud",
        link: "https://drive.google.com/file/d/1P6XHniSWXT1sdFC63ikHMSwbpPf3Uh5_/view"
    },
    {
        id: 3,
        title: "Introduction To Internet of Things",
        issuer: "NPTEL",
        date: "Apr 2025",
        description: "Data cleaning, analysis, and visualization. R programming and Tableau expertise.",
        tag: "IoT",
        link: "https://drive.google.com/file/d/1O_Za056XzzRj1NhjadgDAWtxX8Hl-9ct/view"
    },
    {
        id: 4,
        title: "Introduction to Hardware and Operating Systems",
        issuer: "IBM",
        date: "Sep 2024",
        description: "Building cross-platform mobile applications with React Native and Expo.",
        tag: "Hardware & OS",
        link: "https://drive.google.com/file/d/1N5JDk8gHPu6aBR9Lv2qq-y-lZbujLVmg/view"
    }
]

export function CertificationCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const total = certifications.length

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = total - 1
        } else if (newIndex >= total) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") updateIndex(activeIndex - 1)
            if (e.key === "ArrowRight") updateIndex(activeIndex + 1)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [activeIndex])

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselStage}>
                {certifications.map((item, index) => {
                    let offset = index - activeIndex
                    if (offset > Math.floor(total / 2)) offset -= total
                    if (offset < -Math.floor(total / 2)) offset += total

                    let positionClass = styles.hidden
                    if (offset === 0) positionClass = styles.active
                    else if (offset === -1) positionClass = styles.left
                    else if (offset === 1) positionClass = styles.right
                    else if (offset < -1) positionClass = styles.farLeft
                    else if (offset > 1) positionClass = styles.farRight

                    return (
                        <div
                            key={item.id}
                            className={`${styles.carouselCard} ${positionClass}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className={styles.cardContent}>
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-display text-xl sm:text-2xl text-white font-bold leading-tight max-w-[80%]">
                                            {item.title}
                                        </h3>
                                        <span className={styles.tagPill}>{item.tag}</span>
                                    </div>
                                    <p className="font-mono text-xs sm:text-sm text-blue-400 mb-3 uppercase tracking-wider">{item.issuer}</p>

                                </div>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                                    <small className="font-mono text-xs sm:text-sm text-gray-500">{item.date}</small>
                                    {item.link && (
                                        <a href={item.link} target="_blank" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 text-xs sm:text-sm group">
                                            View Certificate
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.carouselControls}>
                <button
                    className={styles.navBtn}
                    onClick={() => updateIndex(activeIndex - 1)}
                    aria-label="Previous"
                >
                    ‹
                </button>

                <div className={styles.paginationIndicators}>
                    {certifications.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>

                <button
                    className={styles.navBtn}
                    onClick={() => updateIndex(activeIndex + 1)}
                    aria-label="Next"
                >
                    ›
                </button>
            </div>
        </div>
    )
}
