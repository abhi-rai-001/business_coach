"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Mail, Building, MessageSquare, CheckCircle2, Sparkles } from "lucide-react"

export default function BookPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        revenue: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <main className="min-h-screen bg-off-white">
            {/* Header */}
            <motion.nav
                className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-2 text-ink hover:text-primary transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>
                        <span className="text-xl font-serif font-bold tracking-tight text-ink">
                            ALEXANDER V.
                        </span>
                    </div>
                </div>
            </motion.nav>

            <div ref={ref} className="pt-32 pb-24 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.span
                                className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold tracking-wider mb-6 text-primary uppercase"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                Limited Availability
                            </motion.span>

                            <h1 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-6 text-ink">
                                Book Your Strategy Call
                            </h1>

                            <p className="text-lg text-ink/60 font-light leading-relaxed mb-10">
                                A focused 30-minute session to understand your business, identify the core bottleneck, and see if we're a fit to work together.
                            </p>

                            {/* What to Expect */}
                            <div className="space-y-6 mb-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted">What to Expect</h3>
                                {[
                                    { icon: Clock, text: "30-minute focused conversation" },
                                    { icon: User, text: "1-on-1 with Alexander directly" },
                                    { icon: Sparkles, text: "Actionable insights, zero sales pressure" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-ink/80">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Qualification Note */}
                            <motion.div
                                className="p-6 rounded-xl bg-ink/5 border border-ink/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <p className="text-sm text-ink/70 leading-relaxed">
                                    <strong className="text-ink">Note:</strong> This call is best suited for founders with agencies or service businesses generating $500K+ annually who are ready to scale or exit. If this describes you, I look forward to speaking with you.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {!isSubmitted ? (
                                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-ink" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-ink">Request Your Session</h3>
                                            <p className="text-sm text-muted">Fill out the form below</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink placeholder:text-muted"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink placeholder:text-muted"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Company */}
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
                                                Company Name *
                                            </label>
                                            <div className="relative">
                                                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink placeholder:text-muted"
                                                    placeholder="Your company"
                                                />
                                            </div>
                                        </div>

                                        {/* Revenue */}
                                        <div>
                                            <label htmlFor="revenue" className="block text-sm font-medium text-ink mb-2">
                                                Annual Revenue *
                                            </label>
                                            <select
                                                id="revenue"
                                                name="revenue"
                                                value={formData.revenue}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select revenue range</option>
                                                <option value="500k-1m">$500K - $1M</option>
                                                <option value="1m-3m">$1M - $3M</option>
                                                <option value="3m-5m">$3M - $5M</option>
                                                <option value="5m-10m">$5M - $10M</option>
                                                <option value="10m+">$10M+</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                                                What's your biggest challenge right now?
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted" />
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={4}
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink placeholder:text-muted resize-none"
                                                    placeholder="Tell me about what's holding you back..."
                                                />
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            className="w-full bg-ink text-white py-4 rounded-full font-semibold text-base hover:bg-ink/90 transition-colors flex items-center justify-center gap-2 group"
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            Request Strategy Call
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>

                                        <p className="text-xs text-center text-muted">
                                            By submitting, you agree to receive communication about your inquiry.
                                        </p>
                                    </form>
                                </div>
                            ) : (
                                <motion.div
                                    className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100 text-center"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
                                    >
                                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                                    </motion.div>
                                    <h2 className="font-serif text-3xl mb-4 text-ink">Request Received!</h2>
                                    <p className="text-ink/60 mb-8 max-w-md mx-auto">
                                        Thank you for your interest. I'll review your submission and get back to you within 24 hours to schedule our call.
                                    </p>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-2 text-primary hover:text-ink transition-colors group"
                                    >
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        <span className="font-medium">Return to Homepage</span>
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}
