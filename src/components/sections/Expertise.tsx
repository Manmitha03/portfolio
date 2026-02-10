import { ScrollReveal } from "@/components/visuals/ScrollReveal"

export function Expertise() {
    return (
        <section className="py-24 px-4 md:px-12 relative min-h-[50vh] flex flex-col justify-center">
            <div className="md:hidden font-mono text-sm tracking-widest text-[#999] uppercase mb-8">
                <span className="text-blue-500 mr-2">//</span> 01. Expertise
            </div>

            <div className="max-w-5xl mx-auto w-full">
                {/* Section Label */}
                <div className="hidden md:block absolute left-12 top-24 font-mono text-sm tracking-widest text-[#999] uppercase">
                    <span className="text-blue-500 mr-2">//</span> 01. Expertise
                </div>

                <div className="space-y-16">
                    <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur={true}
                        baseRotation={3}
                        blurStrength={4}
                        textClassName="text-3xl md:text-5xl font-light text-[#e0e0e0] leading-[1.4]"
                        containerClassName="mb-12"
                    >
                        I am a Cloud Engineer focused on building scalable, resilient, and secure cloud infrastructure.
                    </ScrollReveal>

                    <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur={true}
                        baseRotation={3}
                        blurStrength={4}
                        textClassName="text-3xl md:text-5xl font-light text-[#a0a0a0] leading-[1.4]"
                        containerClassName="mb-12"
                    >
                        Passionate about creative coding, modern user interfaces, and bridging the gap between design and engineering.
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
