"use client"

export function Marquee() {
    return (
        <div className="w-full overflow-hidden whitespace-nowrap py-12 border-y border-white/10 my-[5vh] bg-black/20 backdrop-blur-sm">
            <div className="inline-block animate-marquee font-display text-[4rem] font-extralight text-white/5 uppercase tracking-widest">
                React • Next.js • TypeScript • Tailwind CSS • WebGL • Node.js • React • Next.js • TypeScript • Tailwind CSS • WebGL • Node.js •
            </div>
        </div>
    )
}
