"use client"

import { Container } from "@/components/ui/container"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
    { name: "Forbes", className: "font-serif text-2xl font-bold italic" },
    { name: "STRIPE", className: "font-sans text-xl font-black tracking-tighter" },
    { name: "Entrepreneur", className: "font-serif text-xl font-bold" },
    { name: "TechCrunch", className: "font-sans text-xl font-bold tracking-tight" },
    { name: "Business Insider", className: "font-serif text-xl font-medium italic" },
]

export function SocialProof() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <section ref={ref} className="py-12 border-y border-gray-200 bg-white overflow-hidden">
            <Container>
                <motion.p
                    className="text-center text-xs font-bold tracking-widest text-muted mb-8 uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                >
                    Featured In Industry Leading Publications
                </motion.p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {logos.map((logo, i) => (
                        <motion.span
                            key={logo.name}
                            className={`${logo.className} text-ink opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 0.6, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {logo.name}
                        </motion.span>
                    ))}
                </div>
            </Container>
        </section>
    )
}
