"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Zap, ArrowRight } from "lucide-react"

export function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <footer ref={ref} className="bg-ink text-white pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Zap className="w-16 h-16 text-primary mb-8" />
                </motion.div>

                <motion.h2
                    className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    The next cohort <br />starts soon.
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-white/60 mb-12 font-light max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Spots are limited to ensure high-touch implementation support. If you are ready to scale, apply now to see if you qualify.
                </motion.p>

                <Link href="/book">
                    <motion.div
                        className="bg-primary text-ink px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(230,196,25,0.3)] mb-20 flex items-center justify-center gap-3 group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Apply for Strategy Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                </Link>

                <motion.div
                    className="w-full h-px bg-white/10 mb-12"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                />

                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center w-full gap-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="text-sm font-serif font-bold tracking-widest">ALEXANDER V.</div>
                    <div className="flex gap-8 text-sm text-white/50">
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    </div>
                    <div className="text-xs text-white/30">
                        © 2024 Alexander V. All rights reserved.
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
