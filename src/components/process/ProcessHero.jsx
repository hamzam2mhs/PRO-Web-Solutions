// src/components/process/ProcessHero.jsx
import { motion } from 'framer-motion'

export default function ProcessHero() {
  return (
    <section className="relative py-32 overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-4"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          How It Works
        </h1>
        <p className="text-xl text-slate-300">
          A simple, transparent process to get your business online —
          fast, clean, and stress-free.
        </p>
      </motion.div>
    </section>
  )
}
