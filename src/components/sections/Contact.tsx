"use client"

import { motion } from "framer-motion"

const socialLinks = [
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/manmitha-chowdary/", label: "LINKEDIN" },
    { name: "GITHUB", url: "https://github.com/Manmitha03", label: "GITHUB" },
    { name: "EMAIL", url: "mailto:manmitha03@gmail.com", label: "EMAIL" },
    { name: "PHONE", url: "tel:+917842118675", label: "+91 78421 18675" },
]

export function Contact() {
    return (
        <footer id="contact" className="min-h-[80vh] px-4 md:px-12 py-24 flex flex-col justify-between relative">
            <div className="md:hidden font-mono text-sm tracking-widest text-[#999] uppercase mb-8">
                <span className="text-blue-500 mr-2">//</span> 07. Contact
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end flex-grow">
                <div>
                    <div className="hidden md:block font-mono text-sm tracking-widest text-[#999] uppercase mb-12">
                        <span className="text-blue-500 mr-2">//</span> 07. Contact
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-bold text-white mb-8"
                    >
                        LET'S BUILD<br />THE FUTURE.
                    </motion.h2>
                    <p className="font-mono text-[#999] text-sm md:text-base max-w-sm leading-relaxed">
                        Available for freelance projects and full-time opportunities.
                    </p>
                </div>

                <div className="w-full md:w-auto mt-16 md:mt-0">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden block"
                                data-hover
                            >
                                <span className="font-display text-lg md:text-xl font-light text-white block transition-transform duration-500 group-hover:-translate-y-full">
                                    {link.name}
                                </span>
                                <span className="absolute top-0 left-0 font-display text-lg md:text-xl font-light text-blue-500 block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                    {link.label}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-24 pt-8 border-t border-white/10 flex justify-between text-[#666] font-mono text-xs">
                <span>© 2026 MANMITHA</span>
            </div>
        </footer>
    )
}
