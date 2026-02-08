"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
    { href: "#method", label: "Method" },
    { href: "#stories", label: "Stories" },
    { href: "#about", label: "About" },
]

export function Header() {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20)
    })

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-500",
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
                        : "bg-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="relative group">
                            <span className="text-xl font-serif font-bold tracking-tight text-ink">
                                ALEXANDER V.
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link href="/book">
                                <motion.div
                                    className="ml-6 relative overflow-hidden bg-ink text-white text-sm font-medium px-6 py-3 rounded-full group cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book Strategy Call
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                                </motion.div>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-ink/5 hover:bg-ink/10 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-5 h-5 text-ink" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5 text-ink" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <div className="p-6 space-y-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-ink hover:bg-primary/10 hover:text-ink transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                            <ArrowRight className="w-5 h-5 text-primary" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-6 pt-0">
                                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                                    <motion.div
                                        className="w-full bg-ink text-white text-base font-medium py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Book Strategy Call
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
