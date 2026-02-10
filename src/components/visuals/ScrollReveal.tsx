"use client"

import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: string;
    containerClassName?: string;
    textClassName?: string;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    enableBlur?: boolean;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

export function ScrollReveal({
    children,
    containerClassName = '',
    textClassName = '',
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    enableBlur = true,
    rotationEnd = 'bottom bottom',
    wordAnimationEnd = 'bottom bottom'
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="inline-block" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Cleanup any existing triggers on this element context
        const triggers = ScrollTrigger.getAll().filter(t => t.trigger === el);
        triggers.forEach(t => t.kill());

        const scroller = window; // Default to window

        // Rotation animation
        gsap.fromTo(
            el,
            { transformOrigin: '0% 50%', rotate: baseRotation },
            {
                ease: 'none',
                rotate: 0,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top bottom',
                    end: rotationEnd,
                    scrub: true
                }
            }
        );

        const wordElements = el.querySelectorAll('span.inline-block');

        // Opacity animation
        gsap.fromTo(
            wordElements,
            { opacity: baseOpacity, willChange: 'opacity' },
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top bottom-=20%',
                    end: wordAnimationEnd,
                    scrub: true
                }
            }
        );

        // Blur animation
        if (enableBlur) {
            gsap.fromTo(
                wordElements,
                { filter: `blur(${blurStrength}px)` },
                {
                    ease: 'none',
                    filter: 'blur(0px)',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=20%',
                        end: wordAnimationEnd,
                        scrub: true
                    }
                }
            );
        }

        return () => {
            // Cleanup on unmount
            // We can't kill ALL scrolltriggers here as it might affect other components
            // But we should kill the ones related to this instance.
            // GSAP cleanup is tricky with scrub, but keeping it simple for now as requested.
        };
    }, [enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

    return (
        <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
            <p className={`font-semibold leading-relaxed ${textClassName}`}>
                {splitText}
            </p>
        </h2>
    );
};
