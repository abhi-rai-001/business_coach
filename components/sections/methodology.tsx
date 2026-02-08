"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Microscope, Layers, DoorOpen } from "lucide-react"

const methods = [
    {
        icon: Microscope,
        step: "01",
        title: "Audit",
        description: "We deep dive into your P&L and operational workflow to identify the single bottleneck preventing you from scaling past your current plateau.",
    },
    {
        icon: Layers,
        step: "02",
        title: "Build",
        description: "We install autonomous systems and hire key operational leaders, effectively removing you from the day-to-day delivery.",
    },
    {
        icon: DoorOpen,
        step: "03",
        title: "Exit",
        description: "We optimize your agency's valuation metrics and prepare your assets for a high-multiple liquidity event or semi-retirement.",
    },
]

export function Methodology() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-32 px-6 lg:px-20 max-w-[1440px] mx-auto" id="method">
            <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-ink">The Methodology</h2>
                <p className="text-lg text-ink/60 max-w-2xl font-light">
                    We don't rely on hacks. We implement a proven 3-step architectural framework designed to transform chaos into a sellable asset.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-gray-200 pt-16">
                {methods.map((method, i) => (
                    <motion.div
                        key={method.step}
                        className="group"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: 0.2 + i * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <motion.div
                            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-ink transition-colors duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <method.icon className="w-6 h-6" />
                        </motion.div>
                        <h3 className="font-serif text-2xl mb-4 text-ink">{method.step}. {method.title}</h3>
                        <p className="text-ink/70 leading-relaxed">
                            {method.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
