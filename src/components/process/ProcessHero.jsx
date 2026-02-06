// src/components/process/ProcessHero.jsx
import { motion } from 'framer-motion'

export default function ProcessHero() {
    return (
        <section className="relative pt-28 pb-12 text-center overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold text-white mb-6"
                >
                    How It Works
                </motion.h1>

                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    A simple, transparent process to get your business online — fast, clean,
                    and stress-free.
                </p>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
        </section>
    )
}
