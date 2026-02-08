"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingDown, TrendingUp, ArrowRight } from "lucide-react"

export function ProblemSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-32 px-6 lg:px-20 bg-ink text-white" id="problem">
            <div className="max-w-[1440px] mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/20 text-xs font-semibold tracking-wider mb-6 text-white/60 uppercase">
                        The Reality Check
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        You've hit a ceiling.
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        The same hustle that got you here is now holding you back.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* You are here */}
                    <motion.div
                        className="relative p-10 rounded-2xl bg-white/5 border border-white/10"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                <TrendingDown className="w-5 h-5 text-red-400" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-red-400">You are here</span>
                        </div>

                        <ul className="space-y-5">
                            {[
                                "Working 60+ hour weeks just to stay afloat",
                                "Every decision runs through you—bottleneck by default",
                                "Revenue grows, but profit margins shrink",
                                "Can't take a vacation without the business breaking",
                                "Burning out while pretending everything is fine",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3 text-white/70"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* You want to be here */}
                    <motion.div
                        className="relative p-10 rounded-2xl bg-primary/10 border border-primary/30"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-primary">You want to be here</span>
                        </div>

                        <ul className="space-y-5">
                            {[
                                "30-hour weeks with predictable revenue",
                                "A leadership team that handles daily operations",
                                "Healthy margins and a clear path to exit",
                                "Time for strategy, family, and what matters",
                                "Building wealth, not just income",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3 text-white/90"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-white/50 text-lg mb-6 font-light">
                        The gap between these two realities? <span className="text-white">A system.</span>
                    </p>
                    <motion.a
                        href="/book"
                        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group"
                        whileHover={{ x: 5 }}
                    >
                        <span className="font-medium">Let's bridge that gap</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
