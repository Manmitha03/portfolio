import { CertificationCarousel } from "@/components/visuals/CertificationCarousel"

export function Certifications() {
    return (
        <section id="certifications" className="min-h-[80vh] py-24 px-4 md:px-12 relative flex flex-col justify-center overflow-hidden">
            <div className="md:hidden font-mono text-sm tracking-widest text-[#999] uppercase mb-8">
                <span className="text-blue-500 mr-2">//</span> 04. Certifications
            </div>
            {/* Section Label */}
            <div className="hidden md:block absolute left-12 top-24 font-mono text-sm tracking-widest text-[#999] uppercase">
                <span className="text-blue-500 mr-2">//</span> 04. Certifications
            </div>

            <div className="w-full relative z-10">
                <CertificationCarousel />
            </div>
        </section>
    )
}
