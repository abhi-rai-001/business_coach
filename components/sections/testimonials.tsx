"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "We doubled our revenue in 6 months, but more importantly, I got my weekends back. The systems Alexander implemented were a game changer.",
        author: "Sarah Jenkins",
        role: "Founder, Jenkins Media",
    },
    {
        quote: "I was skeptical about another 'coach'. But Alexander isn't a coach, he's a strategic partner. He helped us position for an exit that exceeded our wildest expectations.",
        author: "Michael Ross",
        role: "CEO, Ross Tech Solutions",
        featured: true,
    },
    {
        quote: "The audit phase alone was worth the investment. We found $20k in monthly recurring waste that we cut immediately.",
        author: "Elena Rodriguez",
        role: "Co-Founder, ScaleUp",
    },
]

export function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-32 px-6 lg:px-20 max-w-[1440px] mx-auto" id="stories">
            <motion.div
                className="text-center mb-24"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="font-serif text-4xl mb-4 text-ink">Client Results</h2>
                <motion.div
                    className="w-24 h-1 bg-primary mx-auto rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={testimonial.author}
                        className={`bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${testimonial.featured ? "relative top-0 md:-top-8" : ""
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: testimonial.featured ? -32 : 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: 0.2 + i * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: testimonial.featured ? -40 : -8, transition: { duration: 0.2 } }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                            <Quote className="text-4xl text-primary/40 mb-6 w-10 h-10 fill-current" />
                        </motion.div>
                        <p className="text-xl font-serif italic mb-8 text-ink leading-relaxed">
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-ink">{testimonial.author}</h4>
                                <p className="text-xs text-muted mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
