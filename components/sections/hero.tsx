"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <header ref={ref} className="relative pt-20 min-h-screen flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 py-16 lg:py-0 z-10">
                <div className="max-w-xl">
                    <motion.span
                        className="inline-block py-1 px-3 rounded-full border border-ink/10 bg-white text-xs font-semibold tracking-wider mb-8 text-muted uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        High Performance Coaching
                    </motion.span>

                    <motion.h1
                        className="font-serif text-5xl lg:text-7xl font-medium leading-[1.1] mb-8 text-ink"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Scale Your Agency. <br />
                        <span className="italic text-muted">Reclaim Your Life.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg lg:text-xl text-ink/70 font-light leading-relaxed mb-10 max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        The quiet framework for founders earning $1M+ who are ready to remove themselves from operations and prepare for a liquidity event.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.45 }}
                    >
                        <Link href="/book">
                            <motion.div
                                className="bg-primary text-ink px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Book Strategy Call
                                <ArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                        <motion.a
                            href="#stories"
                            className="px-8 py-4 rounded-full border border-ink/20 text-ink font-medium hover:bg-ink/5 transition-colors text-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Case Studies
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4 text-sm text-muted"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {/* Avatars */}
                        <span className="flex -space-x-2">
                            <img alt="Client Avatar 1" className="w-8 h-8 rounded-full border-2 border-background-light object-cover" src="/images/avatar-1.png" />
                            <img alt="Client Avatar 2" className="w-8 h-8 rounded-full border-2 border-background-light object-cover" src="/images/avatar-2.png" />
                            <img alt="Client Avatar 3" className="w-8 h-8 rounded-full border-2 border-background-light object-cover" src="/images/avatar-3.png" />
                        </span>
                        <p>Trusted by 50+ founders</p>
                    </motion.div>
                </div>
            </div>

            {/* Right Image */}
            <motion.div
                className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative bg-gray-100"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent opacity-20 z-10 lg:hidden" />
                <img
                    alt="Portrait of Alexander V"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPx65IxaSoP20T7J--UdU-6MYlU_zpxowQXxQURQoSbFw-yLdKrjjU0w0DKOvhYFlp_3t3odv9ImL7kkrIOPI71jtSbKR4ryipWz1xOuPywLz5Dfix7ohAs6VJzudH_D6loYNV5AmyawH1UXQ0We2PLzELOR84zbMgsSrxxjDIq8Pdkr6K7dtVHy8Akd8cEEYiwXNCOJ7e-DNeuCBp5jYAenXPNTQZWrgiHAogMJErSNrGeXlazyOHn8cUmDfqN6cX4rICgA1C6U8"
                />
            </motion.div>
        </header>
    )
}
