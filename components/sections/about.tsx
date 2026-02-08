"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-white py-24 lg:py-32" id="about">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Image */}
                    <motion.div
                        className="w-full lg:w-5/12 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
                            <motion.img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTHabD4KJ4VIn7UBEgUi441DMYK6zIgddiFa1uOYVEEpuI-B_YdVwgcJgHrDxGKjVIOMPdwVpeRoKuyiBcpNj7Jyz7drYK3lwpVEwDpWqI81v4WhwTlAtpf_NhPDljhObe-gpwkXlrMrXeK4H62kQaLmldBxvI8HGZNMER4He7acJqD1wz9i5DVHmAYjtpZq9BxBUBQziCR6Gh4eR0Yl-SXJHRHU_VMAOKQbm3AA6sOhFmseSdoOJh0Ne2zYzLac-JtEEy_nQgns"
                                alt="Candid shot of Alexander working at a minimalist desk"
                                className="absolute inset-0 w-full h-full object-cover grayscale"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.div
                                className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded text-xs font-bold tracking-widest uppercase"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Founder & Principal
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="w-full lg:w-6/12 order-1 lg:order-2">
                        <motion.h2
                            className="font-serif text-4xl lg:text-6xl mb-8 leading-tight text-ink"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            I've been in <br /> <span className="text-primary italic">your shoes.</span>
                        </motion.h2>

                        <motion.div
                            className="space-y-6 text-lg font-light text-ink/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <p>
                                Scaling an agency is lonely. I know because I built my first firm to 8-figures before exiting in 2021.
                            </p>
                            <p>
                                The sleepless nights, the client churn, the feeling that you are the only one holding it all together—I lived it for a decade.
                            </p>
                            <p>
                                Now, I help founders skip the burnout and build businesses that serve their life, not consume it. My approach is direct, data-driven, and designed for speed.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-10 flex items-center gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="text-3xl font-serif font-bold text-ink">$50M+</p>
                                <p className="text-sm text-muted uppercase tracking-wider mt-1">Client Revenue Generated</p>
                            </motion.div>
                            <div className="h-10 w-px bg-gray-300"></div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="text-3xl font-serif font-bold text-ink">12</p>
                                <p className="text-sm text-muted uppercase tracking-wider mt-1">Successful Exits</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
